import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AllTeams from "./components/AllTeams/AllTeams";
import Details from "./components/Details/Details";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/sports">
            <AllTeams />
          </Route>
          <Route exact path="/allteam/:teamID">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
