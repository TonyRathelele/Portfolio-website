import { Component } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header"
import About from "./components/About/About";
import Services from "./components/Info/Services"
import Portfolio from "./components/Portfolio/Portfolio";
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
          <Portfolio />
        </div>

      
       
     
    
      </div>
    );
  }
}

export default App;