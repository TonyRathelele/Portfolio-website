import { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";
import cvFile from "../About/Tony-Rathelele-CV.pdf"

class About extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 35
    };
  }
  render() {
    const onButtonClick = () => {
      const link = document.createElement("a");
      link.href = cvFile; // Use the imported file
      link.download = "Tony-Rathelele-CV.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <section className="about__container">
        <div className="container">
          <div>
            <h1>Software Developer</h1>
            <p className="text">
              Hi, I'm Tony Matome Rathelele a Full Stack developer based in South Africa. Tech enthusiast with a passion for development.
            </p>
            <div className="about__buttons">
             
        
                   <button className="btn btn-primary" onClick={onButtonClick}>Download CV</button>
            
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about__image">
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww"
                alt="about"
              />
            </div>
            <div className="about__progress">
              <div className="progress_bar">
                <CircularProgressbar
                  value={this.state.percentage}
                  text={`${this.state.percentage}%`}
                />
              </div>
              <h4>
                Programming level
                <br />
                <small>Junior Level</small>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
