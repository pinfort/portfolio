import React from 'react';
import { Link } from 'react-router-dom';

export default class MainFooter extends React.Component {
    render() {
        return (
            <footer>
                <nav className="navbar navbar-expand-md navbar-light">
                    <ul className="nav navbar-nav ml-auto mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" key={'privacy_link'} to={'/privacy'}>訪問者のプライバシーに関する情報</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        );
    }
}