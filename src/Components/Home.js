import React, { Component } from 'react';
import '../CSS/Home.css';
import { Row, Col } from 'antd';
import HomeWhat from './HomeWhat';


class Home extends Component {
  render() {
    return (
    <div>
      <HomeWhat />
       <div className="homeContainer">
        <div>
          <img />
        Some Image
        </div>
        <div> Some Content 2
        </div>
      </div>
       <div className="homeContainer">
        <div>
          <img />
        Some Image
        </div>
        <div> Some Content 2
        </div>
      </div>
    </div>
    );
  }
}

export default Home;


// Component => what is meal prep

// Component => why should i meal prep

// Component => how can I get started

