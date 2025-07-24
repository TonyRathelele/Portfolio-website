import { Component } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import "./About/style.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { showScroll: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 200) {
      this.setState({ showScroll: true });
    } else {
      this.setState({ showScroll: false });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <>
        <footer className="footer">
          <div className="container footer__content">
            <span>© {new Date().getFullYear()} Tony Matome Rathelele. All rights reserved.</span>
            <div className="footer__socials">
              <a href="https://www.linkedin.com/in/tony-matome-rathelele-" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/TonyRathelele" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </footer>
        {this.state.showScroll && (
          <button className="scroll-to-top" onClick={this.scrollToTop} aria-label="Scroll to top">
            <AiOutlineArrowUp />
          </button>
        )}
      </>
    );
  }
}

export default Footer; 