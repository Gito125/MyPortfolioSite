import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary dark:bg-[#b3b3b3]" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle dark:text-dark_primary/80" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((project, i) => (
              <SwiperSlide
                key={i}
                className="bg-white dark:bg-dark_primary rounded-3xl p-5 border-b-8 border-[#FAF9FD] dark:border-dark_primary h-fit"
              >
                <img src={project.image} alt={`My project called ${project.title} image`} />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold">{project.title}</h5>
                  <a href={project.link} target="_blank" className="font-bold text-gray dark:text-bg_light_primary self-end">
                    {"READ MORE →"}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
