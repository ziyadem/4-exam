console.log(23);
let load=document.querySelector(".load");

let getToken=localStorage.getItem('token');
if(!getToken){
    window.location.replace('./login.html');
}
setTimeout(() => {
    load.style.display="none";
}, 1000);