// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";
import CustomTypewriter from "./miniComponents/CustomeTypeWriter";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "24rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary dark:bg-[#b3b3b3]" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-[90%] border-2 border-dark_primary dark:border-bg_light_primary shadow-2xl rounded-lg rounded-br-3xl bg-bg_light_primary dark:bg-dark_primary"
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt={selectSkill?.name} />
          <h6 className="dark:text-bg_light_primary">{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 sm:text-sm text-xs !leading-7 dark:text-bg_light_primary">
          {selectSkill?.details.map((detail, i) => (
            <li key={i} className="gap-2 items-center list-item">
              {detail}
            </li>
          ))}
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn dark:bg-bg_light_primary">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          <CustomTypewriter 
              words={[skills.title]}
              speed={100}
              pause={1000}
              loop
              cursorChar='⚡'
            />
        </h2>
        <h4 className="subtitle dark:text-dark_primary/80" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white dark:bg-dark_primary shadow-lg sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 dark:border-none"
            >
              <div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6 className="dark:text-bg_light_primary">{skill.name}</h6>
                <p className="italic dark:text-bg_light_primary">{skill.para}</p>
                <div
                  className="text-xl absolute top-3 right-3 dark:text-bg_light_primary"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
