var myHeading1 = document.querySelectorAll("h1")[1];
myHeading1.textContent = "Hello world!";

/*
document.querySelector("html").onclick = function () {
  test();
};
*/

//document.querySelector("html").onclick = test();
function test()
{
  alert("Ouch"+multiply(2,3));
}

function multiply(num1, num2) 
{
  let result = num1 * num2;
  return result;
}

var myImage = document.querySelector("img");

myImage.onclick = function () 
{
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") 
  {
    myImage.setAttribute("src", "images/ader.jpg");
  }
  else
  {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}
  
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() 
{
  let myName = prompt("Please enter your name.");
  while (!myName || myName === null)
  {
	  myName = prompt("Please enter your name.");
  }
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) 
{
  setUserName();
}
else
{
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () 
{
  setUserName();
};
