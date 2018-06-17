//Modules
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';


//Components
import Main from './Components/Main';

//css
import './App.css';

const App = () => {
      return (
      <Provider store={store}>
        <Router history={createHistory()} >

        <Main />
        </Router>
      </Provider>
    )
}

export default App;
