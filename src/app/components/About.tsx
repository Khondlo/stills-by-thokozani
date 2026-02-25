interface AboutProps {
  portraitImage: string;
}

export function About({ portraitImage }: AboutProps) {
  return (
    <section id="about" className="py-28 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="w-full aspect-[3/4] bg-cover bg-center"
              style={{ backgroundImage: `url(${portraitImage})` }}
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-stone-300 -z-10" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p
              className="font-['Jost'] tracking-[0.3em] text-stone-400 mb-4 uppercase"
              style={{ fontSize: "0.7rem" }}
            >
              Meet the Photographer
            </p>
            <h2
              className="font-['Cormorant_Garamond'] text-stone-800 mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.2 }}
            >
              Hello, I'm <em className="italic">Thokozani</em>
            </h2>
            <div className="w-12 h-px bg-stone-400 mb-8" />
            <p
              className="font-['Jost'] text-stone-500 mb-6"
              style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9 }}
            >
              I am a wedding photographer with over two decades of experience capturing the essence of love stories. My approach is intimate, unobtrusive, and deeply personal — I believe every couple deserves images as unique as their love.
            </p>
            <p
              className="font-['Jost'] text-stone-500 mb-10"
              style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9 }}
            >
              Based in South Africa, I travel countrywide and worldwide to document the quiet glances, joyful tears, and spontaneous laughter that make your wedding day truly unforgettable.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block bg-stone-800 text-white px-10 py-3 font-['Jost'] tracking-widest hover:bg-stone-700 transition-colors duration-300 cursor-pointer"
              style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
