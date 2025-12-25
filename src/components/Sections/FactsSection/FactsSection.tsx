import React, { Component, createRef } from 'react';
import './FactsSection.scss'; 
import { removeWhitespace } from '../../../utils/removeWhitespace';
import { Link } from 'react-router-dom';
import StickerBox from '../../Box/StickerBox/StickerBox';

// Represents a box element with text and position coordinates
class Box {
  constructor(public text: string, public classNames?: string) {}
}

interface FactsSectionProps {
    title?: string;
    description?: string;
    img?: string;
    facts: string[];
}

type FactsSectionState = {
  linePositions: { x1: number; y1: number; x2: number; y2: number; }[];
};

class FactsSection extends Component<FactsSectionProps, FactsSectionState> {
    lineRefs = createRef<(SVGLineElement | null)[]>();

    constructor(props: FactsSectionProps) {
        super(props);
        this.state = { linePositions: [] };
    }

    componentDidMount() {
        this.calculateLinePositions();
        window.addEventListener('resize', this.calculateLinePositions);
        setTimeout(this.calculateLinePositions, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calculateLinePositions);
    }

    calculateLinePositions = () => {
        const boxElements = document.querySelectorAll('.box');
        const imageElement = document.querySelector('.image-container');
        if (boxElements.length === 0 || !imageElement) return;

        const imageRect = imageElement.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;

        const newLinePositions = Array.from(boxElements).map((boxElement) => {
            const boxRect = boxElement.getBoundingClientRect();
            const boxCenterX: number = boxRect.left + boxRect.width / 2;
            const boxCenterY = boxRect.top + boxRect.height / 2;
            return {
                x1: boxCenterX - imageRect.left,
                y1: boxCenterY - imageRect.top,
                x2: imageCenterX - imageRect.left,
                y2: imageCenterY - imageRect.top,
            };
        });
        this.setState({ linePositions: newLinePositions });
    };

    render() {
        const props = this.props;
        // Box data for each row
        const boxesRow1: Box[] = [
            new Box(props.facts[0], 't-l'),
            new Box(props.facts[1],'t-x-center'),
            new Box(props.facts[2], 't-r'),
        ];
        const boxesRow2: Box[] = [
            new Box(props.facts[3],'l-y-center'),
            new Box(props.facts[4],'r-y-center'),
        ];
        const boxesRow3: Box[] = [
            new Box(props.facts[5], 'b-l'),
            new Box(props.facts[6],'b-x-center'),
            new Box(props.facts[7], 'b-r'),
        ];
        const { linePositions } = this.state;
        return (
        <section className="flex flex-col items-center justify-center facts-section">
            
            {props.title && props.description && (
                <div className='flex flex-row justify-center xl:pb-6 animate__animated animate__fadeOutDown'>
                    <div data-aos="fade-up" data-aos-once="true" className='text-center'>
                        <h3>{props.title}</h3>
                        <p className='hidden text-center text-gray-600 md:block xl:mt-4'>{props.description}</p>
                    </div>
                </div>
            )}

            <div className='md:h-[80vh] xl:h-[60vh] flex flex-col items-center justify-between w-full lg:w-1/2 animate__animated animate__fadeOutDown'>
                {/* Box row 1 */}
                <div data-aos="fade-up" data-aos-once='true' className="w-full hidden md:flex justify-center items-center z-[3] relative">
                    {boxesRow1.map((box, index) => renderBox(box, index))}
                </div>

                {/* Box row 2 */}
                <div data-aos="fade-up" data-aos-once='true' className="w-full flex justify-center md:justify-between items-center md:mt-4">
                    {boxesRow2[0] && renderBox(boxesRow2[0], 0)}
                    <div className="image-container relative">
                    <div data-aos="fade-up" data-aos-once='true' className="h-[100px] w-[100px] xl:h-[200px] xl:w-[200px] relative z-[3] preview-img">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/images/profile-thumbnail.jpg`} alt="" />
                    </div>
                    <svg className="line hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none">
                        {linePositions.map((linePosition, index) => (
                        <line
                            key={index}
                            x1={linePosition.x1}
                            y1={linePosition.y1}
                            x2={linePosition.x2}
                            y2={linePosition.y2}
                            stroke="#606060"
                            strokeWidth="1"
                            strokeDasharray="3 3"
                        />
                        ))}
                    </svg>
                    </div>
                    {boxesRow2[1] && renderBox(boxesRow2[1], 1)}
                </div>

                {/* Box row 3 */}
                <div data-aos="fade-up" data-aos-once='true' className="w-full hidden md:flex justify-center items-center mt-4 relative">
                    {boxesRow3.map((box, index) => renderBox(box, index))}
                </div>
            </div>

            {/*** START MOBILE ***/}
            <div className='flex flex-wrap justify-between items-center md:hidden mt-4'>
                {props.facts && props.facts.length > 0 && props.facts.map((fact: string) => {
                    return (
                        <div key={`${removeWhitespace(fact)}`} data-aos="fade-up" data-aos-once="true" data-aos-offset="-100" className='m-2'>
                            <StickerBox>
                                <small className='mx-3'>{fact}</small>
                            </StickerBox>
                        </div>
                    );
                })}
            </div>
            <div className='animate__animated animate__fadeOutDownBig mt-6'>
                <Link to="/about-me" className='btn btn-white mt-6'> Learn More</Link>
            </div>
            {/* ** END ** */}

        </section>
    );
    }
}

function renderBox({ text, classNames }: Box, index: number) {
        // Define the style for the box based on the provided x and y coordinates

    return (
        <div
            key={"box-" + index + 1}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="-100"
            className={"box rounded-box hidden md:block t-x-center aos-init aos-animate z-[3] " + classNames}
        >
            <div className={"rounded-box-inner text-center bg-dark-linear flex justify-center content-center rounded-full" + classNames}>
                <small className="m-auto mx-2">{text}</small>
            </div>
        </div>
    );
}

export default FactsSection;
