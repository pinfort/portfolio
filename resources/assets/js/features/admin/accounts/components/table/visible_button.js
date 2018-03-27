import React from 'react';

import ToggleButton from 'react-toggle-button';
import PropTypes from 'prop-types';

export default class VisibleButton extends React.Component{

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        target_id: PropTypes.number.isRequired,
    }

    constructor() {
        super();
        this.state = {
            visible: false,
        };
        this.handleChangeVisible = this.handleChangeVisible.bind(this);
    }

    componentWillMount() {
        const { visible } = this.props;
        this.setState({
            visible: visible,
        });
    }

    handleChangeVisible(value) {
        const { target_id } = this.props;
        this.setState({
            visible: !value,
        });
        if (!value) {
            this.props.onVisible(target_id);
        } else {
            this.props.onInvisible(target_id);
        }
    }

    render () {
        return (
            <ToggleButton value={this.state.visible} onToggle={this.handleChangeVisible} />
        );
    }

}
