import { Component } from "react";
import "./About/style.css";

class WorkExperience extends Component {
  render() {
    return (
      <section className="education__container" id="education">
        <div className="container">
          <h2>Educational Background</h2>
          <ul className="work-experience__list">
            <li>
              <h3>Higher Certificate in Information Technology</h3>
              <span>Jan 2021 - Dec 2021</span>
            </li>
            <li>
              <h3>Bachelor of Science in Information Technology</h3>
              <span>Jan 2022 - Incomplete</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default WorkExperience; 