import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

const tools = [
  { name: "Merge PDF", path: "/merge" },
  { name: "Compress PDF", path: "/compress" },
  { name: "Split PDF", path: "/split" },
  { name: "PDF to WORD", path: "/pdftoword" },
  { name: "PDF to EXCEL", path: "/pdftoexcel" },
  { name: "PDF to POWERPOINT", path: "/pdftopowerpoint" },
  { name: "WORD to PDF", path: "/wordtopdf" },
  { name: "POWERPOINT to PDF", path: "/PowerPointtopdf" },
  { name: "EXCEL to PDF", path: "/Exceltopdf" },
];

const AllToolsDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="cursor-pointer inline-flex items-center space-x-1">
        <span className="font-medium text-[14px] leading-[21px] tracking-[0px] font-inter">
  All Tools
</span>

          <ChevronDownIcon />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="mt-2 grid grid-cols-2 gap-2 rounded-xl bg-white p-4 shadow-xl border border-gray-200 w-72"
          sideOffset={5}
        >
          {tools.map((tool, index) => (
            <DropdownMenu.Item
              key={index}
              asChild
              className="rounded-md text-sm text-gray-800 hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer"
            >
              <Link to={tool.path} className="block px-3 py-1 w-full">
                {tool.name}
              </Link>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default AllToolsDropdown;

