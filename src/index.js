import React from 'react';
import Routers from './routers';
import {render} from 'react-dom';
import "./main.css"
import App from './App';
import "highlight.js/styles/default.css";
import "./post.css" ;
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
render(<Routers />,document.getElementById('root'));
