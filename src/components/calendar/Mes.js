import React, { Component } from 'react';
import styled from 'styled-components'
import {diasDaSemana} from '../../controller/calendarController';
import {CalendarioMes} from './animations';

import { Transition } from "react-transition-group"
import './style.css';

export default class Mes extends Component {
    
    

    render() {
        const {semanas} =this.props.date.calendario;
        const {animation} = this.props;
        const {lado}  = this.props;
        return (
            <React.Fragment >
                  <Transition in={animation} timeout={{
       appear: 300,
       enter: 500,
       exit: 500,
      }}
      >
           {(state) => (
               
                <CalendarioMes lado={lado} state={state}>
                <section className="calendario-mes">
                    <div className="grid">
                        <SemanaDias>
                            {   
                                diasDaSemana.map( diaSemana =>{
                                   return <DiaSemana key={diaSemana}>{  diaSemana} </DiaSemana>
                                } )
                            }
                        </SemanaDias>
                    </div>
                    <div className="grid">
                        <DiasDoMes>
                            {
                                semanas.map( (semana, semanaKey) => (

                                    
                                        <Semana key={semanaKey}> 
                                            {
                                                semana.dias.map((dia, diaKey) =>{
                                                    return <Dia key={semanaKey+diaKey} >{dia.dia} </Dia>
                                                }
                                                       )
                                            }
                                        </Semana>
                                    )
                                )
                            }
                        </DiasDoMes>
                    </div>
                </section>
                </CalendarioMes>
           )}
                </Transition>
            </React.Fragment>
      )
    }

}




const DiaSemana = styled.span`
width: 14.3%;
    @media(max-width: 768px){
        font-size: 90%;
    }
`
const Dia = styled.span`
    text-align: center;
    width: 14.3%;
`

const SemanaDias = styled.span`
display: inline-flex;
    flex-direction: row;
    width: 60%;
    justify-content: space-between;
`

const DiasDoMes = styled.div`
display:flex;
flex-direction: column;
align-content: center;
padding: 10px;
width: 60%;
`


const Semana = styled.div`
    padding-bottom: 5px;
    display:flex;
    flex-direction: row;
`