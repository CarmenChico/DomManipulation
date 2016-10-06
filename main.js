
var sumImports = function () {
    var input1= document.getElementById("value-one");
    var input2= document.getElementById("value-two");
    var sum = Number (input1.value) + Number (input2.value);

    return sum;
};


var getAnswer = function (event) {
    event.preventDefault ();
    var answer = sumImports ();
    var resultsbox= document.getElementById("answer");
    resultsbox.textContent = answer;
 };


var button = document.getElementById ("calculate-button");
    button.addEventListener("click", getAnswer);
