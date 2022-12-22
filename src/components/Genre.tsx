interface IGenre {
    genre: string;
}

export const Genre = (props: IGenre) => {
    const genreName = props.genre;
    return (
        <li className="musical-genre-item">{genreName}</li>
    );
}