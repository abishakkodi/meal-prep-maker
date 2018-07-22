import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { setCalories } from 'actions/';




class CaloriesSliderView extends Component {
  constructor (props, context) {
    super(props, context)
  }



  handleChange = value => {
    this.props.setCalories(value)
  }

  handleChangeComplete = (event) => {
    console.log(this.props.calories);

  }

  render () {
    return (
      <div className='slider'>
        <Slider
          min={10}
          max={25}
          value={this.props.value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{this.props.value * 100}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({calories: state.calories.calories});


export default withRouter(connect(mapStateToProps, {setCalories})(CaloriesSliderView));