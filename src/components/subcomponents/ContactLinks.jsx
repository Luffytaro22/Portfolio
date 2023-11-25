import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactLinks = () => {
  return (
    <>
      <div className="flex gap-9 text-3xl text-white justify-center">
        <a href="mailto:manuelsanchez059@gmail.com" target="_blank" rel="noreferrer">
          <BiLogoGmail className="hover:animate-hover-links hover:text-red-600"  />
        </a>
        <a href="https://github.com/Luffytaro22" target="_blank" rel="noreferrer">
          <FaGithub className="hover:animate-hover-links hover:text-black" />
        </a>
        <a href="https://www.linkedin.com/in/manuel-alejandro-sanchez-sierra/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:animate-hover-links hover:text-blue-500" />
        </a>
      </div>
    </>
  );
};

export default ContactLinks;
