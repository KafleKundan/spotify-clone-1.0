import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Home, Search, LibraryMusic } from "@mui/icons-material";



const Sidebar = () => {
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="logo"
            />
            <SidebarOption Icon= {Home}  title="Home"/>
            <SidebarOption Icon= {Search}  title="Search"/>
            <SidebarOption Icon= {LibraryMusic} title="Your Library"/>

            <h4 className="sidebar__title">PLAYLISTS</h4>
            <hr />
        </div>
    );
};

export default Sidebar;
