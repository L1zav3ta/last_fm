import { Link } from "react-router-dom"
import { TArtist } from "../../types/TArtist";
import { Content } from "./Content"


interface IArtistsSearch {
    artists:  TArtist[];
};

export const ArtistsList = (props: IArtistsSearch) => {
    const {artists} = props;
    return (
        <section className="main__section">
            <h2 className="main__search-content__title"><Link to="/" className="link">Artists</Link></h2>
            <ul id="searchArtistList" className="main__search-content__block-list">
            {artists.map((artist, idx) => 
                <Content
                    key={idx}
                    title={artist.artistName}
                    subtitle={artist.listeners || ''}
                    imgSrc={artist.artistImgSrc}
                />
            )}
            </ul>
            <Link to="/" id="moreArtist" className="main__search-content__more-link link">More artists</Link>
        </section>
    )
};
