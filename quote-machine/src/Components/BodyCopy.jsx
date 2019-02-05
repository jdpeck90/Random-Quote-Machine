import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
 
const propChoices = {
    sizes: ['l','m','s']
}

class BodyCopy extends Component {
    
    static proptypes = {
        size: PropTypes.oneOf(propChoices.sizes).isRequired,
        text: PropTypes.string.isRequired,
        quote: PropTypes.boolean,
        author: PropTypes.boolean
    }
    
    render() {
    const { text, size, quote, author } = this.props;

        const quoteClass = quote && !author ? "copy--${size} copy--quote" : false;
        const authorClass = author && !quote ? `copy--${size} copy--author` : false; 
        const textClass = !quote && !author ? `copy--${size}` : false;
        const copyClass = classNames({
            [`copy--${size} copy--quote`]: quoteClass,
            [`copy--${size} copy--author`]: authorClass,
            [`copy--${size}`] : textClass
        })

        return (
            <div className="wrapper-copy">
                <p className={copyClass}>{text}</p>
            </div>
        );
  }
}

export default BodyCopy;
