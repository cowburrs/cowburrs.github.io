//Time Script
function showTime() {
  let x = new Date().getUTCHours() + 10;
  let y = "AM";
  if (x % 24 > 12) {
    y = "PM";
  }
  x = x % 12;
  let a = "";
  let b = "";
  let c = "";
  if (new Date().getUTCMinutes() < 10) {
    b = "0";
  }
  if (x < 10) {
    a = "0";
  }
  if (new Date().getUTCSeconds() < 10) {
    c = "0";
  }
  document.getElementById("time").innerText =
    a +
    x.toString() +
    ":" +
    b +
    new Date().getMinutes().toString() +
    "." +
    c +
    new Date().getSeconds().toString() +
    y;
}
showTime();
setInterval(function () {
  showTime();
}, 500);

//Button Script
document.getElementById("imagebutton").addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("imagebutton").innerHTML = "hellow";
  document.getElementById("flower").style.height = "100";
}