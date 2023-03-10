// Get the content div where the sum will be displayed
var contentDiv = document.getElementById("content");

var input1 = prompt("Enter the first integer:");

if (isNaN(parseInt(input1))) {
  contentDiv.innerHTML = '<span style="color: red; font-weight: bold;">Error! You must enter integers. You entered "' + input1 + '" and ';
  var input2 = prompt("Enter the second integer:");

  if (isNaN(parseInt(input2))) {
    contentDiv.innerHTML += '"' + input2 + '". Try again</span>';
  } else {
    contentDiv.innerHTML += '"' + input2 + '". Try again</span>';
  }
} else {
  var input2 = prompt("Enter the second integer:");

  if (isNaN(parseInt(input2))) {
    contentDiv.innerHTML = '<span style="color: red; font-weight: bold;">Error! You must enter integers. You entered "' + input2 + '". Try again</span>';
  } else {
    var sum = parseInt(input1) + parseInt(input2);
    contentDiv.innerHTML = '<span style="color: red; font-weight: bold;">Sum of two Integers<br>' + input1 + '+' + input2 + '=' + sum + '</span>';
  }
}
