// Function that generates random numbers within  the specified range
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

// Implementing Event listeners
document
	.querySelector('.generateButton')
	.addEventListener('click', generateRandomNumber);

document.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		generateRandomNumber();
	}
});

// function that validates the numbers
function generateRandomNumber() {
	var input = UIController.getInputs();
	var min = input.min;
	var max = input.max;
	if (min == '' && max == '') {
		alert('Please enter all the required values');
	} else if (min == '') {
		alert('Please enter the minimum value required');
	} else if (max == '') {
		alert('Please enter the maximum value required');
	} else if (
		!Number.isInteger(parseFloat(min)) ||
		!Number.isInteger(parseFloat(max))
	) {
		alert('Please enter whole numbers only');
	} else if (parseInt(max) < parseInt(min)) {
		alert('Please enter the maximum value greater than the minimum value');
	} else if (parseInt(max) == parseInt(min)) {
		alert('Please enter different maximum and minimum values');
	} else if (parseInt(max) > parseInt(min)) {
		var randomNumberGenerated = randomNumber(parseInt(min), parseInt(max));
		document.querySelector('#randomNumber').innerText = randomNumberGenerated;
	}
}

// IIFE for getting the values in the field
var UIController = (function () {
	return {
		getInputs: function () {
			return {
				min: document.querySelector('.minInput').value,
				max: document.querySelector('.maxInput').value,
			};
		},
	};
})();
