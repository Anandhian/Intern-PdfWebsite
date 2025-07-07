// src/utils/routeConfig.js

import UploadBox from "../Components/UploadBox";

// Banner images
import mergehome from "../assets/mergehome.png";
import splithome from "../assets/splithome.png";
import compresshome from "../assets/compresshome.png";
import pdftowordhome from "../assets/pdftowordhome.png";
import pdftoexcelhome from "../assets/pdftoexcelhome.png";
import wordtopdfhome from "../assets/wordtopdfhome.png";
import powerpointtopdfhome from "../assets/powerpointtopdfhome.png";
import exceltopdfhome from "../assets/exceltopdfhome.png";

const toolRoutes = [
  {
    path: "/merge",
    element: UploadBox,
    props: {
      title: "Merge PDF",
      subtitle: "Combine multiple PDF files into a single document",
      bgColor: "#DBEAFE",
      titleColor: "#1E293B",
      textColor: "#FFFFFF",
      bannerImage: mergehome,
      onSubmitRedirect: "/merge/preview",
    },
  },
  {
    path: "/split",
    element: UploadBox,
    props: {
      title: "Split PDF",
      subtitle: "Split a PDF into multiple files by pages or ranges",
      bgColor: "#7DF6CD",
      titleColor: "#276651",
      textColor: "#FDFEFF",
      bannerImage: splithome,
    },
  },
 {
  path: "/compress",
  element: UploadBox,
  props: {
    title: "Compress PDF",
    subtitle: "Reduce the file size of your PDF document",
    bgColor: "#FDE68A",
    titleColor: "#92400E",
    textColor: "#1E293B",
    bannerImage: compresshome,
    onSubmitRedirect: "/compress/preview", // ✅ Route to next step (second page)
  },
},

  {
    path: "/pdftoword",
    element: UploadBox,
    props: {
      title: "PDF to Word",
      subtitle: "Convert PDF files into editable Word documents",
      bgColor: "#FBCFE8",
      titleColor: "#831843",
      textColor: "#1E293B",
      bannerImage: pdftowordhome,
    },
  },
  {
    path: "/pdftoexcel",
    element: UploadBox,
    props: {
      title: "PDF to Excel",
      subtitle: "Convert tables in PDF to editable Excel spreadsheets",
      bgColor: "#FEBCAF",
      titleColor: "#831843",
      textColor: "#FDFEFF",
      bannerImage: pdftoexcelhome,
    },
  },
  {
    path: "/pdftopowerpoint",
    element: UploadBox,
    props: {
      title: "PDF to PowerPoint",
      subtitle: "Turn your PDFs into editable PowerPoint slides",
      bgColor: "#C2F496",
      titleColor: "#065F46",
      textColor: "#1E293B",
      bannerImage: powerpointtopdfhome,
    },
  },
  {
    path: "/wordtopdf",
    element: UploadBox,
    props: {
      title: "Word to PDF",
      subtitle: "Convert Word documents to PDF format",
      bgColor: "#8AD3D8",
      titleColor: "#225053",
      textColor: "#FDFEFF",
      bannerImage: wordtopdfhome,
    },
  },
  {
    path: "/powerpointtopdf",
    element: UploadBox,
    props: {
      title: "PowerPoint to PDF",
      subtitle: "Convert PowerPoint presentations to shareable PDFs",
      bgColor: "#D6E7FF",
      titleColor: "#225053",
      textColor: "#6B7582",
      bannerImage: powerpointtopdfhome,
    },
  },
  {
    path: "/exceltopdf",
    element: UploadBox,
    props: {
      title: "Excel to PDF",
      subtitle: "Export Excel files to PDF format with layout preserved",
      bgColor: "#F6F17F",
      titleColor: "#225053",
      textColor: "#6B7582",
      bannerImage: exceltopdfhome,
    },
  },
];

export default toolRoutes;




