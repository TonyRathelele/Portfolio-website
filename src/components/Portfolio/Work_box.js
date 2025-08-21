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
            href={this.props.live || this.props.github || "#"}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        </h2>
        <p className="text">{this.props.text}</p>
        {this.props.stack && this.props.stack.length ? (
          <ul className="work__stack">
            {this.props.stack.map((tech, i) => (
              <li key={i} className="work__stack-item">{tech}</li>
            ))}
          </ul>
        ) : null}

        <div className="work__links">
          {this.props.github && (
            <a
              href={this.props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="work__link"
            >
              GitHub
            </a>
          )}
          {this.props.live && (
            <a
              href={this.props.live}
              target="_blank"
              rel="noopener noreferrer"
              className="work__link"
            >
              Live
            </a>
          )}
        </div>
      </div>

      
    );
  }
}

export default Work;
