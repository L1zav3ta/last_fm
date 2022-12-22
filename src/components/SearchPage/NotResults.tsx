export const NotResults = (props: {section: string}) => {
    const {section} = props;
    return(
        <section className="main__section">
            <p className="main__search-content__block-item">Not {section}</p>
        </section>
    );
};
