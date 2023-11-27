import { useSelector } from "react-redux";
import { IoOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  const works = useSelector((state) => state.works.works);

  return (
    <div className="mt-14 text-center text-white px-2">
      <h2 className="primary-font text-2xl underline text-green-500">My Projects</h2>
      <div className="flex flex-col items-center gap-12 py-8" id="works-container">
        {works.map((work, index) => 
          <div key={index} className="flex flex-col gap-4 w-full max-w-md p-4 secondary-font">
            <img src={work.image} className="rounded-lg" />
            <h3 className="primary-font text-xl">{work.name}</h3>
            <p>{work.description}</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {work.tech.map((stack, index) => 
                <li key={index} className="bg-black py-1 px-2 rounded-md">{stack}</li>
              )}
            </ul>
            <div className="flex justify-around">
              <a href={work.link} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2">
                View Live
                <IoOpenOutline className="text-3xl" />
              </a>
              <a href={work.github} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2">
                View repo
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
