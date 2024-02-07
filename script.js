document.addEventListener('DOMContentLoaded', function() {
  // ---------------- STANDARDS ---------------------

  // MONEY
  // Get the range input element
  var moneyInput = document.getElementById('moneyStandards');
  
  // Get the span element where the value will be displayed
  var moneyValue = document.getElementById('moneyStandardsValue');
  
  // Update the span element with the initial value of the range input
  moneyValue.textContent = moneyInput.value;
  
  // Add an event listener to the range input to update the displayed value when the user interacts with the slider
  moneyInput.addEventListener('input', function() {
    moneyValue.textContent = moneyInput.value;
  });

  // CHARISMA
  var charismaInput = document.getElementById('charismaStandards');
  var charismaValue = document.getElementById('charismaStandardsValue');
  charismaValue.textContent = charismaInput.value;
  charismaInput.addEventListener('input', function() {
    charismaValue.textContent = charismaInput.value;
  });

  // LOOKS
  var looksInput = document.getElementById('looksStandards');
  var looksValue = document.getElementById('looksStandardsValue');
  looksValue.textContent = looksInput.value;
  looksInput.addEventListener('input', function() {
    looksValue.textContent = looksInput.value;
  });

  // HYGINE
  var hygineInput = document.getElementById('hygineStandards');
  var hygineValue = document.getElementById('hygineStandardsValue');
  hygineValue.textContent = hygineInput.value;
  hygineInput.addEventListener('input', function() {
    hygineValue.textContent = hygineInput.value;
  });

  // RELIGION
  var religionInput = document.getElementById('religionStandards');
  var religionValue = document.getElementById('religionStandardsValue');
  religionValue.textContent = religionInput.value;
  religionInput.addEventListener('input', function() {
    religionValue.textContent = religionInput.value;
  });


  // ---------------- RATINGS ---------------------

  // MONEY
  var moneyRatingInput = document.getElementById('moneyRating');
  var moneyRatingValue = document.getElementById('moneyRatingValue');
  moneyRatingValue.textContent = moneyRatingInput.value;
  moneyRatingInput.addEventListener('input', function() {
    moneyRatingValue.textContent = moneyRatingInput.value;
  });

  // CHARISMA
  var charismaRatingInput = document.getElementById('charismaRating');
  var charismaRatingValue = document.getElementById('charismaRatingValue');
  charismaRatingValue.textContent = charismaRatingInput.value;
  charismaRatingInput.addEventListener('input', function() {
    charismaRatingValue.textContent = charismaRatingInput.value;
  });

  // LOOKS
  var looksRatingInput = document.getElementById('looksRating');
  var looksRatingValue = document.getElementById('looksRatingValue');
  looksRatingValue.textContent = looksRatingInput.value;
  looksRatingInput.addEventListener('input', function() {
    looksRatingValue.textContent = looksRatingInput.value;
  });

  // HYGINE
  var hygineRatingInput = document.getElementById('hygineRating');
  var hygineRatingValue = document.getElementById('hygineRatingValue');
  hygineRatingValue.textContent = hygineRatingInput.value;
  hygineRatingInput.addEventListener('input', function() {
    hygineRatingValue.textContent = hygineRatingInput.value;
  });

  // RELIGION
  var religionRatingInput = document.getElementById('religionRating');
  var religionRatingValue = document.getElementById('religionRatingValue');
  religionRatingValue.textContent = religionRatingInput.value;
  religionRatingInput.addEventListener('input', function() {
    religionRatingValue.textContent = religionRatingInput.value;
  });

  // FETCHING VALUES FOR CALCULATION
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of the input elements
    var moneyStandardsValue = document.getElementById('moneyStandards').value;
    var charismaStandardsValue = document.getElementById('charismaStandards').value;
    var looksStandardsValue = document.getElementById('looksStandards').value;
    var hygineStandardsValue = document.getElementById('hygineStandards').value;
    var religionStandardsValue = document.getElementById('religionStandards').value;

    var moneyRatingValue = document.getElementById('moneyRating').value;
    var charismaRatingValue = document.getElementById('charismaRating').value;
    var looksRatingValue = document.getElementById('looksRating').value;
    var hygineRatingValue = document.getElementById('hygineRating').value;
    var religionRatingValue = document.getElementById('religionRating').value;
    
    // Ask the user how many characteristics they didn't know and multiply by 10
    var stuffToSubtract = document.getElementById('dontwant').value * 10;

    // Calculate the maximum possible score
    var maxScore = 50 - stuffToSubtract;

    // Calculate the average difference between the user's ratings and the standard ratings for each characteristic
    var avgOfCharacteristics = (
      Math.abs(moneyRatingValue - moneyStandardsValue) + 
      Math.abs(charismaRatingValue - charismaStandardsValue) + 
      Math.abs(looksRatingValue - looksStandardsValue) + 
      Math.abs(hygineRatingValue - hygineStandardsValue) + 
      Math.abs(religionRatingValue - religionStandardsValue)
    );

    // Calculate the final score by subtracting the average difference from the maximum possible score
    var score = maxScore - avgOfCharacteristics;

    // Calculate the percentage score by dividing the score by the maximum possible score and multiplying by 100
    var percentageScore = ((score / maxScore) * 100).toFixed(1);

    // Get the span element by its ID
    var scoreSpan = document.getElementById('score');

    // Update the content of the span element with the variable value
    scoreSpan.textContent = percentageScore + "%";;
  });

});