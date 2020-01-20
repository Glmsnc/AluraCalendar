import React, { Component } from 'react';



export default class Dia extends Component {
    render() {
      return (
        <React.Fragment>
            <span className="dia">    
                {this.props.dia} 
            </span>
        </React.Fragment>
      )
    }

}