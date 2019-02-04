import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
const propChoices = {
    sizes: ['l','m','s'],
    types: ['twitter', 'facebook', 'tumblr', 'sms']
}

class Icon extends Component {
    
    static proptypes = {
        type: PropTypes.oneOf(propChoices.types),
        size: PropTypes.oneOf(propChoices.sizes)
    }
    
    render() {
    
        return (
            <div className="wrapper-icon">
                <FontAwesomeIcon icon="coffee" size="2x" />
            </div>
        );
  }
}

export default Icon;
