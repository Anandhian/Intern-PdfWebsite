import { Link } from "react-router-dom";
import startrue from "../assets/startrue.svg";
import starfalse from "../assets/starfalse.svg";

const ToolsCard = ({ tools = [], onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 px-4 sm:px-6 md:px-10">
      {tools.map((tool) => {
        const hasValidIcon = tool.icon && tool.icon.trim() !== "";
        const hasValidCornerImage = tool.cornerImage && tool.cornerImage.trim() !== "";

        return (
          <div
            key={tool.id}
            className="relative w-full h-[150px]  shadow px-4 pt-4 pb-4 overflow-hidden hover:shadow-md transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: tool.bgColor || "#f3f4f6" }}
          >
            {/* Favorite Star */}
            {onToggleFavorite && hasValidIcon && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onToggleFavorite(tool.id);
                }}
                title={tool.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                className="absolute top-2 right-2 z-20"
              >
                <img
                  src={tool.isFavorite ? startrue : starfalse}
                  alt="Favorite"
                  className="w-5 h-5"
                />
              </button>
            )}

            <Link to={tool.link} className="block h-full relative z-10">
              {hasValidIcon && (
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="w-6 h-6 mb-2 filter invert-0 brightness-0"
                />
              )}
              <h3 className="text-[15px] font-bold text-black leading-tight">
                {tool.title}
              </h3>
              <p className="text-[13px] text-gray-700 mt-1 leading-snug">
                {tool.description}
              </p>
            </Link>

            {/* Corner Image - white using filters */}
           {hasValidCornerImage && (
  <img
    src={tool.cornerImage}
    alt={`${tool.title} decoration`}
    className="absolute bottom-0 right-0 w-[60px] h-[60px] object-contain z-0 filter brightness-0 invert opacity-60"
  />
)}


          </div>
        );
      })}
    </div>
  );
};

export default ToolsCard;













