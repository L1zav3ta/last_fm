import { GenresList } from "../Genre/GenresList";


interface ITrackProps {
    trackName: string;
    trackImgSrc: string;
    artistName: string;
};

export const Track = (props: ITrackProps) => {
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
