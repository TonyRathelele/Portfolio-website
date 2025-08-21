import { Component } from "react";
import "./About/style.css";

class Certificates extends Component {
  constructor() {
    super();
    this.certificates = [
      {
        title: "Citi ICG Technology Software Development Job Simulation",
        date: "Forage • July 2025",
        description: "Completed a practical simulation covering loan and risk reporting workflows, full‑stack development fundamentals, and UML/process modeling.",
        url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/8eNRcRqBZM9HLvwGw/2jxESPvorR7fmypXj_8eNRcRqBZM9HLvwGw_76Bxzhpp2v7RB3GEE_1753083140467_completion_certificate.pdf"
      },
      {
        title: "Python for Data Science, AI & Development",
        date: "Coursera • June 2025",
        description: "Worked on developing a Python application that uses the OpenAI API to generate text based on user input.",
        url: "https://coursera.org/share/d6676ded7671196972d26c3f3f946e67"
      },
      {
        title: "Generative AI with Large Language Models",
        date: "Coursera • June 2025",
        description: "Gained hands‑on experience with the OpenAI API to generate text based on user input.",
        url: "https://coursera.org/share/d6676ded7671196972d26c3f3f946e67"
      }
    ];
  }

  handleCertificateClick = (url) => {
    window.open(url, '_blank');
  };

  render() {
    return (
      <section className="certificates__container" id="certificates">
        <div className="container">
          <h2>Certificates</h2>
          <ul className="certificates__list">
            {this.certificates.map((cert, index) => (
              <li key={index}>
                <h3>{cert.title}</h3>
                <span>{cert.date}</span>
                <p>{cert.description}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => this.handleCertificateClick(cert.url)}
                >
                  View Certificate
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Certificates;


