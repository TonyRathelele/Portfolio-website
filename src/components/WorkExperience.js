import { Component } from "react";
import "./About/style.css";

class WorkExperience extends Component {
  render() {
    return (
      <section className="work-experience__container" id="work">
        <div className="container">
          <h2>Work Experience</h2>
          <ul className="work-experience__list">
            <li>
              <h3>Junior Software Developer - Example Company</h3>
              <span>Jan 2023 - Present</span>
              <p>Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.</p>
            </li>
            <li>
              <h3>Intern Developer - Another Company</h3>
              <span>Jun 2022 - Dec 2022</span>
              <p>Assisted in building internal tools and automation scripts. Gained experience in full-stack development and agile methodologies.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default WorkExperience; 