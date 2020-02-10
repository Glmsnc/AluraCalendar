import React, { Component } from 'react';
import Mes from './calendar/Mes'
import {getCalendario, mudaMes} from '../controller/calendarController';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition } from "react-transition-group"
import {Animation} from './calendar/animations'
export default class Calendario extends Component {
    
    constructor(){  
        super();
        this.lado = ""
       this.date = getCalendario(new Date());
        this.state = ({
            ano: this.date.ano,
            Animation: false,
          })
    }
    mesDirecao = (lado)=>{
      
      this.setState({Animation: !this.state.Animation});
      setTimeout(()=>{
        this.setState({Animation: !this.state.Animation});
      },1000)
      if(lado === -1 ) this.lado = "esquerda";
      else this.lado = "direita";

    const {dataCompleta} = this.date;
    this.date = mudaMes(dataCompleta.getMonth()+lado, dataCompleta)

    } 
    render() {
      return (
        <React.Fragment>
    <Anos>
  
          <Ano onClick={()=>this.mesDirecao(-1)}>  &#8592;</Ano>
       
          <Ano> 
      <Transition in={this.state.Animation} timeout={{
       appear: 300,
       enter: 300,
       exit: 200,
      }}
      >
      {(state) => (
          <Animation lado={this.lado} state={state}>
         {this.date.calendario.mes} de {this.date.ano}
          
            </Animation>
        )}
      </Transition>
      </Ano>

              <Ano  onClick={()=>this.mesDirecao(+1)}> &#8594;</Ano>
          </Anos>
              <Mes date={this.date} animation={this.state.Animation} lado={this.lado}/>
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
/*

let transicaoAnimation = 0;

const anim = styled.section`
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
`;*/