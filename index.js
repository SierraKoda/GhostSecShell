import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.html';
import './OmnipuppyXX-Outside-HMAC3SHA512-1.js';
import './OmnipuppyXX-Outisde-HMAC3SHA512-12.js';
import './omnipuppyxx-node-js-key-base.js';
import './lib/blockchain.js';
import './bin/blockchain.js';
import './init-server.js';
import './on-error-server.js';
import './ssr-module-cache.js';
import './App.test.js';
import './_app.js';
import './_document.js';
import './_error.js';
import './App.js';
import './NewHash.js';
import './NewHashItem.js';
import './Error.js';
import './data.json';
import './hash.json';
import './hashSetGroup.json';
import './hashAttributes.json';
import './hashItem.json';
import './blockpair.json';
import './hashHMACSH512.json';
const ajax = require('ajax');
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.register();