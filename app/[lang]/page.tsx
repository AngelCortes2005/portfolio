import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/lib/getDictionary";

type Params = Promise<{ lang: Locale }>;

export default async function Home({
  params,
}: {
  params: Params;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="bg-black">
      <Navigation dict={dict} lang={lang} />
      <Hero dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}