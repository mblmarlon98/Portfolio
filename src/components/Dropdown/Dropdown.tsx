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
      const navbarHeight = 150; // Adjust this value to match your navbar's height
      const offsetTop = contentRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-4 dropdown overflow-hidden">
      <button
        onClick={toggleDropdown}
        className={`w-full text-left dropdown-title transition uppercase tracking-widest border-b flex justify-between items-center ${
          isOpen ? "" : ""
        }`}
      >
        <p data-text={title}>{title}</p>
        <img
          className={`h-[15px] ${isOpen ? "" : "rotate-90"}`}
          src={`${process.env.PUBLIC_URL}/assets/images/icons/triangle.png`}
          alt=""
        />
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="dropdown-content">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
