        import "./intro.scss";
        import { init } from 'ityped';
        import {useEffect, useRef} from "react";

        export default function Intro() {

            const textRef = useRef();

            useEffect(()=>{
                init(textRef.current, {
                 showCursor: true, 
                 backDelay:  1500,
                 backspeed: 60,
                 strings: ["New York", "New Jersey","Nepal"],
                 });
            },[])
            return (
                <div className="intro" id="intro"> 
                    <div className="left">
                        <div className="imgContainer">
                        <img src="assets/tamu_logo.jpeg" alt=""/>
                        </div>
                    </div>
                    <div className="right">
                    <div className="wrapper">
                        <h1>Namaste </h1>
                        <h2> From </h2>
                        <h3>Tamu Pariwar.  <span ref={textRef}></span></h3>
                    </div>
                    <a href="#portfolio">
                        <img src="assets/down.jpeg" alt=""/>
                    </a>
                    </div>

                </div>
            )
        }
