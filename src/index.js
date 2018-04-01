import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import configureStore from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore()


export function LocalStorageApp(props) { 
    return <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
}


ReactDOM.render(
    <LocalStorageApp />,
    document.getElementById('root')
);

registerServiceWorker();
