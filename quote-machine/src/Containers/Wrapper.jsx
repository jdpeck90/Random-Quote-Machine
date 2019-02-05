import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propChoices  = {
    types: [
        'quote', 
        'social', 
        'button'
    ]
}


class Wrapper extends Component {
    static propTypes = {
        children: PropTypes.node,
        type: PropTypes.oneOf(propChoices.types)
    }


    render() {
    const { children, type} = this.props;
    
        return (
            <div className={`wrapper--${type}`}>
                {children}
            </div>
        );
  }
}

export default Wrapper;
