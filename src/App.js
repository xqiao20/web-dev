import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from './components/HelloWorld';
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";




function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/hello"
                       element={<HelloWorld/>}/>
                <Route path="/"
                       element={<Labs/>}/>
                <Route path="/tuiter/home" element={<HomeScreen/>}/>
                <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
