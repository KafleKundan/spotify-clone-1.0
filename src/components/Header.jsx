import React from "react";
import "../styles/Header.css";

import {useDataLayerValue} from "../DataLayer"


import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
    const [{user}]= useDataLayerValue()
    return (
        <div className="header">
            <div className="header__left">
                <Search />
                <input
                    type="text"
                    name="search"
                    placeholder="Search for Artists, Songs, or Podcasts..."
                    id=""
                />
            </div>
            <div className="header__right">
                <Avatar
                    src={user?.images[0]?.url}
                    alt="user.display_name"
                    className="header__avatar"
                    sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: "rgba(0,0,0,.7)",
                    }}
                />
                <h5>{user?.display_name}</h5>
            </div>
        </div>
    );
};

export default Header;
