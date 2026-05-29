import CookieNotice from "./components/CookieNotice";
import RevealObserver from "./components/RevealObserver";
import { WRAP } from "./components/Section";
import TopBar from "./components/TopBar";
import SiteFooter from "./components/SiteFooter";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Stack from "./components/sections/Stack";
import Education from "./components/sections/Education";
import Lab from "./components/sections/Lab";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className={WRAP}>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Education />
        <Lab />
        <Contact />
        <SiteFooter />
      </main>
      <RevealObserver />
      <CookieNotice />
    </>
  );
}
