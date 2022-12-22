import { Link } from "react-router-dom"
import { Content } from "./Content"
import { NotResults } from "./NotResults";

interface IArtistsSearch {
    artists:  any[];
}

export const ArtistsList = (props: IArtistsSearch) => {
    // if(!props.artists.length) 
    //     return (
    //         <section className="main__section">
    //             <h2 className="main__search-content__title"><Link to="/" className="link">Artists</Link></h2>
    //             <NotResults/>
    //         </section>
    // );
    return (
        <section className="main__section">
            <h2 className="main__search-content__title"><Link to="/" className="link">Artists</Link></h2>
            <ul id="searchArtistList" className="main__search-content__block-list">
            {props.artists.map((artist, idx) => 
                <Content
                    key={idx}
                    title={artist.name}
                    subtitle={artist.listeners}
                    imgSrc={artist.image[2]['#text']}
                />
            )}
            </ul>
            <Link to="/" id="moreArtist" className="main__search-content__more-link link">More artists</Link>
        </section>
    )
}