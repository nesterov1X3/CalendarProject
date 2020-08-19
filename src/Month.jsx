import React from 'react';
import moment from 'moment'
import { render } from 'react-dom';

const Month = ({lastOfMonth, firstOfMonth}) => {


   
      if (firstOfMonth == lastOfMonth) {
         return <span className="mounth">{firstOfMonth}</span>
      }
      return <span className="mounth">{firstOfMonth}-{lastOfMonth}</span>

   }


export default Month;