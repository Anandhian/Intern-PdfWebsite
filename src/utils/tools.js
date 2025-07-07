// src/utils/routesConfig.js

import vector from "../assets/one.png";
import split2 from "../assets/split2.png";
import compress from "../assets/compress12.png";
import pdftoword from "../assets/pdftoword2.png";
import pdftoexcel from "../assets/pdftoexcel3.png";
import pdftopowerpoint2 from "../assets/pdftopowerpoint2.png";
import wordtopdf2 from "../assets/wordtopdf2.png";
import powerpointtopdf2 from "../assets/powerpointtopdf2.png";
import exceltopdf2 from "../assets/exceltopdf2.png";

const toolSections = [
  {
    title: "Manage PDF",
    tools: [
      { label: "Merge PDF", path: "/merge", icon: vector },
      { label: "Split PDF", path: "/split", icon: split2 },
      { label: "Compress PDF", path: "/compress", icon: compress },
    ],
  },
  {
    title: "Convert from PDF",
    tools: [
      { label: "PDF to Word", path: "/pdf-to-word", icon: pdftoword },
      { label: "PDF to Excel", path: "/pdf-to-excel", icon: pdftoexcel },
      { label: "PDF to Powerpoint", path: "/pdf-to-ppt", icon: pdftopowerpoint2 },
    ],
  },
  {
    title: "Convert to PDF",
    tools: [
      { label: "Word to PDF", path: "/word-to-pdf", icon: wordtopdf2 },
      { label: "Powerpoint to PDF", path: "/ppt-to-pdf", icon: powerpointtopdf2 },
      { label: "Excel to PDF", path: "/excel-to-pdf", icon: exceltopdf2 },
    ],
  },
];

export default toolSections;
