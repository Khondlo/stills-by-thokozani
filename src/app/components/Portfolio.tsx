import { useState } from "react";

interface PortfolioProps {
  images: { src: string; alt: string; size?: "large" | "small"; category: string }[];
}

const categories = ["All", "Ceremony", "Portraits", "Details", "Reception"];

export function Portfolio({ images }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-['Jost'] tracking-[0.3em] text-stone-400 mb-4 uppercase"
            style={{ fontSize: "0.7rem" }}
          >
            Our Work
          </p>
          <h2
            className="font-['Cormorant_Garamond'] text-stone-800 mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Portfolio
          </h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-10" />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-['Jost'] tracking-widest uppercase transition-colors duration-200 pb-1 cursor-pointer ${activeCategory === cat
                    ? "text-stone-800 border-b border-stone-800"
                    : "text-stone-400 hover:text-stone-600"
                  }`}
                style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images
            .filter((img) => activeCategory === "All" || img.category === activeCategory)
            .map((img, idx) => (
              <div
                key={idx}
                className={`overflow-hidden cursor-pointer group ${img.size === "large" ? "md:row-span-2" : ""
                  }`}
                onClick={() => setLightbox(img.src)}
              >
                <div
                  className={`w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${img.size === "large" ? "aspect-[3/4] md:aspect-square md:h-full" : "aspect-square"
                    }`}
                  style={{ backgroundImage: `url(${img.src})` }}
                  role="img"
                  aria-label={img.alt}
                />
              </div>
            ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <img
              src={lightbox}
              alt="Gallery full view"
              className="max-w-full max-h-full object-contain"
              style={{ maxHeight: "90vh" }}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white font-['Jost'] tracking-widest cursor-pointer"
              style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
            >
              CLOSE ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
