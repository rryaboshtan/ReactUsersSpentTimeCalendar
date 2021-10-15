import React from 'react';
import users from './data.json';
// import spentMinutes from '../../helpers/helper';

function mapDaysToTd(days) {
   //    let prefix = '';
   let dayNumber = null;
   let lastDayNumber = 0;

   //   return days.map((day, index) => <td key={index}>{day.Date}</td>);
   //    return days.map((day, index) => <td key={index}>{spentMinutes(day.Start, day.End)}</td>);
   return days.map((day, index) => {
      dayNumber = Number(day.Date.split('-')[2]);

      if (dayNumber - lastDayNumber === 2) {
         lastDayNumber = dayNumber;

         return (
            <>
               <td>0</td>
               <td key={index}> {day.Date}</td>
            </>
         );
      } else if (dayNumber - lastDayNumber === 3) {
         lastDayNumber = dayNumber;

         return (
            <>
               <td>0</td>
               <td>0</td>
               <td key={index}> {day.Date}</td>
            </>
         );
      } else {
         lastDayNumber = dayNumber;
         return <td key={index}> {day.Date}</td>;
      }
   });
}

function renderLastDay(days) {
   const lastDay = Number(days[days.length - 1].Date.split('-')[2]);
    
    if (lastDay !== 31) {
        return <td>0</td>
    }
}

function Table() {
   return (
      <div>
         <table className='content-table'>
            <thead>
               <tr>
                  <th>user</th>
                  {[...Array(31).keys()].map((dayNumber, index) => (
                     <th key={index}>{dayNumber + 1}</th>
                  ))}
                  <th>Monthly total</th>
               </tr>
            </thead>
            <tbody>
               {users.map(user => {
                  return (
                     <tr key={user.id}>
                        <td>{user.Fullname}</td>

                          {mapDaysToTd(user.Days)}
                          {renderLastDay(user.Days)}
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}

export default Table;
