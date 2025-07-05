import merge from "../assets/merge.svg";
import split from "../assets/split.svg";
import compress from "../assets/compress.svg";
import pdftoword from "../assets/pdftoword.svg";
import pdftoexcel from "../assets/pdftoexcel.svg";
import pdftopowerpoint from "../assets/pdftopowerpoint.svg";
import wordtopdf from "../assets/wordtopdf.svg";
import powerpointtopdf from "../assets/powerpointtopdf.svg";
import exceltopdf from "../assets/exceltopdf.svg";

export const tools = [
  {
    id: 1,
    title: "Merge PDF",
    description: "Transform PDF into Word, Excel, JPG, or other formats",
    icon: merge,
    link: "/merge",
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Split PDF",
    description: "Divide a single PDF into multiple separate files",
    icon: split,
    link: "/split",
    color: "bg-green-200",
  },
  {
    id: 3,
    title: "Compress PDF",
    description: "Reduce the file size of your PDF documents.",
    icon: compress,
    link: "/compress",
    color: "bg-yellow-200",
  },
  {
    id: 4,
    title: "PDF to Word",
    description: "Transform PDF file into editable word document",
    icon: pdftoword,
    link: "/pdftoword",
    color: "bg-purple-200",
  },
  {
    id: 5,
    title: "PDF to Excel",
    description: "Transform PDF file into editable excel file",
    icon: pdftoexcel,
    link: "/pdftoexcel",
    color: "bg-red-200",
  },
  {
    id: 6,
    title: "PDF to Powerpoint",
    description: "Transform PDF file into editable PPT file",
    icon: pdftopowerpoint,
    link: "/pdftopowerpoint",
    color: "bg-lime-200",
  },
  {
    id: 7,
    title: "Word to PDF",
    description: "Transform word document to PDF file",
    icon: wordtopdf,
    link: "/wordtopdf",
    color: "bg-cyan-200",
  },
  {
    id: 8,
    title: "Powerpoint to PDF",
    description: "Transform PPT file to PDF file",
    icon: powerpointtopdf,
    link: "/PowerPointtopdf",
    color: "bg-blue-200",
  },
  {
    id: 9,
    title: "Excel to PDF",
    description: "Transform excel document to PDF",
    icon: exceltopdf,
    link: "/Exceltopdf",
    color: "bg-yellow-300",
  },
  {
    id: 10,
    title: "More tools coming soon",
    description: "",
    icon: "",
    link: "#",
    color: "bg-pink-100",
  },
];
