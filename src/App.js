import { useEffect } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    // const [token, setToken] = useState(null)
    // Rather than keeping the token here we dispatch it to the DataLayer

    const [{token}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        // Removing the token from the URL
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            // Adding the token to the DataLayer
            dispatch({
                type:"SET_TOKEN",
                token: _token,
            })
            // Accessing the token to get Data
            spotify.setAccessToken(_token);
            // Getting user information
            spotify.getMe().then((_user) => {
                dispatch({
                    type: "SET_USER",
                    // user variable of DataLayer value = username from the spotify
                    user: _user,
                });
            });

            spotify.getUserPlaylists().then((_playlists)=>{
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: _playlists,
                })

            })

            

        }
    },[token,dispatch]);


    return (
        <div className="app">
            {/* Renders the login page if token is not available */}
            {token ? <Player spotify = {spotify} /> : <Login />}
        </div>
    );
}

export default App;

// 03 :35:50

