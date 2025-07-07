// routesConfig.js
import UploadBox from "../Components/UploadBox";


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
    },
  },
  {
    path: "/split",
    element: UploadBox,
    props: {
      title: "Split PDF",
      subtitle: "Divide a single PDF into multiple separate files",
      bgColor: "#7DF6CD",
      titleColor: "#276651",
      textColor: "#FDFEFF",
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
    },
  },
  {
    path: "/pdftoword",
    element: UploadBox,
    props: {
      title: "PDF to Word",
      subtitle: "Convert PDF files to editable Word documents",
      bgColor: "#FBCFE8",
      titleColor: "#831843",
      textColor: "#1E293B",
    },
  },
  {
    path: "/pdftoexcel",
    element: UploadBox,
    props: {
      title: "PDF to Excel",
      subtitle: "Convert PDF files to editable Word documents",
      bgColor: "#FEBCAF",
      titleColor: "#831843",
      textColor: "#FDFEFF",
    },
  },
  {
    path: "/pdftopowerpoint",
    element: UploadBox,
    props: {
      title: "PDF To PowerPoint",
      subtitle: "Convert PPT slides into a single PDF",
      bgColor: "#C2F496",
      titleColor: "#065F46",
      textColor: "#1E293B",
    },
  },
  {
    path: "/wordtopdf",
    element: UploadBox,
    props: {
      title: "Word to PDF",
      subtitle: "Convert PPT slides into a single PDF",
      bgColor: "#8AD3D8",
      titleColor: "#225053",
      textColor: "#FDFEFF",
    },
  },
  {
    path: "/PowerPointtopdf",
    element: UploadBox,
    props: {
      title: "PowerPoint to PDF",
      subtitle: "Convert PPT slides into a single PDF",
      bgColor: "#D6E7FF",
      titleColor: "#225053",
      textColor: "#6B7582",
    },
  },
  {
    path: "/Exceltopdf",
    element: UploadBox,
    props: {
      title: "Excel to PDF",
      subtitle: "Convert PPT slides into a single PDF",
      bgColor: "#F6F17F",
      titleColor: "#225053",
      textColor: "#6B7582",
    },
  },
];

export default toolRoutes;
