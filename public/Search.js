const API_KEY = '617e499ad5ba1abf497871f591effb53';
const API_URL = 'https://ws.audioscrobbler.com/2.0/';
const SEARCH_LIMIT = 8;

const searchForm = document.querySelector('.main__search-content__search-form');
const searchInput = document.querySelector('.main__search-content__search-form__input');
let searchValue = searchInput.value;

searchInput.addEventListener('input', (event) => {
    searchValue = event.target.value;
});

/**
 * Describes events when sending a search value: 
 *              1. cleans up the contents of the past search, 
 *              2. searches for new content,
 *              3. adds new search content to the user interface
 */
searchForm.addEventListener('submit', async (e) => {
    let searchData = [];
    e.preventDefault();
    clearElemContent('searchArtistList'); 
    clearElemContent('searchAlbumList');
    clearElemContent('trackTable');
    
    const artists = await search(searchValue, 'artist');
    const albums = await search(searchValue, 'album');
    const tracks = await search(searchValue, 'track');

    searchData.push(artists,albums, tracks); 
    addSearchResultToUI(searchData);
})

/**
 * Removes all child elements from the parent by its parentID
 * @param {*} elemId 
 * 
 */
function clearElemContent(elemId) {
    const parent = document.getElementById(elemId);

    while(parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

/**
 * Converts string to HTML element 
 * and wraps it in the specified element with the specified className
 * @param {*} str - converted string
 * @param {*} elemType - type of wrapper element
 * @param {*} className - Name of the wrapper element class
 * @returns 
 */
function stringToHTML(str, elemType, className) {
	let dom = document.createElement(elemType);
    dom.className = className
	dom.innerHTML = str;
	return dom;
};

/**
 * Adds found artists and albums to UI
 * @param {*} parentId - ID of the parent element to insert content in
 * @param {*} title - Content title (artist name or album title)
 * @param {*} subtitle - the number of times the artist has listened or the name of the artist of the album
 * @param {*} imgSrc - link to the image of the content element
 */
function addContentToUI(parentId, title, subtitle, imgSrc) {
    const parent = document.getElementById(parentId);

    let template = `
            <a class="main__search-content__block-title link">${title}</a>
            <a class="main__search-content__block-subtitle link">${subtitle}</a>
            <img class="main__search-content__block-img" src="${imgSrc}" alt="Image for ${title}">
    `;
    const child = stringToHTML(template, 'li', 'main__search-content__block-item');
    parent.appendChild(child);
}

/**
 * Adds found tracks to UI
 * @param {*} track - information about the track being added
 */
function addTracksToUI(track) {
    const parent =document.getElementById('trackTable');
    let imgSrc = track.image[1]['#text'];
    
    let template = `
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
    const child = stringToHTML(template, 'tr', 'table__bottom__border');
    parent.appendChild(child);
}


function addNotResultsMsgToUI(parentId) {
    const msg = 'Not results'
    const child = stringToHTML(msg, 'p', 'main__search-content__block-item')
    document.getElementById(parentId).appendChild(child)
}
/**
 * Retrieves search results and passes them to functions to add to the user interface
 * @param {*} content 
 */
async function addSearchResultToUI(content) {
    const artists = content[0].results.artistmatches.artist;
    const albums = content[1].results.albummatches.album;
    const tracks = content[2].results.trackmatches.track;

    if(!artists.length) 
        addNotResultsMsgToUI('searchArtistList')
    else {
        for(let artist of artists) {
            addContentToUI('searchArtistList', artist.name, artist.listeners, artist.image[2]['#text'])
        }
    }

    if(!albums.length) 
        addNotResultsMsgToUI('searchAlbumList')
    else {
        for(let album of albums) {
            addContentToUI('searchAlbumList', album.name, album.artist, album.image[2]['#text'])
        }
    }

    if(!tracks.length) 
        addNotResultsMsgToUI('trackTable')
    else {
        for(let track of tracks) {
            addTracksToUI(track);
        }
    }
}

/**
 * Search for content by the entered value
 * @param {*} value - searched value
 * @param {*} section - section for the search (artists, albums or tracks)
 * @returns all content which contains searched value (limit of search = 8)
 */
async function search(value, section) {
    const response = await fetch(`${API_URL}?method=${section}.search&${section}=${value}&api_key=${API_KEY}&limit=${SEARCH_LIMIT}&format=json`);
    const data = await response.json();
    return data;
}