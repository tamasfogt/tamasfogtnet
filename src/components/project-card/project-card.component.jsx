import { Link } from "react-router-dom";
function ProjectCard({ title, description, links, image, tags }) {
  return (
    <div className="hover:scale-105 max-w-sm rounded inline-block shadow-lg hover:shadow-xl  bg-gray-900 mx-2 my-2">
      <div>
        <img className="w-full" src={image} alt="project"></img>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-200 text-base">{description}</div>
      </div>
      <div className="px-6">
        <p className="font-semibold">Tech:</p>
        <div className="flex flex-row ">
          {tags?.map((tag) => (
            <div className=" inline text-white px-1 py-1 text-sm font-semibold mb-2 ">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-5">
        <div>
          {links?.map((link) => (
            <Link
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2  hover:bg-blue-300 whitespace-nowrap	"
              to={{
                pathname: link.url,
              }}
              target="_blank"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
