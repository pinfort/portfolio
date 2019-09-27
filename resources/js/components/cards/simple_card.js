import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SimpleCard extends React.Component {

    static propTypes = {
        cid: PropTypes.string.isRequired,
        card: ImmutablePropTypes.map.isRequired,
        className: PropTypes.string,
    }

    createCbody(cid, contents) {
        return (
            <div className='card-body' key={cid + '_body'}>
                {contents.map((content, i) => {
                    let formatted_content;
                    switch (content.get('type')) {
                    case 'txt':
                        formatted_content = this.createCtxt(cid + '_body_' + i, content);
                        break;
                    case 'title':
                        formatted_content = this.createCtitle(cid + '_body_' + i, content);
                        break;
                    case 'link':
                        formatted_content = this.createClink(cid + '_body_' + i, content);
                        break;
                    default:
                        formatted_content = this.createCtxt(cid + '_body_' + i, content);
                        break;
                    }
                    return formatted_content;
                })}
            </div>
        );
    }

    createCfoot(cid, contents) {
        return (
            <div key={cid + '_foot'} className='card-footer text-muted'>
                {contents.join(' ')}
            </div>
        );
    }

    createCtitle(cid, content) {
        return <h5 key={cid + '_title'} className='card-title'>{content.get('txt')}</h5>;
    }

    createClink(cid, content) {
        let linkClass = 'btn btn-primary';
        if (content.get('link_disable')) {
            linkClass += ' disabled';
        }
        return <Link key={cid + '_link'} className={linkClass} to={content.get('link')}>{content.get('txt')}</Link>;
    }

    createCtxt(cid, content) {
        return <p key={cid + '_text'} className='card-text'>{content.get('txt')}</p>;
    }

    render () {
        const { cid, card, className } = this.props;
        return (
            <div className={'card ' + className + ' mx-2 mb-2'} style={{ width: '15rem' }}>
                {this.createCbody(cid, card.get('body'))}
                {this.createCfoot(cid, card.get('foot'))}
            </div>
        );
    }

}
