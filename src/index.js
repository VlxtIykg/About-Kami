//for html
var target = document.getElementsByClassName("item");
target.addEventListener("mouseover", mOver, false);
target.addEventListener("mouseout", mOut, false);

function mOver() {
   target.classlist.add("")
	 target.classlist.remove("")
}

function mOut() {  
	target.classlist.remove("")
	target.classlist.add("")
}