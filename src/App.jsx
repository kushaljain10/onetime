import { useEffect } from "react";
import Lenis from "lenis";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import Moment from "./components/Moment";
import Manifesto from "./components/Manifesto";
import OneTime from "./components/OneTime";
import Community from "./components/Community";
import Prayer from "./components/Prayer";
import "./App.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CursorGlow />
      <Hero />
      <Moment />
      <Manifesto />
      <OneTime />
      <Community />
      <Prayer />
    </>
  );
}

export default App;
