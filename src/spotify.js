// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint="https://accounts.spotify.com/authorize";
/*
This sends the user to spotify for authorization 
And when the authorization is complete with the spotify's api
It redirects us to this app
*/
const redirectUri = "http://localhost:3000/";
const clientId = "9121191a99ea4ae99add6921cf4f6241"


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

// Main Access Url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


// Getting The Token From the Url (Access Authorized Token)
export const getTokenFromUrl = () => {
    // Creates a substring starting from the character "#"
    return window.location.hash
    .substring(1)
    .split('&') // splits the long substring by ending them at the character "&"
    .reduce((initial,item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
        },{})
}

