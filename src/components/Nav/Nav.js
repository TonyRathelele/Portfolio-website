import './Nav.css';
import Logo from './Logo';
import Links from './Links';
import { Component } from "react";
import Search from './Search';
class Nav extends Component {
    render() {
      return (
        <nav>
          <div className="container container__nav">
            <Logo />
            <Links />
            <Search />
          </div>
        </nav>
      );
    }
  }
  export default Nav;
