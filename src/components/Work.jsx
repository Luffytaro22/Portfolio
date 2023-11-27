import { useSelector } from "react-redux";

const Work = () => {
  const works = useSelector((state) => state.works.works);
  console.log(works);

  return (
    <div className="mt-14 text-center text-white px-2">
      <h2>My Projects</h2>
    </div>
  );
};

export default Work;
