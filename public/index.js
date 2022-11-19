import { createElementWithContent, fetchAPI } from './modules/util.js';
import { API_KEY, API_URL, MAX_ARTISTS, MAX_TRACKS } from './modules/const.js';


/**
 * Creates ul-element with genres.
 * @returns ul-element.
 */
function createGenreUl() {
    let ul = document.createElement('ul');
    ul.className = 'musical-genre-list';
    return ul;
}


/**
 * Generates Li elements with tags and adds it to UL.
 * @param {*} ul - parent ul.
 * @param {*} tags - tags of genres.
 */
function generateGenreLi(ul, tags) {
    for (let tag of tags) {
        let li = createElementWithContent(tag.name, 'li', 'musical-genre-item');
        ul.appendChild(li);
    }
}


/**
 * Adds artist to UI.
 * @param {*} item - added artist.
 */
async function addArtistsToUI(item) {
    const imgSrc = item.image[0]['#text'];
    const artistName = item.name;

    const ul = createGenreUl();
    try {
        const data = await fetchAPI(`${API_URL}?method=artist.getInfo&artist=${artistName}&user=RJ&api_key=${API_KEY}&format=json`);
        generateGenreLi(ul, data.artist.tags.tag);
    } catch (err) {
        console.log('Error: Can not fetch artists tags');
    }

    const template = `
        <img class="avatar avatar-artist" src="${imgSrc}" alt="Artist avatar">
        <h3 class="artist-name">${item.name}</h3>
    `;

    const child = createElementWithContent(template, 'li', 'main__artists-item');
    document.getElementById('artistsList').appendChild(child);
    child.appendChild(ul);
}


/**
 * Adds track to UI.
 * @param {*} item - added track.
 */
async function addTracksToUI(item) {
    const imgSrc = item.image[0]['#text'];
    const artistName = item.artist.name;
    const trackName = item.name;

    const ul = createGenreUl();
    try {
        const data = await fetchAPI(`${API_URL}?method=track.getInfo&artist=${artistName}&track=${trackName}&user=RJ&api_key=${API_KEY}&format=json`);
        generateGenreLi(ul, data.track.toptags.tag);
    } catch (err) {
        console.log('Error: Can not fetch tracks tags');
    }

    const trackContent = `
        <img class="track-img" src="${imgSrc}" alt="avatar">
    `;

    const divContent = `
        <h3 class="track-name">${trackName}</h3>
        <p class="track-artist-name">${artistName}</p>
    `;

    const trackContentHTML = createElementWithContent(trackContent, 'li', 'main__tracks-item');
    const divHTML = createElementWithContent(divContent, 'div', 'track-description');

    document.getElementById('tracksList').appendChild(trackContentHTML);
    trackContentHTML.appendChild(divHTML);
    divHTML.appendChild(ul);
}


/**
 * Fetchs artists and adds it to UI.
 */
async function addArtists() {
    try {
        const data = await fetchAPI(`${API_URL}?method=chart.gettopartists&api_key=${API_KEY}&limit=${MAX_ARTISTS}&format=json`);
        for (const item of data.artists.artist) {
            addArtistsToUI(item);
        }
    } catch (err) {
        console.log('Error: Can not fetch artists');
    }
}


/**
 * Fetchs tracks and adds it to UI.
 */
async function addTracks() {
    try {
        const data = await fetchAPI(`${API_URL}?method=chart.gettoptracks&api_key=${API_KEY}&limit=${MAX_TRACKS}&format=json`);
        for (const item of data.tracks.track) {
            addTracksToUI(item);
        }
    } catch {
        console.log('Error: Can not fetch tracks');
    }
}


/**
 * Main function.
 */
async function main() {
    addArtists();
    addTracks();
}

main();
