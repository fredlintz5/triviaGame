$(document).ready(function() {
	
	var question0 = {
		text: "What is your Quest?", 
		answer: "To seek the Holy Grail.",
		wrong: ["To seek the Holey Grail.", "To seek the Whole Grail.", "To eat cheese and be merry."],
		correct: false,
	}

	var question1 = {
		text: "What is your favorite color?", 
		answer: "Blue",
		wrong: ["Red", "Green", "Yellow."],
		correct: false,
	}

	var question2 = {
		text: "What is the average air speed velocity of an unladen swallow?", 
		answer: "Is that an African or European Swallow?",
		wrong: ["46 mph", "10 mph", "Lightspeed"],
		correct: false,
	}

	var questionBank = [question0, question1, question2];
	var bankLength = questionBank.length;
	var count = 0;


$("#start").click(function() {

	createQuestions(questionBank[count]);
	$("#gameboard").css('display', 'none');
	$("#questions").css('display', 'inherit');

});




function createQuestions(array) {

	$("#timer").css('display', 'inherit');
	$("#text div").html("<div><h4>" + array.text);
	$("#answers").html("<div><button data-correct='true'>" + array.answer);

	for (var j = 0; j < array.wrong.length; j++) {
		$("#answers").append("<div><button data-correct='false'>" + array.wrong[j]);
	}

	fiveSecTimer();
	correct();

}


function nextQuestion() {
	createQuestions(questionBank[count]);
}


function correct() {
	$("button").click(function() {

		var questCorrect = $(this).data("correct");

		if (questCorrect === true) {
			$(this).css('background', '#5CB85C');
			count++;
			nextQuestion();

		} else {
			$(this).css('background', '#D9534F');
		}

	});
}


function fiveSecTimer() {
	setTimeout(function(){
		$("#timer").html("<h2>5</h2>");
	}, 0000);

	setTimeout(function(){
		$("#timer").html("<h2>4</h2>");
	}, 1000);

	setTimeout(function(){
		$("#timer").html("<h2>3</h2>");
	}, 2000);

	setTimeout(function(){
		$("#timer").html("<h2>2</h2>");
	}, 3000);

	setTimeout(function(){
		$("#timer").html("<h2>1</h2>");
	}, 4000);

	setTimeout(function(){
		$("#timer").html("<h2>0</h2>");
	}, 5000);
	
}


});



