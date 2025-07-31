import { Component } from "react";
import Work from "./Work_box";
import "./style.css";
import img1 from "../../assets/download.png";
import img2 from "../../assets/coomingsoon.jpg"
import img3 from "../../assets/img2.png"
import img4 from "../../assets/img3.png"
import img5 from "../../assets/img4.png"
import img6 from "../../assets/img5.png"
import img7 from "../../assets/img6.png"

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
        img: img3,
        title: "Safe-Space-AI",
        text:
          "This is an ai intelligent that Instantly report incidents, get live analysis, and find support using the power of your voice and our intelligent AI. We're here to listen and help, 24/7. ",
        live: "https://safe-space-ai.vercel.app/",
        github: "https://github.com/TonyRathelele/-SafeSpace-AI.git"
      },
      {
        img: img4,
        title: "News website",
        text:
          "A simple news application using php for frontend and backend development.",
        github: "https://github.com/TonyRathelele/News-website.git"
      },
      {
        img: img5,
        title: "Tertiary Education Content Creator",
        text:
          "Generate high-quality academic content for university students and higher education using gemini API",
        live: "https://tertiary-content-creator.vercel.app/",
        github: "https://github.com/TonyRathelele/Tertiary-Content-Creator.git"
      },
      {
        img: img7,
        title: "Chatbot",
        text:
          "Next js chatbot similar to chatgpt using vercel  template",
        live: "https://myai-beryl.vercel.app/",
        github: "https://github.com/TonyRathelele/my_ai.git"
      },
      {
        img: img6,
        title: "Sign-in Platform",
        text:
          "A full-stack Sign-in platform with face and qr scanner using PHP",
        github: "https://github.com/TonyRathelele/Hackathon.git"
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
