import mainPage from './mainpage';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

mainPage();
document.querySelector('#home-btn').addEventListener('click', (e)=>{
    e.stopPropagation
    homePage();
});
document.querySelector('#menu-btn').addEventListener('click', (e)=>{
    e.stopPropagation
    menuPage();
});
document.querySelector('#contact-btn').addEventListener('click', (e)=>{
    e.stopPropagation
    contactPage();
});
homePage();
