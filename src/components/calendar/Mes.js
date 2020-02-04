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
            lessLetter: window.innerWidth >= 760
        });
    }

    componentDidMount(){
        window.addEventListener("resize", this.resize.bind(this));
    }

    render() {
        console.log('render',this.props)
        const {semanas} =this.props.date.calendario;
        console.log(this.props)
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
                                semanas.map( (item) => (
                                        <Semana>
                                            {
                                                item.dias.map(item =>  <Dia key={item.dia} >{item.dia}  </Dia> )
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
width: 14.28571428571429%;
`
const Dia = styled.span`
    text-align: center;
    width: 14.28571428571429%;
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