function showTime() {
    let x = new Date().getUTCHours() + 10;
    let y = "AM";
    if ((x%24 > 12)) {
    y = "PM";
    };
    x = x%12;
    let a = "";
    if (x < 10){
    a ="0"
    }
  document.getElementById("time").innerText = a + x.toString() + ":"+ new Date().getMinutes().toString() + "." +new Date().getSeconds().toString() + y;
}
showTime();
setInterval(function () {
  showTime();
}, 1000);
