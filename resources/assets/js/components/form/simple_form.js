import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleButton from './simple_button';
import SimpleInput from './simple_input';

export default class SimpleForm extends React.Component {

    static propTypes = {
        action: PropTypes.string.isRequired,
        method: PropTypes.string.isRequired,
        k: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        contents: ImmutablePropTypes.list.isRequired,
    }

    render () {
        const { action, method, k, className, contents } = this.props;

        return (
            <form action={action} method={method} key={k} className={className}>
                {contents.map((content, i) => {
                    if (content.get('type') === 'text') {
                        return content.get('txt');
                    } else if (content.get('type') === 'button') {
                        return <SimpleButton key={k+ '_simple_button_' + i} k={k+ '_simple_button_' + i + '_child'} content={content} children={content.get('children')} />;
                    } else if (content.get('type') === 'input'){
                        return <SimpleInput key={k + '_simple_input_' + i} k={k + '_simple_input_' + i + '_child'} content={content} />;
                    } else if (content.get('type') === 'font_awesome'){
                        return <i key={k + '_font_awesome_' + i + '_' + content.get('className')} className={content.get('className')} area-hidden='true' />;
                    } else {
                        return content;
                    }
                })}
            </form>
        );
    }

}
