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
        link: "https://product-js.vercel.app/" // Make sure to pass the link
      },
      {
        img: img2,
        title: "Note Sharing",
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
            link={work.link}  
          />
        ))}
      </section>
    );
  }
}

export default Portfolio;
