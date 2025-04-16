import React from "react";
import { content } from "../Content";
import CustomTypewriter from "./miniComponents/CustomeTypeWriter";

const Footer = () => {
  const footer = content.Footer;
  return (
    <footer className="p-3 text-center dark:bg-[#b3b3b3]">
      <h6 className="mb-3">
        <CustomTypewriter
          words={[footer.name, `PRIME`]}
          speed={100}
          pause
          loop
          cursorChar="⚡"
        />
      </h6>
      <p>{footer.text}</p>
    </footer>
  );
};

export default Footer;
