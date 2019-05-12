import React from "react";
import "./Header.css";

const Header = props =>
    <div className="jumbotron text-center">
        <h1 className="display-4">Memory Game</h1>
        <p>Score: {props.score}</p>
        <p>High Score: {props.highScore}</p>
        <p id= "message">{props.message}</p>
    </div>

export default Header;