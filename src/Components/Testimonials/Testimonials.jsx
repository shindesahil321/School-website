import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import user_5 from '../../assets/user-4.png'

const TESTIMONIALSSSS = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='TESTIMONIALSS'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>John Doe</h3>
                            <span>Principal</span>
                        </div>
                    </div>
                    <p>M.Ed, 20 years of experience in educational administration

John Doe is a seasoned educational leader with a Master’s in Education and two decades of experience in school administration. Known for his collaborative leadership style, he excels in curriculum development, data-driven decision-making, and school improvement. John has a proven track record of enhancing student achievement and fostering a positive school climate. He is also dedicated to professional development and community engagement, striving to create inclusive and equitable educational opportunities for all students.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Jane Smith</h3>
                            <span>Vice principle</span>
                        </div>
                    </div>
                    <p> sheis known for her innovative approach to science education and strong focus on student engagement and academic excellence. In [his/her/their] administrative role, [Name] excels in using data-driven strategies to enhance student outcomes and support teacher development, while also fostering community partnerships and creating a supportive school environment.

</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Johnson</h3>
                            <span>English Teacher</span>
                        </div>
                    </div>
                    <p> M.A. in English, 10 years of teaching experience

Emily Johnson is an English teacher with a Master’s in English and 10 years of experience. She is known for her engaging teaching methods, strong curriculum development skills, and dedication to fostering a love for literature. Emily actively participates in professional development and enriches student learning through extracurricular activities like literary clubs and writing competitions.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Michael Brownn</h3>
                            <span>Mathematics Teacher</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_5} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default TESTIMONIALSSSS
