import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thokozani has a rare gift — she disappears into the day and reappears with photographs that are nothing short of poetry. Our wedding album makes us cry every single time.",
    name: "Sophie & James",
    location: "Nelspruit, Mpumalanga, South Africa",
    date: "June 2024",
  },
  {
    quote:
      "We can't believe how perfectly Thokozani captured every emotion. She is so warm and unobtrusive, yet somehow she was everywhere at the right moment. These photos are our most treasured possessions.",
    name: "Natasha & Luca",
    location: "Kwazulu-Natal, South Africa",
    date: "September 2024",
  },
  {
    quote:
      "From our first call, we knew Thokozani was the one. She understood exactly what we wanted — timeless, emotional, real. The photos exceeded every expectation we had.",
    name: "Claire & Michael",
    location: "Herb and Vine, Gauteng, South Africa",
    date: "October 2026",
  },
  {
    quote:
      "Every photo tells a story we didn't even know was happening. Thokozani's eye for light, emotion, and detail is extraordinary. We are forever grateful for her artistry.",
    name: "Amara & David",
    location: "Lake Umuzi, Mpumalanga, South Africa",
    date: "March 2025",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-28 bg-stone-800 text-white relative overflow-hidden">
      {/* Decorative quote background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span
          className="font-['Cormorant_Garamond'] text-white select-none"
          style={{ fontSize: "30rem", lineHeight: 1 }}
        >
          "
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p
            className="font-['Jost'] tracking-[0.3em] text-stone-400 mb-4 uppercase"
            style={{ fontSize: "0.7rem" }}
          >
            Kind Words
          </p>
          <h2
            className="font-['Cormorant_Garamond'] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            What Couples Say
          </h2>
          <div className="w-12 h-px bg-stone-500 mx-auto mt-6" />
        </div>

        {/* Testimonial */}
        <div className="text-center">
          <Quote size={28} className="text-stone-500 mx-auto mb-8" strokeWidth={1} />
          <p
            className="font-['Cormorant_Garamond'] text-white/90 mb-10 mx-auto italic"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 300, lineHeight: 1.7, maxWidth: "42rem" }}
          >
            {t.quote}
          </p>
          <div className="w-8 h-px bg-stone-500 mx-auto mb-6" />
          <p
            className="font-['Cormorant_Garamond'] text-white"
            style={{ fontSize: "1.1rem", fontWeight: 500 }}
          >
            {t.name}
          </p>
          <p
            className="font-['Jost'] text-stone-400 mt-1"
            style={{ fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.1em" }}
          >
            {t.location} · {t.date}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="text-stone-400 hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "bg-white scale-125" : "bg-stone-500 hover:bg-stone-400"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-stone-400 hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
