interface ITrackSearch {
    trackName: string;
    artistName: string;
    imgSrc: string;
}

export const Track = (props: ITrackSearch) => {
    const { trackName, artistName, imgSrc }= props;
    return(
        <tr className="table__bottom__border">
            <td className="main__search-content__track-table__play">
                <i className="material-icons" style={{fontSize: "36px", color: "#999"}}>play_circle_filled</i>
            </td>
            <td className="main__search-content__track-table__music">
                <img className="main__search-content__track-table__music-img" src={imgSrc}/>
            </td>
            <td className="main__search-content__track-table__favorite">
                <i className="material-icons" style={{fontSize: "16px", color: "#999"}}>favorite_border</i>
            </td>
            <td className="main__search-content__track-table__music-name">
                <a className="link">{trackName}</a>
            </td>
            <td><a className="link">{artistName}</a></td>
            <td className="main__search-content__track-table__duration">3:14</td>
        </tr>
    );
}