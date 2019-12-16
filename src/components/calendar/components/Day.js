import React, { Component } from 'react';



export default class Day extends Component {
    render() {
      return (
          <div className="day">
                <span>    
                    {this.props.day} 
                </span>
          </div>
      )
    }

}