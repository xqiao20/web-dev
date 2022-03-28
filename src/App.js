import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from './components/HelloWorld';
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import ProfileScreen from "./components/tuiter/ProfileScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tuiter from "./components/tuiter";




function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/">
                    <Route index element={<Labs/>}/>
                    <Route path="hello"
                           element={<HelloWorld/>}/>
                    <Route path="labs"
                           element={<Labs/>}/>
                    <Route path="tuiter"
                           element={<Tuiter/>}>
                        <Route path="home"
                               element={<HomeScreen/>}/>
                        <Route path="explore"
                               element={<ExploreScreen/>}/>
                        <Route path="profile"
                               element={<ProfileScreen/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
