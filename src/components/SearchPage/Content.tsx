interface IContent {
    title: string;
    subtitle: string;
    imgSrc: string;
}

export const Content = (props: IContent) => {
    const { title, subtitle, imgSrc }= props;

    return (
        <li className="main__search-content__block-item">
            <a className="main__search-content__block-title link">{title}</a>
            <a className="main__search-content__block-subtitle link">{subtitle}</a>
            <img className="main__search-content__block-img" src={imgSrc} alt="image"/>
        </li>
    );
}