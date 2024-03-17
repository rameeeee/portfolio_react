/*
<WorkItem
        num="01"
        title="네이버 인물정보 본인참여"
        imageSrc="./img/work01_img01.png"
        videoSrc="./img/work01_video01.mp4"
        text="리액트 환경에서 프론트엔드 개발자와 협의하여 마크업을 진행하였습니다. ..."
        link="https://myprofile.naver.com/main"
        additionalClasses="work_people"
      />
      <WorkItem
        num="02"
        title="네이버 지식베이스"
        imageSrc="./img/work02_img01.png"
        text="지식베이스란? 사용자가 소비하기 용이한 '지식'의 형태로 서비스하는 네이버의 강화된 컨텐츠 검색"
        link="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=31909250&qvt=0&query=%EC%9B%A1%EC%B9%B4%20%EA%B4%80%EB%9E%8C%ED%8F%89"
        additionalClasses="work_kb"
      />
      <WorkItem
        num="03"
        title="SNOW"
        imageSrc="./img/work03_img01.png"
        text="모바일 기기 너비 및 높이 100%가 될 수 있도록 유연하게 제작하였습니다. ..."
        additionalClasses="work_snow"
      />

      */

      // 공통으로 사용되는 WorkContent 컴포넌트
const WorkContent = ({ title, children }) => {
    return (
      <div className={`work_content work_${title.toLowerCase()}`}>
        <div className="inner">
          <h2 className="title_area">
            <span className="num">{title}</span>
            <span className="title">{title}</span>
          </h2>
          {children}
        </div>
      </div>
    );
  };
  
  // 각 작업에 맞게 컴포넌트를 만들어 사용하는 예시
  const WorkPeople = () => {
    return (
      <WorkContent title="네이버 인물정보 본인참여">
        {/* 네이버 인물정보 본인참여에 해당하는 내용 */}
      </WorkContent>
    );
  };
  
  const WorkKb = () => {
    return (
      <WorkContent title="네이버 지식베이스">
        {/* 네이버 지식베이스에 해당하는 내용 */}
      </WorkContent>
    );
  };
  
  const WorkSnow = () => {
    return (
      <WorkContent title="SNOW">
        {/* SNOW에 해당하는 내용 */}
      </WorkContent>
    );
  };
  
  const WorkEtc = () => {
    return (
      <div className="work_content work_etc">
        <h2 className="title_area">
          <span className="num">04</span>
          <span className="title">그 외 작업들</span>
        </h2>
        <div className="work_list_area">
          {/* 그 외 작업들에 해당하는 내용 */}
        </div>
      </div>
    );
  };





const WorkContent = ({ title, children }) => {
  return (
    <div className={`work_content work_${title.toLowerCase().replace(/\s/g, '_')}`}>
      <div className="inner">
        <h2 className="title_area">
          <span className="num">{'01'}</span>
          <span className="title">{title}</span>
        </h2>
        {children}
      </div>
    </div>
  );
};

const WorkPeople = () => {
  return (
    <WorkContent title="네이버 인물정보 본인참여">
      {/* 네이버 인물정보 본인참여에 해당하는 내용 */}
    </WorkContent>
  );
};

const WorkKb = () => {
  return (
    <WorkContent title="네이버 지식베이스">
      {/* 네이버 지식베이스에 해당하는 내용 */}
    </WorkContent>
  );
};

const WorkSnow = () => {
  return (
    <WorkContent title="SNOW">
      {/* SNOW에 해당하는 내용 */}
    </WorkContent>
  );
};

const WorkEtc = () => {
  return (
    <div className="work_content work_etc">
      <h2 className="title_area">
        <span className="num">04</span>
        <span className="title">그 외 작업들</span>
      </h2>
      <div className="work_list_area">
        {/* 그 외 작업들에 해당하는 내용 */}
      </div>
    </div>
  );
};