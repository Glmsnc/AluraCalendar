import React, { Component } from 'react';
import Mes from './calendar/Mes'
import Ano from './calendar/Ano';
import {getCalendario, mudaAno} from '../controller/calendarController';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const Anos = styled.div`
display: flex;
flex-direction: inline; 
width:  100%;
justify-content:center;
`

const AnosProximos = styled.button`
     background: none;
    border: none;
    font-size: 2em;
    padding-right:40px;
    padding-left:40px;

`


export default class Calendario extends Component {
    date = new Date();
    
    constructor(){  
        super();
        this.state = ({ano: this.date.getFullYear(), Apper: true, Enter: true, Leave: false})
        this.date = getCalendario(new Date());
    }
    anoDirecao = (lado)=>{
      this.setState({Apper: !this.state.Apper});
      setTimeout(()=>{
        this.setState({ano:  this.state.ano +lado});
        this.setState({Apper: !this.state.Apper});
      },500)
    this.date = mudaAno(this.state.ano +lado)

    } 
    render() {
      return (
        <React.Fragment>
    <Anos>
          <AnosProximos onClick={()=>this.anoDirecao(-1)}>  &#8592; <Ano ano={this.state.ano-1}/></AnosProximos>
           
             
      <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              
            {this.state.Apper ? <h1>   <Ano ano={this.state.ano}/></h1> : null}
          </ReactCSSTransitionGroup>
      
              <AnosProximos  onClick={()=>this.anoDirecao(+1)}> <Ano ano={this.state.ano+1}/>&#8594;</AnosProximos>
          </Anos>
              <Mes date={this.date.atual}/>
        </React.Fragment>
      )
    }

}