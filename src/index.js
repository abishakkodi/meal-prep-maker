import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import store from './store';
import App from './App'
import './index.css';

const history = createBrowserHistory()



const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
    document.getElementById('root')
  )
}

render()

// ReactDOM.render(<ConnectedApp />, document.getElementById('root'));

