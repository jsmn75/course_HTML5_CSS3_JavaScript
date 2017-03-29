  //Text Nodes
  var text1       = document.createTextNode("Paragraph with an ");
  var text2Emph   = document.createTextNode("emphasized");
  var text3       = document.createTextNode(" word and ");
  var text4Strong = document.createTextNode("others more emphasized ");
  //Emphasized Nodes
  var emphText2   = document.createElement("em");
  emphText2.appendChild(text2Emph);
  var strongText4 = document.createElement("strong");
  strongText4.appendChild(text4Strong);
  //Paragraph
  var myP = document.createElement("p");
  myP.style.color = "blue";
  myP.appendChild(text1);
  myP.appendChild(emphText2);
  myP.appendChild(text3);
  myP.appendChild(strongText4);
  document.body.appendChild(myP);
