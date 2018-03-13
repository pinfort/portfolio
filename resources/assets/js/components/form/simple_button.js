import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

export default class SimpleButton extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        content: ImmutablePropTypes.map.isRequired,
        children: ImmutablePropTypes.map.isRequired,
    }

    render () {
        const { k, content, children } = this.props;

        return (
            <button key={k} type={content.get('partsType')} className={content.get('className')}>
                {(() => {
                    if (children.get('type') === 'text') {
                        return children.get('txt');
                    } else if (children.get('type') === 'font_awesome'){
                        return <i key={k + '_font_awesome_'} className={children.get('className')} area-hidden='true' />;
                    } else {
                        return children;
                    }
                })()}
            </button>
        );
    }

}
