import { Link } from 'react-router-dom'
import logo from './images/footer_logo.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__top__row">
                    <ul className="footer__top__col">
                        <h2 className="footer__top__col__title">Company</h2>
                        <li><Link to="/" className="link">About last.fm</Link></li>
                        <li><Link to="/" className="link">Contact us</Link></li>
                        <li><Link to="/" className="link">Jobs</Link></li>
                    </ul>
                    <ul className="footer__top__col">
                        <h2 className="footer__top__col__title">Company</h2>
                        <li><Link to="/" className="link">About last.fm</Link></li>
                        <li><Link to="/" className="link">Contact as</Link></li>
                        <li><Link to="/" className="link">Jobs</Link></li>
                    </ul>
                    <ul className="footer__top__col">
                        <h2 className="footer__top__col__title">Company</h2>
                        <li><Link to="/" className="link">About last.fm</Link></li>
                        <li><Link to="/" className="link">Contact as</Link></li>
                        <li><Link to="/" className="link">Jobs</Link></li>
                    </ul>
                    <ul className="footer__top__col">
                        <h2 className="footer__top__col__title">Company</h2>
                        <li><Link to="/" className="link">About last.fm</Link></li>
                        <li><Link to="/" className="link">Contact as</Link></li>
                        <li><Link to="/" className="link">Jobs</Link></li>
                    </ul>
                    <ul className="footer__top__col">
                        <h2 className="footer__top__col__title">Company</h2>
                        <li><Link to="/" className="link">About last.fm</Link></li>
                        <li><Link to="/" className="link">Contact as</Link></li>
                        <li><Link to="/" className="link">Jobs</Link></li>
                    </ul>
                </div>
            </div>
            <hr color="#666" style={{height: '1px', border: 'none'}}/>
            <div className="footer__bottom">
                <div className="footer__bottom__row">
                    <div className="footer__bottom__row__info">
                        <ul className="footer__bottom__language-list">
                            <li className="footer__bottom__language-item link">English</li>
                            <li className="footer__bottom__language-item link">Deutsch</li>
                            <li className="footer__bottom__language-item link">Español</li>
                            <li className="footer__bottom__language-item link">Français</li>
                            <li className="footer__bottom__language-item link">Italiano</li>
                            <li className="footer__bottom__language-item link">日本語</li>
                            <li className="footer__bottom__language-item link">Polski</li>
                            <li className="footer__bottom__language-item link">Português</li>
                            <li className="footer__bottom__language-item link">Русский</li>
                            <li className="footer__bottom__language-item link">Svenska</li>
                            <li className="footer__bottom__language-item link">Türkçe</li>
                            <li className="footer__bottom__language-item link">简体中文</li>
                        </ul>
                        <p className="footer__bottom__timezone">
                            <span style={{color: '#666'}}>Time zone:
                                <strong style={{color: 'aliceblue'}}> Europe/Moscow</strong>
                            </span>
                        </p>
                        <div>
                            <ul className="footer__bottom__legal-list">
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">CBS Interactive </Link></li>
                                <li className="footer__bottom__legal-item">© 2022 Last.fm Ltd. All rights reserved</li>
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">Terms of Use</Link></li>
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">Privacy Policy</Link></li>
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">Legal Policies</Link></li>
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">Cookies Policy</Link></li>
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">Cookie Information</Link></li>
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">Jobs at ViacomCBS</Link></li>
                                <li className="footer__bottom__legal-item"><Link to="/" className="link">Last.fm Music</Link></li>
                            </ul>
                            <p className="footer__bottom__legal-wiki">Some user-contributed text on this page is available under the <Link to="/" className="link">Creative Commons Attribution-ShareAlike License;</Link> additional terms may apply.</p>
                        </div>
                    </div>
                    <div className="footer__bottom__row__logo">
                        <p>Audioscrobbler</p>
                        <img className="footer__bottom__row__logo__img" src={logo} alt="footer_logo"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}