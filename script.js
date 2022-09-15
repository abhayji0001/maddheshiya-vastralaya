let searchform=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{

    searchform.classList.toggle('active');
  
    userlogin.classList.remove('active');
    navbar.classList.remove('active');
}

let userlogin=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{

userlogin.classList.toggle('active');
searchform.classList.remove('active');


navbar.classList.remove('active');
}
let navbar=document.querySelector('.nav-links');
document.querySelector('#menu-btn').onclick=()=>{

navbar.classList.toggle('active');
searchform.classList.remove('active');

userlogin.classList.remove('active');

}

