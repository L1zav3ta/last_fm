/**
 * Component for 'not result' message. 
 * @param props - object with section.
 * @returns HTML Element with message.
 */
export const NotResults = (props: {section: string}) => {
    const {section} = props;
    return(
        <section className="main__section">
            <p className="main__search-content__block-item">Not {section}</p>
        </section>
    );
};
