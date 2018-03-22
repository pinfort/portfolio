import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

export default class SimpleCard extends React.Component {

    static propTypes = {
        cid: PropTypes.string.isRequired,
        card: ImmutablePropTypes.map.isRequired,
    }

    createCimg(cid, content) {
        return <img key={cid + '_img'} className='card-img-top' src={content.get('src')} alt={content.get('alt')} />;
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
        return <a key={cid + '_link'} className={linkClass} href={content.get('link')}>{content.get('txt')}</a>;
    }

    createCtxt(cid, content) {
        return <p key={cid + '_text'} className='card-text'>{content.get('txt')}</p>;
    }

    render () {
        const { cid, card } = this.props;
        return (
            <div className='card' style={{ width: '18rem', flexShrink: 0, flexBasis: 'auto' }}>
                {this.createCimg(cid, card.get('img'))}
                {this.createCbody(cid, card.get('body'))}
                {this.createCfoot(cid, card.get('foot'))}
            </div>
        );
    }

}
