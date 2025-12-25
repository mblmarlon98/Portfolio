import React, { Component, createRef } from "react";
import "./Dropdown.scss";

type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

type DropdownState = {
  isOpen: boolean;
};

class Dropdown extends Component<DropdownProps, DropdownState> {
  contentRef = createRef<HTMLDivElement>();

  constructor(props: DropdownProps) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleDropdown = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen }, () => {
      if (!isOpen && this.contentRef.current) {
        const navbarHeight = 150;
        const offsetTop = this.contentRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="mb-4 dropdown overflow-hidden">
        <button
          onClick={this.toggleDropdown}
          className={`w-full text-left dropdown-title transition uppercase tracking-widest border-b flex justify-between items-center ${isOpen ? "" : ""}`}
        >
          <p data-text={title}>{title}</p>
          <img
            className={`h-[10px] md:h-[15px] ${isOpen ? "" : "rotate-90"}`}
            src={`${process.env.PUBLIC_URL}/assets/images/icons/triangle.png`}
            alt=""
          />
        </button>
        <div
          ref={this.contentRef}
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "" : "max-h-0"}`}
          style={{ maxHeight: isOpen ? this.contentRef.current?.scrollHeight : 0 }}
        >
          <div className="dropdown-content">{children}</div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
