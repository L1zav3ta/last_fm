import { Link } from "react-router-dom";
import { TAlbum } from "../../types/TAlbum";
import { Content } from "./Content";


interface IAlbumsSearch {
    albums:  TAlbum[];
};

export const AlbumsList = (props: IAlbumsSearch) => {
    const {albums} = props;
    return(
        <section className="main__section">
            <h2 className="main__search-content__title"><Link to="/" className="link">Albums</Link></h2>
            <ul id="searchAlbumList" className="main__search-content__block-list">
            {albums.map((album, idx) => 
                <Content
                    key={idx}
                    title={album.albumName}
                    subtitle={album.artistName}
                    imgSrc={album.albumImgSrc}
                />
            )}
            </ul>
            <Link to="/" id="moreAlbums" className="main__search-content__more-link link">More albums</Link>
        </section>
    );
};
