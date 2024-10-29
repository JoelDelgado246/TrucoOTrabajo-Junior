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
        <section className="py-16">
          <Slider items={sliderItems} />
        </section>

        <section className="space-y-8">
          <SectionCard
            description="¿Te atreves a enfrentar los desafíos que acechan en la noche de Halloween? 
            Cada truco esconde un reto único, una prueba que pondrá a prueba tu astucia y tus habilidades.
             Al resolverlos, ganarás valiosos tratos, conocimientos ocultos y recompensas hechizadas 
             que solo los más valientes pueden obtener. No temas a lo desconocido… ¡acepta el reto y 
             adéntrate en la oscuridad para descubrir qué misterios te esperan!"
            labelText="¿Te atreves a completar los trucos?"
            buttonText="TRUCOS"
            buttonLink="/trucos"
          />
        </section>
        <section className="py-16">
          <Slider items={sliderItems} />
        </section>
        <section>
          <SectionCard
            description="Para obtener estos tratos, primero debes superar los retos más oscuros y desafiantes.
              Cada trato es un premio encantado, una recompensa misteriosa reservada solo para quienes logran
              completar los trucos. Estos tesoros contienen secretos antiguos y poderes ocultos, esperando 
              ser desatados por los más valientes. ¿Estás listo para reclamar tu trato y descubrir qué maravillas
              y enigmas te esperan?"
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
