import { Component } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header"
import About from "./components/About/About";
import Services from "./components/Info/Services"
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Education from "./components/education";
import './App.css'

class App extends Component {
  render() {
    return (
      <div >

        <div className="header">
        <Header />
        </div>

        <div className="nav">

          <Nav />
          <About />
          <Services />
          <Education />
          <WorkExperience />
          <Portfolio />
          <Footer />
        </div>
    </div>
    );
  }
}

export default App;