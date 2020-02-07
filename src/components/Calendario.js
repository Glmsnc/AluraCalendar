import React, { Component } from 'react';
import Mes from './calendar/Mes'
import {getCalendario, mudaAno} from '../controller/calendarController';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition } from "react-transition-group"
import {Animation} from './calendar/animations'
let transicaoAnimation = 0;

export default class Calendario extends Component {
    
    constructor(){  
        super();
        this.lado = ""
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
      transicaoAnimation = 20*lado;
      if(lado === -1 ) this.lado = "left"
      else this.lado = "right";

      console.log(transicaoAnimation)
    const {calendario} = this.date;
    this.date = mudaAno(this.state.ano+lado, calendario)

    } 
    render() {
      return (
        <React.Fragment>
    <Anos>
    <Ano> 
      <Transition in={!this.state.Animation} timeout={{
       appear: 300,
       enter: 300,
       exit: 200,
      }}
      >
      {(state) => (
          <Animation lado={this.lado} state={state}>
             
            {this.state.ano}
          
            </Animation>
        )}
      </Transition>
      </Ano>
          <Ano onClick={()=>this.anoDirecao(-1)}>  &#8592; {this.state.ano-1}</Ano>
          <ReactCSSTransitionGroup
          transitionName="container"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
             {this.state.Animation ? <Container>{this.state.ano1}</Container>: null}
          </ReactCSSTransitionGroup>
             
      <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
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

const Container = styled.section`
font-size: 1.5em;
padding: 0;
margin: 0;

&.container-enter {
   
opacity: 0.01;
transform: translateX(20px);
}

&.container-enter-active {
    opacity: 1;
transition: opacity 300ms ease-in;
    transform: translateX('${transicaoAnimation}'px);
}

&.container-leave {
    opacity: 1;
    transform: translateX(0px);
  }
  
  &.container-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
    transform: translateX('${transicaoAnimation}'px);
  }
`;