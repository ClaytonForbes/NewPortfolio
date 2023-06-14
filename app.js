// const nav = document.getElementsByClassName("Nav");
const nav = document.getElementById("Top");
const topNav = document.getElementsByClassName("NAV");
const ele = document.getElementById("ele");
const img = document.getElementById("img");
const closed = document.getElementById("close");
const navg= document.getElementsByClassName("navlist");
const test =document.getElementById("test");


// show the navigation tabs
const show = () => {

 nav.style.display= "block";
 test.style.width="390px";
 
 closed.style.display ="block";

nav.style.display= "block";
closed.style.display ="block";

nav.style.display= "block";
closed.style.display ="block";

}

//close the navagation tab
const noshow = () => {
  closed.style.display ="";
  nav.style.display= "";
}


ele.onclick = show;
closed.addEventListener("click", noshow);


//test
const word = document.getElementById('word');
const letters = word.textContent.split('');
const title = document.getElementById('Title');
const l =[word.textContent.split(''), title.textContent.split('')]

// Clear the word and add each letter as a separate span element
word.textContent = '';
l[0].forEach((letter) => {
  const span = document.createElement('span');
  span.textContent = letter;
  word.appendChild(span);
});

title.textContent = '';
l[1].forEach((letter1) =>{
const span = document.createElement('span');
span.textContent = letter1;
title.appendChild(span);
})

const spans = document.querySelectorAll('#word span '); // to get each span in letter in the word
const spans1 = document.querySelectorAll('#Title span')

// Set the initial opacity of each letter to 0
spans.forEach((span) => (span.style.opacity = 0));
spans1.forEach((span1)=> (span1.style.opacity = 0)) 

let delay = 0;

// Animate each letter with a delay
spans.forEach((span) => {
  setTimeout(() => {
    span.style.opacity = 1;
  }, delay);
  delay += 100;
});

spans1.forEach((span) => {
  setTimeout(() => {
    span.style.opacity = 1;
  }, delay);
  delay += 100;
});





















