// import content
import { content } from "../Content";
import CustomTypewriter from "./miniComponents/CustomeTypeWriter";
const Hero = () => {
  const { hero } = content;

  return (
    <main id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        {/* Hero Section Infomation */}
        <div
          data-aos="slide-left"
          data-aos-delay="1000"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 transition-colors ease-in bg-primaryLinear dark:bg-primaryLinear_Dark bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[18%] right-[-50%] sm:top-[35%] sm:right-[-15%] text-[#EAF2FA] dark:text-[#7c7c7c]">
            {hero.firstName}{" "}
            <span className="text-dark_primary dark:text-bg_light_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5 relative" data-aos="fade-down">
          <h2 className="dark:text-bg_light_primary h-28  sm:absolute mt-10 sm:-top-20 sm:-left-16 p-1 transition-colors duration-500">
            <CustomTypewriter 
              words={[hero.title]}
              speed={100}
              pause
              loop
              cursorChar='⚡'
              delayBeforeStart={2000}
            />
          </h2>
          <br />
          <div className="flex justify-end">
            <a href="#contact">
              <button className="btn mr-1 animate-bounce shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-bg_light_primary dark:text-bg_light_primary dark:border-bg_light_primary">{hero.btnText}</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 150}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3 className="dark:text-bg_light_primary">{content.count}</h3>
                <p className="dark:text-bg_light_primary">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96 relative">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Image of Gideon..."
            className="h-full object-cover relative top-10"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
