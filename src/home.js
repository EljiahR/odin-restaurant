export default function homePage(){
    const content = document.querySelector('#content');
    content.innerHTML = '';
    
    const contentCard = document.createElement('div');
    contentCard.classList.add('content-card');
    const headline = document.createElement('h1');
    const description = document.createElement('h3');
    headline.innerText = "Fancy Restaurant #921";
    description.innerText= `"A wonderful place. I really like this place. What an awesome restaurant, just the best. I can't get enough. I'd buy one of their foods again."`;
    contentCard.appendChild(headline);
    contentCard.appendChild(description);
    content.appendChild(contentCard);
}