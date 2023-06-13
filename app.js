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




// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

  // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

//   //GUess Better title
//   var textWrapper = document.querySelector('.ml4');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml4 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


//   var textWrapper = document.querySelector('.ml5');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml5 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


//   var textWrapper = document.querySelector('.ml6');
//   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
//   anime.timeline({loop: true})
//     .add({
//       targets: '.ml6 .letter',
//       opacity: [0,1],
//       easing: "easeInOutQuad",
//       duration: 2250,
//       delay: (el, i) => 150 * (i+1)
//     }).add({
//       targets: '.ml3',
//       opacity: 0,
//       duration: 1000,
//       easing: "easeOutExpo",
//       delay: 1000
//     });


//     var textWrapper = document.querySelector('.ml7');
//     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
//     anime.timeline({loop: true})
//       .add({
//         targets: '.ml7 .letter',
//         opacity: [0,1],
//         easing: "easeInOutQuad",
//         duration: 2250,
//         delay: (el, i) => 150 * (i+1)
//       }).add({
//         targets: '.ml7',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//       });



//       var textWrapper = document.querySelector('.ml8');
//       textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
//       anime.timeline({loop: true})
//         .add({
//           targets: '.ml8 .letter',
//           opacity: [0,1],
//           easing: "easeInOutQuad",
//           duration: 2250,
//           delay: (el, i) => 150 * (i+1)
//         }).add({
//           targets: '.ml8',
//           opacity: 0,
//           duration: 1000,
//           easing: "easeOutExpo",
//           delay: 1000
//         });




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





















