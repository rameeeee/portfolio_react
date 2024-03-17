import React from 'react'

import work04Img01 from "../assets/img/work04_img01.png";
import work04Img02 from "../assets/img/work04_img02.png";
import work04Img03 from "../assets/img/work04_img03.png";
import work04Img04 from "../assets/img/work04_img04.png";
import work04Img05 from "../assets/img/work04_img05.png";
import work04Img06 from "../assets/img/work04_img06.png";
import work04Img07 from "../assets/img/work04_img07.png";
import work04Img08 from "../assets/img/work04_img08.png";
import work04Img09 from "../assets/img/work04_img09.png";

const etcText = [
    {
        link: "https://mkt.naver.com/p1/jrschool/experience",
        src: work04Img01,
        alt: "쥬니버스쿨 콘텐츠체험 화면",
        subject: "쥬니버스쿨",
        info: "콘텐츠 체험"
    },
    {
        link: "https://campaign2.naver.com/npay/naverpayracing2024/?code=k6GFev4%2FIWeoIWBFzWEfdg%3D%3D",
        src: work04Img02,
        alt: "네이버 페이 자동차보험 이벤트 화면",
        subject: "네이버 페이",
        info: "자동차보험 이벤트2~하단"
    },
    {
        link: "https://campaign.naver.com/edu-fashion/",
        src: work04Img03,
        alt: "네이버 비즈니스 스쿨 동대문 스마트 물류 서비스 화면",
        subject: "네이버 비즈니스 스쿨",
        info: "동대문 스마트 물류 서비스"
    },
    {   
        link: "https://campaign.naver.com/ClovaNote100M/",
        src: work04Img04,
        alt: "네이버 클로바노트 100만 감사 이벤트 화면",
        subject: "네이버 클로바",
        info: "클로바노트 100만 감사 이벤트"
    },
    {   
        link: "https://snow-h5-web.pstatic.net/cdn/h5ar/event/halloween2022/halloween2022_ko.html",
        src: work04Img05,
        alt: "스노우 할로윈 UGC 이벤트 화면",
        subject: "SNOW",
        info: "할로윈 UGC 이벤트"
    },
    {   
        link: "https://campaign.naver.com/shopcounselor/reviewmanman/",
        src: work04Img06,
        alt: "네이버 쇼핑 리뷰만만 화면",
        subject: "네이버 쇼핑",
        info: "리뷰만만"
    },
    {
        link: "https://campaign.naver.com/event/npay-summonerswar_2210?placement=all",
        src: work04Img07,
        alt: "네이버 페이 서머너즈 워:클로니클 이벤트 화면",
        subject: "네이버 페이",
        info: "서머너즈 워:클로니클 이벤트"
    },
    {   
        link: "https://campaign.naver.com/event/npay-hana_2110?placement=all",
        src: work04Img08,
        alt: "네이버 페이 하나카드 이벤트 화면",
        subject: "네이버 페이",
        info: "하나카드 이벤트"
    },
    {
        link: "https://campaign.naver.com/event/npay-shinhanassociated_2109?placement=all",
        src: work04Img09,
        alt: "네이버 페이 신한카드 이벤트 화면",
        subject: "네이버 페이",
        info: "신한카드 이벤트"
    },
]

const WorkEtc = () => {
    return (
        <div className="work_list_area">
            <ul className="work_list">
                {etcText.map((etcItem, index) => (
                    <li className="work_item" key={index}>
                        <a href={etcItem.link} target="_blank" rel="noopener noreferrer" className="work_link">
                            <div className="img_box">
                                <img src={etcItem.src} alt={etcItem.alt} />
                            </div>
                            <div className="text_box_wrap">
                                <div className="text_box">
                                    <em className="subject">{etcItem.subject}</em>
                                    <span className="info">
                                        <span className="blind">작업 내용</span>
                                        {etcItem.info}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkEtc
