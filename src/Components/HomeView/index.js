import React, { Component } from 'react';
import HomeWhat from './HomeWhat';
import HomeWhy from './HomeWhy';
import HomeHow from './HomeHow';
import './Home.css';



class Home extends Component {
  render() {
    return (
    <div>
      <HomeWhat />
      <HomeWhy />
      <HomeHow />
    </div>
    );
  }
}

export default Home;


// Component => what is meal prep

// Component => why should i meal prep

// Component => how can I get started

