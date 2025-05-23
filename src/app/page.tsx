import AboutSection from './home/partials/about';
// import ContactSection from './home/partials/contact';
// import ExperienceSection from './home/partials/experience';
// import FAQSection from './home/partials/faq';
// import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
// import PortofolioSection from './home/partials/portofolio';
import ServiceSection from './home/partials/service';
import SkillSection from './home/partials/skill';
// import TestimonialSection from './home/partials/testimonial';
// import WorkingSection from './home/partials/working';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceSection />
      <AboutSection />
      <SkillSection />
      {/* <WorkingSection />
      <ExperienceSection />
      <PortofolioSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default Home;
