// utils/cardData.js (or wherever you define this)

import merge from "../assets/merge.svg";
import split from "../assets/split.svg";
import compress from "../assets/compress.svg";
import pdftoword from "../assets/pdftoword.svg";
import pdftoexcel from "../assets/pdftoexcel.svg";
import pdftopowerpoint from "../assets/pdftopowerpoint.svg";
import wordtopdf from "../assets/wordtopdf.svg";
import powerpointtopdf from "../assets/powerpointtopdf.svg";
import exceltopdf from "../assets/exceltopdf.svg";

// Corner images
import mergehome from "../assets/mergehome.png";
import splithome from "../assets/splithome.png";
import compresshome from "../assets/compresshome.png";
import pdftowordhome from "../assets/pdftowordhome.png";
import pdftoexcelhome from "../assets/pdftoexcelhome.png";
import wordtopdfhome from "../assets/wordtopdfhome.png";
import powerpointtopdfhome from "../assets/powerpointtopdfhome.png";
import exceltopdfhome from "../assets/exceltopdfhome.png";

export const tools = [
  {
    id: 1,
    title: "Merge PDF",
    description: "Transform PDF into Word, Excel, JPG, or other formats",
    icon: merge,
    cornerImage: mergehome,
    link: "/merge",
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Split PDF",
    description: "Divide a single PDF into multiple separate files",
    icon: split,
    cornerImage: splithome,
    link: "/split",
    color: "bg-green-200",
  },
  {
    id: 3,
    title: "Compress PDF",
    description: "Reduce the file size of your PDF documents.",
    icon: compress,
    cornerImage: compresshome,
    link: "/compress",
    color: "bg-yellow-200",
  },
  {
    id: 4,
    title: "PDF to Word",
    description: "Transform PDF file into editable word document",
    icon: pdftoword,
    cornerImage: pdftowordhome,
    link: "/pdftoword",
    color: "bg-purple-200",
  },
  {
    id: 5,
    title: "PDF to Excel",
    description: "Transform PDF file into editable excel file",
    icon: pdftoexcel,
    cornerImage: pdftoexcelhome,
    link: "/pdftoexcel",
    color: "bg-red-200",
  },
  {
    id: 6,
    title: "PDF to Powerpoint",
    description: "Transform PDF file into editable PPT file",
    icon: pdftopowerpoint,
    cornerImage: powerpointtopdfhome,
    link: "/pdftopowerpoint",
    color: "bg-lime-200",
  },
  {
    id: 7,
    title: "Word to PDF",
    description: "Transform word document to PDF file",
    icon: wordtopdf,
    cornerImage: wordtopdfhome,
    link: "/wordtopdf",
    color: "bg-cyan-200",
  },
  {
    id: 8,
    title: "Powerpoint to PDF",
    description: "Transform PPT file to PDF file",
    icon: powerpointtopdf,
    cornerImage: powerpointtopdfhome,
    link: "/PowerPointtopdf",
    color: "bg-blue-200",
  },
  {
    id: 9,
    title: "Excel to PDF",
    description: "Transform excel document to PDF",
    icon: exceltopdf,
    cornerImage: exceltopdfhome,
    link: "/Exceltopdf",
    color: "bg-yellow-300",
  },
  {
    id: 10,
    title: "More tools coming soon",
    description: "",
    icon: "",
    cornerImage: "",
    link: "#",
    color: "bg-pink-100",
  },
];
