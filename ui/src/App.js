import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import { GameBrowse } from './GameBrowse';
import { GameView } from './components/GameView';
import {Login } from './Login'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";


function App() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    return (
    <CookiesProvider>
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>
           </li>
                        </ul>
                        {JSON.stringify(cookies["user"]) != null ? <p className="userName">{JSON.stringify(cookies["user"]).replaceAll('"', "").toUpperCase()}</p> : ""}
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path ='/gamebrowse' element={<GameBrowse/>}/>
        <Route path ='/gameview/:gameId' element={<GameView/>}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
     </BrowserRouter>
     </CookiesProvider>
  );
}

export default App;
