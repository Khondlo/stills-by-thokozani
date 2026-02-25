export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <p
              className="font-['Cormorant_Garamond'] tracking-widest mb-2"
              style={{ fontSize: "1.6rem", fontWeight: 400, letterSpacing: "0.15em" }}
            >
              Stills by Thokozani <em className="italic" style={{ fontWeight: 300 }}>.</em>
            </p>
            <p
              className="font-['Jost'] text-stone-500 tracking-widest"
              style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Wedding Photography
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Home", "About", "Portfolio", "Services", "Testimonials", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-['Jost'] text-stone-500 hover:text-stone-300 transition-colors duration-200 tracking-widest cursor-pointer"
                style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-stone-800 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-stone-600">
          <p
            className="font-['Jost'] text-center"
            style={{ fontSize: "0.75rem", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Stills by Thokozani. All rights reserved.
          </p>
          <p
            className="font-['Jost'] italic text-center"
            style={{ fontSize: "0.75rem", fontWeight: 300 }}
          >
            "Every love story deserves to be told."
          </p>
        </div>
      </div>
    </footer>
  );
}
