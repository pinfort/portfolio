import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SimpleLink extends React.Component {

    static propTypes = {
        to: PropTypes.string.isRequired,
        content: PropTypes.any.isRequired,
        className: PropTypes.string,
        k: PropTypes.string,
        is_external: PropTypes.bool.isRequired,
    }

    render () {
        const { to, content, className, k, is_external } = this.props;
        return (
            is_external ? <a key={k} href={to} className={className}>{content}</a> : <Link key={k} to={to} className={className}>{content}</Link>
        );
    }

}
