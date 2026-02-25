import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { FullWidthImage } from "./components/FullWidthImage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Images
const HERO_IMAGE = "https://iili.io/qfBuiSs.jpg";
const PORTRAIT_IMAGE = "https://i.pinimg.com/736x/3e/6c/5f/3e6c5faf22d514c0c99bff4811e0005d.jpg";
const CEREMONY_IMAGE = "https://i.pinimg.com/736x/62/55/93/625593c9ba0c2e0b324e27bafb815a57.jpg";
const RECEPTION_IMAGE = "https://i.pinimg.com/736x/6e/ea/24/6eea2410e6b1067e4187bacb889f873e.jpg";
const RINGS_IMAGE = "https://i.pinimg.com/1200x/d4/e1/15/d4e1154af5e4d9593588223fd5fa82a8.jpg";
const BOUQUET_IMAGE = "https://i.pinimg.com/736x/ed/ae/c5/edaec53ab846b1d612aa5e630cba9d75.jpg";
const DANCE_IMAGE = "https://i.pinimg.com/736x/20/49/53/204953b18c4152f2d00d4eedb20bd115.jpg";
const OUTDOOR_IMAGE = "https://i.pinimg.com/736x/bf/71/c3/bf71c3ec7f5e8d2a7387c5b47761c709.jpg";
const TABLE_IMAGE = "https://i.pinimg.com/736x/6d/a3/2e/6da32e4fc9d8d9623bb550bca37b272f.jpg";
const SUNSET_IMAGE = "https://i.pinimg.com/736x/c3/a6/29/c3a629baf7a7ed81fd4e467106fb47ac.jpg";

// New Additional Images
const PORTRAIT_2 = "https://images.unsplash.com/photo-1768610582531-ad6e57cd42f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxicmlkZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjE5Mzg3OXww&ixlib=rb-4.1.0&q=80&w=1080";
const DETAILS_CAKE = "https://images.unsplash.com/photo-1767170135324-f7b5380bb441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NzIxOTM5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const DETAILS_SHOES = "https://images.unsplash.com/photo-1769165158655-b4618e955d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwc2hvZXN8ZW58MXx8fHwxNzcyMTkzOTMwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const RECEPTION_CHEERS = "https://images.unsplash.com/photo-1768051790403-12a8a5f8e5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwdG9hc3R8ZW58MXx8fHwxNzcyMTkzOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const portfolioImages = [
  { src: CEREMONY_IMAGE, alt: "Wedding ceremony decoration", size: "large" as const, category: "Ceremony" },
  { src: RINGS_IMAGE, alt: "Wedding rings detail", size: "small" as const, category: "Details" },
  { src: BOUQUET_IMAGE, alt: "Bridal bouquet", size: "small" as const, category: "Details" },
  { src: PORTRAIT_2, alt: "Bridal portrait", size: "small" as const, category: "Portraits" },
  { src: OUTDOOR_IMAGE, alt: "Outdoor wedding couple", size: "small" as const, category: "Portraits" },
  { src: TABLE_IMAGE, alt: "Elegant table setting", size: "small" as const, category: "Details" },
  { src: DANCE_IMAGE, alt: "First dance", size: "large" as const, category: "Reception" },
  { src: DETAILS_CAKE, alt: "Wedding cake", size: "small" as const, category: "Details" },
  { src: RECEPTION_IMAGE, alt: "Golden hour couple", size: "small" as const, category: "Portraits" },
  { src: SUNSET_IMAGE, alt: "Sunset kiss", size: "small" as const, category: "Portraits" },
  { src: DETAILS_SHOES, alt: "Bridal shoes", size: "small" as const, category: "Details" },
  { src: RECEPTION_CHEERS, alt: "Wedding toast guests", size: "small" as const, category: "Reception" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <About portraitImage={PORTRAIT_IMAGE} />
      <FullWidthImage
        image={DANCE_IMAGE}
        quote="Love is not just a feeling — it is every glance, every touch, every laugh shared."
        attribution="Thokozani"
      />
      <Portfolio images={portfolioImages} />
      <Services />
      <Testimonials />
      <FullWidthImage
        image={SUNSET_IMAGE}
        quote="Your love story is unlike any other. Let me tell it."
      />
      <Contact />
      <Footer />
    </div>
  );
}
