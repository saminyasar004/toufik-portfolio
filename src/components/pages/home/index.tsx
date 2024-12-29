import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Service from "./Service";
import Testimonials from "./Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Service />
            <Projects />
            <About />
            <Testimonials />
        </>
    );
}
