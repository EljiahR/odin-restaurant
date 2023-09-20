export default function menuPage(){
    const content = document.querySelector('#content');
    content.innerHTML = '';


    document.querySelector('#home-btn').classList.remove('pressed')
    document.querySelector('#menu-btn').classList.add('pressed')
    document.querySelector('#contact-btn').classList.remove('pressed')
    const contentCard = document.createElement('div');
    contentCard.classList.add('content-card');
    const headline = document.createElement('h2');
    headline.innerText = "Menu Currently unavailable";
    const message = document.createElement('h3');
    message.innerText = "I'm so sorry";
    contentCard.appendChild(headline);
    contentCard.appendChild(message);
    content.appendChild(contentCard);
}