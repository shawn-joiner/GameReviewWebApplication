import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
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
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function navbar() {
      var set1 = document.getElementById("hidden1");
      var set2 = document.getElementById("hidden2");
        if(cookies["user"] != undefined) {
          set1.style.display = "none";
          set2.style.display = "inline";
        } else if(cookies["user"] === undefined) {
          set1.style.display = "inline";
          set2.style.display = "none";
        }
    }

    useEffect(() => {
      navbar();
    }, [cookies["user"]]);

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
              <NavLink className="btn btn-light btn-outline-primary" to="">
               About
              </NavLink>
                            </li>
                            <li className="nav-item- m-1">
                                {cookies["user"] != undefined ? <NavLink className="btn btn-light btn-outline-primary" to='/createreivew'>
                                    Create Review
                                </NavLink> : ""}
                            </li>
            <li>
              {JSON.stringify(cookies["user"]) != null ? <p className="userName">{JSON.stringify(cookies["user"]).replaceAll('"', "").toUpperCase()}</p> : ""}
                            </li>

          </ul>
          <ul className="navbar-nav">
          <div id="hidden1">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/login">
              Login
            </NavLink>
           </li>
           </div>
           <div id="hidden2">
            <li className="nav-item- m-1">
                                    {cookies["user"] != undefined ? <NavLink className="btn btn-light btn-outline-primary" to={'/profile/' + JSON.stringify(cookies["user"]).replaceAll('"', "")}>
                                        Profile
                                    </NavLink> : ""}                  
                                </li>                              
           <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" onClick={() => {
                    removeCookie("user");}}  to="/home">
              Logout
            </NavLink>
           </li>
           </div>
            </ul>
                
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path ='/gamebrowse' element={<GameBrowse/>}/>
        <Route path='/gameview/:gameId' element={<GameView />} />
        <Route path='/profile/:userName' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reviewbrowse' element={<ReviewBrowse />} />
        <Route path='/reviewview/:reviewId' element={<ReviewView />} />
        <Route path='/createreivew' element={<CreateReview />} />
      </Routes>
    </div>
     </BrowserRouter>
     </CookiesProvider>
  );
}

export default App;
