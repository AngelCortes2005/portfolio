import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    console.log('📧 Attempting to send email...');
    console.log('From:', email);
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    // Validación básica
    if (!name || !email || !message) {
      console.error('❌ Missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('❌ Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    console.log('📤 Sending email via Resend...');
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Usar tu dominio verificado
      to: ['cortts.dev@gmail.com'], // Tu email donde recibes los mensajes
      replyTo: email, // Email del usuario que envió el formulario
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('Response:', data);
    
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('❌ Error sending email:');
    console.error('Error message:', error?.message);
    console.error('Error details:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error?.message || 'Unknown error',
        hint: !process.env.RESEND_API_KEY ? 'RESEND_API_KEY not found in environment' : undefined
      },
      { status: 500 }
    );
  }
}
