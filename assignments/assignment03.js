let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");
elem[2]
  = document.getElementById("2");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]);};

//assign a function to the - button
elem[1].children[4].children[1].onclick 
  = function(){sub1(elem[1]);};
elem[2].children[4].children[1].onclick 
  = function(){sub1(elem[2]);};
// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
// create a "sub1" function
function sub1 (elem) {
  if(elem.children[2].innerHTML == "1"||elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
