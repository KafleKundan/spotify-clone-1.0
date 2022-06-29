import React from "react";
import "../styles/Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player__body">
                {/* sidebar */}
                <Sidebar/>
                {/* body */}
                <Body spotify = {spotify}/>
            </div>

            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Player;
