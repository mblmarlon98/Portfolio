import * as React from 'react';

export interface GameWrapperProps {
    folderName: string;
}

export default class GameWrapper extends React.Component < GameWrapperProps > {
    public render() {
        return (
            <section className='mb-6'>
                <h3 className='border-b mb-6'>Play the Game</h3>
                <div
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "500px",
                }}>
                    <iframe
                        src={`${process.env.PUBLIC_URL}/games/${this.props.folderName}/index.html`}
                        title="Space Adventure"
                        style={{
                        width: "100%",
                        height: "100%",
                        border: "none"
                    }}></iframe>
                </div>
            </section>
        );
    }
}

// import React from "react"; const GameWrapper = () => {   return (     <div
// style={{ width: "100%", height: "100vh", overflow: "hidden" }}>       <iframe
//         src={`${process.env.PUBLIC_URL}/games/vietVaders/index.html`}
// title="Space Adventure"         style={{           width: "100%",
// height: "100%",           border: "none",         }}       ></iframe>
// </div>   ); }; export default GameWrapper;