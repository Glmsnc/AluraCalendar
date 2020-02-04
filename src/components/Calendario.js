import React, { Component } from 'react';
import Mes from './calendar/Mes'
import {getCalendario, mudaAno} from '../controller/calendarController';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Calendario extends Component {
    
    constructor(){  
        super();
      
        this.date = getCalendario(new Date());
        this.state = ({
            ano: this.date.ano,
            Animation: true,
          })
    }
    anoDirecao = (lado)=>{
      this.setState({Animation: !this.state.Animation});
      setTimeout(()=>{
        this.setState({ano:  this.state.ano +lado});
        this.setState({Animation: !this.state.Animation});
      },500)
    const {calendario} = this.date;
    this.date = mudaAno(this.state.ano+lado, calendario)

    } 
    render() {
      return (
        <React.Fragment>
    <Anos>
          <Ano onClick={()=>this.anoDirecao(-1)}>  &#8592; {this.state.ano-1}</Ano>
           
             
      <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              
            {this.state.Animation ?  <Ano>{this.state.ano}</Ano> : null}
          </ReactCSSTransitionGroup>
      
              <Ano  onClick={()=>this.anoDirecao(+1)}> {this.state.ano+1}&#8594;</Ano>
          </Anos>
              <Mes date={this.date}/>
        </React.Fragment>
      )
    }

}



const Ano = styled.button`
  width: 33%;
  background: none;
  border: none;
  font-size: 2em;
  padding-right:40px;
  padding-left:40px;
`
const Anos = styled.div`
  display: flex;
  flex-direction: inline; 
  width:  100%;
  justify-content:center;
`
