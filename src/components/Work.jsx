import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkEtc from './WorkEtc'
import WorkKb from './WorkKb'
import WorkPeople from './WorkPeople'
import WorkSnow from './WorkSnow'

const workText = ['Work Experience', 'Work Experience']
const workItems = [
    { className: "people", num: "01", title: "네이버 인물정보", component: <WorkPeople /> },
    { className: "kb", num: "02", title: "네이버 지식베이스", desc: <>지식베이스란?<br /> 사용자가 소비하기 용이한 "지식"의 형태로 서비스하는<br /> 네이버의 강화된 컨텐츠 검색</>, component: <WorkKb /> },
    { className: "snow", num: "03", title: "SNOW", component: <WorkSnow /> },
    { className: "etc", num: "04", title: "그 외 작업들", component: <WorkEtc /> }
];

const Work = ({children}) => {
    const workRef = useRef(null);

  
    const WorkComponent = ({num, title, className, desc, children}) => {
        return (
          <div className={`work_content ${className}`}>
            <div className="inner">
              <h2 className="title_area">
                <span className="num">{num}</span>
                <span className="title">{title}</span>
                {desc && <span className="desc">{desc}</span>}
              </h2>
              {children}
            </div>
          </div>
        );
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const coverTit = document.querySelector('.section_work .cover_title');

            ScrollTrigger.matchMedia({
                "(min-width: 769px)": function() { 
                    
                    gsap.fromTo(coverTit, {
                        clipPath : 'polygon(0px 0px, 100% 0px, 100% 50%, 0px 50%, 0px 50%, 100% 50%, 100% 100%, 0px 100%)',
                    } , 
                    {
                        clipPath : 'polygon(0px 0px, 100% 0px, 100% 0%, 0px 0%, 0px 100%, 100% 100%, 100% 100%, 0px 100%)',
                        ease:'none',
                        scrollTrigger: {
                            trigger: workRef.current,
                            start: "top top",
                            scrub: 1,
                            end: () => "+=" + coverTit.clientHeight * 0.6,
                    },
                    });
                    gsap.to(".upper_text", {
                        y : '-15vh',
                        ease:'none',
                        scrollTrigger: {
                        trigger: workRef.current,
                        start: "top top",
                        scrub: 1,
                        end: () => "+=" + coverTit.clientHeight * 0.3,
                        },
                    });
                    gsap.to(".lower_text", {
                        y : '15vh',
                        ease:'none',
                        scrollTrigger: {
                        trigger: workRef.current,
                        start: "top top",
                        scrub: 1,
                        end: () => "+=" + coverTit.clientHeight * 0.3,
                        },
                    });
    
            
                },
                "(max-width: 768px)": function() { 
                    gsap.fromTo(".section_work .cover_title", {
                        clipPath : 'polygon(0px 0px, 100% 0px, 100% 50%, 0px 50%, 0px 50%, 100% 50%, 100% 100%, 0px 100%)',
                    } , 
                    {
                        clipPath : 'polygon(0px 0px, 100% 0px, 100% 0%, 0px 0%, 0px 100%, 100% 100%, 100% 100%, 0px 100%)',
                        ease:'none',
                        scrollTrigger: {
                            trigger: workRef.current,
                            start: "top top",
                            scrub: 1,
                            end: () => "+=" + coverTit.clientHeight * 0.6,
                    },
                    });
                    gsap.to(".upper_text", {
                        y : '-15vh',
                        ease:'none',
                        scrollTrigger: {
                        trigger: workRef.current,
                        start: "top top",
                        scrub: 1,
                        end: () => "+=" + coverTit.clientHeight * 0.3,
                        },
                    });
                    gsap.to(".lower_text", {
                        y : '15vh',
                        ease:'none',
                        scrollTrigger: {
                        trigger: workRef.current,
                        start: "top top",
                        scrub: 1,
                        end: () => "+=" + coverTit.clientHeight * 0.3,
                        },
                    });
                }
            })
    
            
        })

        return () => ctx.revert()

    }, [])

    return (
        <div className="section_work" ref={workRef} id="Work">
            <div className="cover_title">
                {workText.map((text, index) => (
                    <div className={`text_wrap ${index === 0 ? 'upper' : 'lower'}`} key={index}>
                        <div className={`${index === 0 ? 'upper':'lower'}_text`}>{text}</div>
                    </div>
                ))}
            </div>
            <div className="work_content">
                {workItems.map(({ className, num, title, component, desc }) => (
                    <WorkComponent key={num} num={num} title={title} desc={desc} className={`work_${className}`}>
                        {component}
                    </WorkComponent>
                ))}
            </div>
        </div>
    )
}

export default Work
