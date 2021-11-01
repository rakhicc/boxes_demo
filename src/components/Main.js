import Box from "./Box";
import { NavLink, Switch, Route } from "react-router-dom";
import BoxNav from "./BoxNav";
const Home = () => {
  return (
    <div>
      <h1>this is the home page</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>this is the about page</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>this is the contact page</h1>
    </div>
  );
};
const Main = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/box">Boxes</NavLink>
          </li>
        </ul>
      </nav>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/box" component={BoxNav} />
      </switch>
    </main>
  );
};

export default Main;
