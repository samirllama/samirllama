.fade-in-text {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 150px;
  color: black;
  animation: fadeIn linear 7s;
  -webkit-animation: fadeIn linear 7s;
  -moz-animation: fadeIn linear 7s;
  -o-animation: fadeIn linear 7s;
  -ms-animation: fadeIn linear 7s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}


<div class="fade-in-text">
  <p>Fade-in Text</p>
</div>


//https://blog.hubspot.com/website/css-fade-in
