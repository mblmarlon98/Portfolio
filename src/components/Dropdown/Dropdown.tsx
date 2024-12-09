import React, { useState, useRef } from "react";
import "./Dropdown.scss";

type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);

    // Scroll into view when opened
    if (!isOpen && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-4 border border-cyan-400 rounded-lg overflow-hidden shadow-[0_0_15px_cyan]">
        <button
        onClick={toggleDropdown}
        className={`w-full text-left px-4 py-2 bg-gray-900 hover:bg-cyan-600 transition text-cyan-400 font-bold uppercase tracking-widest shadow-[0_0_10px_cyan] ${
            isOpen ? "bg-cyan-700 text-white shadow-[0_0_20px_cyan]" : ""
        }`}
        >
        <span className="glitch" data-text={title}>
            {title}
        </span>
        </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-gray-800 text-cyan-300 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
