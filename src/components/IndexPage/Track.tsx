import { useEffect, useState } from "react";
import { fetchTrackGenres } from "../../Api";
import { TTrack } from "../../types/TTrack";
import { GenresList } from "../GenresList";

export const Track = (props: TTrack) => {
    const {image, name, artist} = props;
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        fetchTrackGenres(artist,name)
        .then(
            (result) => {
                if(result == undefined) return

                const genresNames = result.map((genre: { name: string }) => genre.name)
                setGenres(genresNames)
            }
        );
    }, []);

    return (
        <li className="main__tracks-item">
            <img className="track-img" src={image} alt="Track Avatar"/>
            <div className="track-description">
                <h3 className="track-name">{name}</h3>
                <p className="track-artist-name">{artist}</p>
                <GenresList 
                    genres={genres}
                />
            </div>
        </li>
    );
}