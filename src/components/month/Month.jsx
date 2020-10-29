import React from 'react';
import './month.scss'

const Month = ({lastOfMonth, firstOfMonth}) => {

      if (firstOfMonth == lastOfMonth) {
         return <span className="mounth">{firstOfMonth}</span>
      }
      return <span className="mounth">{firstOfMonth}-{lastOfMonth}</span>

   }


export default Month;