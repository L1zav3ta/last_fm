import { useEffect, useState } from "react";
import { fetchArtistGenres, fetchTrackGenres } from "../../Api";
import { TGenre } from "../../types/TGenre";
import { Genre } from "./Genre";

interface IGenresListProps {
    artistName: string,
    trackName?: string,
};

export const GenresList = (props: IGenresListProps) => {
    const {artistName, trackName} = props;
    const [genres, setGenres] = useState<TGenre[]>([]);

    useEffect(() => {
        const fetchFunc = trackName ? fetchTrackGenres(artistName, trackName) : fetchArtistGenres(artistName)
        fetchFunc
        .then(
            (result) => {
                if (!result) return
                const genresData = result.map((item: {name: string}) => {
                    const genre: TGenre = {
                        genreName: item.name,
                    }
                    return genre
                })
                setGenres(genresData)
            }
        );
    }, []);

    return (
        <ul className="musical-genre-list">
            {genres.map((genre, idx) =>
                <Genre 
                    key={idx}
                    genreName={genre.genreName}
                />
            )}
        </ul>
    );
};
