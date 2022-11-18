const API_KEY = '617e499ad5ba1abf497871f591effb53';
const ARTISTS = 'Artists';
const TRACKS = 'Tracks';
const API_URL = 'https://ws.audioscrobbler.com/2.0/';

function stringToHTML(str, elemType, className) {
	let dom = document.createElement(elemType);
    dom.className = className
	dom.innerHTML = str;
	return dom;
};

function createGenreUl() {
    let ul = document.createElement('ul');
    ul.className = 'musical-genre-list'
    return ul;
}

function generateGenreLi(ul, tags) {
    for(let tag of tags) {
        let li = stringToHTML(tag.name, 'li', 'musical-genre-item')
        ul.appendChild(li)
    }
}

async function getArtistTags(artistName) {
    let url = `${API_URL}?method=artist.getInfo&artist=${artistName}&user=RJ&api_key=${API_KEY}&format=json`
    const response = await fetch(url);
    const data = await response.json();
    return data.artist.tags.tag;
}

async function getTrackTags(artistName, trackName) {
    let url = `${API_URL}?method=track.getInfo&artist=${artistName}&track=${trackName}&user=RJ&api_key=${API_KEY}&format=json`
    const response = await fetch(url);
    const data = await response.json();
    return data.track.toptags.tag;
}

async function addArtistsToUI(item) {
    imgSrc = item.image[0]['#text']

    let ul = createGenreUl();
    
    const tags = await getArtistTags(item.name)
   
    generateGenreLi(ul, tags);

    const template = `
        <img class="avatar avatar-artist" src="${imgSrc}" alt="Artist avatar">
        <h3 class="artist-name">${item.name}</h3>
    `;
    const child = stringToHTML(template,'li', 'main__artists-item');
    document.getElementById('artistsList').appendChild(child)
    child.appendChild(ul)
}

async function addTracksToUI(item) {
    let imgSrc = item.image[0]['#text'];
    let artistName = item.artist.name;
    let trackName = item.name;
    let ul = createGenreUl();
    const tags = await getTrackTags(artistName, trackName);

    generateGenreLi(ul, tags);

    const trackContent = `
        <img class="track-img" src="${imgSrc}" alt="avatar">
    `;
    
    let divContent = `
        <h3 class="track-name">${trackName}</h3>
        <p class="track-artist-name">${artistName}</p>
    `;

    const trackContentHTML = stringToHTML(trackContent, 'li', 'main__tracks-item');
    const divHTML = stringToHTML(divContent, 'div', 'track-description');

    document.getElementById('tracksList').appendChild(trackContentHTML)
    trackContentHTML.appendChild(divHTML)
    divHTML.appendChild(ul)
}

async function fetchContent(section) {
    let url = '';

    if(section === ARTISTS) {
        url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
    } else {
        url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if(section === ARTISTS) {
        return data.artists.artist
    } else {
        return data.tracks.track;
    }
}

async function addContent(section) {
    const content = await fetchContent(section);
    let countItems;

    if(section === ARTISTS) {
        if(content.length > 12) 
            countItems = 12;
        else 
            countItems = content.length;
    }

    if(section === TRACKS){
        if(content.length > 15) 
            countItems = 15;
        else 
            countItems = content.length;
    }

    for (let i = 0; i < countItems; i++) {
        if(section === ARTISTS)
            addArtistsToUI(content[i]);
        else 
            addTracksToUI(content[i]);
    }
}

async function main() {
    addContent(ARTISTS);
    addContent(TRACKS);
}

main();