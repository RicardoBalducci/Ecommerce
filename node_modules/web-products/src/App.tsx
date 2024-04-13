import "./App.css";
import Principal from "./module/principal/principal";
import { Prueba } from "./prueba";
function App() {
  return (
    <>
      <Principal></Principal>
      <button onClick={Prueba}>Click aqui</button>
    </>
  );
}

export default App;

/*
/**
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
