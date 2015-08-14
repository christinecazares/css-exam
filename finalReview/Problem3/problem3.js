/*
Problem 3:

The html contains a left div, and a right div.
When the user clicks the ball, it should go to the other div

Suggestion: Maybe use jQuery.delegate?

If you're stumped, try getting something to log to the console
if the ball is clicked, THEN worry about moving the ball div.
*/

$(document).ready(function () {
$(".ball").on("click",function (){
	console.log("move");
	var ball = $(".ball").detach();
	ball.appendTo ("#right");
});	
});