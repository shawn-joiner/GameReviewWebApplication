import React, { Component } from 'react';
import "./About.css";

export class About extends Component{
    render(){
        return(
            <div className="about-container">
                <main>
                    <div>
                        <div className="about-row">
                            <h3>Team Members:</h3>
                            <dl>
                                <dt>- Team Lead:</dt>
                                <dd>Shawn Joiner</dd>
                                <dt>- Sr Developer:</dt>
                                <dd>Michael Rosario</dd>
                                <dt>- Jr Developer:</dt>
                                <dd>Fabian Abarca</dd>
                            </dl>
                            <br />
                            <h3>Tech Stack: </h3>
                            <ul>
                                <li> ReactJS</li>
                                <li> Microsoft SQL Server</li>
                                <li> .NET Core Web API (C#)</li>
                            </ul>
                            <br />
                            <h3>To visit the project GitHub press <a href="https://github.com/FranklinCSPracticum/2023_F_Shawn">here</a></h3>
                        </div>
                    </div>
                </main>
                <footer>
                    <div>
                        &copy; 2023 - GR
                    </div>
                </footer >
            </div>

        )
    }
}