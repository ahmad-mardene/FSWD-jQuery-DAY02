var random = Math.floor(Math.random()*11);
console.log(random);
var result = random-1;
console.log(result);


function dragStart(event){
	event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event){
	event.preventDefault();
}

function drop(event){
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById('data'));
}