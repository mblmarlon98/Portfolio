import React, {Component} from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Tooltip from '../components/Tooltip/Tooltip';
import StickerBox from '../components/Box/StickerBox/StickerBox';
import { projectsOverviewData } from '../data/projectsOverview';
import FactsSection from '../components/Sections/FactsSection/FactsSection';

class Home extends Component {
    state = {
        i: 0,
        txt: "Hello World! I'm Marlon, nice to meet you :)",
        speed: 40,
        typingText: "",
        distanceScrolled: 0,
        changeColor: true,
        scrollPosition: 0
    };

    componentDidMount() {
        this.typeWriter();
        const scrollContainer = document.getElementById('scroll_snap_container');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', this.updateScroll);
        }
    }

    componentWillUnmount() {
        const scrollContainer = document.getElementById('scroll_snap_container');
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', this.updateScroll);
        }
    }

    typeWriter = () => {
        const {i, txt, speed, typingText} = this.state;
        if (i < txt.length) {
            this.setState({
                typingText: typingText + txt.charAt(i),
                i: i + 1
            });
            setTimeout(this.typeWriter, speed);
        }
    };

    isPartiallyInViewport = (el : any, percentVisible : any) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return (!(Math.floor(100 - (((rect.top >= 0
            ? 0
            : rect.top) / -rect.height) * 100)) < percentVisible || Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible));
    };

    updateScroll = () => {
        const scrollContainer = document.getElementById('scroll_snap_container');
        const navbar = document.getElementById('navbar');

        if (scrollContainer && navbar) {
            this.setState({scrollPosition: scrollContainer.scrollTop});

            if (scrollContainer.scrollTop > 500) {
                scrollContainer
                    .classList
                    .add('bg-dark');
                navbar
                    .classList
                    .add('bg-dark');
            } else {
                scrollContainer
                    .classList
                    .remove('bg-dark');
                navbar
                    .classList
                    .remove('bg-dark');
            }
        }

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const animatedDivs = section.querySelectorAll('div.animate__animated');
            if (this.isPartiallyInViewport(section, 80)) {
                animatedDivs.forEach(animatedDiv => {
                  if (animatedDiv.classList.contains("animate__fadeOutDown")) {
                    animatedDiv.classList.remove("animate__fadeOutDown");
                    animatedDiv.classList.add("animate__fadeInUp");
                  } else if (animatedDiv.classList.contains("animate__fadeOutDownBig")) {
                    animatedDiv.classList.remove("animate__fadeOutDownBig");
                    animatedDiv.classList.add("animate__fadeInUpBig");
                  } else if (animatedDiv.classList.contains("animate__fadeOutUp")) {
                    animatedDiv.classList.remove("animate__fadeOutUp"); 
                    animatedDiv.classList.add("animate__fadeInDown");
                  } else if (animatedDiv.classList.contains("animate__fadeOutLeft")) {
                    animatedDiv.classList.remove("animate__fadeOutLeft");
                    animatedDiv.classList.add("animate__fadeInLeft");
                  }
                })
                
                
            } else {
              animatedDivs.forEach(animatedDiv => {
                if (animatedDiv.classList.contains("animate__fadeInUp")) {
                  animatedDiv.classList.remove("animate__fadeInUp");
                  animatedDiv.classList.add("animate__fadeOutDown");
                } else if (animatedDiv.classList.contains("animate__fadeInUpBig")) {
                  animatedDiv.classList.remove("animate__fadeInUpBig");
                  animatedDiv.classList.add("animate__fadeOutDownBig");
                } else if (animatedDiv.classList.contains("animate__fadeInDown")) {
                  animatedDiv.classList.remove("animate__fadeInDown");
                  animatedDiv.classList.add("animate__fadeOutUp");
                } else if (animatedDiv.classList.contains("animate__fadeInLeft")) {
                  animatedDiv.classList.remove("animate__fadeInLeft");
                  animatedDiv.classList.add("animate__fadeOutLeft");
                }
              })
            }
        });
    };

    render() {
        return (
            <div id="scroll_snap_container" className='home'>
                <section className="flex-row justify-center items-center">
                    <div className="bg-gradient"/>
                    <div className="w-full flex flex-row justify-between">
                        <div className="w-2/3 xl:w-1/2 flex-start">
                            <div className="animate__animated">
                                <b id="typing">{this.state.typingText}</b>
                            </div>
                            <div className="animate__animated animate__fadeInLeftBig animate__delay-3s">
                                <h1>Front-End Software & Game Developer</h1>
                            </div>
                            <div className="animate__animated animate__fadeInLeftBig animate__delay-4s">
                                <p>Crafting Digital & Virtual Worlds</p>
                            </div>
                        </div>
                        <div className="hidden xl:inline w-1/4">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/images/Computer.svg`} alt=""/>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link
                                to="about-me"
                                className="btn-white font-medium rounded-lg text-sm px-5 py-2.5">About me</Link>
                        </div>
                    </div>
                </section>

                <section className="skills-overview py-16">
                    <div className='h-full w-full flex flex-col justify-evenly items-center'>
                        <div className='animate__animated animate__fadeOutDown'>
                            <h2>Bridging Web & Game Technology</h2>
                        </div>
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="web-skills text-center animate__animated animate__fadeOutDown">
                                <h3 className="text-2xl font-bold">Web Development</h3>
                                <p className="text-gray-600 mt-4">
                                    Building modern and user-friendly websites using cutting-edge technologies.
                                </p>
                                <div className="mt-6 flex justify-center gap-4">
                                    <Tooltip tooltipText="3+ years">
                                        <div
                                            className="text-center skill-icon">
                                            <svg viewBox="0 0 128 128">
                                                <path
                                                    fill="white"
                                                    d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                                            </svg>
                                            <p className="mt-1 md:mt-2">React</p>
                                        </div>
                                    </Tooltip>
                                    <Tooltip tooltipText="1< year">
                                        <div className="text-center skill-icon">
                                            <svg
                                                viewBox="0 -181.5 512 512"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                preserveAspectRatio="xMidYMid"
                                                fill="white"
                                                stroke="white"
                                                strokeWidth="12.8">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g>
                                                        <path
                                                            d="M3.33224862,115.629027 L3.33224862,58.6475756 L74.4757566,58.6475756 L74.4757566,55.315327 L3.33224862,55.315327 L3.33224862,3.33224862 L78.9742922,3.33224862 L78.9742922,0 L-3.55271368e-15,0 L-3.55271368e-15,118.961276 L79.640742,118.961276 L79.640742,115.629027 L3.33224862,115.629027 L3.33224862,115.629027 Z M143.786528,33.3224862 L114.296128,72.1431826 L85.472177,33.3224862 L81.1402538,33.3224862 L112.296778,74.642369 L78.14123,118.961276 L82.1399284,118.961276 L114.296128,77.1415554 L146.618939,118.961276 L150.78425,118.961276 L116.462089,74.642369 L147.785226,33.3224862 L143.786528,33.3224862 L143.786528,33.3224862 Z M160.780996,148.285063 L160.780996,94.9690856 L161.114221,94.9690856 C163.11358,102.744371 167.056701,108.992275 172.943703,113.712984 C178.830705,118.433693 186.32819,120.794012 195.436381,120.794012 C201.323384,120.794012 206.543854,119.599969 211.09795,117.211845 C215.652046,114.823722 219.456324,111.574812 222.510902,107.465018 C225.565478,103.355224 227.898028,98.5790488 229.508624,93.1363488 C231.119218,87.6936488 231.924504,81.973346 231.924504,75.9752684 C231.924504,69.532889 231.09145,63.5904384 229.425318,58.1477384 C227.759184,52.7050384 225.343328,47.9844 222.177676,43.9856818 C219.012024,39.9869634 215.179976,36.8768958 210.681418,34.6553856 C206.18286,32.4338754 201.101232,31.323137 195.436381,31.323137 C191.104437,31.323137 187.07801,31.9618116 183.35698,33.23918 C179.635951,34.5165484 176.331504,36.3214982 173.443541,38.654084 C170.555577,40.9866696 168.056416,43.7357472 165.945981,46.9013992 C163.835546,50.0670512 162.224976,53.5381088 161.114221,57.3146762 L160.780996,57.3146762 L160.780996,33.3224862 L157.448747,33.3224862 L157.448747,148.285063 L160.780996,148.285063 L160.780996,148.285063 Z M195.436381,117.628376 C184.995284,117.628376 176.609208,114.046245 170.277904,106.881874 C163.9466,99.717504 160.780996,89.415405 160.780996,75.9752684 C160.780996,70.421493 161.558513,65.1454854 163.11357,60.1470876 C164.668627,55.1486896 166.917872,50.7612728 169.861373,46.9847054 C172.804874,43.2081382 176.442543,40.2091444 180.774487,37.9876342 C185.106432,35.766124 189.993681,34.6553856 195.436381,34.6553856 C200.990156,34.6553856 205.849638,35.766124 210.01497,37.9876342 C214.1803,40.2091444 217.62359,43.2359066 220.34494,47.0680118 C223.06629,50.9001168 225.121156,55.2875336 226.5096,60.2303938 C227.898044,65.173254 228.592256,70.421493 228.592256,75.9752684 C228.592256,80.9736664 227.95358,85.9442208 226.676212,90.887081 C225.398844,95.8299412 223.427284,100.272895 220.76147,104.216075 C218.095658,108.159256 214.680138,111.380398 210.514806,113.879596 C206.349474,116.378795 201.323384,117.628376 195.436381,117.628376 L195.436381,117.628376 L195.436381,117.628376 Z M250.251872,118.961276 L250.251872,70.4770582 C250.251872,65.8118868 250.918314,61.2578592 252.25122,56.814839 C253.584126,52.3718186 255.638992,48.4564656 258.41588,45.0686626 C261.192768,41.6808596 264.719362,39.0150872 268.99577,37.0712658 C273.272176,35.1274444 278.353806,34.322159 284.240808,34.6553856 L284.240808,31.323137 C279.131334,31.2120614 274.660612,31.7674308 270.828506,32.9892614 C266.996402,34.211092 263.691954,35.8771996 260.915066,37.9876342 C258.138178,40.098069 255.916702,42.569462 254.25057,45.4018874 C252.584436,48.2343128 251.362624,51.2610752 250.585096,54.4822648 L250.251872,54.4822648 L250.251872,33.3224862 L246.919622,33.3224862 L246.919622,118.961276 L250.251872,118.961276 L250.251872,118.961276 Z M288.406118,76.8083306 L360.049464,76.8083306 C360.271614,70.9213286 359.688476,65.2565626 358.300032,59.8138626 C356.911588,54.3711628 354.690112,49.5394506 351.635536,45.3185812 C348.580958,41.0977118 344.637838,37.7099596 339.806052,35.155223 C334.974268,32.6004862 329.226196,31.323137 322.561666,31.323137 C317.78542,31.323137 313.120318,32.3228016 308.566222,34.3221608 C304.012126,36.32152 300.013468,39.2372084 296.570126,43.0693134 C293.126786,46.9014184 290.34994,51.5942884 288.239506,57.1480638 C286.12907,62.7018392 285.07387,69.0330484 285.07387,76.1418808 C285.07387,82.473185 285.79585,88.387867 287.23983,93.8861048 C288.683812,99.3843424 290.90529,104.160518 293.904328,108.214774 C296.903366,112.26903 300.763182,115.406866 305.483892,117.628376 C310.204602,119.849886 315.897136,120.905088 322.561666,120.794012 C332.33631,120.794012 340.555776,118.044935 347.220306,112.546697 C353.884836,107.048459 357.827958,99.3010588 359.049788,89.304263 L355.71754,89.304263 C354.273558,98.7456812 350.580352,105.826639 344.637814,110.547348 C338.695274,115.268057 331.225558,117.628376 322.228442,117.628376 C316.119288,117.628376 310.954354,116.573175 306.733486,114.46274 C302.512616,112.352305 299.069326,109.464385 296.403514,105.798894 C293.737702,102.133402 291.766142,97.8292904 290.488774,92.8864302 C289.211404,87.94357 288.517194,82.5842572 288.406118,76.8083306 L288.406118,76.8083306 L288.406118,76.8083306 Z M356.717214,73.476082 L288.406118,73.476082 C288.739344,67.4780046 289.850082,62.0909232 291.738366,57.3146762 C293.62665,52.5384294 296.098044,48.4564656 299.15262,45.0686626 C302.207196,41.6808596 305.76156,39.0983926 309.815816,37.3211846 C313.870072,35.5439764 318.22972,34.6553856 322.89489,34.6553856 C328.448666,34.6553856 333.335916,35.6828186 337.556784,37.7377156 C341.777654,39.7926126 345.304248,42.597227 348.136674,46.1516434 C350.9691,49.7060596 353.107272,53.8435602 354.551252,58.5642694 C355.995234,63.2849786 356.717214,68.255533 356.717214,73.476082 L356.717214,73.476082 L356.717214,73.476082 Z M429.193622,58.6475756 L432.52587,58.6475756 C432.52587,49.0950818 429.749024,42.1529666 424.195248,37.8210218 C418.641474,33.489077 411.088452,31.323137 401.535958,31.323137 C396.204334,31.323137 391.705844,31.98958 388.040352,33.3224862 C384.37486,34.6553922 381.375866,36.3770368 379.04328,38.4874716 C376.710694,40.5979062 375.044586,42.930457 374.044908,45.4851936 C373.045228,48.0399304 372.545396,50.4835548 372.545396,52.8161406 C372.545396,57.481312 373.37845,61.2022858 375.044582,63.9791734 C376.710714,66.7560612 379.32095,68.9220012 382.875366,70.4770582 C385.319028,71.5878134 388.095874,72.587478 391.205988,73.476082 C394.316102,74.364686 397.926002,75.3088138 402.035796,76.3084934 C405.701288,77.1970974 409.311188,78.0856882 412.865604,78.9742922 C416.42002,79.8628962 419.557856,81.0569402 422.279206,82.5564594 C425.000556,84.0559788 427.222032,85.9720026 428.943704,88.3045884 C430.665374,90.637174 431.526196,93.6917048 431.526196,97.468272 C431.526196,101.133764 430.665374,104.243831 428.943704,106.798568 C427.222032,109.353305 425.028324,111.435939 422.362512,113.046534 C419.6967,114.657129 416.725474,115.823405 413.448748,116.545395 C410.17202,117.267386 406.978646,117.628376 403.868532,117.628376 C393.760662,117.628376 386.01326,115.379131 380.626098,110.880573 C375.238936,106.382015 372.545396,99.3010572 372.545396,89.6374878 L369.213146,89.6374878 C369.213146,100.411812 372.128836,108.298055 377.9603,113.296453 C383.791764,118.294851 392.427754,120.794012 403.868532,120.794012 C407.534024,120.794012 411.22723,120.377485 414.94826,119.544419 C418.669288,118.711353 422.001504,117.350698 424.945004,115.462415 C427.888506,113.574131 430.276594,111.130506 432.10934,108.131468 C433.942086,105.132429 434.858444,101.466992 434.858444,97.1350472 C434.858444,93.0252534 434.05316,89.693038 432.442564,87.1383014 C430.83197,84.5835646 428.721566,82.4731616 426.111292,80.807029 C423.501018,79.1408964 420.55756,77.8357786 417.280834,76.8916368 C414.004106,75.947495 410.699658,75.0311358 407.367394,74.1425318 C402.702222,72.9207012 398.620258,71.8654996 395.12138,70.9768956 C391.622502,70.0882914 388.373592,69.03309 385.374552,67.8112594 C382.48659,66.5894288 380.181808,64.8400158 378.460136,62.5629678 C376.738466,60.2859198 375.877644,57.03701 375.877644,52.8161406 C375.877644,52.038612 376.099792,50.650189 376.544094,48.6508298 C376.988396,46.6514706 378.043598,44.624373 379.70973,42.569476 C381.375862,40.5145792 383.93056,38.6818608 387.373902,37.0712658 C390.817242,35.460671 395.53788,34.6553856 401.535958,34.6553856 C405.645752,34.6553856 409.394494,35.099681 412.782298,35.988285 C416.1701,36.8768892 419.085788,38.2930806 421.52945,40.236902 C423.973112,42.1807234 425.861366,44.6521164 427.194272,47.6511552 C428.527178,50.650194 429.193622,54.3156308 429.193622,58.6475756 L429.193622,58.6475756 L429.193622,58.6475756 Z M506.335178,58.6475756 L509.667426,58.6475756 C509.667426,49.0950818 506.89058,42.1529666 501.336804,37.8210218 C495.783028,33.489077 488.230008,31.323137 478.677514,31.323137 C473.34589,31.323137 468.847398,31.98958 465.181906,33.3224862 C461.516416,34.6553922 458.517422,36.3770368 456.184836,38.4874716 C453.85225,40.5979062 452.186142,42.930457 451.186462,45.4851936 C450.186784,48.0399304 449.68695,50.4835548 449.68695,52.8161406 C449.68695,57.481312 450.520004,61.2022858 452.186138,63.9791734 C453.85227,66.7560612 456.462506,68.9220012 460.016922,70.4770582 C462.460582,71.5878134 465.237428,72.587478 468.347544,73.476082 C471.457658,74.364686 475.067558,75.3088138 479.177352,76.3084934 C482.842842,77.1970974 486.452742,78.0856882 490.00716,78.9742922 C493.561576,79.8628962 496.699412,81.0569402 499.420762,82.5564594 C502.142112,84.0559788 504.363588,85.9720026 506.085258,88.3045884 C507.80693,90.637174 508.667752,93.6917048 508.667752,97.468272 C508.667752,101.133764 507.80693,104.243831 506.085258,106.798568 C504.363588,109.353305 502.16988,111.435939 499.504068,113.046534 C496.838256,114.657129 493.86703,115.823405 490.590302,116.545395 C487.313576,117.267386 484.120202,117.628376 481.010088,117.628376 C470.902216,117.628376 463.154816,115.379131 457.767654,110.880573 C452.380492,106.382015 449.68695,99.3010572 449.68695,89.6374878 L446.354702,89.6374878 C446.354702,100.411812 449.27039,108.298055 455.101854,113.296453 C460.93332,118.294851 469.56931,120.794012 481.010088,120.794012 C484.67558,120.794012 488.368784,120.377485 492.089814,119.544419 C495.810844,118.711353 499.14306,117.350698 502.08656,115.462415 C505.030062,113.574131 507.418148,111.130506 509.250894,108.131468 C511.08364,105.132429 512,101.466992 512,97.1350472 C512,93.0252534 511.194714,89.693038 509.58412,87.1383014 C507.973524,84.5835646 505.863122,82.4731616 503.252848,80.807029 C500.642572,79.1408964 497.699116,77.8357786 494.422388,76.8916368 C491.145662,75.947495 487.841214,75.0311358 484.508948,74.1425318 C479.843778,72.9207012 475.761814,71.8654996 472.262936,70.9768956 C468.764056,70.0882914 465.515146,69.03309 462.516108,67.8112594 C459.628144,66.5894288 457.323362,64.8400158 455.601692,62.5629678 C453.880022,60.2859198 453.0192,57.03701 453.0192,52.8161406 C453.0192,52.038612 453.241348,50.650189 453.68565,48.6508298 C454.129952,46.6514706 455.185152,44.624373 456.851286,42.569476 C458.517418,40.5145792 461.072116,38.6818608 464.515458,37.0712658 C467.958798,35.460671 472.679436,34.6553856 478.677514,34.6553856 C482.787308,34.6553856 486.53605,35.099681 489.923852,35.988285 C493.311656,36.8768892 496.227344,38.2930806 498.671006,40.236902 C501.114666,42.1807234 503.002922,44.6521164 504.335828,47.6511552 C505.668734,50.650194 506.335178,54.3156308 506.335178,58.6475756 L506.335178,58.6475756 L506.335178,58.6475756 Z"
                                                            fill="#ffffff"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className="mt-1 md:mt-2">Express</p>
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className='mt-6'>
                                    <Link to="" className='btn btn-white w-full mt-6'>Show all</Link>
                                </div>
                            </div>
                            <div className="game-skills text-center animate__animated animate__fadeOutDownBig">
                                <h3 className="text-2xl font-bold">Game Development</h3>
                                <p className="text-gray-600 mt-4">
                                    Designing immersive experiences and mechanics for diverse audiences.
                                </p>
                                <div className="mt-6 flex justify-center gap-4">
                                    <Tooltip tooltipText="1< year">
                                        <div className="text-center skill-icon">
                                            <svg 
                                                fill="#fff" 
                                                width="800px" 
                                                height="800px" 
                                                viewBox="0 0 24 24" 
                                                role="img" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                    <title>Stencyl icon</title>
                                                    <path d="M14.36,2.675c-0.959,0.12-1.901,0.366-2.783,0.759L9.389,1.622l0.433,2.835 c-0.758,0.567-1.41,1.25-1.935,2.038L4.982,6l1.951,2.352c-0.31,0.817-0.502,1.677-0.589,2.548L3.374,12l2.952,1.099 c0.083,0.883,0.258,1.763,0.565,2.597l-1.894,2.283l2.819-0.426c0.541,0.811,1.229,1.518,2.025,2.08l-0.47,2.751l2.247-1.806 c0.864,0.333,1.78,0.523,2.705,0.597L15.372,24l1.059-2.846c1.418-0.144,2.841-0.46,4.103-1.144 c-0.229-1.019-0.468-2.035-0.692-3.055c-2.042,1.044-4.605,1.442-6.736,0.403c-1.763-0.896-2.773-2.842-2.911-4.785 c-0.152-2.15,0.502-4.51,2.314-5.801c1.724-1.192,4.024-1.208,5.964-0.586c0.428,0.149,0.836,0.353,1.224,0.603 c0.306-1.052,0.616-2.104,0.93-3.154c-1.32-0.674-2.811-0.98-4.291-1.044L15.372,0L14.36,2.675z"/>
                                            </svg>
                                            <p className="mt-1 md:mt-2">Stencyl</p>
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className='mt-6'>
                                    <Link to="" className='btn btn-white w-full'>Show all</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="featured-projects">
                    <div className="bg-gradient"/>
                    <div className="container mx-auto h-full w-full flex flex-col justify-evenly items-center">
                        <div className='animate__animated animate__fadeOutDown'>
                            <h2 className="text-3xl font-bold text-center">Recent Projects</h2>
                            <p className="text-center text-gray-600 mt-4">Explore some of my most recent projects.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                            {projectsOverviewData.projectList && projectsOverviewData.projectList.length > 0 && projectsOverviewData.projectList.map((project, idx) => {
                                return (
                                    <div key={`project-card-${idx + 1}`} className={`${(idx + 1 ) % 2 ? "animate__animated animate__fadeOutDown" : "animate__animated animate__fadeOutDownBig"} project-card`}>
                                        <div className='type'>
                                            {"# " + project.type}
                                        </div>
                                        <div>
                                            <div className="img-wrapper shadow-lg">
                                                <img src={project.img.url} alt={project.img.alt}/>
                                            </div>
                                            <div className='content'>
                                                <div>
                                                    <div className='flex justify-between items-end'>
                                                        <h4 className="mt-4 text-xl font-bold">{project.title}</h4>
                                                        <StickerBox>{project.year}</StickerBox>
                                                    </div>
                                                    <p className="mt-2 text-gray-600">{project.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <Link to="/portfolio/web/project-1" className="text-center block btn btn-white">View Project</Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='animate__animated animate__fadeOutDownBig text-center'>
                            <Link to="/portfolio" className='btn btn-white'>View Portfolio</Link>
                        </div>
                    </div>
                </section>

                <FactsSection 
                    title="About Me" 
                    description="Some quick facts about me." 
                    facts={[
                        "Multilingual", 
                        "Team Player", 
                        "Flexible", 
                        "Communicative", 
                        "Open-Minded", 
                        "Creative", 
                        "Reliable", 
                        "Detail-Oriented"
                    ]}  
                    img=""
                />


                <section>
                    <div
                        className="animate__animated animate__fadeOutDown flex flex-col justify-center items-center w-full">
                        <div className="w-full md:w-1/2 text-center">
                            <h1 className="mb-5">Get in touch!</h1>
                            <p className="mb-5">What would you do if you had a developer at hand? Click the
                                button bellow and let me know.</p>
                            <div className="mt-5">
                                <a
                                    href="mailto:berdefymarlon@gmail.com?subject=Project%20Inquiry%20from%20mbl.com&body=Hi%20Marlon,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20potential%20project.%20I've%20had%20the%20chance%20to%20explore%20your%20work%20on%20your%20website,%20and%20I%20would%20like%20to%20discuss%20a%20specific%20project%20in%20more%20detail.%0D%0A%0D%0ACould%20you%20please%20provide%20additional%20information%20on%20your%20availability,%20rates,%20and%20the%20next%20steps%20for%20starting%20a%20collaboration?%0D%0A%0D%0AThank%20you,%0D%0A[Sender's%20Name]"
                                    className="btn-white font-medium rounded-lg text-sm px-5 py-2.5">
                                    Hire Me!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 


export default Home;