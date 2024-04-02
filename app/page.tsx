import About from "./component/About";
import Features from "./component/Features";
import HeroSection from "./component/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <About />
    </div>
  );
}
