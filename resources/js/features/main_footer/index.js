import React from 'react';
import { Link } from 'react-router-dom';

export default class MainFooter extends React.Component {
    render() {
        return (
            <footer>
                <nav class="navbar navbar-expand-md navbar-light">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link key={'privacy_link'} to={'/privacy'}>訪問者のプライバシーに関する情報</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        );
    }
}