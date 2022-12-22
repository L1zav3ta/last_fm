import { Genre } from "./Genre";

interface IGenres {
    genres: string[];
}

export const GenresList = (props: IGenres) => {
    return (
        <ul className="musical-genre-list">
            {props.genres.map((genre, idx) => 
                <Genre 
                    key={idx}
                    genre={genre}
                />
            )}
        </ul>
    );
}