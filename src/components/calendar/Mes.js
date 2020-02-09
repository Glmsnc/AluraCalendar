import React, { Component } from 'react';
import styled from 'styled-components'
import {diasDaSemana} from '../../controller/calendarController';
import './style.css';

export default class Mes extends Component {
    constructor(){
        super()
        this.state = { 
            lessLetter: window.innerWidth >= 760
        }
    }
    resize() {
        this.setState({ 
            lessLetter: true
        });
    }

    componentDidMount(){
        window.addEventListener("resize", this.resize.bind(this));
    }

    render() {
        const {semanas} =this.props.date.calendario;
        return (
            <React.Fragment >
                <section className="Meses">
                <h1>{this.props.date.calendario.mes}</h1>
                </section>
                <section className="calendario-mes">
                    <div className="grid">
                        <SemanaDias>
                            {   
                                diasDaSemana.map( diaSemana => <DiaSemana key={diaSemana}>{ this.state.lessLetter ? diaSemana : diaSemana.substring(0,3)} </DiaSemana>) 
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