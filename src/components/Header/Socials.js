import { Component } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

class Socials extends Component {
    render() {
        return (
            <div className="socials">
                <a href="https://www.linkedin.com/in/tony-matome-rathelele-" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>

                <a href="https://github.com/TonyRathelele" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                </a>

            </div>
        );
    }
}

export default Socials;
