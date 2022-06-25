import { useEffect, useState } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player";



const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const hash = getTokenFromUrl();
        // Removing the token from the URL
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);

            // Accessing the token to get Data
            spotify.setAccessToken(_token);
            // Getting user information
            spotify.getMe().then(user=>{
            console.log(":person: ", user)
            })

        }
    }, []);
    return (
        <div className="app">{token ? <Player/> : <Login />}</div>
    );
}

export default App;

// 1:33:09