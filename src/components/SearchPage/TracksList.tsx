import { Link } from "react-router-dom";
import { Track } from "./Track";

interface ITracksSearch {
    tracks:  any[];
}

export const TracksList = (props: ITracksSearch) => {
    return(
        <section className="main__section">
            <h2 className="main__search-content__title"><Link to="/" className="link">Tracks</Link></h2>
            <table className="main__search-content__track-table">
                <tbody id="trackTable">
                {props.tracks.map((track, idx) => 
                    <Track
                        key={idx}
                        trackName={track.name}
                        artistName={track.artist}
                        imgSrc={track.image[1]['#text']}
                    />
                )}
                </tbody>
            </table>
            <Link to="/" id="moreTracks" className="main__search-content__more-link link">More tracks</Link>
        </section>
    );
}