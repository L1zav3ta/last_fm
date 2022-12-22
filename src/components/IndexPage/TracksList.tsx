import { TTrack } from "../../types/TTrack";
import { Track } from "./Track";

interface ITracks {
    tracks: TTrack[];
}

export const TracksList = (props: ITracks) => {
    return (
        <ul className="main__tracks-list">
            {props.tracks.map((track, idx) => 
                <Track 
                    key={idx}
                    image={track.image[0]['#text']}
                    name={track.name}
                    artist={track.artist.name}
                />
            )}
        </ul>
    );
}