let clicks = 0;
document.querySelector("#button").onclick = function(){
  clicks++
  if (clicks > 50 && clicks < 69) {
    document.getElementById("najat").innerHTML = " хватит!!! уже " + clicks + " раз";
  } else if (clicks > 69 && clicks < 100) {
    document.getElementById("najat").innerHTML = " ты не заебался??? уже" + clicks;
  } else if (clicks == 100) {
    document.getElementById("najat").innerHTML = " не зли меня, я все обнуляю)";
    clicks = 0
  }else {
    document.getElementById("najat").innerHTML = " ты нажал на неё " + clicks + " раз";
  }
}
