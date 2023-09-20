import foodImage from './images/pexels-spencer-davis-4393021.jpg'
export default function mainPage(){
        const content = document.createElement('div');
        content.id = 'content'
       
        const restBack = new Image();
        const navbar = document.createElement('div');
        const footer = document.createElement('div');
        footer.id = 'footer'
        navbar.classList.add("navbar");
        const homeBtn = document.createElement('button');
        homeBtn.innerText = 'Home';
        homeBtn.id = 'home-btn';
        const menuBtn = document.createElement('button');
        menuBtn.innerText = 'Menu';
        menuBtn.id='menu-btn';
        const contactBtn = document.createElement('button');
        contactBtn.innerText = 'Contact Us';
        contactBtn.id = 'contact-btn';
        navbar.appendChild(homeBtn);
        navbar.appendChild(menuBtn);
        navbar.appendChild(contactBtn);
        restBack.src = foodImage;
        document.body.style.backgroundImage = "url(" + restBack.src + ")";
        document.body.appendChild(navbar);
        document.body.appendChild(content);
        //document.body.appendChild(footer);
    }
