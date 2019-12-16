import React, { Component } from 'react';

import Day from './Day'
import {weekDays} from '../../../utils/date/date';
import './style.css';

export default class Month extends Component {
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
        const {weeks} =this.props.date;
        return (
            <div>
                <h1>{this.props.date.month}</h1>
                <div className="calendarMonth">
                    <div calssName="grid">
                        <div className="weekDays">
                            {   
                                weekDays.map( weekDay => <span className="weekDay">{ this.state.lessLetter ? weekDay : weekDay.substring(0,3)} </span>) 
                            }
                        </div>
                    </div>
                    <div className="grid">
                        <div className="daysofMonth">
                            {
                                weeks.map( (item, i) => (
                                        <div className="week">
                                            {
                                                item.days.map(item =>  <Day day={item.day} /> )
                                            }
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
      )
    }

}