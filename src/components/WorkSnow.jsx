import React, {useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import work03Img01 from "../assets/img/work03_img01.png";
import work03Img02 from "../assets/img/work03_img02.png";
import work03Img03 from "../assets/img/work03_img03.png";
import work03Img04 from "../assets/img/work03_img04.png";
import work03Img05 from "../assets/img/work03_img05.png";
import work03Img06 from "../assets/img/work03_img06.png";

const snowImges = [work03Img01, work03Img02, work03Img03, work03Img04, work03Img05, work03Img06]

const WorkSnow = () => {
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            
            ScrollTrigger.matchMedia({
                "(min-width: 769px)": function() { 
                    const item = document.querySelector(".work_snow_swiper .swiper-wrapper");
                    const itemTrigger = document.querySelector('.work_snow');
                    // const itemSwiper = document.querySelector('.work_snow_swiper');
                    gsap.to(item, {
                        scrollTrigger: {
                            trigger: itemTrigger,
                            start: "164px top",                            
                            end: () => `+=${document.querySelector('.work_snow').offsetHeight - document.querySelector('.work_snow_swiper').offsetHeight}`,
                            scrub: 1,
                            pin: true,
                            markers: false,
                        },
                        x: '-90%',
                    })
                }
            })
        })

        return () => ctx.revert()

    }, [])

    useEffect(() => {
        let lastWidth = window.innerWidth;
    
        const handleResize = () => {
            if (window.innerWidth !== lastWidth) {
                window.location.reload();
            }
            lastWidth = window.innerWidth;
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="work_snow_swiper">
                <div className="swiper">
                    {window.innerWidth <= 768 ? 
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {snowImges.map((snowImg, index)=>(
                            <SwiperSlide key={index}>
                                <div className="img_box">
                                    <img src={snowImg} alt="SNOW앱 이펙트 컨셉사진증명관" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    : <div className="swiper-wrapper">
                        {snowImges.map((snowImg, index)=>(
                            <div className="swiper-slide" key={index}>
                                <div className="img_box">
                                    <img src={snowImg} alt="SNOW앱 이펙트 컨셉사진증명관" />
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className="work_text move_up">
            <p className="text">
                모바일 기기 너비 및 높이 100%가 될 수 있도록 유연하게 제작하였습니다.<br />
                한국어뿐만 아니라 일본어, 중국어, 베트남어, 인도네시아어 등 다국어로 페이지를 제작하였습니다.
            </p>
            <span className="path_text">
                화면 경로 : 스노우앱 &gt; 이펙트 &gt; 셀프사진관탭 &gt; 컨셉 증명사진관
            </span>
        </div>
        </>
    )
}

export default WorkSnow
