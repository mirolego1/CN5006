import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToggleMode from './ToggleModeComponent';
import GreetingElement from './myGreetingApp';
import FacebookEmojiCounter from './Facebookemoji'


ReactDOM.render(
<React.Fragment>
<FacebookEmojiCounter type= "Like"/>
< FacebookEmojiCounter type= "Love"/>
< ToggleMode/>
</React.Fragment>,
document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


