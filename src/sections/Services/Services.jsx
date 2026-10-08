import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { services } from '../../data/services';
import ServiceCard from './ServiceCard';
import './Services.css';

function Services() {
  return (
    <section className="Services" id="services">
      <SectionHeading title="My" highlight="Services" />

      <div className="Services_container">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
