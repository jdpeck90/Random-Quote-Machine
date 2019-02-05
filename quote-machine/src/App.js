import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { library2 } from '@fortawesome/free-solid-svg-icons'
import Icon from './Components/Icon'; 
import BodyCopy from './Components/BodyCopy';
import Wrapper from './Containers/Wrapper';

library.add(library2)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Wrapper type="quote">
            <BodyCopy text={`test from app.js`} size="l" quote/>
            <BodyCopy text={`test from app.js`} size="m" author/>          
          </Wrapper>
            <Icon icon="sms" size="m" />
          <Wrapper type="social">
            <Icon icon='twitter' size="m" />
            <Icon icon='facebook' size="m" />
            <Icon icon='tumblr' size="m" />
          </Wrapper > 
        </header>
      </div>
    );
  }
}

export default App;
