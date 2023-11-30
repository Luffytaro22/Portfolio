import { useLocation } from 'react-router-dom';
import { IoMenu, IoClose, IoPerson } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { GoTriangleLeft } from "react-icons/go";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import ContactLinks from './subcomponents/ContactLinks';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  // Find the right width when the window resize.
  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hide the NavBar when tapping outside of the element.
  const hideNav = (event) => {
    const container = document.getElementById('menu-bar');
    if (event.target !== container) {
      container.classList.remove('animate-show-menu');
      container.classList.add('animate-hide-menu');
      window.removeEventListener('click', hideNav);
      setTimeout(() => {
        setMenu(false);
      }, 600);
    }
  };

  const showHideMenu = (event) => {
    event.stopPropagation();
    if (menu) {
      const menuBar = document.getElementById('menu-bar');
      menuBar.classList.remove('animate-show-menu');
      menuBar.classList.add('animate-hide-menu');
      setTimeout(() => {
        setMenu(false);
      }, 600);
    } else {
      setMenu(true);
      window.addEventListener('click', hideNav);
    }
  };

  return (
    <>
      { (!menu && windowWidth < 1024) && <div className="w-full flex justify-between items-center fixed top-0 z-40 text-3xl text-white px-[20px] backdrop-blur-sm lg:hidden">
        <IoMenu onClick={showHideMenu} />
        <a href="https://portfolio-manuel-sanchez.vercel.app/"><img src={logo} className="w-[200px] pl-[10px]" /></a>
      </div>}
      { (menu || windowWidth >= 1024) && <div className="w-3/4 max-w-[13rem] flex flex-col h-screen justify-between fixed top-0 z-50 pb-[20px] pt-[10px] pl-[20px] text-white bg-menuBackground animate-show-menu lg:animate-none lg:bg-none" id="menu-bar">
        <IoClose onClick={showHideMenu} className="text-3xl lg:hidden" />
        <a href="https://portfolio-manuel-sanchez.vercel.app/"><img src={logo} className="w-[200px] pl-[10px] hidden lg:block" /></a>
        <nav className="m-auto">
          <ul className="flex flex-col justify-center items-center gap-9 text-white primary-font">
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
        <ContactLinks />
      </div>}
    </>
  );
};

export default NavBar;
