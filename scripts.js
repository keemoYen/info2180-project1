"use strict";
/* Add your JavaScript to this file */

window.onload = function(){

//document.getElementsByTagName("button").addEventListener("click",emailHandler);

var myButton = document.querySelector("button");
console.log(myButton);

myButton.addEventListener("click",(event)=>{
	event.preventDefault();
	console.log("Button clicked")

	var body = document.getElementsByTagName("div");
	var msg = document.getElementsByClassName("message")[0];
	var inputVal= document.getElementById("email").value;
	console.log(inputVal.length);
	
	if(inputVal.length>0){
		console.log('if statemts keemo yen')
		var response1 = document.createTextNode("The email " +inputVal+" registered");
		console.log(response1);
		var paragraph = document.createElement("p");
		paragraph.appendChild(response1);
		//console.log(response1);
		msg.appendChild(paragraph);
	}else{
		var response2 = document.createTextNode("Please enter a valid email address");
		var paragraph = document.createElement("p");
		paragraph.appendChild(response2);
		msg.appendChild(paragraph);
	};
	console.log('hoho')

});
};
