export const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">Music</h1>
                <section className="main__section">
                    <h2 className="main__title">Hot right now</h2>
                    <ul id="artistsList" className="main__artists-list">
                    </ul>
                </section>
                <section className="main__section">
                    <h2 className="main__title">Popular tracks</h2>
                    <ul id="tracksList" className="main__tracks-list">
                    </ul>
                </section>
            </div>
        </main>
    )
}