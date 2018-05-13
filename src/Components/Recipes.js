import React, { Component } from 'react';
import Recipe from './Recipe';
import { Card } from 'antd';


class Recipes extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let recipe = this.props.recipes.data;
    if(!recipe) {
      recipe = [];
    }

    return (
      <div className="Recipes">
        <h1> Current Recipes </h1>
        {
          recipe.map((item,id)=>{
          return(<div key={id}>
            <Card title={'some recipe'} />
            </div>)
          })
        }
      </div>
          )

        }
    }


export default Recipes;
