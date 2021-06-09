import React, {useState} from 'react';
import "./Styling/App.css";
import Sparkle from 'react-sparkle';
import { IoIosContact } from "react-icons/io";
import {TiDocumentText, TiSocialInstagram, TiSocialLinkedin, TiHome} from "react-icons/ti";
import {FaDiscord} from "react-icons/fa";
import {DiGithubBadge} from "react-icons/di";
import {SiRiotgames} from "react-icons/si";
import {HiOutlineSparkles} from "react-icons/hi";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import About from "./Components/About";
import Resume from "./Components/Resume";
import Landing from "./Components/Landing";


function App() {

    const [showGlitter, setGlitter] = useState(true);


    const handleGlitter = () =>{
        setGlitter(!showGlitter);
    }

    /*
    ----------------------------------------------------------------------------------------------------------------
    */

    return (
        <Router>
        <div>
            <div className="main">

                <div className="glitterArea">
                    {showGlitter && <Sparkle 
                                        color={"#ffe5ff"} 
                                        minsize={900} 
                                        count={150} 
                                        fadeOutSpeed={10} 
                                        flicker={false} 
                                        className="glitter"
                    />}
                </div>

                <div className="body" >
                    <p>Virmel Gacad</p>
                    <nav className="lightBar">
                        <li className="colorOne"><Link to="/about" className="linkStyling"><IoIosContact className="hiddenIcon"/></Link></li>
                        <li className="colorTwo"><Link to="/resume" className="linkStyling"><TiDocumentText className="hiddenIcon"/></Link></li>
                        <li className="colorThree"><a href="https://www.instagram.com/virmel" className="linkStyling"><TiSocialInstagram className="hiddenIcon"/></a></li>
                        <li className="colorFour"><a href="https://www.linkedin.com/in/virmel-gacad-1a77a7198/" className="linkStyling"><TiSocialLinkedin className="hiddenIcon"/></a></li>
                        <li className="colorFive"><a href="https://discord.gg/bdKqYtKcZz" className="linkStyling"><FaDiscord className="hiddenIcon"/></a></li>
                        <li className="colorSix"><a href="https://www.github.com/virmel" className="linkStyling"><DiGithubBadge className="hiddenIcon"/></a></li>
                        <li className="colorSeven"><a href="https://na.op.gg/summoner/userName=virmel" className="linkStyling"><SiRiotgames className="hiddenIcon"/></a></li>
                        <li className="colorEight"><Link to="" className="linkStyling"><TiHome className="hiddenIcon"/></Link></li>
                    </nav>
                </div>
                <div className="componentSection">
                        <Switch>
                            <Route exact path="/about" component={About}></Route>
                            <Route exact path="/resume" component={Resume}></Route>
                            <Route exact path="" component={Landing}></Route>
                        </Switch>

                </div>

                <button className="pauseButtonContainer" onClick={handleGlitter}>{<HiOutlineSparkles/>}</button>
            </div>
        </div>
        </Router>
    )
}

export default App;