import React, { Component } from 'react';
import styled from 'styled-components'
import Dia from './Dia'
import {diasDaSemana} from '../../controller/calendarController';
import './style.css';

const DiaSemana = styled.span`
width: 14.28571428571429%;
`
  
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
        const {semanas} =this.props.date;
        console.log(this.props)
        return (
            <React.Fragment >
                <section className="Meses">
                <h2>{this.props.date.mes}</h2>
                </section>
                <section className="calendario-mes">
                    <div className="grid">
                        <div className="semana-dias">
                            {   
                                diasDaSemana.map( weekDia => <DiaSemana>{ this.state.lessLetter ? weekDia : weekDia.substring(0,3)} </DiaSemana>) 
                            }
                        </div>
                    </div>
                    <div className="grid">
                        <div className="dias-do-mes">
                            {
                                semanas.map( (item) => (
                                        <div className="semana">
                                            {
                                                item.dias.map(item =>  <Dia dia={item.dia} /> )
                                            }
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </section>
            </React.Fragment>
      )
    }

}