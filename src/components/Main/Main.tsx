import { ArtistsList } from "../IndexPage/ArtistsList";
import { TracksList } from "../IndexPage/TracksList";


/**
 * Component for main content of app.
 * @returns main-content HTML eLement of app.
 */
export const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">Music</h1>
                <section className="main__section">
                    <h2 className="main__title">Hot right now</h2>
                    <ArtistsList/>
                </section>
                <section className="main__section">
                    <h2 className="main__title">Popular tracks</h2>
                    <TracksList/>
                </section>
            </div>
        </main>
    );
};
