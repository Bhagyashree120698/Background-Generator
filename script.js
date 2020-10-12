

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");/*

/*console.log(body);
console.log(css);
console.log(color1);
console.log(color2);*/

function setGradient(){
	body.style.background = "linear-gradient(to right,"
			+color1.value
			+","
			+color2.value+")";
	css.textContent = body.style.background + ";";

}

// color1.addEventListener("input", setGradient);
//color2.addEventListener("input", setGradient) ;
/*we can add setGradient() in index.html <input oninput = "setGradient()"> instead of line 22 & 23 and 
this will give us same output but again seperation of code matters and there we cannot apply multiple attributes hence writing it in js file good practice*/