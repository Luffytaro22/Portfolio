import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../assets/ms-sin-fondo.png';

const NavBar = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <img src={logo} />
        <div>
          <BiLogoGmail />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
};

export default NavBar;
