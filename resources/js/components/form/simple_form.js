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

    onSubmit() {}

    analyzeForm(contents, k) {
        contents.map((content, i) => {
            if (content.get('type') === 'text') {
                return content.get('txt');
            } else if (content.get('type') === 'button') {
                return this.createButton(content, i, k);
            } else if (content.get('type') === 'input'){
                return this.createInput(content, i, k);
            } else if (content.get('type') === 'font_awesome'){
                return this.createFontAwesome(content, i, k);
            }
            return content;
        });
    }

    createButton(content, i, k) {
        return <SimpleButton key={k+ '_simple_button_' + i} k={k+ '_simple_button_' + i + '_child'} content={content} children={content.get('children')} />;
    }

    createInput(content, i, k) {
        return <SimpleInput key={k + '_simple_input_' + i} k={k + '_simple_input_' + i + '_child'} content={content} />;
    }

    createFontAwesome(content, i, k) {
        return <i key={k + '_font_awesome_' + i + '_' + content.get('className')} className={content.get('className')} area-hidden='true' />;
    }

    render () {
        const { action, method, k, className, contents } = this.props;

        return (
            <form action={action} method={method} key={k} className={className} onSubmit={this.onSubmit()}>
                {this.analyzeForm(contents, k)}
            </form>
        );
    }

}
