var team = ["Lucas", "Daniel", "Jes", "Martin"];
var text = "";
var i;
for (i = 0; i < team.length; i++) {
  text += team[i] + "<br>";
}

let udd = {type:"UCL"};
document.getElementById("demo1").innerHTML = text;
document.getElementById("demo2").innerHTML = "De er elever fra " + udd.type;

function myFunctionmartin() {
  var y = document.getElementById("teamknap");
  var x = document.getElementById("demo1");
  var z = document.getElementById("demo2");


  if (x.style.display === "block") {
    x.style.display = "none"
    z.style.display = "none"
  } else {
    x.style.display = "block"
    z.style.display = "block"
  }
}
