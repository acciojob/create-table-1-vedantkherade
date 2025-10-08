function insert_Row() {
    //Write your code here
   // Get table element by its ID
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert two new cells into the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Add text content to each new cell
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
