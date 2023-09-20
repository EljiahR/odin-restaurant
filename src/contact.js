export default function contactPage(){
    const content = document.querySelector('#content');
    content.innerHTML = '';

    document.querySelector('#home-btn').classList.remove('pressed')
    document.querySelector('#menu-btn').classList.remove('pressed')
    document.querySelector('#contact-btn').classList.add('pressed')
    const contentCard = document.createElement('div');
    contentCard.classList.add('content-card')
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.innerText = "Please enter our email:"
    const emailInput = document.createElement('input');
    emailInput.type = 'text' 
    emailInput.placeholder = 'ouremail@guesit.com'
    emailInput.id = 'email'
    const submitBtn = document.createElement('button');
    submitBtn.innerText = "Contact Us"
    contentCard.appendChild(emailLabel);
    contentCard.appendChild(emailInput);
    contentCard.appendChild(submitBtn);
    content.appendChild(contentCard)
}