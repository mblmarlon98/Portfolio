import * as React from 'react';

export interface GameWrapperProps {
    folderName: string;
}

type GameWrapperState = { muted: boolean };

export default class GameWrapper extends React.Component<GameWrapperProps, GameWrapperState> {
    containerRef = React.createRef<HTMLDivElement>();
    iframeRef = React.createRef<HTMLIFrameElement>();
    observer: MutationObserver | null = null;
    state: GameWrapperState = { muted: true };

    requestFullscreen = () => {
        const el = this.containerRef.current;
        if (!el) return;
        const anyEl: any = el as any;
        if (anyEl.requestFullscreen) anyEl.requestFullscreen();
        // Safari
        else if (anyEl.webkitRequestFullscreen) anyEl.webkitRequestFullscreen();
        // Firefox
        else if (anyEl.mozRequestFullScreen) anyEl.mozRequestFullScreen();
        // IE/Edge
        else if (anyEl.msRequestFullscreen) anyEl.msRequestFullscreen();
    };

    componentWillUnmount(): void {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }

    onIframeLoad = () => {
        this.resizeToContent();
        // Start muted by default
        this.applyMuteState(true);
        this.setupObserver();
        this.disableUnityFullscreen();
        window.addEventListener('resize', this.resizeToContent);
        // Re-measure a few times after load in case the game boots async
        let ticks = 0;
        const recheck = setInterval(() => {
            this.resizeToContent();
            this.applyMuteState(this.state.muted);
            if (++ticks > 10) clearInterval(recheck);
        }, 150);
    };

    disableUnityFullscreen = () => {
        const doc = this.iframeRef.current?.contentDocument || this.iframeRef.current?.contentWindow?.document;
        if (!doc) return;
        // Hide Unity's built-in fullscreen button
        const fullscreenBtn = doc.querySelector('#unity-fullscreen-button') as HTMLElement;
        if (fullscreenBtn) fullscreenBtn.style.display = 'none';

        // Prevent canvas click from triggering fullscreen
        const canvas = doc.querySelector('canvas');
        if (canvas) {
            canvas.addEventListener('click', (e) => {
                e.stopPropagation();
            }, true);
        }
    };

    setupObserver = () => {
        const doc = this.iframeRef.current?.contentDocument || this.iframeRef.current?.contentWindow?.document;
        if (!doc) return;
        if (this.observer) this.observer.disconnect();
        this.observer = new MutationObserver(() => {
            this.applyMuteState(this.state.muted);
            this.resizeToContent();
            this.disableUnityFullscreen();
        });
        this.observer.observe(doc, { childList: true, subtree: true });
    };

    resizeToContent = () => {
        // Best effort sizing to the game's natural size
        const iframe = this.iframeRef.current;
        const container = this.containerRef.current;
        const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
        if (!iframe || !container || !doc) return;

        // Prefer a canvas element (common for HTML5 games)
        const canvas = doc.querySelector('canvas') as HTMLCanvasElement | null;
        let width = 0;
        let height = 0;
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            width = Math.max(rect.width, canvas.width || 0);
            height = Math.max(rect.height, canvas.height || 0);
        }

        // Fallback: find largest element by bounding rect inside body
        if (!width || !height) {
            let maxArea = 0;
            const all = Array.from(doc.body.querySelectorAll<HTMLElement>('body *'));
            for (const el of all) {
                const r = el.getBoundingClientRect();
                const area = r.width * r.height;
                if (area > maxArea) {
                    maxArea = area;
                    width = r.width;
                    height = r.height;
                }
            }
        }

        // Final fallback to document dimensions
        if (!width || !height) {
            const html = doc.documentElement;
            const body = doc.body;
            width = Math.max(html?.scrollWidth || 0, body?.scrollWidth || 0, html?.clientWidth || 0);
            height = Math.max(html?.scrollHeight || 0, body?.scrollHeight || 0, html?.clientHeight || 0);
        }

        if (width && height) {
            iframe.style.width = Math.round(width) + 'px';
            iframe.style.height = Math.round(height) + 'px';
            container.style.width = Math.round(width) + 'px';
            container.style.height = Math.round(height) + 'px';
        }
    };

    applyMuteState = (muted: boolean) => {
        const doc = this.iframeRef.current?.contentDocument || this.iframeRef.current?.contentWindow?.document;
        if (!doc) return;
        const media = Array.from(doc.querySelectorAll<HTMLMediaElement>('audio, video'));
        media.forEach(el => {
            try {
                el.muted = muted;
                if (muted) {
                    el.volume = 0;
                } else {
                    if (el.volume === 0) el.volume = 1.0;
                }
            } catch {}
        });

        // Best-effort WebAudio handling: try to find AudioContext-like instances
        try {
            const win: any = this.iframeRef.current?.contentWindow as any;
            if (win) {
                const values = Object.values(win) as any[];
                for (const v of values) {
                    if (v && typeof v.suspend === 'function' && typeof v.resume === 'function' && typeof v.state === 'string') {
                        if (muted && v.state !== 'suspended') v.suspend();
                        if (!muted && v.state === 'suspended') v.resume();
                    }
                }
            }
        } catch {}
    };

    toggleSound = () => {
        this.setState(
            prev => ({ muted: !prev.muted }),
            () => this.applyMuteState(this.state.muted)
        );
    };

    public render() {
        const src = `${process.env.PUBLIC_URL}/games/${this.props.folderName}/index.html`;
        return (
            <section className='mb-6'>
                <div className='flex items-center justify-between mb-3'>
                    <h3 className='border-b'>Play the Game</h3>
                    <div className='flex gap-2'>
                        <button onClick={this.toggleSound} className='btn btn-white'>
                            {this.state.muted ? 'Play (Unmute)' : 'Mute'}
                        </button>
                        <button onClick={this.requestFullscreen} className='btn btn-black'>Fullscreen</button>
                    </div>
                </div>
                <div
                    ref={this.containerRef}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto',
                        width: 'auto',
                        height: 'auto',
                        background: 'transparent',
                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        ref={this.iframeRef}
                        src={src}
                        title="Playable Game"
                        onLoad={this.onIframeLoad}
                        style={{ border: 'none', display: 'block', height: '50vh'}}
                        allowFullScreen = {false}
                    />
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
