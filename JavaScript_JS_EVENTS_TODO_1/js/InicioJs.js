function pushButton(eventInfo) {
  alert(this.value + " pushed");
}
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
button1.addEventListener("click",pushButton,false);
button2.addEventListener("click",pushButton,false);
