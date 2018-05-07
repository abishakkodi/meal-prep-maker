import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { Card, Layout } from 'antd';
import './App.css';

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

const array = [1,2,3,4,5,6,7,8,9,10];

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
            </div>

            <div className='bordered'>
              <Content >
                <Child name={this.state.name}/>
                {
                  array.map((item, i)=>{
                    let num = i + 1;
                    let title = 'recipe ' + num;
                    return(<Card title={title} extra={<p>Recipe Info</p>} style={{width: '300px'}} className="card">
                            <p> Pic of recipe </p>
                            <p> Short blurb? </p>
                            <Meta />

                    </Card>)
                  })
                }


              </Content>
            </div>

              <Footer style={{textAlign: 'center'}} className='bordered'>
                Footer FOOTER Footer
              </Footer>
          </div>
        </Layout>
      </ContextProvider>
    );
  }
}

export default App;
