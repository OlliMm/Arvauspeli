


var num1 = Math.floor(Math.random() * 10);
var num2 = 0;

document.getElementById('submit').onclick = function() {

  var arvaus = document.getElementById('input1').value;

  if(arvaus == num1) {
    document.body.appendChild(document.createTextNode("Oikein"));
    document.body.appendChild(document.createElement("br"));
    alert("oikein");

  }else {
    document.body.appendChild(document.createTextNode("Väärin"));
    document.body.appendChild(document.createElement("br"));
    alert("väärin");
  }


}
