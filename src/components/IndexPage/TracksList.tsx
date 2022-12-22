import { useEffect, useState } from "react";
import { fetchTracks } from "../../Api";
import { TTrack } from "../../types/TTrack";
import { Track } from "./Track";


export const TracksList = () => {
    const [tracks, setTracks] = useState<TTrack[]>([]);

    useEffect(() => {
        fetchTracks()
        .then(
            (result) => {
                if (!result) return;
                const tracksData = result.map((item: {name: string, image: any, artist: {name: string}}) => {
                    const track: TTrack = {
                        trackName: item.name,
                        trackImgSrc: item.image[0]['#text'],
                        artistName: item.artist.name,
                    }
                    return track;
                })
                setTracks(tracksData);
            }
        );
    }, []);

    return (
        <ul className="main__tracks-list">
            {tracks.map((track, idx) => 
                <Track 
                    key={idx}
                    trackName={track.trackName}
                    trackImgSrc={track.trackImgSrc}
                    artistName={track.artistName}
                />
            )}
        </ul>
    );
};
