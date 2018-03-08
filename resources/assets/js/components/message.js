import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from 'src/components/icon_button';

export default class Message extends React.Component {

  static propTypes = {
      show: PropTypes.bool,
      text: PropTypes.string,
      time: PropTypes.number,
      onClose: PropTypes.func.isRequired,
  }

  componentWillReceiveProps (nextProps) {
      if ( nextProps.show ) {
          setTimeout(() => this.props.onClose(), this.props.time);
      }
  }

  render () {
      const { show, text } = this.props;

      return (
          <div className={classNames('message-container', { 'message-container--show': show })}>
              <div className='message'>
                  <div className='message__text'>
                      <span>{ text }</span>
                  </div>

                  <IconButton
                      className='message__close-button btn btn-light'
                      icon='fa fa-times'
                      title='Dissmiss this message'
                      onClick={this.props.onClose}
                  />
              </div>
          </div>
      );
  }

}
