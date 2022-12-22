import { useEffect, useState } from "react";
import { GenresList } from "../GenresList";
import { TArtist } from "../../types/TArtist";
import { fetchArtistGenres } from "../../Api";
import { TGenre } from "../../types/TGenre";

export const Artist = (props: TArtist) => {
    const {image, name} = props;
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        fetchArtistGenres(name)
        .then((result) => {
                if(result == undefined) return

                const genresNames = result.map((genre: TGenre) => genre.name)
                setGenres(genresNames)
            }
        );
    }, []);

    return (
        <li className="main__artists-item">
            <img className="avatar avatar-artist" src={image} alt="Artist avatar"/>
            <h3 className="artist-name">{name}</h3>
            <GenresList 
                genres={genres}
            />
        </li>
    );
}