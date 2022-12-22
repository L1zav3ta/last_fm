import { TGenre } from "../../types/TGenre";


/**
 * Component for genre of artist/track.
 * @param props - object with genre name.
 * @returns HTML ELement with one genre.
 */
export const Genre = (props: TGenre) => {
    const {genreName} = props;
    return (
        <li className="musical-genre-item">{genreName}</li>
    );
};
