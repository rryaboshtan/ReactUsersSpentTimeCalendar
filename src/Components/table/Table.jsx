import React from 'react'

function Table() {
    return (
       <div>
          <table>
             <thead>
                <tr>
                   <th>user</th>
                   {[...Array(31).keys()].map(dayNumber => (
                      <th>{dayNumber + 1}</th>    
                   ))}
                   <th>Monthly total</th>
                </tr>
             </thead>
          </table>
       </div>
    );
}

export default Table
