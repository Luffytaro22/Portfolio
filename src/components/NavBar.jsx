import { useLocation } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../assets/ms-sin-fondo.png';

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-full">
        <nav>
          <ul className="flex justify-end h-[100px] items-center gap-9 pr-9 text-white primary-font">
            <li className={ location.pathname === "/" ? "text-yellow-600" : "" }>About</li>
            <li className={ location.pathname === "/work" ? "text-yellow-600" : "" }>Work</li>
            <li className={ location.pathname === "/contact" ? "text-yellow-600" : "" }>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="absolute top-0 h-full flex flex-col justify-between items-center pb-[10px]">
        <img src={logo} className="w-[100px]" />
        <div className="flex flex-col gap-9 text-3xl text-white">
          <a href="mailto:manuelsanchez059@gmail.com" target="_blank" rel="noreferrer">
            <BiLogoGmail />
          </a>
          <a href="https://github.com/Luffytaro22" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manuel-alejandro-sanchez-sierra/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
