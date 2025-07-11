import { useState, useEffect } from "react";
import ToolsCard from "../Components/ToolsCard";
import { tools } from "../utils/cardData";

function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [favorites, setFavorites] = useState([]);

  // ✅ Optional: Persist favorites across reloads
  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   setFavorites(storedFavorites);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

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
      <div className="max-w-7xl mt-6 mx-auto px-4 sm:px-6 lg:px-10">
        {/* ✅ Banner */}
        <div className="w-full max-w-5xl mx-auto mb-10 bg-blue-100 rounded-[4px] opacity-90 overflow-hidden shadow-sm flex flex-col md:flex-row items-center md:items-stretch justify-between">
          {/* Left Side Text */}
          <div className="p-4 w-full md:w-2/3">
            <h3 className="text-base sm:text-lg font-extrabold text-[#2869DA] mb-1">
              Your All-in-one PDF Utility
            </h3>
            <p className="text-xs sm:text-sm text-blue-800">
              Merge, split, convert & more for free with PDF Tools.
            </p>
          </div>

          {/* Right Side Image + Label */}
          <div className="flex items-center gap-2 bg-black text-white text-[10px] font-bold uppercase py-2 px-4 md:py-1 md:px-3 md:rounded-l-[4px] w-full md:w-auto justify-center">
            <img
              src="mergeicon.png"
              alt="Merge Icon"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            <span className="text-xs sm:text-sm">Merge</span>
          </div>
        </div>

        {/* ✅ Section Title */}
  <h2 className="text-[20px] leading-[28px] sm:text-[32px] sm:leading-[36px] md:text-[40px] md:leading-[40px] font-black font-['Inter'] text-center mb-8">
  Popular Tools
</h2>



        {/* ✅ Tabs */}
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

        {/* ✅ Tools Grid */}
        <div className="px-2 sm:px-0">
          <ToolsCard
            tools={getToolsForTab()}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        {/* ✅ Empty State for Favorites */}
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







