import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default class Tabs extends React.Component {

    static propTypes = {
        now: PropTypes.string.isRequired,
    }

    Links = [
        { link: '/home', name: 'Home' },
        { link: '/skills', name: 'Skills' },
        { link: '/licenses', name: 'Licenses' },
        { link: '/works', name:'Works' },
    ];

    createTabs () {
        const { now } = this.props;
        let tabs = [];
        let className = 'nav-link';
        this.Links.forEach((link, k) => {
            if (link.link === now) {
                className = 'nav-link active';
            } else {
                className = 'nav-link';
            }
            tabs.push(<li key={'tabs_children_' + k + '_wrap'} className='nav-item'>
                <Link key={'tabs_children_' + k} to={link.link} className={className}>{link.name}</Link>
            </li>);
        });
        return tabs;
    }

    render () {
        return (
            <ul className='nav nav-tabs nav-justified'>
                {this.createTabs()}
            </ul>
        );
    };

}
