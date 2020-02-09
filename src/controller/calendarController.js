
 export const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
 export const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];


function getUltimoDiaDoMes(ano,mes){
    let ultimoDia = new Date(ano, mes+1, 0).getDate();
    return ultimoDia;
}
function numToMonth(mes){
    return meses[mes];
}

function getDiadaSemana(data){
    return new Date(data.ano, data.mes, data.dia).getDay();
    
  //  return weekday[numDay]
}

function getMesPronto(data){
    const {ano, mes} =dateToObj(data);
    const ultimoDia = getUltimoDiaDoMes(ano,mes);
    let dias = []
    const semanas = []
    let semana = 1;
    for(let dia = 1; dia <= ultimoDia; dia++){
        let diaSemana = getDiadaSemana({ano, mes, dia});
        if(dia === 1 && diaSemana !== 0){
            let i =0;
            while( i< diaSemana){
                dias.push({dia:' '});
                i++;
            }
            dias.push({dia});
        }
        else dias.push({dia});
        if(dia === ultimoDia){
            semanas.push({semana,dias});
        }
        if(diaSemana === 6){
            semanas.push({semana,dias});
            semana++;
            dias = []
        }
    }
    
    return {mes:numToMonth(mes), semanas};

}

function dateToObj(data){
    const mes = data.getMonth();
    const ano = data.getFullYear();
    return {ano, mes};
}
//getMountedMonth(date);




export function getCalendario(data){
    const calendario = getMesPronto(data);
    return {ano: data.getFullYear(), calendario}
}

 export function mudaAno(ano, dataAnterior){
   const novaData = new Date(dataAnterior);
   novaData.setYear(ano);
    return getCalendario(novaData);
 }

