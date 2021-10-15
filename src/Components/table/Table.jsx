import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import users from './data.json';
import spentMinutes from '../../helpers/helper';

function mapDaysToTd(days, allObj) {
   let dayNumber = null;
   let lastDayNumber = 0;
   allObj.allMinutes = 0;

   return days.map((day, index) => {
      dayNumber = Number(day.Date.split('-')[2]);
      allObj.allMinutes += spentMinutes(day.Start, day.End);

      if (dayNumber - lastDayNumber === 2) {
         lastDayNumber = dayNumber;

         return (
            <>
               <td key={uuidv4()}>0</td>
               <td key={uuidv4()}> {spentMinutes(day.Start, day.End)}</td>
            </>
         );
      } else if (dayNumber - lastDayNumber === 3) {
         lastDayNumber = dayNumber;

         return (
            <>
               <td key={uuidv4()}>0</td>
               <td key={uuidv4()}>0</td>
               <td key={uuidv4()}> {spentMinutes(day.Start, day.End)}</td>
            </>
         );
      } else {
         lastDayNumber = dayNumber;
         return <td key={uuidv4()}> {spentMinutes(day.Start, day.End)}</td>;
      }
   });
}

function renderLastDay(days) {
   const lastDay = Number(days[days.length - 1].Date.split('-')[2]);

   if (lastDay !== 31) {
      return <td key={uuidv4()}>0</td>;
   }
}

function Table() {
   let allObj = {
      allMinutes: null,
   };
   return (
      <div>
         <table className='content-table'>
            <thead>
               <tr>
                  <th key={uuidv4()}>user</th>
                  {[...Array(31).keys()].map((dayNumber, index) => (
                     <th key={uuidv4()}>{dayNumber + 1}</th>
                  ))}
                  <th key={uuidv4()}>Monthly total</th>
               </tr>
            </thead>
            <tbody>
               {users.map(user => {
                  return (
                     <tr key={user.id}>
                        <td key={uuidv4()}>{user.Fullname}</td>

                        {mapDaysToTd(user.Days, allObj)}
                        {renderLastDay(user.Days)}
                        <td key={uuidv4()}>{allObj.allMinutes}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}

export default Table;
