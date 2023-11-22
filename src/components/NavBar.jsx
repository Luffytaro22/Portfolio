import { useLocation } from 'react-router-dom';
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMenu, IoClose, IoPerson } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { GoTriangleLeft } from "react-icons/go";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const showHideMenu = () => {
    if (menu) {
      const menuBar = document.getElementById('menu-bar');
      menuBar.classList.remove('animate-show-menu');
      menuBar.classList.add('animate-hide-menu');
      setTimeout(() => {
        setMenu(false);
      }, 600);
    } else {
      setMenu(true);
    }
  };

  return (
    <>
      { !menu && <div className="w-full flex justify-between items-center fixed top-0 text-3xl text-white px-[20px]">
        <IoMenu onClick={showHideMenu} />
        <img src={logo} className="w-[200px] pl-[10px]" />
      </div>}
      { menu && <div className="w-3/4 max-w-xs flex flex-col h-screen justify-between fixed top-0 pb-[20px] pt-[10px] pl-[20px] text-white bg-menuBackground animate-show-menu" id="menu-bar">
        <IoClose onClick={showHideMenu} className="text-3xl" />
        <nav>
          <ul className="flex flex-col justify-center h-[100px] items-center gap-9 pr-9 text-white primary-font">
            { location.pathname === "/" ? (
                <li 
                  className="align-menu underline underline-offset-4 text-green-500"
                  onClick={() => navigate("/")}
                >
                  <IoPerson />
                  About
                  <GoTriangleLeft className="text-2xl" />
                </li>
                
              ) : (
              <li className="align-menu" onClick={() => navigate("/")}>
                <IoPerson />
                About
              </li>
              )
            }
            { location.pathname === "/work" ? (
                <li 
                  className="align-menu underline underline-offset-4 text-green-500"
                  onClick={() => navigate("/work")}
                >
                  <MdOutlineWork />
                  Work
                  <GoTriangleLeft className="text-2xl" />
                </li>
                
              ) : (
              <li className="align-menu" onClick={() => navigate("/work")}>
                <MdOutlineWork />
                Work
              </li>
              )
            }
            { location.pathname === "/contact" ? (
                <li
                  className="align-menu underline underline-offset-4 text-green-500"
                  onClick={() => navigate("/contact")}
                >
                  <RiContactsBookFill />
                  Contact
                  <GoTriangleLeft className="text-2xl" />
                </li>
                
              ) : (
              <li className="align-menu" onClick={() => navigate("/contact")}>
                <RiContactsBookFill />
                Contact
              </li>
              )
            }
          </ul>
        </nav>
        <div className="flex gap-9 text-3xl text-white self-center">
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
      </div>}
    </>
  );
};

export default NavBar;
