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
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    let filteredData = rawData;
    if (inputDate) { filteredData = filteredData.filter(row => row.datetime === inputDate); }
    if (inputCity) { filteredData = filteredData.filter(row => row.city === inputCity); }
    if (inputState) { filteredData = filteredData.filter(row => row.state === inputState); }
    if (inputCountry) { filteredData = filteredData.filter(row => row.country === inputCountry); }
    if (inputShape) { filteredData = filteredData.filter(row => row.shape === inputShape); }
    clearBuildTable(filteredData);
};

// 
d3.selectAll("#filter-btn").on("click", clickFilter);