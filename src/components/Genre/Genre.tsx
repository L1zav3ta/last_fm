import { TGenre } from "../../types/TGenre";

export const Genre = (props: TGenre) => {
    const {genreName} = props;
    return (
        <li className="musical-genre-item">{genreName}</li>
    );
};
