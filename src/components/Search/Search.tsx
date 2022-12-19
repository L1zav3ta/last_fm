import { Link } from 'react-router-dom'
import searchBtn from './images/button_search.png'
import resetBtn from './images/button_reset.png'

export const Search = () => {
    return (
        <main className="main">
            <div className="container">
                <section className="main__section" style={{display: "none"}}>
                    <h1 className="main__search-title">Search results for 
                        <span id="search-value"></span> </h1>
                    <nav>
                        <ul className="main__search-nav-list">
                            <li className="main__search_nav-item"><Link to="/">Top Results</Link></li>
                            <li className="main__search_nav-item"><Link to="/">Artists</Link></li>
                            <li className="main__search_nav-item"><Link to="/">Albums</Link></li>
                            <li className="main__search_nav-item"><Link to="/">Tracks</Link></li>
                        </ul>
                    </nav>
                </section>
            </div>
            <hr color="#999" style={{height: "1px", border: "none"}}/>
            <div className="container">
                <div className="main__search-content">
                    <div className="main__search-content__left-side">
                        <form className="main__search-content__search-form">
                            <input className="main__search-content__search-form__input" placeholder="Search for music..." value="" required/>
                            <button className="button__search-reset button_transparent" type="reset">
                                <img alt='reset_btn' className="button__search-img" src={resetBtn}/>
                            </button>
                            <button className="button__search-submit button_transparent" type="submit">
                                <img alt='seatch_btn' className="button__search-img" src={searchBtn}/>
                            </button>
                        </form>
                        <section className="main__section" style={{display: "none"}}>
                            <h2 className="main__search-content__title"><Link to="/" className="link">Artists</Link></h2>
                            <ul id="searchArtistList" className="main__search-content__block-list"></ul>
                            <Link to="/" id="moreArtist" className="main__search-content__more-link link">More artists</Link>
                        </section>
                        <section className="main__section" style={{display: "none"}}>
                            <h2 className="main__search-content__title"><Link to="/" className="link">Albums</Link></h2>
                            <ul id="searchAlbumList" className="main__search-content__block-list"></ul>
                            <Link to="/" id="moreAlbums" className="main__search-content__more-link link">More albums</Link>
                        </section>
                        <section className="main__section" style={{display: "none"}}>
                            <h2 className="main__search-content__title"><Link to="/" className="link">Tracks</Link></h2>
                            <table className="main__search-content__track-table">
                                <tbody id="trackTable"></tbody>
                            </table>
                            <Link to="/" id="moreTracks" className="main__search-content__more-link link">More tracks</Link>
                        </section>
                    </div>
                    <div className="main__search-content__right-side">
                        <p className="main__search-content__right-side__p">Don't want to see ads? 
                            <Link className="link" to='/'>Upgrade Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}