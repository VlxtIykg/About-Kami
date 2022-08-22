//for html
var target = document.getElementsByClassName("item");
target.forEach(eachItem => {
	eachItem.addEventListener("mouseover", mOver, false);
	eachItem.addEventListener("mouseout", mOut, false);
});

function mOver() {
   target.classlist.add("")
	 target.classlist.remove("")
}

function mOut() {  
	target.classlist.remove("")
	target.classlist.add("")
}