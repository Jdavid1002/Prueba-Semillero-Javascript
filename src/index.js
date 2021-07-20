import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import {Provider} from 'react-redux'
import store from './config/Store'
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={"Conectando con el servidor"} >
      <Provider store={store} > 
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);