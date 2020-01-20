import React, { Component } from 'react';
import Mes from './calendar/Mes'
import Ano from './calendar/Ano';
import {getCalendario} from '../controller/calendarController';
import styled from 'styled-components';
const Anos = styled.div`
display: flex;
flex-direction: inline; 
width:  100%;
`


export default class Calendario extends Component {
    date = new Date();
    
    constructor(){
        super();
        this.state = ({ano: this.date.getFullYear()})
        this.date = getCalendario(new Date());
    }
    anoAnterior = ()=> this.setState({ano: this.state.ano -1});
    anoPosterior = ()=>  this.setState({ano:  this.state.ano +1});
    render() {
      return (
        <React.Fragment>

          <Anos>

          <button  onClick={this.anoAnterior}>  &#8592; <Ano ano={this.state.ano-1}/></button>
              <Ano ano={this.state.ano}/>
             
              <button  onClick={this.anoPosterior}> <Ano ano={this.state.ano+1} onclick={console.log('teste')}/>&#8594;</button>
          </Anos>
              <Mes date={this.date.atual}/>
        </React.Fragment>
      )
    }

}