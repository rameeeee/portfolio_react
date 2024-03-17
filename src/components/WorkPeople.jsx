import React from 'react'


import work01Video01 from "../assets/img/work01_video01.mp4";
import work01Img01 from "../assets/img/work01_img01.png";
import work01Img11 from "../assets/img/work01_img11.png";
import work01Img12 from "../assets/img/work01_img12.png";

const peopleMedia = [
    { type: 'video', src: work01Video01, autoPlay: true, muted: true, loop: true, fileType: 'video/mp4', alt: '네이버 인물정보 본인참여 등록신청 화면', className: 'img_box box02 move_up' },
    { type: 'image', src: work01Img11, alt: '네이버 인물정보 본인참여 신청완료 화면', className: 'img_box box03 move_up' },
    { type: 'image', src: work01Img12, alt: '네이버 인물정보 본인참여 내정보 화면', className: 'img_box box04 move_up' }
];


const WorkMedia = ({ media }) => {
   



    return (
      <>
        <div className="img_box box01 move_up">
            <img src={work01Img01} alt="네이버 인물정보 본인참여 메인화면" />
        </div>
        <div className="img_box_wrap">
            {media.map((item, index) => (
                item.type === 'image' ? (
                <div className={item.className} key={item.src}>
                    <img src={item.src} alt={item.alt} />
                </div>
                ) : (
                <div className={item.className} key={item.src}>
                    <video src={item.src} autoPlay={item.autoPlay} muted={item.muted} loop={item.loop} type={item.fileType}></video>
                    <span className="blind">{item.alt}</span>
                </div>
                )
            ))}
        </div>
      </>
    );
};
const WorkText = () => {
    return (
        <div className="work_text move_up">
            <p className="text">
            리액트 환경에서 프론트엔드 개발자와 협의하여<br className="only_mo" /> 마크업을 진행하였습니다.<br />
            디자인상 pc/mo에서 헤더 및 메뉴바 위치가 달라져서 초기 협의하는데 시간이 소요되었습니다.<br />
            입력란, 검색란, 선택란 구조 등의 구조를 공통으로 사용할 수 있도록<br className="only_pc" /> html 구조 및 스타일링하는데 공들인 프로젝트 입니다.<br />
            해당 프로젝트를 진행하며 리액트 환경을 이해하는데 많은 도움이 되었습니다.
            </p>
            <a href="https://myprofile.naver.com/main" target="_blank" rel="noopener noreferrer" className="link_text">
                <span className="ico_arrow"></span>
                네이버 인물정보 본인참여 바로가기
            </a>
        </div>
    );
};




const WorkPeople = () => {
    
    return (
        <>
            <WorkMedia media={peopleMedia} />
            <WorkText />
        </>
    )
}

export default WorkPeople
