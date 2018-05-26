import React, { Component } from 'react';
import '../CSS/Home.css';
import HomeWhat from './HomeWhat';
import HomeWhy from './HomeWhy';
import HomeHow from './HomeHow';



class Home extends Component {
  render() {
    return (
    <div className='homeContainer'>
      <HomeWhat />
      <HomeWhy />
      <HomeHow />
    </div>
    );
  }
}

export default Home;
