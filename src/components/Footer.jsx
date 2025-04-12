import React from "react";
import {content} from '../Content'

const Footer = () => {
    const footer = content.Footer
  return (
    <footer className="p-3 text-center">
      <h6 className="mb-3">{footer.name}</h6>
      <p>{footer.text}</p>
    </footer>
  );
};

export default Footer;
