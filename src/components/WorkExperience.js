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
              <h3>Web Content Adminstration - Premier Homeware</h3>
              <span>Dec 2022 - July 2024</span>
              <p>Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.</p>
            </li>
            <li>
              <h3>Citi ICG Technology Software Development Job Simulation on Forage</h3>
              <span>July 2025</span>
              <p>Assisted in developing internal tools to optimize loan and risk reporting workflows. Gained practical experience with Java, full-stack development, and agile methodologies. Explored machine learning strategies for credit risk assessment and contributed to UML-based process modeling.</p>
            </li>
            <li>
              <h3>Standard Bank Software Engineering Job Simulation on Forage</h3>
              <span>March 2025</span>
              <p>Completed a job simulation enhancing Standard Bank's mobile app. Gained experience in full-stack development using Spring Boot, Django, and Python. Worked with JWT authentication, facial recognition, and SQL queries on Teradata.</p>
            </li>
            <li>
              <h3>J.P. Morgan Software Engineering on Forage</h3>
              <span>Jun 2022 - Dec 2022</span>
              <p>From November 2024 to July 2025, completed practical tasks including project setup, REST API development, and integration with Kafka and H2 databases. Gained hands-on experience in backend development.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default WorkExperience; 