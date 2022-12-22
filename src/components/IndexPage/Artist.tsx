import { GenresList } from "../Genre/GenresList";
import { TArtist } from "../../types/TArtist";


/**
 * Component for artist.
 * @param props - object with info about artist.
 * @returns HTML Element with artist.
 */
export const Artist = (props: TArtist) => {
    const {artistName, artistImgSrc} = props;
    return (
        <li className="main__artists-item">
            <img className="avatar avatar-artist" src={artistImgSrc} alt="Artist avatar"/>
            <h3 className="artist-name">{artistName}</h3>
            <GenresList 
                artistName={artistName}
            />
        </li>
    );
};
