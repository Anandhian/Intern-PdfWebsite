import { Link } from "react-router-dom";
import startrue from "../assets/startrue.svg";
import starfalse from "../assets/starfalse.svg";

const ToolsCard = ({
  tools = [],
  onToggleFavorite,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <div
          key={tool.title}
          className={`relative p-5 h-48 rounded-xl shadow-sm transition-transform hover:scale-105 ${tool.color || "bg-gray-100"}`}
        >
          {/* New Badge */}
          {tool.new && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New!
            </div>
          )}

          {/* Favorite Star */}
          {onToggleFavorite && tool.icon && (
            <button
              onClick={() => onToggleFavorite(tool.id)}
              title="Toggle Favorite"
              className="absolute top-2 left-2"
            >
              <img
                src={tool.isFavorite ? startrue : starfalse}
                alt="Favorite Star"
                className="w-6 h-6"
              />
            </button>
          )}

          {/* Main Content */}
          <Link to={tool.link} title={tool.title} className="block h-full">
            {tool.icon && (
              <img src={tool.icon} alt={tool.title} className="w-8 h-8 mb-3" />
            )}
            <h3 className="text-lg font-semibold text-black">{tool.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{tool.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ToolsCard;
