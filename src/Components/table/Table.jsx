import React from 'react';
import users from './data.json';
import spentMinutes from '../../helpers/helper';

function mapDaysToTd(days) {
   
   return days.map((day, index) => <td key={index}>{spentMinutes(day.Start, day.End)}</td>);
}
//   return arr.join(' ');

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
                     <tr>
                        <td>{user.Fullname}</td>

                        {mapDaysToTd(user.Days)}
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}

export default Table;
