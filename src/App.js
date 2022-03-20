import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from './components/HelloWorld';
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen/index.js";
import ExploreScreen from "./components/tuiter/ExploreScreen/index.js";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path="/hello" exact={true}>
            <HelloWorld/>
          </Route>
          <Route path={["/", "/labs"]} exact={true}>
            <Labs/>
          </Route>
            <Route path="/tuiter/home" exact={true}>
            <HomeScreen/>
            </Route>
            <Route path="/tuiter/explore" exact={true}>
                <ExploreScreen/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
