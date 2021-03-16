import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__structure">
                    <ul className="footer__list">
                        <li className="footer__link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="footer__link">
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li className="footer__link">
                            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://help.netflix.com/support/412">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__copyright">© Copyright Netflix Kazahstan</div>
                <div className="footer__github">
                    <a href="https://github.com/tameoo" target="blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


