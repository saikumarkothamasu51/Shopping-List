var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");


//adding event listner to first 6 buttons in Html
for(var i=0;i<deleteBtns.length;i++){
	deleteBtns[i].addEventListener("click",removeParent,false);
}

function removeParent(evt){
	evt.target.removeEventListener("click",removeParent,false);
	evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function lineThrough(event){
	var a=event.target;
	if (count == 0) {
		a.classList.add("done");
	}
	else{
		a.classList.toggle("done");
	}
	count++;

}

ul.onclick = function(event){
	var target= getEventTarget(event);
	target.classList.toggle("done");
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var button=document.createElement("button");
	button.innerHTML ="delete";
	button.onclick = removeParent;



	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(button);
	
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);