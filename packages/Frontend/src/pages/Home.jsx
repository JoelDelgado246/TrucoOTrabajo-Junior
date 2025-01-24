import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Slider from "../components/ui/Slider";
import TratoSlider from "../components/ui/TreatSlider";
import SectionCard from "../components/ui/SectionCard";
import Footer from "../components/layout/Footer";
import trucosService from "../services/trucosService";
import tratosService from "/src/services/tratoService.js";

function getRandomItems(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function Home() {
  const [sliderItems, setSliderItems] = useState([]);
  const [tratoItems, setTratoItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrucos = async () => {
      try {
        const data = await trucosService.getAllTrucos();
        const randomItems = getRandomItems(data, 12);
        setSliderItems(randomItems);
      } catch (error) {
        console.error("Error fetching trucos:", error);
        setError("Error al cargar los trucos");
      }
    };
    const fetchTratos = async () => {
      try {
        const data = await tratosService.getAllTratos();
        const randomItems = getRandomItems(data, 12);
        setTratoItems(randomItems);
      } catch (error) {
        console.error("Error fetching tratos: ", error);
        setError("Error al cargar los tratos");
      }
    };

    fetchTrucos();
    fetchTratos();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-customDarkOrange">
        <section className="py-16">
          <Slider items={sliderItems} sliderId="trucos" />
        </section>

        <section className="space-y-8">
          <SectionCard
            description="¿Te atreves a enfrentar los desafíos que acechan en la noche? 
            Cada truco esconde un reto único, una prueba que pondrá a prueba tus habilidades.
             Al resolverlos, ganarás valiosos tratos, conocimientos ocultos y recompensas hechizadas 
             que solo los más valientes pueden obtener. No temas a lo desconocido… ¡acepta el reto y 
             adéntrate en la oscuridad para descubrir qué misterios te esperan!"
            labelText="¿Te atreves a completar los trucos?"
            buttonText="TRUCOS"
            buttonLink="/trucos"
          />
        </section>
        <section className="py-16">
          <TratoSlider items={tratoItems} sliderId="tratos" />
        </section>
        <section>
          <SectionCard
            description="Para obtener estos tratos, primero debes superar los retos más oscuros y desafiantes.
              Cada trato es un premio encantado, una recompensa misteriosa reservada solo para quienes logran
              completar los trucos. ¿Estás listo para reclamar tu trato y descubrir qué maravillas
              y enigmas te esperan?"
            labelText="¡Tus tratos espeluznantes!"
            buttonText="TRATOS"
            buttonLink="/tratos"
          />
        </section>
        <Footer />
      </main>
    </div>
  );
}
