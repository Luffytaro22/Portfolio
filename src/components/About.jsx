import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'; 
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaReact, FaSass} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiRubyonrails, SiWebpack, SiVisualstudiocode } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaGithub } from "react-icons/fa6";
import ContactLinks from './subcomponents/ContactLinks';

const About = () => {
  const location = useLocation();
  
  // Function to check if the element is in the window view.
  const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
  }

  // Function to handle the transitions based on the scroll.
  const handleScroll = () => {
    const aboutContainer = document.getElementById('about-container');
    const frontEndContainer = document.getElementById('front-end-container');
    const backEndContainer = document.getElementById('back-end-container');
    const techContainer = document.getElementById('technologies-container');

      if (isElementInViewport(aboutContainer)) {
          aboutContainer.classList.add('animate');
      }
      if (isElementInViewport(frontEndContainer)) {
        frontEndContainer.classList.add('animate');
      }
      if (isElementInViewport(backEndContainer)) {
        backEndContainer.classList.add('animate');
      }
      if (isElementInViewport(techContainer)) {
        techContainer.classList.add('animate');
      }
  }

  // Listeners when the user scrolls or when the page loads.
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);

  useEffect(() => {
    setTimeout(() => {
      handleScroll();
    }, 200);
  }, [location]);

  return (
    <div className="mt-14 text-center text-white px-2 lg:ml-[13rem] flex flex-col gap-12 xl:flex-row xl:gap-4 justify-center items-center">
      <div className="max-w-md" id="about-container">
        <h1 className="primary-font text-2xl">Hello World!</h1>
        <h2 className="primary-font text-3xl text-green-500">I&apos;m Manuel Sánchez</h2>
        <h3 className="secondary-font italic">UX/UI Front-end Web developer</h3><br />
        <p className="secondary-font">I&apos;m a junior developer with experience working both in front-end and back-end.</p><br />
        <p className="secondary-font">I enjoy making good-looking and functional applications paying special attention to the user experience, and writing clean and readable code.</p><br />
        <ContactLinks/>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="primary-font text-2xl underline text-green-500">My stack</h3>
        <div className="grid justify-center items-center py-8 gap-8 secondary-font lg:grid-cols-2" id="stack-container" >
          <div className="lg:row-span-2 lg:self-baseline lg:justify-self-center" id="front-end-container">
            <h4>Front-End</h4>
            <div className="grid-layout">
              <span>
                <IoLogoJavascript className="text-[#F7DF1E] text-3xl" />
                <p>JavaScipt</p>
              </span>
              <span>
                <FaHtml5 className="text-[#E34F26] text-3xl" />
                <p>HTML5</p>
              </span>
              <span>
                <FaCss3Alt className="text-[#1572B6] text-3xl" />
                <p>CSS3</p>
              </span>
              <span>
                <FaReact className="text-[#61DAFB] text-3xl" />
                <p>React.js</p>
              </span>
              <span>
                <SiRedux className="text-[#764ABC] text-3xl" />
                <p>Redux</p>
              </span>
              <span>
                <SiTailwindcss className="text-[#06B6D4] text-3xl" />
                <p>Tailwind CSS</p>
              </span>
              <span className="col-span-3">
                <FaSass className="text-[#CC6699] text-3xl" />
                <p>Sass</p>
              </span>
            </div>
          </div>
          <div id="back-end-container">
            <h4>Back-End</h4>
            <div className="grid-layout">
              <span>
                <DiRuby className="text-[#CC342D] text-3xl" />
                <p>Ruby</p>
              </span>
              <span>
                <SiRubyonrails className="text-[#D30001] text-3xl" />
                <p>Rails</p>
              </span>
              <span>
                <BiLogoPostgresql className="text-[#4169E1] text-3xl" />
                <p>PostgreSQL</p>
              </span>
            </div>
          </div>
          <div id="technologies-container">
            <h4>Technologies</h4>
            <div className="grid-layout">
              <span>
                <FaGitAlt className="text-[#F05032] text-3xl" />
                <p>Git</p>
              </span>
              <span>
                <FaGithub className="text-white text-3xl" />
                <p>GitHub</p>
              </span>
              <span>
                <SiWebpack className="text-[#8DD6F9] text-3xl" />
                <p>Webpack</p>
              </span>
              <span className="col-span-3">
                <SiVisualstudiocode className="text-[#007ACC] text-3xl" />
                <p>Visual Studio Code</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
