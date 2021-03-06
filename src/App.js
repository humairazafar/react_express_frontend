
import './App.css';

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router-dom"

//import pages to create routes

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"


function App() {

  //bring in  our Heroku URL for backend 

  const URL = "https://portfoliohz.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home URL={URL}/>
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
