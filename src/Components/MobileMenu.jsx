import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Images
import logo2 from '../assets/logo2.png';
import vector from '../assets/one.png';
import split2 from '../assets/split2.png';
import compress from '../assets/compress12.png';
import pdftoword from '../assets/pdftoword2.png';
import pdftoexcel from '../assets/pdftoexcel3.png';
import pdftopowerpoint2 from '../assets/pdftopowerpoint2.png';
import wordtopdf2 from '../assets/wordtopdf2.png';
import powerpointtopdf2 from '../assets/powerpointtopdf2.png';
import exceltopdf2 from '../assets/exceltopdf2.png';

// 🔁 Data-driven section structure
const menuSections = [
  {
    title: "Manage PDF",
    tools: [
      { icon: vector, label: "Merge PDF", path: "/merge" },
      { icon: split2, label: "Split PDF", path: "/split" },
      { icon: compress, label: "Compress PDF", path: "/compress" },
    ],
  },
  {
    title: "Convert from PDF",
    tools: [
      { icon: pdftoword, label: "PDF to Word", path: "/pdf-to-word" },
      { icon: pdftoexcel, label: "PDF to Excel", path: "/pdftoexcel" },
      { icon: pdftopowerpoint2, label: "PDF to PowerPoint", path: "/pdftopowerpoint" },
    ],
  },
  {
    title: "Convert to PDF",
    tools: [
      { icon: wordtopdf2, label: "Word to PDF", path: "/wordtopdf" },
      { icon: powerpointtopdf2, label: "PowerPoint to PDF", path: "/powerpointtopdf" },
      { icon: exceltopdf2, label: "Excel to PDF", path: "/exceltopdf" },
    ],
  },
];

// 🔁 Reusable item component
const ToolItem = ({ icon, label, path, onClick }) => (
  <li className="flex items-center gap-2">
    <img src={icon} alt={label} className="w-5 h-5" />
    <Link to={path} onClick={onClick}>{label}</Link>
  </li>
);

const MobileMenu = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <div className="flex items-center gap-2">
          <img src={logo2} alt="PDF Buddy Logo" className="" />
        </div>
        <button onClick={onClose} className="text-2xl text-black">
          <FaTimes />
        </button>
      </div>

      {/* Menu */}
      <div className="px-6 py-4 space-y-6 text-[15px] text-black">
        {menuSections.map((section, index) => (
          <div key={index}>
            <p className="text-gray-500 text-sm mb-2">{section.title}</p>
            <ul className="space-y-3">
              {section.tools.map((tool, idx) => (
                <ToolItem
                  key={idx}
                  icon={tool.icon}
                  label={tool.label}
                  path={tool.path}
                  onClick={onClose}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;


