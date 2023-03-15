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
<<<<<<< HEAD
 nav.style.display= "block";
 test.style.width="390px";
 
 closed.style.display ="block";
=======
nav.style.display= "block";
closed.style.display ="block";
>>>>>>> origin
}

//close the navagation tab
const noshow = () => {
  closed.style.display ="";
  nav.style.display= "";
}


<<<<<<< HEAD
// call the navigaton functions
=======
// call the navagaton functions
>>>>>>> origin
ele.onclick = show;
closed.addEventListener("click", noshow);
