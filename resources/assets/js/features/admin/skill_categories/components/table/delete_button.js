import React from 'react';

import SimpleButton from 'src/components/form/simple_button';

export default class DeleteButton extends SimpleButton {

    onClick(event) {
        event.preventDefault();
        const { content } = this.props;
        this.props.onDelete(content.get('target_id'));
    }

}
