import { format,parseISO } from 'date-fns'

  export const BirthDayFormart = (date) => {
      if(date){
        let day = date.substr(8,2)
        let month = date.substr(5,2)
        let year = date.substr(0,4)   
          return(`${day}/${month}/${year}`)
      }else{
         return('DD/MM/YYYY')
      }     
  };

  