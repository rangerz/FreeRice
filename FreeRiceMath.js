// FreeRice Simple Bot - [MATH] Multiplication Table
// http://freerice.com/#/multiplication-table/

var submitDuration = 3; // second
var submit = function () {
	var question = $('.question-link b').text().replace("x", "*");
	var correctAnswer = parseInt(eval(question));
	var answerNodes = $(".answer-item");
	var getCorrectNode = function(answer, nodes) {
		var i, compare;

		for (i=0; i<nodes.size(); i++) {
			compare = nodes[i].text;
			if (answer === parseInt(compare)) {
				break;
			}
		}

		return nodes[i];
	};

	var correctNode = getCorrectNode(correctAnswer, answerNodes);
	ExternalGame.submitAnswer(correctNode.rel);
}

setInterval(submit, submitDuration * 1000);


