import { Link } from 'react-router-dom'
import { SearchForm } from './SearchForm'
import { useState } from 'react';
import { fetchSearchData } from '../../Api';
import { ArtistsList } from './ArtistsList';
import { TracksList } from './TracksList';
import { AlbumsList } from './AlbumsList';
import { NotResults } from './NotResults';

async function search (value: string, section: string) {
    return fetchSearchData(value, section)
}
   
interface IData {
    artists: any[],
    albums: any[],
    tracks: any[],
}

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
                        return res.value
                }));
                if(!data.length) 
                    return [];
                setSearchdata({
                    artists: data[0].results.artistmatches.artist,
                    albums: data[1].results.albummatches.album,
                    tracks: data[2].results.trackmatches.track
                })
                setValue(text)
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
                                <NotResults/>  : <></>
                        }
                        {searchData.albums.length? 
                            <AlbumsList
                                albums={searchData.albums}
                            />
                            : (value && !searchData.albums.length)? 
                                <NotResults/>  : <></>
                        }
                        {searchData.tracks.length? 
                            <TracksList
                                tracks={searchData.tracks}
                            />
                            : (value && !searchData.tracks.length)? 
                                <NotResults/>  : <></>
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
    )
}