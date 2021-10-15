import React from 'react';
import users from './data.json';

function Table() {

   return (
      <div>
         <table className='content-table'>
            <thead>
               <tr>
                  <th>user</th>
                  {[...Array(31).keys()].map(dayNumber => (
                     <th>{dayNumber + 1}</th>
                  ))}
                  <th>Monthly total</th>
               </tr>
               </thead>
               <tbody>
                   {users.map(user => {
                       return (
                           <tr>
                               <td>{user.Fullname}</td>
                           </tr>
                       )
                   })
                   }
                

               </tbody>
         </table>
      </div>
   );
}

export default Table;
