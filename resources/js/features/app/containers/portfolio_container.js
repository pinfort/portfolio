import React from 'react';
import Portfolio from 'src/features/app/components/portfolio';
import MessageContainer from 'src/containers/message_container';

export default class PortfolioContainer extends React.Component {

    render () {
        return (
            <div className='container'>
                <Portfolio />

                <MessageContainer />
            </div>
        );
    }

}
