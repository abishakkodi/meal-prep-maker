import React, { Component } from 'react';
const context = React.createContext();


const { Header, Footer, Sider, Content } = Layout;

class Child extends Component {

  render(){
    return (
      <div>
        <h3>{this.props.name} </h3>
        <ReactContext.context.Consumer>
          {(context)=>(
            <div>
              <p>{context.state.name} </p>
              <p>{context.state.age} </p>
              <p>This is the message :{context.state.message} </p>

              <button onClick={context.someFunc}> Age+ </button>
              <button onClick={this.testContext}> TestContext </button>

            </div>)}
        </ReactContext.context.Consumer>
    </div>)
  }
}


class ContextProvider extends Component {
  state = { name: 'MealPrepRecipes',
  age: 10,
  meals: [],
  message: '',
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
         },
         setCurrentRecipes: ()=>{

         },
         setCurrentMessage: (data)=>{
          this.setState({message: data});
         }
        }
                              }>
        {this.props.children}
      </context.Provider>
      )
  }
}

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


export default { ContextProvider, context };

