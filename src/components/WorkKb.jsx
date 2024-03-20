import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import work02Img01 from "../assets/img/work02_img01.png";
import work02Img02 from "../assets/img/work02_img02.png";
import work02Img03 from "../assets/img/work02_img03.png";
import work02Img04 from "../assets/img/work02_img04.png";
import work02Img05 from "../assets/img/work02_img05.png";




const workKbText = [
    {
        className: "wrap01",
        src: work02Img01,
        alt: "영화 관람평 검색결과 PC 화면",
        info: "PC/MO 영화 관람평 개선",
        link: "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=31909250&qvt=0&query=%EC%9B%A1%EC%B9%B4%20%EA%B4%80%EB%9E%8C%ED%8F%89",
        text: "관람평 검색결과 바로가기"
    },
    {
        className: "wrap02",
        src: work02Img02,
        alt: "파킹통장 검색결과 PC 화면",
        info: "PC/MO 파킹통장 신규 추가",
        link: "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=31909250&qvt=0&query=%EC%9B%A1%EC%B9%B4%20%EA%B4%80%EB%9E%8C%ED%8F%89",
        text: "파킹통장 검색결과 바로가기"
    },
]

const WorkKbComponent = () => {
    const wrapRefs = useRef([]);
    return(
        <>
            {workKbText.map((item, index) => (
                <div className={`box_wrap ${item.className}`} key={index} ref={(el)=> wrapRefs.current[index] = el}> 
                    {item.className === 'wrap02' && (
                        <div className="text_area">
                            <div className="text_box">
                                <em className="info">{item.info}</em>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="link_text">
                                <span className="ico_arrow"></span>
                                <span className="text">{item.text}</span>
                                </a>
                            </div>
                        </div>
                    )}
                    <div className="img_box">
                        <img src={item.src} alt={item.alt} />
                    </div>
                    {item.className === 'wrap01' && (
                        <div className="text_area">
                            <div className="text_box">
                                <em className="info">{item.info}</em>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="link_text">
                                <span className="ico_arrow"></span>
                                <span className="text">{item.text}</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

const workKbSlideText = [
    {
        src: work02Img03,
        alt: "방송 검색결과 모바일 화면",
    },
    {
        src: work02Img04,
        alt: "뮤직 검색결과 모바일 화면",
    },
    {
        src: work02Img05,
        alt: "강아지 검색결과 모바일 화면",
    },
]


const WorkKbSlideList = () => {
    const swiperRef = useRef(null);
    return (
        <>
            <div className="swiper_area" ref={swiperRef}>
                <div className="work_kb_swiper">
                    <div className="swiper">
                        
                        <Swiper
                            slidesPerView={1}
                            loop={true} 
                            autoplay={{ delay: 1000, disableOnInteraction: false }}
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                        >
                            {workKbSlideText.map((slideItem, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`img_box box0${index+1}`}>
                                        <img src={slideItem.src} alt={slideItem.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="text_area">
                    <div className="work_text">
                        지식베이스 MO 주제 및 케이스별로<br /> 
                        폰트 사이즈, 간격, 보더 스타일 등의 전반적인 수정을 진행하였습니다.<br />
                        라이트 모드뿐만 아니라 다크 모드를 대응하였으며, 컬러셋을 신규 추가하였습니다.<br /> 
                        아이콘 추가 시 스프라이트 이미지로 적용될 수 있도록 gulpfile을 수정하였습니다.<br />
                        데모페이지 및 실페이지에 산출물 구조가 적용되는 과정에서 이슈 발생 시 <br /> 
                        프론트엔드 및 백엔드 개발자와 원활한 커뮤니케이션 후 css 수정 및 배포를 통해 이슈를 해결할 수 있었습니다.                                    
                    </div>
                </div>
           </div>
        </>
    )
}

const WorkKb = () => {
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
            console.log("ScrollTrigger refreshed!");
        }, 500);
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const introTl = gsap.timeline();
            ScrollTrigger.matchMedia({
                "(min-width: 769px)": function() { 
                    const imgBoxTl01 = gsap.timeline();
                    ScrollTrigger.create({
                        animation: imgBoxTl01,
                        trigger: ".work_kb .wrap01",
                        start:'-100px center',
                        end:'center center',
                        scrub: 0, 
                        markers: false,
                    })
                    imgBoxTl01.to('.work_kb .wrap01 img', {y: '-320'}, '>')
                    imgBoxTl01.fromTo('.work_kb .wrap01 .text_box', {y: '0'}, {y: '294'}, '<')

                    const imgBoxTl02 = gsap.timeline();
                    ScrollTrigger.create({
                        animation: imgBoxTl02,
                        trigger: ".work_kb .wrap02",
                        start:'-100px center',
                        end:'center center',
                        scrub: 0, 
                        markers: false,
                    })
                    imgBoxTl02.to('.work_kb .wrap02 img', {y: '-320'}, '>')
                    imgBoxTl02.fromTo('.work_kb .wrap02 .text_box', {y: '0'}, {y: '294'}, '<')

                    const imgBoxTl03 = gsap.timeline();
                    ScrollTrigger.create({
                        animation: imgBoxTl03,
                        trigger: ".work_kb .swiper_area",
                        start:'-100px center',
                        end:'center center',
                        scrub: 0, 
                        markers: false,
                    })
                    imgBoxTl03.fromTo('.work_kb .swiper_area .work_text', {y: '0'}, {y: '476'}, '<')
                }
            })
    
            return () => {
                introTl.kill();
            };
        })

        return () => ctx.revert()

    }, [])

  return (
    <>
      <WorkKbComponent kbText={workKbText} />
      <WorkKbSlideList />
    </>
  )
}

export default WorkKb
