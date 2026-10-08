import Navbar from './components/Navbar/Navbar';
import BarAnimation from './components/BarAnimation/BarAnimation';
import Home from './sections/Home/Home';
import Services from './sections/Services/Services';
import Resume from './sections/Resume/Resume';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import useActiveSection from './hooks/useActiveSection';
import { sectionIds } from './data/navigation';

function App() {
  const [activeSection, setActiveSection] = useActiveSection(sectionIds);

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <BarAnimation />

      <main>
        <Home />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
