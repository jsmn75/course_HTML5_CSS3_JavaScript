var txtArea = document.getElementById("txtArea");
txtArea.addEventListener("keypress", function(eventInfo) {
      console.log(eventInfo.key);
    }, false);
