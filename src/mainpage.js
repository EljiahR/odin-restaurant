import foodImage from './images/pexels-spencer-davis-4393021.jpg'
export default function mainPage(){
        const content = document.createElement('div');
        content.id = 'content'
        const headline = document.createElement('h1');
        const description = document.createElement('h3');
        const restBack = new Image();
        const navbar = document.createElement('div');
        const footer = document.createElement('div');
        footer.id = 'footer'
        navbar.classList.add("navbar");
        const homeBtn = document.createElement('button');
        homeBtn.innerText = 'Home';
        const menuBtn = document.createElement('button');
        menuBtn.innerText = 'Menu';
        const contactBtn = document.createElement('button');
        contactBtn.innerText = 'Contact Us';
        navbar.appendChild(homeBtn);
        navbar.appendChild(menuBtn);
        navbar.appendChild(contactBtn);
        restBack.src = foodImage;
        headline.innerText = "Fancy Restaurant #921";
        description.innerText= `"A wonderful place. I really like this place. What an awesome restaurant, just the best. I can't get enough. I'd buy one of their foods again."`;
        content.appendChild(headline);
        content.appendChild(description);
        document.body.style.backgroundImage = "url(" + restBack.src + ")";
        document.body.appendChild(navbar);
        document.body.appendChild(content);
        document.body.appendChild(footer);
    }
