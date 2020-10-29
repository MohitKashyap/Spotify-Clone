
export const authEndPoint =
    "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "a1ec7e01a60742b78b8612b9484de8b6";

const scopes = [
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
export const getTokenFromResponse = () => {
    return window.location.hash.substring(1).split("&")
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
