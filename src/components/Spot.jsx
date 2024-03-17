import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const lines = [1, 2, 3, 4, 5, 6, 7]; // 불빛 라인 개수
const SpotTexts = [
    {
        text1: "think",
        text2: "Big"
    },
    {
        text1: "start",
        text2: "Small"
    },
];

const Spot = () => {
    const spotRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const spotTl = gsap.timeline();
            ScrollTrigger.matchMedia({
                "(min-width: 769px)": function() { 
                    ScrollTrigger.create({
                        animation: spotTl,
                        trigger: ".spot",
                        start: "15px 10px",
                        end: "bottom 20px",
                        pin: true,
                        scrub: 0, 
                        markers: false,
                    })
    
                    spotTl.to(".spot .light_area .line", {opacity:1, duration:1}, 0.5);
                    spotTl.to(".spot .light_on", {opacity:1, duration:1}, '>');
                    spotTl.to(".spot .line_on", {opacity:1, duration:1}, '<');
                    spotTl.to(".spot .light_area", {scale:0.4, y:-100, duration: 3}, 3);
                    spotTl.to(".spot .title_area", {y:-130, height: 300, duration: 2});
                    spotTl.to(".spot .title_area .text01", {opacity: 1, y: 0, duration: 2}, 4);
                    spotTl.to(".spot .title_area .text02", {opacity: 1, y: 0, duration: 2}, 6);
                    spotTl.to(".spot .title_area .text03", {opacity: 1, y: 0, duration: 2}, 8);
                    spotTl.to(".spot .title_area .text04", {opacity: 1, y: 0, duration: 2}, 9);
            
                },
                "(max-width: 768px)": function() { 
                    ScrollTrigger.create({
                        animation: spotTl,
                        trigger: ".spot",
                        start: "top top",
                        end: "bottom top",
                        pin: true,
                        scrub: 0, 
                        markers: false,
                    })
    
                    spotTl.to(".spot .light_area .line", {opacity:1, duration:1}, 0.5);
                    spotTl.to(".spot .light_on", {opacity:1, duration:1}, '>');
                    spotTl.to(".spot .line_on", {opacity:1, duration:1}, '<');
                    spotTl.to(".spot .light_area", {scale:0.4, y:-100, duration: 3}, 3);
                    spotTl.to(".spot .title_area", {y:-130, height: 120, duration: 2});
                    spotTl.to(".spot .title_area .text01", {opacity: 1, y: 0, duration: 2});
                    spotTl.to(".spot .title_area .text02", {opacity: 1, y: 0, duration: 2});
                    spotTl.to(".spot .title_area .text03", {opacity: 1, y: 0, duration: 2});
                    spotTl.to(".spot .title_area .text04", {opacity: 1, y: 0, duration: 2});
                }
            })
            
            return () => {
                spotTl.kill();
            };
        })
        return () => ctx.revert()
    }, [])

    
    return (
        <div className="spot" ref={spotRef}>
            <div className="light_area">
                <div className="line_wrap">
                    {lines.map((num, index) => (
                        <span key={`line${num}`} className={`line line0${num}`}>
                            <span className="line_on"></span>
                        </span>
                    ))}
                </div>
                <div className="img_light">
                    <div className="light_on"></div>
                </div>
            </div>
            <h1 className="title_area">
                {SpotTexts.map((text, index) => (
                    <span className="title" key={index}>
                        <span className={`text text0${index * 2 + 1}`}>{text.text1}</span>
                        <span className={`text text0${index * 2 + 2}`}>{text.text2}</span>
                    </span>
                ))}
            </h1>
            <span className="ico_down">
                <span className="blind">아래로</span>
            </span>
        </div>
    )
}

export default Spot;
