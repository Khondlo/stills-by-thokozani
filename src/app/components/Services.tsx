import { Camera, Heart, Film } from "lucide-react";

const packages = [
  {
    icon: <Heart size={22} strokeWidth={1.2} />,
    name: "Essential",
    price: "R8 500",
    tagline: "Perfect for intimate weddings",
    features: [
      "6 hours of coverage",
      "One photographer",
      "Online gallery (300+ photos)",
    ],
  },
  {
    icon: <Camera size={22} strokeWidth={1.2} />,
    name: "Signature",
    price: "R15 000",
    tagline: "Our most popular package",
    featured: true,
    features: [
      "8 hours of coverage",
      "1 Photographer and 2 Videographers",
      "Online gallery (600+ photos)",
      "20 Pages Fine art album",
      "Highlight video (5-10 minutes)",
      "Same-day sneak peek (10 photos)",
      "Drone Footage (Subject To Weather Conditions)",
    ],
  },
  {
    icon: <Film size={22} strokeWidth={1.2} />,
    name: "Prestige",
    price: "R25 000",
    tagline: "An unparalleled experience",
    features: [
      "Full-day coverage (12+ hrs)",
      "Two photographers + Two videographers",
      "Online gallery (800+ photos)",
      "30 Pages Fine art album",
      "Highlight video (5-10 minutes)",
      "2min Reel Video",
      "Cinematic video (Matrimonial film) + Reception video",
      "Same-day sneak peek (10 photos)",
      "Drone Footage (Subject To Weather Conditions)",
      "Priority rush delivery"
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-['Jost'] tracking-[0.3em] text-stone-400 mb-4 uppercase"
            style={{ fontSize: "0.7rem" }}
          >
            Investment
          </p>
          <h2
            className="font-['Cormorant_Garamond'] text-stone-800 mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Packages & Pricing
          </h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-6" />
          <p
            className="font-['Jost'] text-stone-500 max-w-xl mx-auto"
            style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            Every package is thoughtfully curated to honor your unique story. Custom packages are available upon request.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-10 transition-all duration-300 ${pkg.featured
                ? "bg-stone-800 text-white shadow-2xl scale-[1.02]"
                : "bg-white text-stone-800 border border-stone-100 hover:shadow-lg"
                }`}
            >
              {pkg.featured && (
                <span
                  className="absolute top-4 right-4 font-['Jost'] tracking-widest text-stone-400 uppercase"
                  style={{ fontSize: "0.6rem" }}
                >
                  Most Popular
                </span>
              )}

              <div className={`mb-5 ${pkg.featured ? "text-stone-300" : "text-stone-400"}`}>
                {pkg.icon}
              </div>

              <p
                className={`font-['Jost'] tracking-[0.25em] uppercase mb-1 ${pkg.featured ? "text-stone-300" : "text-stone-400"
                  }`}
                style={{ fontSize: "0.65rem" }}
              >
                {pkg.name}
              </p>
              <h3
                className={`font-['Cormorant_Garamond'] mb-2 ${pkg.featured ? "text-white" : "text-stone-800"
                  }`}
                style={{ fontSize: "2.5rem", fontWeight: 400, lineHeight: 1 }}
              >
                {pkg.price}
              </h3>
              <p
                className={`font-['Jost'] mb-8 ${pkg.featured ? "text-stone-400" : "text-stone-400"
                  }`}
                style={{ fontSize: "0.8rem", fontWeight: 300 }}
              >
                {pkg.tagline}
              </p>

              <div className={`h-px mb-8 ${pkg.featured ? "bg-stone-600" : "bg-stone-100"}`} />

              <ul className="space-y-3 flex-1 mb-10">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${pkg.featured ? "bg-stone-400" : "bg-stone-400"
                        }`}
                    />
                    <span
                      className={`font-['Jost'] ${pkg.featured ? "text-stone-300" : "text-stone-500"}`}
                      style={{ fontSize: "0.85rem", fontWeight: 300 }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-3 font-['Jost'] tracking-widest uppercase transition-all duration-300 cursor-pointer ${pkg.featured
                  ? "bg-white text-stone-800 hover:bg-stone-100"
                  : "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white"
                  }`}
                style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
