import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import SimpleForm from 'src/components/form/simple_form';
import SimpleButton from 'src/components/form/simple_button';
import getFaClassName from "../../utils/fontawesome_classname_factory";

export default class AdvancedColumn extends React.Component {

    static propTypes = {
        k: PropTypes.string.isRequired,
        content: ImmutablePropTypes.map.isRequired,
    }

    analyzeColumn(content, k) {
        if (content.get('type') === 'txt') {
            return this.createTxtColumn(content);
        } else if (content.get('type') === 'form'){
            return this.createFormColumn(content, k);
        } else if (content.get('type') === 'button'){
            return this.createButtonColumn(content, k);
        } else if (content.get('type') === 'image'){
            return this.createImageColumn(content, k);
        } else if (content.get('type') === 'icon'){
            return this.createIconColumn(content, k);
        }
        return content;
    }

    createTxtColumn(content) {
        return content.get('isLink') ? <a href={content.get('link')}>{content.get('txt')}</a> : content.get('txt');
    }

    createFormColumn(content, k) {
        return <SimpleForm k={k + '_simple_form'} action={content.get('action')} method={content.get('method')} className={content.get('className')} contents={content.get('contents')} />;
    }

    createButtonColumn(content, k) {
        return <SimpleButton key={k+ '_simple_button'} k={k+ '_simple_button_child'} content={content} children={content.get('children')} />;
    }

    createImageColumn(content, k) {
        return <img key={k + '_simple_img'} src={content.get('src')} alt={content.get('alt')} className={content.get('class')} />;
    }

    createIconColumn(content, k) {
        return <i key={k + '_icon'} className={getFaClassName(content.get('icon'))} />;
    }

    render () {
        const { k, content } = this.props;

        const children = this.analyzeColumn(content, k);

        return (
            <td key={k}>
                {children}
            </td>
        );
    }

}
