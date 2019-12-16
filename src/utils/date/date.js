
 export const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
 export const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];


function getLastDayMonth(year,month){
    let lastDay = new Date(year, month+1, 0).getDate();
    return lastDay;
}
function numToMonth(month){
    return months[month];
}

function getDayWeekDay(date){
    return new Date(date.year, date.month, date.day).getDay();
    
  //  return weekDays[numDay]
}

function getMountedMonth(date){
    const {year, month} =dateToObj(date);
    const lastDay = getLastDayMonth(year,month);
    let days = []
    const weeks = []
    let week = 1;
    for(let day = 1; day<= lastDay; day++){
        let weekDay = getDayWeekDay({year, month, day});
        if(day == 1 && weekDay != 0){
            let i =0;
            while( i< weekDay){
                days.push({day:0});
                i++;
                
            }
            days.push({day});
        }
        else days.push({day});
        if(day == lastDay){
            weeks.push({week,days});
        }
        if(weekDay == 6){
            weeks.push({week,days});
            week++;
            days = []
        }
    }
    
    return {month:numToMonth(month), weeks};

}

function dateToObj(date){
    const month = date.getMonth();
    const year = date.getFullYear();
    return {year, month};
}
//getMountedMonth(date);


function nextMonth(date){
    date = new Date(date.getFullYear(), date.getMonth()+1);
    return getMountedMonth(date)
}

function prevMonth(date){
    date = new Date(date.getFullYear(), date.getMonth()-1);
 return   getMountedMonth(date)
}


export function getCalendarMonth(date){
    const actual = getMountedMonth(date);
    const prev = prevMonth(date);
    const next = nextMonth(date);
    return {prev, actual, next};
}

console.log(getCalendarMonth(new Date()));
