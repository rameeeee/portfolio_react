import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intro = () => {
    const introRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const introTl = gsap.timeline();
            ScrollTrigger.matchMedia({
                "(min-width: 769px)": function() { 
                    
                    ScrollTrigger.create({
                        animation: introTl,
                        trigger: introRef.current,
                        start: "top top",
                        end: "bottom top",
                        pin: true,
                        scrub: 0, 
                        markers: false,
                    })
                    
                    introTl.to(".section_intro .title .left_t", {opacity:1, x: -30}, '>')
                    introTl.to(".section_intro .title .right_t", {opacity:1, x: 30}, '<')
                    introTl.to(".section_intro .sub_text", {opacity:1, y: -30}, '-=50%')
            
                },
                "(max-width: 768px)": function() { 
                    const introTl = gsap.timeline();
                    ScrollTrigger.create({
                        animation: introTl,
                        trigger: introRef.current,
                        start: "top top",
                        end: "bottom top",
                        
                        pin: true,
                        scrub: 0, 
                        markers: false,
                    })
                    
                    introTl.to(".section_intro .title .left_t", {opacity:1, x: -10}, '>')
                    introTl.to(".section_intro .title .right_t", {opacity:1, x: 10}, '<')
                    introTl.to(".section_intro .sub_text", {opacity:1, y: -30}, '-=50%')
                }
            })
    
            return () => {
                introTl.kill();
            };
        })

        return () => ctx.revert()

    }, [])

    return (
        <div className="section_intro" ref={introRef} id="About">
            <div className="inner">
                <div className="intro_bg">
                    <div className="bg_text" data-heading="I'm Thinker">I'm Thinker</div>
                </div>
                <div className="text_area">
                    <h2 className="title">
                        <span className="left_t">
                            <span className="point">생각을 실현</span>하는<br />
                        </span><br />
                        <span className="right_t">
                            <span className="point">UI개발자 박아람</span>입니다.
                        </span> 
                    </h2>
                    <p className="sub_text">
                        공감하는 능력과 체계화하는 <br className="only_mo" />
                        능력의 원천에는 생각의 힘이 있습니다.<br />
                        생산적인 생각과 꾸준한 배움을 통해 <br className="only_mo" />
                        성장해나가겠습니다.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro
