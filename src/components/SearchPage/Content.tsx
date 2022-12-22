import { Link } from "react-router-dom";


interface IContent {
    title: string;
    subtitle: string | number;
    imgSrc: string;
};


/**
 * Component for content of album/artist search results.
 * @param props - object with info about artist/album.
 * @returns HTML Element with info about artist/album.
 */
export const Content = (props: IContent) => {
    const {title, subtitle, imgSrc} = props;
    return (
        <li className="main__search-content__block-item">
            <Link to="/" className="main__search-content__block-title link">{title}</Link>
            <Link to="/" className="main__search-content__block-subtitle link">{subtitle}</Link>
            <img className="main__search-content__block-img" src={imgSrc} alt="content"/>
        </li>
    );
};
