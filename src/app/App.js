import React,{ Component } from 'react';
import './App.css';


import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';


import AppHeader from '../common/AppHeader';
import { Typography } from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <div className="EmojiPictionary">
        <AppHeader position="center" color="default">
        </AppHeader>
      </div>
    );
  }
}

export default withRouter(App);