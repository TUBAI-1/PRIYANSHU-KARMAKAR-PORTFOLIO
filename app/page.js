import Summary from './components/Summary';
// import Contact from './components/Contact';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMe from './components/ContactMe';

export default function Home() {
  return (
    <>
      <Summary />
      {/* <Contact /> */}
      <Skills />
      <Certifications />
      <Awards />
      <Projects />
      <Experience />
      <Education />
      <ContactMe />
    </>
  );
} 