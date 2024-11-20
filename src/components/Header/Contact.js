import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:tonyrathelele@gmail.com">
          <AiFillMail />
          <span>tonyrathelele@gmail.com</span>
        </a>
        <a href="tel:+27726309462">
          <AiFillPhone />
          <span>+27 72 630 9462</span>
        </a>
      </div>
    );
  }
}

export default Contact;
