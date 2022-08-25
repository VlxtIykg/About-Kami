//for html
// var target = document.getElementsByClassName("item");
// target.forEach(eachItem => {
// 	eachItem.addEventListener("mouseover", mOver, false);
// 	eachItem.addEventListener("mouseout", mOut, false);
// });

function mOver(manipulationEvent) {
	if(manipulationEvent === classAdd) {
   	target.classlist.add("");
	 	target.classlist.remove("");
	 }
}

function mOut() {  
	target.classlist.remove("");
	target.classlist.add("");
}
let img = document.querySelector('img');
let start = img.src;
let hover = img.getAttribute('data-hover'); //specified in img tag

img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } //to revert back to start