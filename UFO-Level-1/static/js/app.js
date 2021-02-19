// from data.js
var rawData = data;

// Get a reference to the table body
var tableBody = d3.select("tbody");

// Define function to clear table and add new data
function clearBuildTable(dataToBeInserted) {
    tableBody.html("");
    // Adding all the rows and cells
    dataToBeInserted.forEach((ufoSighting) => {
        var row = tableBody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

clearBuildTable(rawData);

var inputDate = d3.select("#datetime");