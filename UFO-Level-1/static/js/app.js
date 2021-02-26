// from data.js
var rawData = data;

// Check data 
console.log(data)

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

// Define a function to filter
function clickFilter() {
    // Get a refernce to the DateTime 
    var inputDate = d3.select("#datetime").property("value");
    let filteredData = rawData;
    if (inputDate) {filteredData = filteredData.filter(row => row.datetime === inputDate);}
    clearBuildTable(filteredData);
    };


// 
d3.selectAll("#filter-btn").on("click", clickFilter);