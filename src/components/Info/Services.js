import { Component } from "react";
import Intro from "./Intro";
import ServicesComp from "./Services_Comp";
import "./style.css";
class Services extends Component {
  render() {
    return (
      <section id="about" className="container container__services">
        <Intro />
        <ServicesComp />
      </section>
    );
  }
}
export default Services;
