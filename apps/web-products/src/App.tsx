import "./App.css";
import Principal from "./module/principal/principal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
<Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

/**import Principal from "./module/principal/principal";
import { Prueba } from "./prueba";
 * 
 * npm install react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      {}
      </Router>
    );
  }
  function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        { Agrega más rutas según tus necesidades }
        </Switch>
        </Router>
      );
    }
 */
