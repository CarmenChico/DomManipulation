//identify the button
var button = document.getElementById ("calculate-button");


//adds both boxes
  function sumOfEntry () {
    //pull the value from the id's
    //identify each box entry
    var firstEntry= document.getElementById("value-one");
    var secondEntry= document.getElementById("value-two");
    //create an addition of both entry boxes
    var sum = Number (firstEntry.value) + Number (secondEntry.value);
//the results the computer will give is the sum
    return sum;
};

//this will place the answer we calculated into the section specified for the answer to appear on the screen
  function answeredCalculation (event) {
      event.preventDefault ();
      //we pull the answer from the function (sumOfEntry) above
      var answer = sumOfEntry ();
      var resultsbox= document.getElementById("answer");
//adds the information into the section of the answer//
//I'm thinking we could also use innerHTML here (which we would include in addtion to the answer the word answer as it would be replaced when we call for it via innerHTML)
      resultsbox.textContent = answer;
 };

//makes the button preform the action of populating the answered calculation into the section previously itentified
  button.addEventListener("click", answeredCalculation);
