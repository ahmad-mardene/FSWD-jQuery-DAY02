$(document).ready(function(){
	$("#gift").on("click",function(){
		document.getElementById('demo').innerHTML="You clicked on the Gift box";
	})
	$("#santa").on("click",function(){
		document.getElementById('demo').innerHTML="You clicked on the santa";
	})
	$("#bell").on("click",function(){
		document.getElementById('demo').innerHTML="You clicked on the Christmas bell";
	})

	$(".santa").on("click",function(){
		$(this).hide();
	})
	$(".gift").on("click",function(){
		$(this).hide();
	})
})