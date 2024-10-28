import Header from "../components/layout/Header";
import Slider from "../components/ui/Slider";
import SectionCard from "../components/ui/SectionCard";
import Footer from "../components/layout/Footer";

export default function Home() {
  const sliderItems = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ]; 

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-customDarkOrange">
        <section className="py-12">
          <Slider items={sliderItems} />
        </section>

        <section className="space-y-8">
          <SectionCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            labelText="¿Te atreves a completar los desafíos?"
            buttonText="TRUCOS"
            buttonLink="/trucos"
          />
        </section>
        <section className="py-12">
          <Slider items={sliderItems} />
        </section>
        <section className="space-y-8">
          <SectionCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            labelText="¡Tus tratos espeluznantes!"
            buttonText="TRATOS"
            buttonLink="/tratos"
          />
        </section>
        <Footer/>
      </main>
    </div>
  );
}
