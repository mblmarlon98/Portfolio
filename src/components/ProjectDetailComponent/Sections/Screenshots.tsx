import React, {Component} from "react";
import "./Screenshots.scss";

type Screenshot = {
    url: string;
    alt: string;
};

type ScreenshotSectionProps = {
    screenshots: Screenshot[];
};

type ScreenshotSectionState = {
    activeIndex: number;
    canScrollUp: boolean;
    canScrollDown: boolean;
};

class ScreenshotSection extends Component < ScreenshotSectionProps,
ScreenshotSectionState > {
    scrollContainerRef = React.createRef < HTMLDivElement > ();

    constructor(props : ScreenshotSectionProps) {
        super(props);
        this.state = {
            activeIndex: 0,
            canScrollUp: false,
            canScrollDown: false
        };
    }

    componentDidMount() {
        // Perform an initial check after the component mounts
        this.checkScroll();

        // Re-check scroll state on window resize
        window.addEventListener("resize", this.checkScroll);

        // Ensure scroll indicators update after images are rendered
        setTimeout(() => {
            this.checkScroll();
        }, 0);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkScroll);
    }

    checkScroll = () => {
        const scrollContainer = this.scrollContainerRef.current;
        if (scrollContainer) {
            const canScrollUp = scrollContainer.scrollTop > 0;
            const canScrollDown = scrollContainer.scrollTop + scrollContainer.clientHeight < scrollContainer.scrollHeight;

            this.setState({canScrollUp, canScrollDown});
        }
    };

    handleImageClick = (index : number) => {
        this.setState({activeIndex: index});
    };

    handleScroll = () => {
        this.checkScroll();
    };

    render() {
        const {screenshots} = this.props;
        const {activeIndex, canScrollUp, canScrollDown} = this.state;

        return (
            <section className="mb-6">
                <h2 className="text-3xl border-b mb-6">Screenshots</h2>

                <div className="screenshot-section">
                    {/* Scrollable List */}
                    <div
                        className="scrollable-list"
                        ref={this.scrollContainerRef}
                        onScroll={this.handleScroll}>
                        <div
                            className={`scroll-indicator top ${canScrollUp
                            ? "visible"
                            : ""}`}
                            aria-hidden="true"></div>
                        <div className="image-list" role="list">
                            {screenshots.map((screenshot, index) => (
                                <div key={index} className={`image-item ${activeIndex === index
                                    ? "active"
                                    : ""}`} onClick={() => this.handleImageClick(index)} role="listitem" aria-selected={activeIndex === index} tabIndex={0} // Makes items focusable
>
                                    <img src={screenshot.url} alt={screenshot.alt}/>
                                </div>
                            ))}
                        </div>
                        <div
                            className={`scroll-indicator bottom ${canScrollDown
                            ? "visible"
                            : ""}`}
                            aria-hidden="true"></div>
                    </div>

                    {/* Active Image Display */}
                    <div className="active-image-display">
                        <h2>{screenshots[activeIndex]
                                ?.alt}</h2>
                        <div className="image-container">
                            <img
                                src={screenshots[activeIndex]
                                ?.url}
                                alt={screenshots[activeIndex]
                                ?.alt}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ScreenshotSection;
