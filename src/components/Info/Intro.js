import { Component } from "react";
import { BiBrain } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

class Intro extends Component {
  render() {
    return (
      <div className="services__intro">
        <div className="pos-rel">
          <div className="services__intro__image">
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1bGwlMjBzdGFjayUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <ul>
                <li><h1>Tech stack</h1></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <ul>
                <li>React js</li>
                <li>Python</li>
                <li>C++</li>
                <li>Javascript</li>
              </ul>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <ul>
                <li>Angular js</li>
                <li>Java Spring</li>
                <li>C#</li>
                <li>Typescript</li>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>About Me</h1>
            <p className="text">
            I'm a passionate Junior Software Developer 
            with expertise in modern web technologies. 
            I build scalable, efficient, and user-friendly applications by combining the latest tools and frameworks. 
            My goal is to create powerful solutions that deliver great user experiences. 
            I'm a fast learner and a team player, constantly striving to improve and expand my skillsete.
            </p>
            
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
