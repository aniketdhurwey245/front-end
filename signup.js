function signup(){
const name = document.querySelector(".first-name").value;
const last = document.querySelector(".last-name").value;
const email= document.querySelector(".email").value;
const password = document.querySelector(".password").value;

const confirm = document.querySelector(".confirm-pass").value;



window.localStorage.setItem("first-name",name);
window.localStorage.setItem("last-name",last)
window.localStorage.setItem("email",email)
window.localStorage.setItem("password",password)

window.location.href="/login.html"




}