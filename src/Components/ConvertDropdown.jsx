import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

const convertFrom = [
  { name: "PDF to Word", path: "/pdftoword" },
  { name: "PDF to Excel", path: "/pdftoexcel" },
  { name: "PDF to PowerPoint", path: "/pdftopowerpoint" },
];

const convertTo = [
  { name: "Word to PDF", path: "/wordtopdf" },
  { name: "PowerPoint to PDF", path: "/powerpointtopdf" },
  { name: "Excel to PDF", path: "/exceltopdf" },
];

const ConvertDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="cursor-pointer inline-flex items-center space-x-1">
          <span className="font-medium text-[14px]">Convert PDF</span>
          <ChevronDownIcon />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="mt-2 rounded-xl bg-white p-4 shadow-xl border border-gray-200 w-64"
          sideOffset={5}
        >
          {/* Convert From PDF Section */}
          <div className="mb-3">
            <p className="text-xs text-gray-500 font-semibold mb-1">
              Convert from PDF
            </p>
            {convertFrom.map((tool, index) => (
              <DropdownMenu.Item
                key={index}
                asChild
                className="block text-sm text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-1 cursor-pointer"
              >
                <Link to={tool.path}>{tool.name}</Link>
              </DropdownMenu.Item>
            ))}
          </div>

          {/* Convert To PDF Section */}
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1">
              Convert to PDF
            </p>
            {convertTo.map((tool, index) => (
              <DropdownMenu.Item
                key={index}
                asChild
                className="block text-sm text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-1 cursor-pointer"
              >
                <Link to={tool.path}>{tool.name}</Link>
              </DropdownMenu.Item>
            ))}
          </div>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ConvertDropdown;


