
// Lucas
let i = 0;
function buttonClick() {
    document.getElementById('inc').value = ++i*10;
}

let i1 = 0;
function buttonClick1() {
    document.getElementById('inc1').value = ++i1*10;
}

let i2 = 0;
function buttonClick2() {
    document.getElementById('inc2').value = ++i2*10;
}

// Daniel
function myFunction() {
  var y = document.getElementById("valuebox2");
  var x = document.getElementById("valuebox21");
  var y1 = document.getElementById("valuebox3");
  var x1 = document.getElementById("valuebox31");
  var y2 = document.getElementById("valuebox4");
  var x2 = document.getElementById("valuebox41");
  if (y.style.display === "none") {
    y.style.display = "block"
    y1.style.display = "block"
    y2.style.display = "block"
    x.style.display = "none"
    x1.style.display = "none"
    x2.style.display = "none"
  } else {
    x.style.display = "block"
    y.style.display = "none";
    x1.style.display = "block"
    y1.style.display = "none";
    x2.style.display = "block"
    y2.style.display = "none";
  }
}

// Martin
let p1 = "her tænder og slukker du for varmen. Når varmen er tændt kan den ikke yderligere indstilles før du slukker for den igen.";
let p2 = "her kan du indstille varmen";
let p3 = "her kan du indstille x";
let p4 = "her kan du indstille y";


document.getElementById("start1").addEventListener("click", function() {
  myFunction1(p1);
});

function myFunction1() {
  document.getElementById("demo").innerHTML = p1;
}

document.getElementById("valuebox2").addEventListener("click", function() {
  myFunction2(p2);
});

function myFunction2() {
  document.getElementById("demo").innerHTML = p2;
}

document.getElementById("valuebox3").addEventListener("click", function() {
  myFunction3(p3);
});

function myFunction3() {
  document.getElementById("demo").innerHTML = p3;
}

document.getElementById("valuebox4").addEventListener("click", function() {
  myFunction4(p4);
});

function myFunction4() {
  document.getElementById("demo").innerHTML = p4;
}
