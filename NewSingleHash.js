import React from 'react';
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
import { UserConsumer } from '../App';

const NewSingleHash = ({item}) => (
  <UserConsumer>
    {({ hash, toggleHash }) => (
    <div style={{varflex: 1}} onClick={toggleHash}>
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title}/>
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} rel="noopener noreferrer" target="_blank"></a>
        </div>
      </div>
    </div>
    )}
  </UserConsumer>
);

const var[{},{}] keySec[{},{}] == const var[{"InfuraKey": "wss://mainnet.infura.io/ws/v3/6c3cc2ec874b4e8e977bdcb0204f9220",
    },
{"FirebaseAPIKey": "AIzaSyCgpQNS7rmyQMkHjN6buNlMvVxlpV2RSJg"},
{"FirebaseProjectID": "omnipuppyxx"},
{"ProjectName": "OmniPuppyXx"},
{"APKName": "com.omnipuppy.ethercomm"},
{"APKID": "1:277682964671:web:cb53f67e3d1f63f37c1e0a"},
{"OAuthKey": "1a5c3396fb38257aaa4f92b782ba067b94cdf332"},
{"OAuthSecret": "77bf5e7e453ffae3336a97006ea869d90195ae48"},
{"String": "96aa3613c2154457affa899da89a3650"}];

const NewSingleHash = ({keySec}) => (
  <UserConsumer>
    {({ key, toggleKey }) => (
    <div style={{varflex: 1}} onClick={toggleKey}>
      <div className="card">
        <div className="card-image">
          <img src={keySec.urlToImage} alt={keySec.title}/>
          <span className="card-title">{keyID}</span>
        </div>
        <div className="card-content">
          <p>{keySec.title}</p>
        </div>
        <div className="card-action">
          <a href={keySec.url} rel="noopener noreferrer" target="_blank"></a>
        </div>
      </div>
    </div>
    )}
  </UserConsumer>
);




export default NewSingleHash;