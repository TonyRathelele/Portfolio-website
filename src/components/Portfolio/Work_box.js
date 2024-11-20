import { Component } from "react";
import "./work.css";

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio__work">
        <img src={this.props.img} alt={this.props.title} />
        <h2>
          <a 
            href={this.props.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        </h2>
        <p className="text">{this.props.text}</p>


        <a 
          href={this.props.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="work__link"
        >
          View Project
        </a>
      </div>

      
    );
  }
}

export default Work;
