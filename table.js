function insertRow(id) {
  var tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
  var row = document.createElement("tr")
  var td1 = document.createElement("td")
  
  var td2 = document.createElement("td")
  td2.appendChild(document.createTextNode(document.getElementById("addid").value))
  var td3 = document.createElement("td")
  td3.appendChild(document.createTextNode(document.getElementById("addaudit").value))
  var td4 = document.createElement("td")
  td4.appendChild(document.createTextNode(document.getElementById("addotv").value))
  
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  
  tbody.appendChild(row);





//td1.appendChild(document.createTextNode("1"))
  //var td2 = document.createElement("td")
  //td2.appendChild(document.createTextNode("checkbox"))
  //var td6 = document.createElement("td")
  //td6.appendChild(document.createTextNode("action1"))
  //var td7 = document.createElement("td")
  //td7.appendChild(document.createTextNode("action2"))



//row.appendChild(td5);
  //row.appendChild(td6);
  //row.appendChild(td7);

}