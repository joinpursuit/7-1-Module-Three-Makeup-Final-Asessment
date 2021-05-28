import "./App.css";
import {Switch, Route} from "react-router-dom"
import NavBar from "./Components/NavBar"
import Movies from "./Components/Movies"
import Locations from "./Components/Locations"
import People from "./Components/People"


function App() {
  return (
    <div className="app">
      <NavBar/>
      <main>
        <Switch>
          <Route exact path="/">
          <h1>Welcome to GhibliApp</h1>
          </Route>
          <Route path="/movies" component={Movies}/>
          <Route path="/people" component={People}/>
          <Route path="/locations" component={Locations}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;