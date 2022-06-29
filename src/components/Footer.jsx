import React from "react";
import "../styles/Footer.css";
import {
    PlayCircle,
    SkipPrevious,
    SkipNext,
    Shuffle,
    PlaylistPlay,
    VolumeDown,
    RepeatRounded,
} from "@mui/icons-material";
import { Slider } from "@mui/material";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    src="https://imgs.search.brave.com/Ze-YWfdJjtMLCkYVPxsW5irxVoQvINiv6gEUutSV-uo/rs:fit:362:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/LTVBRm5tX1VxTXZt/UmlQMnlCV3R3SGFK/cyZwaWQ9QXBp"
                    alt=""
                    className="footer__albumLogo"
                />
                <div className="footer__songInfo">
                    <h4>10 Freaky Girls</h4>
                    <p>21 Savage</p>
                </div>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircle fontSize="large" className="footer__icon" />
                <SkipNext className="footer__icon" />
                <RepeatRounded  className="footer__green" />

            </div>
            <div className="footer__right">
                <h4>
                    <PlaylistPlay />
                </h4>
                <h4>
                    <VolumeDown />
                </h4>
                <Slider size="small" className="footer__right_slider" />
            </div>
        </div>
    );
};

export default Footer;

