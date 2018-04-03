import React from 'react';
import TagDetailContainer from 'src/features/tag_detail/containers/tag_detail_container';

export default class TagDetail extends React.Component {

    render () {
        return (
            <TagDetailContainer {...this.props} />
        );
    }

}
