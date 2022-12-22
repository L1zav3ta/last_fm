import { useEffect, useState } from "react";
import { fetchArtists, fetchTracks } from "../../Api";
import { TArtist } from "../../types/TArtist";
import { TTrack } from "../../types/TTrack";
import { ArtistsList } from "../IndexPage/ArtistsList"
import { TracksList } from "../IndexPage/TracksList"

export const Main = () => {
    const [artists, setArtists] = useState<TArtist[]>([]);
    const [tracks, setTracks] = useState<TTrack[]>([]);

    useEffect(() => {
        fetchArtists()
        .then(
            (result) => setArtists(result)
        );
        fetchTracks()
        .then(
            (result) => setTracks(result)
        );
    }, []);

    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">Music</h1>
                <section className="main__section">
                    <h2 className="main__title">Hot right now</h2>
                    <ArtistsList
                        artists={artists}
                    />
                </section>
                <section className="main__section">
                    <h2 className="main__title">Popular tracks</h2>
                    <TracksList
                        tracks={tracks}
                    />
                </section>
            </div>
        </main>
    )
}