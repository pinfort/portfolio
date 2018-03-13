import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleForm from 'src/components/form/simple_form';

export default class AdvancedColumn extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        content: ImmutablePropTypes.map.isRequired,
    }

    render () {
        const { k, content } = this.props;

        return (
            <td key={k}>
                {(() => {
                    if (content.get('type') === 'txt') {
                        return content.get('isLink') ? <a href={content.get('link')}>{content.get('txt')}</a> : content.get('txt');
                    } else if (content.get('type') === 'form'){
                        return <SimpleForm k={k + '_simple_form'} action={content.get('action')} method={content.get('method')} className={content.get('className')} contents={content.get('contents')} />;
                    } else {
                        return content;
                    }
                })()}
            </td>
        );
    }

}
