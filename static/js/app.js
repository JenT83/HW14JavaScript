// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

var tbody = d3.select("tbody")

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  console.log(inputElement)

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData)

  // variable to hold user input
  var inputFilter = tableData.filter(record => record.datetime === inputValue);
  console.log(inputFilter)

  inputFilter.forEach(function(inputFilter){
    console.log(inputFilter);
    var row = tbody.append("tr");
    Object.entries(inputFilter).forEach(function([key,value]) {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});


  