import React from 'react';
import WorkDetailContainer from 'src/features/work_detail/containers/work_detail_container';

export default class WorkDetail extends React.Component {

    render () {
        return (
            <WorkDetailContainer match={this.props.match} />
        );
    }

}
