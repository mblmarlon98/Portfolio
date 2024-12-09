import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss"; // Import the SASS file for the overlay

class Banner extends React.Component {
  render() {
    return (
      <div className="flex h-screen w-full">
        {/* Navigation Section */}
        <div className="relative flex flex-col justify-center items-start bg-black text-white p-8 w-1/3">
          <ul className="space-y-6 text-lg font-bold sm:text-xl z-10">
            <li>
              <Link
                to="/"
                className="hover:text-green-500 transition-transform transform hover:scale-110"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-green-500 transition-transform transform hover:scale-110"
              >
                Portfolio
              </Link>
              <ul>
                <li className="mt-6">
                  <Link
                    to="/portfolio/web"
                    className="hover:text-green-500 transition-transform transform hover:scale-110"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mt-6">
                  <Link
                    to="/portfolio/game"
                    className="hover:text-green-500 transition-transform transform hover:scale-110"
                  >
                    Game Development
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 transition-transform transform hover:scale-110"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Background and Hero Section */}
        <div className="relative flex-1">
          {/* Gradient Overlay */}
          <div className="gradient-overlay"></div>
          <div className="absolute inset-0 flex">
            {/* Left Diagonal Image */}
            <div
              className="w-1/2 h-full bg-cover bg-center"
              style={{
                clipPath: "polygon(0 0, 70% 0, 50% 100%, 0% 100%)",
                backgroundImage: "url('https://via.placeholder.com/800x800/FF5733')",
              }}
            ></div>
            {/* Right Diagonal Image */}
            <div
              className="w-1/2 h-full bg-cover bg-center"
              style={{
                clipPath: "polygon(70% 0, 100% 0, 100% 100%, 50% 100%)",
                backgroundImage: "url('https://via.placeholder.com/800x800/3498DB')",
              }}
            ></div>
          </div>

          {/* Hero Text */}
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-16 text-white z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg sm:text-2xl text-green-500">Fullstack Web & Game Developer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
