import React, { Component } from 'react';
import "./About.css";

export class About extends Component{
    render(){
        return(
            <div class="container">
                <h1>About Us</h1>
                <main>
                    <div>
                        <h3>History</h3>
                        <div class="row">
                            Our journey began with a simple idea: to provide a platform where gamers can connect, share their
                            experiences, and make informed decisions about the games they play. We envisioned a platform where
                            gamers like themselves could not only write descriptive reviews but also score different aspects
                            of games, from gameplay and graphics to story and overall experience.<br/>
                            From the very beginning, we believed in the power of user-generated content. That is why our platform 
                            was built around the idea that the most authentic and valuable insights come from the players themselves. 
                        </div>
                        <br/>
                        <h3>Mission</h3>
                        <div class="row">
                            Our mission is to empower gamers with reliable, honest, and insightful game reviews. We aim to
                            simplify the process of discovering and enjoying video games by providing a comprehensive platform
                            that caters to all gaming preferences. Our mission is to foster a vibrant gaming community where
                            players can connect, share, and make informed decisions about the games they play. We are dedicated
                            to promoting transparency, inclusivity, and respect within the gaming world.
                        </div>
                        <br/>
                        <h3>Vision</h3>
                        <div class="row">
                            Our vision is to be the premier destination for gamers worldwide, offering a diverse and engaging
                            ecosystem where gaming enthusiasts can thrive. We aspire to create a dynamic space where users can
                            confidently explore and discuss a wide range of video games. Our vision is to continually enhance
                            our app, adapting to the ever-evolving gaming industry and technology to provide the most innovative
                            and personalized gaming experiences. We strive to be a catalyst for positive change within the gaming
                            community, contributing to the growth and evolution of this incredible industry we all love.
                        </div>
                        <br/>
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