import ContactusForm from "./components/ContactusForm";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import WhyProdoo from "./components/WhyProdoo";

export default function ContactUsPage() {
  return (
    <main>
      <Hero />
      <ContactusForm />
      <WhyProdoo />
      <FAQ />
    </main>
  );
}
