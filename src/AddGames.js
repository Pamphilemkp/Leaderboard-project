/* eslint-disable  import/prefer-default-export */
export const AddGame = async (Name, score) => {
  const tableRow = document.querySelector('.tbody');
  const row = document.createElement('tr');
  row.innerHTML = ` 
    <td>${Name}</td>
     <td>${score}</td>
    `;
  tableRow.appendChild(row);
};
