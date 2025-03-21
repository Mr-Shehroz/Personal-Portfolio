import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { PersonalInfo } from "./components/PersonalInfo";

export default function Portfolio() {
  return (
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="container mx-auto px-4 md:px-8 lg:px-16">
          <PersonalInfo/>
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
  );
}
