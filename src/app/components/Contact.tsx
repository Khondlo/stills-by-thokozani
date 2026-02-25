import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    venue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xykdozjk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", date: "", venue: "", message: "" });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setError(data["errors"].map((err: any) => err["message"]).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form");
        }
      }
    } catch (err) {
      setError("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-['Jost'] tracking-[0.3em] text-stone-400 mb-4 uppercase"
            style={{ fontSize: "0.7rem" }}
          >
            Let's Connect
          </p>
          <h2
            className="font-['Cormorant_Garamond'] text-stone-800 mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Begin Your Story
          </h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-6" />
          <p
            className="font-['Jost'] text-stone-500 max-w-md mx-auto"
            style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            I would love to hear about your wedding. Reach out and let's create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <p
                className="font-['Jost'] tracking-[0.2em] text-stone-800 uppercase mb-6"
                style={{ fontSize: "0.7rem" }}
              >
                Contact Details
              </p>
              <div className="space-y-5">
                {[
                  { icon: <Mail size={15} />, label: "hello@stillsbythokozani.co.za" },
                  { icon: <Phone size={15} />, label: "+27 82 381 9219" },
                  { icon: <MapPin size={15} />, label: "South Africa" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="text-stone-400">{item.icon}</div>
                    <span
                      className="font-['Jost'] text-stone-500"
                      style={{ fontSize: "0.85rem", fontWeight: 300 }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-stone-200" />

            <div>
              <p
                className="font-['Jost'] tracking-[0.2em] text-stone-800 uppercase mb-5"
                style={{ fontSize: "0.7rem" }}
              >
                Follow Along
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={18} />, label: "@stillsbythokozani", href: "https://instagram.com/stillsbythokozani" },
                  { icon: <Facebook size={18} />, label: "stillsbythokoxani", href: "https://facebook.com/stillsbythokoxani" },
                  { icon: <Youtube size={18} />, label: "stillsbythokozani", href: "https://www.youtube.com/@ThokozaniMtshali47" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-400 hover:text-stone-700 transition-colors duration-200 cursor-pointer"
                  >
                    {s.icon}
                    <span
                      className="font-['Jost']"
                      style={{ fontSize: "0.8rem", fontWeight: 300 }}
                    >
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-stone-200" />
            <div>
              <p
                className="font-['Jost'] text-stone-500"
                style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.8 }}
              >
                Currently booking for 2026 & 2027. Limited dates remain — reach out early to secure yours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-white p-12 text-center border border-stone-100">
                <div className="w-12 h-px bg-stone-300 mx-auto mb-8" />
                <h3
                  className="font-['Cormorant_Garamond'] text-stone-800 mb-4"
                  style={{ fontSize: "2rem", fontWeight: 400 }}
                >
                  Thank You
                </h3>
                <p
                  className="font-['Jost'] text-stone-500"
                  style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8 }}
                >
                  Your message has been received. I'll be in touch within 12 hours.
                </p>
                <div className="w-12 h-px bg-stone-300 mx-auto mt-8" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="font-['Jost'] text-stone-500 tracking-widest uppercase block mb-2"
                      style={{ fontSize: "0.65rem" }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border-b border-stone-200 bg-transparent py-3 font-['Jost'] text-stone-700 focus:outline-none focus:border-stone-600 transition-colors placeholder:text-stone-300"
                      style={{ fontSize: "0.9rem", fontWeight: 300 }}
                      placeholder="Emma & James"
                    />
                  </div>
                  <div>
                    <label
                      className="font-['Jost'] text-stone-500 tracking-widest uppercase block mb-2"
                      style={{ fontSize: "0.65rem" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border-b border-stone-200 bg-transparent py-3 font-['Jost'] text-stone-700 focus:outline-none focus:border-stone-600 transition-colors placeholder:text-stone-300"
                      style={{ fontSize: "0.9rem", fontWeight: 300 }}
                      placeholder="hello@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="font-['Jost'] text-stone-500 tracking-widest uppercase block mb-2"
                      style={{ fontSize: "0.65rem" }}
                    >
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full border-b border-stone-200 bg-transparent py-3 font-['Jost'] text-stone-700 focus:outline-none focus:border-stone-600 transition-colors"
                      style={{ fontSize: "0.9rem", fontWeight: 300 }}
                    />
                  </div>
                  <div>
                    <label
                      className="font-['Jost'] text-stone-500 tracking-widest uppercase block mb-2"
                      style={{ fontSize: "0.65rem" }}
                    >
                      Venue / Location
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={form.venue}
                      onChange={handleChange}
                      className="w-full border-b border-stone-200 bg-transparent py-3 font-['Jost'] text-stone-700 focus:outline-none focus:border-stone-600 transition-colors placeholder:text-stone-300"
                      style={{ fontSize: "0.9rem", fontWeight: 300 }}
                      placeholder="Lake Umuzi, Mpumalanga, South Africa"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="font-['Jost'] text-stone-500 tracking-widest uppercase block mb-2"
                    style={{ fontSize: "0.65rem" }}
                  >
                    Tell Me About Your Day
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b border-stone-200 bg-transparent py-3 font-['Jost'] text-stone-700 focus:outline-none focus:border-stone-600 transition-colors resize-none placeholder:text-stone-300"
                    style={{ fontSize: "0.9rem", fontWeight: 300 }}
                    placeholder="Share your vision, ideas, and what matters most to you..."
                  />
                </div>

                <div className="pt-4">
                  {error && (
                    <p className="font-['Jost'] text-red-800/80 mb-4" style={{ fontSize: "0.85rem" }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-stone-800 text-white px-12 py-4 font-['Jost'] tracking-widest hover:bg-stone-700 transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
