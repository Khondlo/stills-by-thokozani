import { ChevronDown } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p
          className="font-['Jost'] tracking-[0.35em] mb-6 text-white/80 uppercase"
          style={{ fontSize: "0.7rem" }}
        >
          Wedding Photography
        </p>
        <h1
          className="font-['Cormorant_Garamond'] text-white mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 1.1 }}
        >
          Capturing Love's <em style={{ fontStyle: "italic", fontWeight: 300 }}>Most Beautiful</em> Moments
        </h1>
        <div className="w-16 h-px bg-white/50 mx-auto mb-6" />
        <p
          className="font-['Jost'] text-white/80 mb-10 max-w-md mx-auto"
          style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8 }}
        >
          Timeless, authentic storytelling for couples who believe in forever
        </p>
        <button
          onClick={scrollToAbout}
          className="inline-block border border-white/60 text-white px-10 py-3 font-['Jost'] tracking-widest hover:bg-white hover:text-stone-800 transition-all duration-300 cursor-pointer"
          style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
        >
          Discover More
        </button>
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
