import { content } from "../Content";
import CustomTypewriter from "./miniComponents/CustomeTypeWriter";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary dark:bg-[#b3b3b3]">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          <CustomTypewriter
            words={[Hireme.title]}
            speed={100}
            pause={1000}
            loop
            cursorChar='⚡'
          />
        </h2>
        <h4 className="subtitle dark:text-dark_primary/80" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="Image of Gideon Prime..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="Image of Gideon Prime..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary dark:bg-white max-w-sm
           p-6 shadow-lg rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <a href="#contact">
              <button className="btn animate-bounce bg-dark_primary text-white transition-all ease-in hover:bg-orange-500">
                <CustomTypewriter 
                  words={[Hireme.btnText]}
                  speed={700}
                  pause={1000}
                  loop
                  cursorChar='⚡'
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
