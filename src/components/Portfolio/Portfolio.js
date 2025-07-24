import { Component } from "react";
import Work from "./Work_box";
import "./style.css";
import img1 from "../../assets/download.png";
import img2 from "../../assets/coomingsoon.jpg"

class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: img1,
        title: "Product js",
        text:
          "Front-end e-commerce website with add to cart functionality using HTML, CSS, and JavaScript",
        live: "https://product-js.vercel.app/",
        github: "https://github.com/TonyRathelele/product-js"
      },
      {
        img: img2,
        title: "AI Resume Builder",
        text:
          "This is an intelligent resume generation system that creates customized, ATS-friendly resumes based on user inputs.",
        live: "https://ai-resume-builder-theta-ten.vercel.app/",
        github: "https://github.com/TonyRathelele/ai-resume-builder"
      },
      {
        img: img1,
        title: "Weather App",
        text:
          "A simple weather application that fetches real-time weather data using a public API.",
        live: "https://weather-app.example.com/",
        github: "https://github.com/TonyRathelele/weather-app"
      },
      {
        img: img2,
        title: "Task Manager",
        text:
          "A productivity tool for managing daily tasks with user authentication and cloud sync.",
        live: "https://task-manager.example.com/",
        github: "https://github.com/TonyRathelele/task-manager"
      },
      {
        img: img1,
        title: "Portfolio V2",
        text:
          "A redesigned personal portfolio website with animations and dark mode support.",
        live: "https://portfolio-v2.example.com/",
        github: "https://github.com/TonyRathelele/portfolio-v2"
      },
      {
        img: img2,
        title: "Blog Platform",
        text:
          "A full-stack blog platform with markdown support and user comments.",
        live: "https://blog-platform.example.com/",
        github: "https://github.com/TonyRathelele/blog-platform"
      },
      {
        img: img1,
        title: "Expense Tracker",
        text:
          "A web app to track expenses and visualize spending habits with charts.",
        live: "https://expense-tracker.example.com/",
        github: "https://github.com/TonyRathelele/expense-tracker"
      }
    ];
  }

  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        <div className="portfolio__header">
          <h1>See My Works Or Portfolio</h1>
        </div>

        {/* Loop through works and pass all properties including the link */}
        {this.works.map((work, index) => (
          <Work
            key={index}
            img={work.img}
            title={work.title}
            text={work.text}
            live={work.live}
            github={work.github}
          />
        ))}
      </section>
    );
  }
}

export default Portfolio;
