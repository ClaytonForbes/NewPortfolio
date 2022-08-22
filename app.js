// const nav = document.getElementsByClassName("Nav");
const nav = document.getElementById("Top");
const topNav = document.getElementsByClassName("NAV");
const ele = document.getElementById("ele");
const closed = document.getElementById("close");



const show = () => {

nav.style.display= "block";
closed.style.display ="block";


}

const noshow = () => {
  closed.style.display ="";
  nav.style.display= "";
}

ele.onclick = show;
closed.addEventListener("click", noshow);
