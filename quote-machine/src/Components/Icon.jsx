import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
const propChoices = {
    sizes: ['l','m','s'],
    icons: ['twitter', 'facebook', 'tumblr', 'sms']
}

class Icon extends Component {
    
    static proptypes = {
        icon: PropTypes.oneOf(propChoices.icons),
        size: PropTypes.oneOf(propChoices.sizes)
    }
    
    render() {
    const {icon, size } = this.props;
    console.log(icon, size, 'in icon')
        return (
            <div className="wrapper-icon">
                <FontAwesomeIcon icon={icon} size={size} />
            </div>
        );
  }
}

export default Icon;
