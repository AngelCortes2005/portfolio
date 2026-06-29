import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
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
    <main className="bg-background min-h-screen">
      <Navigation dict={dict} lang={lang} />
      <Hero dict={dict} />
      <SelectedWork dict={dict} />
      <About dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
