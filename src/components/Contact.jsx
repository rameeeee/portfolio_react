import React, {useRef} from 'react'

const Contact = () => {
    const contactRef = useRef(null);

    return (
        <div className="section_contact" id="Contact" ref={contactRef}>
            <h2 className="title">Contact <em className="point">Me!</em></h2>
            <ul className="contact_list">
                <li>
                    <span className="mail">
                        <span className="blind">메일주소</span>
                        moderato611@naver.com
                    </span>
                </li>
                <li>
                    <span className="phone">
                        <span className="blind">연락처</span>
                        010 - 6623 - 6011
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Contact
