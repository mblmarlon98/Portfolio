import React from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

class ParticlesBackground extends React.Component {
  particlesInit = async (engine: Engine) => {
    await loadFull(engine); // Ensure compatibility with 2.12.x
  };

  render() {
    return (
<Particles
  id="tsparticles"
  init={this.particlesInit}
  options={{
    fullScreen: { enable: true },
    particles: {
      number: {
        value: 20, // Number of particles
        density: {
          enable: true,
          value_area: 800, // Area to spread the particles
        },
      },
      color: { value: "#ffffff" }, // Color of particles
      shape: { type: "circle" }, // Shape of particles
      opacity: {
        value: 0.5, // Transparency of particles
        random: true,
      },
      size: {
        value: 5, // Size of particles
        random: true,
      },
      lineLinked: { // Ensure particles connect
        enable: true,
        distance: 150, // Maximum distance for connections
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Ensures push away on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Adds particles on click
        },
      },
      modes: {
        repulse: {
          distance: 100, // Distance to grab particles
          lineLinked: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 1, // Number of particles added on click
        },
      },
    },
    detectRetina: true, // Enhance appearance on high-resolution screens
  }}
/>

    );
  }
}

export default ParticlesBackground;
