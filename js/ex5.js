var outputDiv = document.getElementById("output");

var table = document.createElement("table");

var headerRow = table.insertRow();
var headerCell = headerRow.insertCell();
headerCell.innerHTML = "Number";
headerCell.style.textAlign = "center";

for (var i = 1; i <= 12; i++) {
  var row = table.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = i;
  cell.style.textAlign = "center";
  if (i % 4 == 0) {
    cell.classList.add("blue-background");
  }
}

outputDiv.appendChild(table);
