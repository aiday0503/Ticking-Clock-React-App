import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();

function tick() {
    const element = ( < div >
        <
        h1 > Hello, world! < /h1>  <
        h2 > Time is { new Date().toLocaleTimeString() } < /h2> </div >
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);