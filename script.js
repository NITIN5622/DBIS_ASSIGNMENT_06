const menuIcon=document.querySelector("#menu-icon")
const navlinks=document.querySelector(".nav-links")
menuIcon.onClick=()=>{
    navlinks.classList.toggle('active')
}
let visitGithub_1=document.querySelector(".visit-btn")
visitGithub_1.addEventListener('click',()=>{
    window.open("https://github.com/NITIN5622")
})
let visitGithub_2=document.querySelector(".fa-github")
visitGithub_2.addEventListener('click',()=>{
    window.open("https://github.com/NITIN5622")
})
let contact=document.querySelector(".contact-link")
contact.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth' 
    })
})
let dm=false
let darkMode=document.querySelector(".fa-circle-half-stroke");
darkMode.addEventListener('click',()=>{
    let body=document.getElementsByTagName("body")[0];
    if(!dm){
    body.style.backgroundColor="black"
    body.style.color="white"
    dm=true}
    else{
        body.style.backgroundColor="white"
        body.style.color="black"
       dm=false 
    }

})