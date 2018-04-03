import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SimpleLink extends React.Component {

    static propTypes = {
        to: PropTypes.string.isRequired,
        content: PropTypes.any.isRequired,
        className: PropTypes.string,
        k: PropTypes.string,
    }

    render () {
        const { to, content, className, k } = this.props;
        return (
            <Link key={k} to={to} className={className}>{content}</Link>
        );
    }

}
