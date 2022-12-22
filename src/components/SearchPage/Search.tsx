import { Link } from 'react-router-dom'
import { SearchForm } from './SearchForm'
import { useState } from 'react';
import { fetchSearchData } from '../../Api';
import { ArtistsList } from './ArtistsList';
import { TracksList } from './TracksList';
import { AlbumsList } from './AlbumsList';
import { NotResults } from './NotResults';
import { TArtist } from '../../types/TArtist';
import { TTrack } from '../../types/TTrack';
import { TAlbum } from '../../types/TAlbum';


interface IData {
    artists: TArtist[];
    albums: TAlbum[];
    tracks: TTrack[];
};


/**
 * Search by the entered value.
 * @param {*} value - searched value.
 * @param {*} section - section for the search (artists, albums or tracks).
 * @returns all content which contains searched value (limit of search = 8).
 */
async function search (value: string, section: string) {
    return fetchSearchData(value, section)
};


/**
 * Get artist list.
 * @param data - fetched artist data.
 * @returns artists list with type of TArtist[].
 */
function getAtrists(data: any): TArtist[] {
    if (!data) return []
    const artists = data.results.artistmatches.artist.map((item: {name: string, image: any, listeners: number}) => {
        const artist: TArtist = {
            artistName: item.name,
            artistImgSrc: item.image[2]['#text'],
            listeners: item.listeners,
        }
        return artist
    });
    return artists;
};


/**
 * Get album list.
 * @param data - fetched album data.
 * @returns albums list with type of TAlbum[].
 */
function getAlbums(data: any): TAlbum[] {
    if (!data) return []
    const albums = data.results.albummatches.album.map((item: {name: string, image: any, artist: string}) => {
        const album: TAlbum = {
            albumName: item.name,
            albumImgSrc: item.image[2]['#text'],
            artistName: item.artist,
        }
        return album
    });
    return albums;
};


/**
 * Get track list.
 * @param data - fetched track data.
 * @returns tracks list with type of TTrack[].
 */
function getTracks(data: any): TTrack[] {
    if (!data) return []
    const tracks = data.results.trackmatches.track.map((item: {name: string, image: any, artist: string}) => {
        const track: TTrack = {
            trackName: item.name,
            trackImgSrc: item.image[1]['#text'],
            artistName: item.artist,
        }
        return track
    });
    return tracks;
};


/**
 * Component for search.
 * @returns HTML Element with search results.
 */
export const Search = () => {
    const [searchData, setSearchdata] = useState<IData>({
        artists: [],
        albums: [],
        tracks: [],
    });
    const [value, setValue] = useState('');

    const handleReset = () => {
        setSearchdata({
            artists: [],
            albums: [],
            tracks: [],
        });
        setValue('');
    }

    const handleSubmit = (text: string) => {
        if (!text) return;

        try {
            Promise.allSettled([
                search(text, 'artist'),
                search(text, 'album'),
                search(text, 'track')
            ])
            .then((results) => {
                const data: any[] = [];
                data.push(...results.map(res => {
                    if (res.status === 'fulfilled') 
                        return res.value;
                }));

                if(!data.length) 
                    return;
                
                setSearchdata({
                    artists: getAtrists(data[0]),
                    albums: getAlbums(data[1]),
                    tracks: getTracks(data[2]),
                });
                setValue(text);
            });
        } catch {
            console.log('Error: Can not fetch search');
        } 
    }

    return (
        <main className="main">
            <div className="container">
                <section className="main__section">
                    {value? 
                        <h1 className="main__search-title">Search results for "{value}"
                            <span id="search-value"></span> 
                        </h1>
                        : <></>
                    }
                    <nav>
                        <ul className="main__search-nav-list">
                            <li className="main__search_nav-item"><Link to="/">Top Results</Link></li>
                            <li className="main__search_nav-item"><Link to="/">Artists</Link></li>
                            <li className="main__search_nav-item"><Link to="/">Albums</Link></li>
                            <li className="main__search_nav-item"><Link to="/">Tracks</Link></li>
                        </ul>
                    </nav>
                </section>
            </div>
            <hr color="#999" style={{height: "1px", border: "none"}}/>
            <div className="container">
                <div className="main__search-content">
                    <div className="main__search-content__left-side">
                        <SearchForm 
                            onSubmit={handleSubmit}
                            onReset={handleReset}
                        />
                        {searchData.artists.length?
                            <ArtistsList 
                                artists={searchData.artists}
                            />
                            : (value && !searchData.artists.length)? 
                                <NotResults section="artists"/>  : <></>
                        }
                        {searchData.albums.length? 
                            <AlbumsList
                                albums={searchData.albums}
                            />
                            : (value && !searchData.albums.length)? 
                                <NotResults section="albums"/>  : <></>
                        }
                        {searchData.tracks.length? 
                            <TracksList
                                tracks={searchData.tracks}
                            />
                            : (value && !searchData.tracks.length)? 
                                <NotResults section="tracks"/>  : <></>
                        } 
                    </div>
                    <div className="main__search-content__right-side">
                        <p className="main__search-content__right-side__p">Don't want to see ads? 
                            <Link className="link" to='/'>Upgrade Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
