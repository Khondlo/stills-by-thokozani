import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className={`font-['Cormorant_Garamond'] tracking-widest transition-colors duration-300 ${isScrolled ? "text-stone-800" : "text-white"
            }`}
          style={{ fontSize: "1.5rem", fontWeight: 500, letterSpacing: "0.15em" }}
        >
          Stills by Thokozani <span className="italic" style={{ fontWeight: 300 }}>.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-['Jost'] tracking-widest transition-colors duration-300 hover:opacity-70 cursor-pointer ${isScrolled ? "text-stone-700" : "text-white/90"
                  }`}
                style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-stone-800" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-stone-100">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block px-8 py-3 font-['Jost'] text-stone-700 hover:text-stone-400 transition-colors cursor-pointer"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
