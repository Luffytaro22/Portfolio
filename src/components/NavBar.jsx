import { useLocation } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../assets/ms-sin-fondo.png';

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <>
      <div className="w-full">
        <nav>
          <ul className="flex justify-end h-[100px] items-center gap-9 pr-9">
            <li className={ location.pathname === "/" ? "text-yellow-600" : "" }>About</li>
            <li className={ location.pathname === "/work" ? "text-yellow-600" : "" }>Work</li>
            <li className={ location.pathname === "/contact" ? "text-yellow-600" : "" }>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="absolute top-0 h-full flex flex-col justify-between items-center pb-[10px]">
        <img src={logo} className="w-[100px]" />
        <div className="flex flex-col gap-9 text-3xl">
          <BiLogoGmail />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
};

export default NavBar;
