import { Link } from "react-router-dom";
import { TTrack } from "../../types/TTrack";


/**
 * Component for track.
 * @param props - object with info about track.
 * @returns row of table with found track.
 */
export const Track = (props: TTrack) => {
    const {trackName, trackImgSrc, artistName} = props;
    return(
        <tr className="table__bottom__border">
            <td className="main__search-content__track-table__play">
                <i className="material-icons" style={{fontSize: "36px", color: "#999"}}>play_circle_filled</i>
            </td>
            <td className="main__search-content__track-table__music">
                <img className="main__search-content__track-table__music-img" src={trackImgSrc} alt="music"/>
            </td>
            <td className="main__search-content__track-table__favorite">
                <i className="material-icons" style={{fontSize: "16px", color: "#999"}}>favorite_border</i>
            </td>
            <td className="main__search-content__track-table__music-name">
                <Link to="/" className="link">{trackName}</Link>
            </td>
            <td><Link to="/" className="link">{artistName}</Link></td>
            <td className="main__search-content__track-table__duration">3:14</td>
        </tr>
    );
};
