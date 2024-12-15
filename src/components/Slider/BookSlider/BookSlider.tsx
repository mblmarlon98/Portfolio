import React, { Component } from "react";
import "./BookSlider.scss";

interface SlideContent {
  slideTitle?: string;
  description?: string;
  Icon?: {
    url: string;
  };
}

interface Slide {
  slideContent: SlideContent[];
  reference?: {
    websiteUrl: string;
    name: string;
  };
  backsideImg?: {
    url: string;
  };
}

interface BookSliderState {
  slideCount: number;
  slider: Slide[];
}

class BookSlider extends Component<{}, BookSliderState> {
  state: BookSliderState = {
    slideCount: 0,
    slider: [
      {
        slideContent: [
            {
                slideTitle: 'Lorberg',
                Icon: { url: `${process.env.PUBLIC_URL}/assets/images/images/Lorberg_logo.png` },
                description: "Immerse yourself in the green world curated by Lorberg, the largest GaLaBauer (landscape gardener) in Europe.",
            }, {
                description: "As part of the Ventzke Media team, I contributed to the development of Lorberg's web app, a masterpiece crafted with React.",
            },
            // {
            //     title: 'Tech Highlights:',
            //     description: "Crafted with React for a seamless and fast UI.",
            // },
        ],
        reference: {
            websiteUrl: "https://www.lorberg.com/en/",
            name: "lorberg.com"
        },
        backsideImg: { url: `${process.env.PUBLIC_URL}/assets/images/images/partyPass.jpg`},
    
    },
    {
        slideContent: [
            {
                Icon: { url: `${process.env.PUBLIC_URL}/assets/Logo.png` },
                slideTitle: 'Mina',
                description: 'Meet Mina, the pioneering digital psychotherapist and coach rooted in cognitive behavioral therapy. Offering support for exam fears, performance pressure, and learning stress, Mina is currently undergoing testing in a closed beta phase with students.',
            }, {
                description: "Most of my part of Mina's development was translating the Design for the Landingpage into responsive code. This process took place during my time at Ventzke Media where I was part of the developer team.",
            }, 
            // {
            //     title: 'Tech Highlights:',
            //     description: "The Website is crafted with React for a seamless and fast UI while the application is running on React Native.",
            // },
        ],
        reference: {
            websiteUrl: "https://www.minabot.ai/",
            name: "minabot.ai"
        },
        backsideImg: { url: `${process.env.PUBLIC_URL}/assets/images/images/Lorberg.png`},
    },
    {
        slideContent: [
            {
                Icon: { url: `${process.env.PUBLIC_URL}/assets/images/images/coopz-logo.svg` },
                slideTitle: 'Coopz',
                description: "Embark on a new era of social connections with Coopz, a groundbreaking product from Ventzke Media's Innovation Lab. Unlike traditional dating apps, Coopz revolutionizes socializing by connecting people globally based on shared interests and locations.",
            },
            {
                description: "Again, my part in this exciting project at Ventzke Media was the development of the landing page. One of my personal highlights was the bookslider, which you are looking at right now. Until today, I refer to it as one of my greatest animations. Feel free to play around with it and check out the original at Coopz.",
            },
        ],
        reference: {
            websiteUrl: "https://www.coopz.io/en/",
            name: "coopz.io"
        },
        backsideImg: { url: `${process.env.PUBLIC_URL}/assets/images/images/Mina-screens.png`},
    },
    {
        slideContent: [
            {
                Icon: { url: `${process.env.PUBLIC_URL}/assets/Logo.png` },
                slideTitle: 'ABEL FARKASS',
                description: 'Explore the world through the lens of Abel Farkass, a talented photographer whose captivating portfolio has been enchanting viewers for the past two years.',
            }, {
                description: 'Besides being the only website on the list that was built using a website builder, this project was also the first one I worked on as a freelancer. The focus for this website was to build an affordable and reliable site with a CMS accessible for the client.',
            }, 
            // {
            //     title: "Tech Highlights:",
            //     description: "Crafted using the GoDaddy Website Builder."
            // },
        ],
        reference: {
            websiteUrl: "https://abelfarkass.com/",
            name: "abelfarkass.com"
        },
        backsideImg: { url: `${process.env.PUBLIC_URL}/assets/images/images/coopz-screens.png`},
    },
    {
        slideContent: [
            {
                slideTitle: "Franke",
                description: "With a rich history of innovation, the Franke Group remains at the forefront of setting industry standards. The company is dedicated to tailoring its offerings to meet the ever-evolving needs of chefs and businesses worldwide.",
            }, {
                description: "While at Ventzke Media, my main project was the Franke Group's Foodservice System division's webshop. Engaged with a global development team, I concentrated on translating data into a user-friendly interface, enhancing the overall user experience.",
            }
            // , {
            //     title: 'Tech Highlights:',
            //     description: "Crafted with React for a seamless UI and styled with Tailwind CSS for a modern look.",
            // },
        ],
        reference: {
            websiteUrl: "https://www.franke.com/us/en/home.html",
            name: "franke.com"
        },
        backsideImg: { url: `${process.env.PUBLIC_URL}/assets/images/images/Abel-screen-2.png`},
    },
    {
        slideContent: [
            {
                slideTitle: "Partypass: Budapest",
                Icon: { url: `${process.env.PUBLIC_URL}/assets/images/images/PartyPass-Logo.png` },
                description: "Discover Budapest's hottest clubs with PartyPass, the trendsetting app that's redefining nightlife exploration. Launched in 2023, Partypass has become a go-to travel app on the Apple Store.",
            }, {
                description: "With an in-depth knowledge of Budapest's nightlife, PartyPass was a project founded by our team of three friends. Each of us had our own responsibilities, and mine was the development of the website. If you're planning to travel to Budapest someday, I highly recommend downloading PartyPass.",
            }
            // , {
            //     title: 'Tech Highlights:',
            //     description: "Crafted with React for a seamless UI and styled with Tailwind CSS for a modern look.",
            // },
        ],
        reference: {
            websiteUrl: "https://partypass.co/",
            name: "partypass.co"
        },
        backsideImg: { url: `${process.env.PUBLIC_URL}/assets/images/images/franke-logo.png`},
    } 
    ]
  };

  handleClick = (type: string) => {
    if (type === "next") {
      this.setState((prevState) => ({
        slideCount:
          prevState.slideCount < prevState.slider.length - 1
            ? prevState.slideCount + 1
            : 0,
      }));
    } else if (type === "prev") {
      this.setState((prevState) => ({
        slideCount:
          prevState.slideCount > 0
            ? prevState.slideCount - 1
            : prevState.slider.length - 1,
      }));
    }
  };

  resolveClassNames = (slideNo: number) => {
    const { slideCount, slider } = this.state;

    if (slideCount === slideNo) {
      return "page active";
    } else if (slideCount + 1 === slideNo && slideCount + 1 <= slider.length) {
      return "page active-mute";
    } else if (slideCount + 1 === slider.length && slideNo === 0) {
      return "page active-mute";
    } else if (slideCount - 1 === slideNo && slideCount <= slider.length) {
      return "page flipped active";
    } else if (
      (slideCount === 1 && slideNo === 0) ||
      (slideCount === 0 && slideNo === slider.length - 1)
    ) {
      return "page flipped active";
    } else if (slideCount - 2 === slideNo && slideCount <= slider.length) {
      return "page flipped active-mute";
    } else if (
      (slideCount === 2 && slideNo === 0) ||
      (slideCount === 1 && slideNo === slider.length - 1) ||
      (slideCount === 0 && slideNo === slider.length - 2)
    ) {
      return "page flipped active-mute";
    } else {
      return "page";
    }
  };


  makeDescriptionLink(description: string): string {
    let linkedDescription = description;
  
    const ventzkeMediaLink = '<a href="https://www.ventzke-media.de/en/" target="_blank" class="border-b hyperlink">Ventzke Media</a>';
    linkedDescription = linkedDescription.replace('Ventzke Media', ventzkeMediaLink);
  
    const coopzLink = '<a href="https://www.coopz.io/en/" target="_blank" class="border-b hyperlink">Coopz</a>';
    linkedDescription = linkedDescription.replace('Coopz', coopzLink);
  
    const lorbergLink = '<a href="https://www.lorberg.com/en/" target="_blank" class="border-b hyperlink">Lorberg</a>';
    linkedDescription = linkedDescription.replace('Lorberg', lorbergLink);
  
    const minaLink = '<a href="https://www.minabot.ai/" target="_blank" class="border-b hyperlink">Mina</a>';
    linkedDescription = linkedDescription.replace('Mina', minaLink);
  
    const partyPassLink = '<a href="https://partypass.co/" target="_blank" class="border-b hyperlink">PartyPass</a>';
    linkedDescription = linkedDescription.replace('PartyPass', partyPassLink);
  
    const abelFarkassLink = '<a href="https://www.abelfarkass.com" target="_blank" class="border-b hyperlink">Abel Farkass</a>';
    linkedDescription = linkedDescription.replace('Abel Farkass', abelFarkassLink);
  
    const frankeGroupLink = '<a href="https://www.franke.com/us/en/home.html" target="_blank" class="border-b hyperlink">Franke Group</a>';
    linkedDescription = linkedDescription.replace('Franke Group ', frankeGroupLink + ' ');
  
    const frankeGroupFoodServiceLink = '<a href="https://www.franke.com/us/en/foodservice-systems.html" target="_blank" class="border-b hyperlink">Franke Group\'s Foodservice System</a>';
    linkedDescription = linkedDescription.replace("Franke Group's Foodservice System", frankeGroupFoodServiceLink);
  
    return linkedDescription;
  }
  

  render() {
    const { slider } = this.state;

    return (
      <div className="partial-book-slider md:block w-full">
        <div className="container-fluid h-full">
          <div className="row h-full">
            <div className="col-12 md:col-10 md:offset-1 h-full">
              <div className="partial-book light-shadow">
                {slider.map((slide, index) => (
                  <div
                    key={`slide-${index}`}
                    id={`slide-${index}`}
                    className={this.resolveClassNames(index)}
                  >
                    <div className="content-wrap">
                      <div className="content h-full">
                        <div className="container-fluid flex flex-col justify-between h-full">
                            <div>
                                {slide.slideContent.map((obj, i) => (
                                    <div
                                    key={`slide_${index}_content_${i}`}
                                    className="col-12 md:col-10 mb-3 md:mb-5"
                                    >
                                    {obj.slideTitle && (
                                        <div className="border-b mb-2">
                                        <h4 className="uppercase md:text-2xl xl:text-4xl">
                                            {obj.slideTitle}
                                        </h4>
                                        </div>
                                    )}
                                    <div
                                    className="description"
                                    dangerouslySetInnerHTML={{
                                        __html: this.makeDescriptionLink(obj.description || ""),
                                    }}
                                    ></div>
                                    </div>
                                ))}
                            </div>
                          {slide.reference && (
                            <div className="w-full text-right">
                                <a href={slide.reference.websiteUrl} target="_blank">{slide.reference.name}</a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {slide.backsideImg && (
                      <div className={`img-wrap img-wrap-${index + 1}`}>
                        <div className="h-full w-full flex items-center justify-center">
                          <img
                            src={slide.backsideImg.url}
                            alt={`Slide ${index}`}
                            className="max-h-[100%] max-w-[100%]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="text-center my-4 slider-controls">
                <button onClick={() => this.handleClick("prev")}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/images/arrow-left.png`}
                    alt="previous"
                  />
                </button>
                <button onClick={() => this.handleClick("next")}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/images/arrow-right.png`}
                    alt="next"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSlider;
