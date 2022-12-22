import { Link } from "react-router-dom";
import { TTrack } from "../../types/TTrack";
import { Track } from "./Track";


interface ITracksSearch {
    tracks:  TTrack[];
}

export const TracksList = (props: ITracksSearch) => {
    const {tracks} = props;
    return(
        <section className="main__section">
            <h2 className="main__search-content__title"><Link to="/" className="link">Tracks</Link></h2>
            <table className="main__search-content__track-table">
                <tbody id="trackTable">
                {tracks.map((track, idx) => 
                    <Track
                        key={idx}
                        trackName={track.trackName}
                        trackImgSrc={track.trackImgSrc}
                        artistName={track.artistName}
                    />
                )}
                </tbody>
            </table>
            <Link to="/" id="moreTracks" className="main__search-content__more-link link">More tracks</Link>
        </section>
    );
};
