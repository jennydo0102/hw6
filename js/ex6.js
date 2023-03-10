var contentDiv = document.getElementById("content");

var dl = document.createElement("dl");

words.forEach(function(word) {
  var dt = document.createElement("dt");
  var strong = document.createElement("strong");
  strong.textContent = word.term;
  dt.appendChild(strong);

  var dd = document.createElement("dd");
  dd.textContent = word.definition;

  dl.appendChild(dt);
  dl.appendChild(dd);
});

contentDiv.appendChild(dl);
