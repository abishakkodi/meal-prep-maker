//Modules
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

//Components
import Main from './Components/Main';

//css
import './App.css';

const App = () => {
      return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
}

export default App;
