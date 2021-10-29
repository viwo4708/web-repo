/*random number function found here:
https://www.w3schools.com/js/js_random.asp*/

document.getElementById("normmode").addEventListener("click", normalmode, false);
document.getElementById("normmode").addEventListener("click", changetabnorm, false);

document.getElementById("weirdmode").addEventListener("click", weirdmode, false);
document.getElementById("weirdmode").addEventListener("click", changetabweird, false);

document.getElementById("normbutton").addEventListener("click", changewordsnorm, false);
document.getElementById("weirdbutton").addEventListener("click", changewordsweird, false);

function changetabnorm(e) { /*this function only changes the way the tab looks.
use separate listener to change internal elements. */

  document.getElementById("weirdmode").classList = "inactive";

  if(e.target.tagName == "H2") {
    console.log ("h2 clicked")
    e.target.parentNode.classList = "active";
  }
  else {
    console.log ("div clicked")
    e.target.classList = "active";
  }
}

function changetabweird(e) {
  document.getElementById("normmode").classList = "inactive";

  if(e.target.tagName == "H2") {
    console.log ("h2 clicked")
    e.target.parentNode.classList = "active";
  }
  else {
    console.log ("div clicked")
    e.target.classList = "active";
  }
}

function normalmode() {
  console.log("normal mode activated");

  let randadj = adjs[randInt(0, adjs.length)]; //random index of adj array
  let randcolor = colors[randInt(0, colors.length)];//random index of color array

  if (document.getElementById("normmode").classList == "inactive") {
    document.getElementById("adjective").innerHTML = randadj;
    document.getElementById("nouncolor").innerHTML = randcolor;
  }

  document.getElementById("normbutton").classList = "shownbutton";
  document.getElementById("weirdbutton").classList = "hiddenbutton";
  document.getElementById("blackorly").src = "https://raw.githubusercontent.com/viwo4708/web-repo/main/midterm/image2.jpg";
}

function weirdmode() {
  console.log("weird mode activated");

  let randadj = adjs[randInt(0, adjs.length)]; //random index of adj array
  let randnoun = nouns[randInt(0, nouns.length)];//random index of color array

  if (document.getElementById("weirdmode").classList == "inactive") {
    document.getElementById("adjective").innerHTML = randadj;
    document.getElementById("nouncolor").innerHTML = randnoun;
  }

  document.getElementById("weirdbutton").classList = "shownbutton";
  document.getElementById("normbutton").classList = "hiddenbutton";
  document.getElementById("blackorly").src = "https://raw.githubusercontent.com/viwo4708/web-repo/main/midterm/image.jpg";
}

function randInt(min, max) { //note: max excluded for use with arrays
  return Math.floor(Math.random() * (max - min)) + min;
}

function changewordsnorm() {
  //change inner html based on array for normmmode
  let randadj = adjs[randInt(0, adjs.length)]; //random index of adj array
  let randcolor = colors[randInt(0, colors.length)];//random index of color array

  document.getElementById("adjective").innerHTML = randadj;
  document.getElementById("nouncolor").innerHTML = randcolor;

  console.log(randadj);
  console.log(randcolor);
}

function changewordsweird() {
  //change innter html based on array for weirdmode
  let randadj = adjs[randInt(0, adjs.length)];
  let randnoun = nouns[randInt(0, nouns.length)];

  document.getElementById("adjective").innerHTML = randadj;
  document.getElementById("nouncolor").innerHTML = randnoun;

  console.log(randadj);
  console.log(randnoun);
}
