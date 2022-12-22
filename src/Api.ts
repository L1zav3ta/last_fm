const API_KEY = '617e499ad5ba1abf497871f591effb53';
const API_URL = 'https://ws.audioscrobbler.com/2.0/';

const MAX_ARTISTS = 12;
const MAX_TRACKS = 15;
const SEARCH_LIMIT = 8;


/**
 * Fitchs data by api url.
 * @param {*} url - url for api fetch.
 * @returns fetch data.
 */
async function fetchAPI(url: string) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};


/**
 * Fitchs artists.
 * @returns fetched artists data.
 */
export async function fetchArtists() {
    try {
        const data = await fetchAPI(`${API_URL}?method=chart.gettopartists&api_key=${API_KEY}&limit=${MAX_ARTISTS}&format=json`);
        return data.artists.artist;
    } catch (err) {
        console.log('Error: Can not fetch artists');
    }
};


/**
 * Fitchs tracks.
 * @returns fetched tracks data.
 */
export async function fetchTracks () {
    try {
        const data = await fetchAPI(`${API_URL}?method=chart.gettoptracks&api_key=${API_KEY}&limit=${MAX_TRACKS}&format=json`);
        return data.tracks.track;
    } catch {
        console.log('Error: Can not fetch tracks');
    }
};


/**
 * Fitchs track genres.
 * @param artistName - artist name.
 * @param trackName - track name.
 * @returns fetched track genres.
 */
export async function fetchTrackGenres (artistName:string, trackName: string) {
    try {
        const data = await fetchAPI(`${API_URL}?method=track.getInfo&artist=${artistName}&track=${trackName}&user=RJ&api_key=${API_KEY}&format=json`);
        return data.track.toptags.tag;
    } catch (err) {
        console.log(`Error: Can not fetch tags for track '${trackName}'`);
    }
};


/**
 * Fitchs artist genres.
 * @param artistName - artist name.
 * @returns fetched artist genres.
 */
export async function fetchArtistGenres (artistName:string) {
    try {
        const data = await fetchAPI(`${API_URL}?method=artist.getInfo&artist=${artistName}&user=RJ&api_key=${API_KEY}&format=json`);
        return data.artist.tags.tag;
    } catch (err) {
        console.log(`Error: Can not fetch tags for artist '${artistName}'`);
    }
};


/**
 * Search by input value.
 * @param value - value for search.
 * @param section - section of search.
 * @returns searched data for artists/tracks/albums.
 */
export async function fetchSearchData(value: string, section: string) {
    try{
        const data = await fetchAPI(`${API_URL}?method=${section}.search&${section}=${value}&api_key=${API_KEY}&limit=${SEARCH_LIMIT}&format=json`);
        return data;
    } catch (err) {
        console.log(`Error: Can not fetch search for ${section} '${value}'`);
    }
};
