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
<<<<<<< HEAD
 nav.style.display= "block";
 test.style.width="390px";
 
 closed.style.display ="block";
=======
nav.style.display= "block";
closed.style.display ="block";
>>>>>>> origin
=======
nav.style.display= "block";
closed.style.display ="block";
>>>>>>> 78a6cc658d16ee0d485dd85400c7b157a97ed601
}

//close the navagation tab
const noshow = () => {
  closed.style.display ="";
  nav.style.display= "";
}


<<<<<<< HEAD
<<<<<<< HEAD
// call the navigaton functions
=======
// call the navagaton functions
>>>>>>> origin
=======
// call the navagaton functions
>>>>>>> 78a6cc658d16ee0d485dd85400c7b157a97ed601
ele.onclick = show;
closed.addEventListener("click", noshow);
