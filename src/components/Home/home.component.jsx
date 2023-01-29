import Navbar from '../NavBar/navbar.component';
import Stats from '../Stats/stats.component';
import Hero from './../Hero/hero.component';
import About from './../About/about.component';
import Services from './../Services/services.component';
import Experience from '../Experiences/experience.component';
import Contact from './../Contact/contact.component';
import Footer from '../Footer/footer.component';
import Education from '../Education and Skills/Education.component';
import Skills from './../Education and Skills/skills.component';

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
