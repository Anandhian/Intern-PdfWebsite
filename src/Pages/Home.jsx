import { useState } from "react";
import ToolsCard from "../components/ToolsCard";
import { tools } from "../utils/cardData";

function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const getToolsForTab = () => {
    const toolsWithFavFlag = tools.map((tool) => ({
      ...tool,
      isFavorite: favorites.includes(tool.id),
    }));

    return activeTab === "Favorites"
      ? toolsWithFavFlag.filter((tool) => tool.isFavorite)
      : toolsWithFavFlag;
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Banner with image */}
        <div className="w-[796px] h-[130px] opacity-70 bg-blue-100 rounded-[4px]
         mx-auto mb-10 overflow-hidden shadow-sm flex items-center justify-between">
          {/* Text Content */}
          <div className="p-4">
            <h3 className="text-lg font-extrabold text-[#2869DA] mb-1">
              Your All-in-one PDF Utility
            </h3>
            <p className="text-xs text-blue-800">
              Merge, split, convert & more for free with PDF Tools.
            </p>
          </div>

          {/* Right side: Image + Label */}
          <div className="flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase py-1 px-3 h-full">
            <img
              src="mergeicon.png"
              alt="Merge Icon"
              className=" "
            />
            <span>Merge</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">Popular Tools</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-10">
          {["All", "Favorites"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-semibold transition-colors ${
                activeTab === tab
                  ? "text-black border-b-2 border-pink-500"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="px-2 sm:px-0">
          <ToolsCard
            tools={getToolsForTab()}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        {/* Empty state */}
        {activeTab === "Favorites" && getToolsForTab().length === 0 && (
          <div className="text-center text-sm text-gray-500 mt-8">
            No favorite tools found.
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;


