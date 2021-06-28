import "./App.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
