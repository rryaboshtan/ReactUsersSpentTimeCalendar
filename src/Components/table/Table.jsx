import React from 'react';
import users from './data.json';

function mapDaysToTd(days) {
   // const arr = [...Array(31).keys()].map((item, index) => `<td key=${index}>{{minutes}}</td>`);

   // console.log(days);
   // let currentIndex = null;
   // let str = '';
   // // for (let day of days) {
   //     console.log(day);

   //     if (day) {
   //         currentIndex = Number(day.Date.split('-')[2]);
   //         //   console.log(currentIndex);
   //         str = arr[currentIndex - 1].replace(/\{\{minutes\}\}/gi, day.Date);
   //         arr[currentIndex - 1] = str;
   //     } else {
   //         arr[currentIndex - 1].replace(/\{\{minutes\}\}/gi, '0');
   //     }
   // }
   // for (let day of days) {
   //     console.log(day);

   //     if (day) {
   //         currentIndex = Number(day.Date.split('-')[2]);
   //         //   console.log(currentIndex);
   //         str = arr[currentIndex - 1].replace(/\{\{minutes\}\}/gi, day.Date);
   //         arr[currentIndex - 1] = str;
   //     } else {
   //         arr[currentIndex - 1].replace(/\{\{minutes\}\}/gi, '0');
   //     }
   // }

   return days.map((day, index) => <td key={index}>{day.Date}</td>);
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
