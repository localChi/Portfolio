const navbar=document.querySelector('.navbar');
function openSidebar() {
    navbar.classList.add('show');
}
function closeSidebar() {
    navbar.classList.remove('show');
}
const media= window.matchMedia("(width<700px)");

function updateNavbar(e){
    const isMobile = e.matches;
console.log(isMobile)
if(isMobile)
    navbar.setAttribute('inert','')
else{
    navbar.removeAttribute('inert');
   
}
}
const navLinks=document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});
updateNavbar