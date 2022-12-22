import { Link } from "react-router-dom"
import { Content } from "./Content"

interface IAlbumsSearch {
    albums:  any[];
}

export const AlbumsList = (props: IAlbumsSearch) => {

    return(
        <section className="main__section">
            <h2 className="main__search-content__title"><Link to="/" className="link">Albums</Link></h2>
            <ul id="searchAlbumList" className="main__search-content__block-list">
            {props.albums.map((album, idx) => 
                <Content
                    key={idx}
                    title={album.name}
                    subtitle={album.artist}
                    imgSrc={album.image[2]['#text']}
                />
            )}
            </ul>
            <Link to="/" id="moreAlbums" className="main__search-content__more-link link">More albums</Link>
        </section>
    )
}