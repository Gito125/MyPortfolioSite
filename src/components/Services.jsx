import { content } from "../Content";
import CustomTypewriter from "./miniComponents/CustomeTypeWriter";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title dark:text-bg_light_primary" data-aos="fade-down">
          <CustomTypewriter
            words={[services.title]}
            speed={100}
            pause={1000}
            loop
            cursorChar='⚡'
            />
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.content.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="min-w-[14rem] duration-300 shadow-lg cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none dark:bg-[#b3b3b3] dark:border-none"
            >
              <img src={service.logo} alt={`${service.title} logo`} className="mx-auto" />
              <h6 className="my-3">{service.title}</h6>
              <p className="leading-7">{service.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
