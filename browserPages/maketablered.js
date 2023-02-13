let table = document.body.firstElementChild;
console.log(table.rows.length, table.rows[0].cells.length)
for (let i = 0; i < table.rows.length; i++) { // shows 0, then 1, then 2
    for (let j = 0; j < table.rows[0].cells.length; j++) { // shows 0, then 1, then 2
        if (i == j) {
            let td = table.rows[i].cells[j];
            console.log(i, j)
            td.style.backgroundColor = "red"; // highlight it
        } 
    }
}
// for (let i = 0; i < table.rows.length; i++) {
//     let row = table.rows[i];
//     row.cells[i].style.backgroundColor = 'red';
//   }