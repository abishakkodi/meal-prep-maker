import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { Layout } from 'antd';
import './App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const context = React.createContext();
class ContextProvider extends Component {
  state = { name: 'MealPrepRecipes',
  age: 10,
  meals: [],
  userPreferences: {},
  loggedIn: false
  }

  render(){
    return (
      <context.Provider value={
        {
         state: this.state,
         someFunc: () => {
           this.setState({ age: this.state.age + 1 });
         }
        }
                              }>
        {this.props.children}
      </context.Provider>
      )
  }
}

class Child extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.name} </h3>
        <context.Consumer>
          {(context)=>(
            <div>
              <p> Context Context Context </p>
              <p> This is what is in the context provider {context.state.name} </p>
            </div>)}
        </context.Consumer>
    </div>)
  }
}




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Test Test Test'
    }
  }

  render() {
    return (
      <ContextProvider>
        <Layout>
          <div className="App">
            <div className='bordered'>
              <Header style={{textAlign: 'center'}}> HEADER AND MENU </Header>
                <Child name={this.state.name}/>
            </div>

          </div>
        </Layout>
      </ContextProvider>
    );
  }
}

export default App;
