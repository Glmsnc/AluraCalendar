import React, { Component } from 'react';
import Month from './components/Month'
import Year from './components/Year';
import {getCalendarMonth, weekDays} from '../../utils/date/date';

export default class Calendar extends Component {
    date = new Date();

    constructor(){
        super();
        this.date = getCalendarMonth(new Date());
        
    }
    render() {
        
      return (
          <div>
              <Year/>
              <Month date={this.date.actual}/>
          </div>
      )
    }

}