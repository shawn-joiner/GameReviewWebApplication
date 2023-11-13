import './App.css';
import {Home} from './Home';
import {About} from './About';
import {Department} from './Department';
import {Employee} from './Employee';
import { GameBrowse } from './GameBrowse';
import { ReviewBrowse } from './ReviewBrowse';
import { GameView } from './components/GameView';
import { ReviewView } from './components/ReviewView';
import { CreateReview } from './CreateReview';
import { Login } from './Login'
import { Register } from './Register';
import { Profile } from './Profile';
import { EditReview } from './EditReview';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]); // eslint-disable-line no-unused-vars

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
            <NavLink className="btn btn-light btn-outline-primary" to="/gamebrowse">
              Games
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/reviewbrowse">
              Reviews
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/about">
              About
            </NavLink>
          </li>
          <li>
            {JSON.stringify(cookies["user"]) != null ? <p className="userName">{JSON.stringify(cookies["user"]).replaceAll('"', "").toUpperCase()}</p> : ""}
          </li>
        </ul>

        <ul className="navbar-nav" id="navbar-login">
          <li className="nav-item- m-1">
            {cookies["user"] !== undefined ? <NavLink className="btn btn-light btn-outline-primary" to='/createreview'>
              Create Review
            </NavLink> : ""}
          </li>
          <li className="nav-item- m-1">
            {cookies["user"] !== undefined ? <NavLink className="btn btn-light btn-outline-primary" to={'/profile/' + JSON.stringify(cookies["user"]).replaceAll('"', "")}>
              Profile
            </NavLink> : ""}                  
          </li>
          <li className="nav-item- m-1">
            {cookies["user"] !== undefined ? <NavLink className="btn btn-light btn-outline-primary" onClick={() => {removeCookie("user");}}  to="/home">
              Logout
            </NavLink> : <NavLink className="btn btn-light btn-outline-primary" to="/login">
              Login
            </NavLink>}
          </li>                             
        </ul>          
      </nav>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path ='/gamebrowse' element={<GameBrowse/>}/>
        <Route path='/gameview/:gameId' element={<GameView />} />
        <Route path='/profile/:userName' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reviewbrowse' element={<ReviewBrowse />} />
        <Route path='/reviewview/:reviewId' element={<ReviewView />} />
        <Route path='/createreview' element={<CreateReview />} />
        <Route path='/editreview/:reviewId' element={<EditReview />} />
      </Routes>
    </div>
     </BrowserRouter>
     </CookiesProvider>
  );
}

export default App;
