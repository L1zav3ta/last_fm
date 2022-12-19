import { createElementWithContent, fetchAPI } from './modules/util.js';
import { API_KEY, API_URL, SEARCH_LIMIT } from './modules/const.js';


const searchForm = document.querySelector('.main__search-content__search-form');
const searchInput = document.querySelector('.main__search-content__search-form__input');
const mainSections = document.getElementsByClassName('main__section');
let searchValue = searchInput.value;

searchInput.addEventListener('input', (event) => {
    searchValue = event.target.value;
});


/**
 * Describes events when sending a search value: 
 *              1. cleans up the contents of the past search, 
 *              2. searches for new content,
 *              3. adds new search content to the user interface.
 */
searchForm.addEventListener('submit', async (e) => {
    let searchData = [];
    e.preventDefault();
    if (!searchValue)
        return;

    document.getElementById('search-value').textContent = `"${searchValue}"`;

    clearElemContent('searchArtistList');
    clearElemContent('searchAlbumList');
    clearElemContent('trackTable');

    try {
        Promise.allSettled([
            search(searchValue, 'artist'),
            search(searchValue, 'album'),
            search(searchValue, 'track')
        ])
            .then((res) => {
                searchData.push(...res.map(item => item.value));
                addSearchResultToUI(searchData);
            });
    } catch {
        console.log('Error: Can not fetch search');
    }
})


/**
 * Hiddens content by reset.
 */
searchForm.addEventListener('reset', () => {
    for (const section of mainSections) {
        section.style.display = 'none';
    }
})


/**
 * Removes all child elements from the parent by its parentID.
 * @param {*} elemId - id of element.
 */
function clearElemContent(elemId) {
    const parent = document.getElementById(elemId);
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}


/**
 * Adds found artists and albums to UI.
 * @param {*} parentId - ID of the parent element to insert content in.
 * @param {*} title - Content title (artist name or album title).
 * @param {*} subtitle - the number of times the artist has listened or the name of the artist of the album.
 * @param {*} imgSrc - link to the image of the content element.
 */
function addContentToUI(parentId, title, subtitle, imgSrc) {
    const parent = document.getElementById(parentId);
    const template = `
            <a class="main__search-content__block-title link">${title}</a>
            <a class="main__search-content__block-subtitle link">${subtitle}</a>
            <img class="main__search-content__block-img" src="${imgSrc}" alt="Image for ${title}">
    `;
    const child = createElementWithContent(template, 'li', 'main__search-content__block-item');
    parent.appendChild(child);
}


/**
 * Adds found tracks to UI.
 * @param {*} track - information about the track being added.
 */
function addTracksToUI(track) {
    const parent = document.getElementById('trackTable');
    const imgSrc = track.image[1]['#text'];

    const template = `
        <td class="main__search-content__track-table__play">
            <i class="material-icons" style="font-size: 36px; color: #999;">play_circle_filled</i>
        </td>
        <td class="main__search-content__track-table__music">
            <img class="main__search-content__track-table__music-img" src="${imgSrc}">
        </td>
        <td class="main__search-content__track-table__favorite">
            <i class="material-icons" style="font-size: 16px; color: #999">favorite_border</i>
        </td>
        <td class="main__search-content__track-table__music-name">
            <a class="link">${track.name}</a>
        </td>
        <td><a class="link">${track.artist}</a></td>
        <td class="main__search-content__track-table__duration">3:14</td>
    `;
    const child = createElementWithContent(template, 'tr', 'table__bottom__border');
    parent.appendChild(child);
}


/**
 * Adds the "not found" message.
 * @param {*} parentId - id of the parent element.
 */
function addNotResultsMsgToUI(parentId) {
    const msg = 'Not results';
    const child = createElementWithContent(msg, 'p', 'main__search-content__block-item');
    document.getElementById(parentId).appendChild(child);
}


/**
 * Retrieves search results and passes them to functions to add to the user interface.
 * @param {*} content - array of search results.
 */
async function addSearchResultToUI(content) {
    if (content.length < 3)
        return;

    const artists = content[0].results.artistmatches.artist;
    const albums = content[1].results.albummatches.album;
    const tracks = content[2].results.trackmatches.track;

    for (const section of mainSections) {
        section.style.removeProperty('display');
    }

    if (artists.length) {
        for (const artist of artists) {
            addContentToUI('searchArtistList', artist.name, artist.listeners, artist.image[2]['#text']);
        }
    }
    else {
        addNotResultsMsgToUI('searchArtistList');
        document.getElementById('moreArtist').setAttribute("style", "display: none;");
    }

    if (albums.length)
        for (const album of albums) {
            addContentToUI('searchAlbumList', album.name, album.artist, album.image[2]['#text']);
        }
    else {
        addNotResultsMsgToUI('searchAlbumList');
        document.getElementById('moreAlbums').setAttribute("style", "display: none;");
    }

    if (tracks.length)
        for (const track of tracks) {
            addTracksToUI(track);
        }
    else {
        addNotResultsMsgToUI('trackTable');
        document.getElementById('moreTracks').setAttribute("style", "display: none;");
    }
}


/**
 * Search for content by the entered value.
 * @param {*} value - searched value.
 * @param {*} section - section for the search (artists, albums or tracks).
 * @returns all content which contains searched value (limit of search = 8).
 */
async function search(value, section) {
    return fetchAPI(`${API_URL}?method=${section}.search&${section}=${value}&api_key=${API_KEY}&limit=${SEARCH_LIMIT}&format=json`);
}
