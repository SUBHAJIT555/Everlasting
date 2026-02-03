import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceHero from "@/components/ServiceHero";
import ServicesVarity from "@/components/ServicesVarity";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Service = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or hash changes
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Small delay to ensure components are rendered
    }
  }, [location.hash]);

  return (
    <div>
      <ServiceHero />
      <ServicesVarity />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Service;