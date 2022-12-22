import logo from './images/logo.png'
import player from './images/player_default_album.png'
import search from './images/search.png'
import avatar from './images/avatar.png'

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__player">
                <img src={player} alt="player_default_album"/>
                <ul className="header__player__panel">
                    <li className="header__player__panel_item">
                        <button className="button_transparent">
                            <i className="material-icons header__player__panel__button__i" style={{fontSize: '22px'}}>fast_rewind</i>
                        </button>
                    </li>
                    <li className="header__player__panel_item">
                        <button className="button_transparent">
                            <i className="material-icons header__player__panel__button__i" style={{fontSize: '36px'}}>play_circle_outline</i>
                        </button>
                    </li>
                    <li className="header__player__panel_item">
                        <button className="button_transparent">
                            <i className="material-icons header__player__panel__button__i" style={{fontSize: '22px'}}>fast_forward</i>
                        </button>
                    </li>
                    <li className="header__player__panel_item">
                        <button className="button_transparent">
                            <i className="material-icons header__player__panel__button__i" style={{fontSize: '16px'}}>favorite_border</i>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="header__logo">
                <Link to="/" className="link"><img className="header__logo__img-last-fm" src={logo} alt="last.fm"/></Link>
            </div>
            <nav className="header__nav">
                <Link className="link" to="/search"><img className="header__nav___img-search" src={search} alt="search"/></Link>
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link className="header__link" to="/">Home</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__link" to="/">Live</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__link" to="/">Music</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__link" to="/">Charts</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__link" to="/">Events</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__link" to="/">Features</Link>
                    </li>
                </ul>
                <img className="avatar avatar-profile" src={avatar} alt="Profile avatar"/>
            </nav>
        </header>
    )
}
