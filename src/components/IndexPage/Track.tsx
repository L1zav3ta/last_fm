import { TTrack } from "../../types/TTrack";
import { GenresList } from "../Genre/GenresList";


export const Track = (props: TTrack) => {
    const {trackName, trackImgSrc, artistName} = props;
    return (
        <li className="main__tracks-item">
            <img className="track-img" src={trackImgSrc} alt="Track Avatar"/>
            <div className="track-description">
                <h3 className="track-name">{trackName}</h3>
                <p className="track-artist-name">{artistName}</p>
                <GenresList 
                    artistName={artistName}
                    trackName={trackName}
                />
            </div>
        </li>
    );
};
