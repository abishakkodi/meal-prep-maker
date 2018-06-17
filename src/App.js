//Modules
import React from 'react';
//import routes from './routes';
import { ConnectedRouter } from 'connected-react-router'

//Components
import Main from './Components/Main';

//css
import './App.css';

const App = ({history}) => {
      return (
     <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
    )
}

export default App;
