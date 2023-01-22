// const nav = document.getElementsByClassName("Nav");
const nav = document.getElementById("Top");
const topNav = document.getElementsByClassName("NAV");
const ele = document.getElementById("ele");
const closed = document.getElementById("close");


// show the navigation tabs
const show = () => {
nav.style.display= "block";
closed.style.display ="block";
}

//close the navagation tab
const noshow = () => {
  closed.style.display ="";
  nav.style.display= "";
}


// call the navagaton functions
ele.onclick = show;
closed.addEventListener("click", noshow);
