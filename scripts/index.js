/*
    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage
    Why my codes doesn't look exactly like MDN's? Well it is because after I read the docs, I try to do it myself.
    When I stuck, I refer back to the docs.
    Thank you Mozilla.
*/

var submitBtn = document.querySelector('.submitBtn');
var forgetBtn = document.querySelector('.forgetBtn');
var nameBox = document.querySelector('.nameBox');
var userExists = document.querySelector('.userExists');
var noUserExists = document.querySelector('.noUserExists');
var form = document.querySelector('form');
var exclusive = document.querySelector('.exclusive');
var exclusiveContent = document.createElement('p');
var title = document.querySelector('h1');

form.onsubmit = function(e) {
    e.preventDefault();
};

function submitName() {
    var name = nameBox.value;
    localStorage.setItem('name', name);
    checkNameExists();
}

function forgetName() {
    localStorage.removeItem('name');
    checkNameExists();
    nameBox.value = '';
}

submitBtn.addEventListener('click', submitName);
forgetBtn.addEventListener('click', forgetName);

function checkNameExists() {
    if(!localStorage.getItem('name')) {
        userExists.style.display = 'none';
        noUserExists.style.display = 'block';
        exclusive.style.display = 'none';
        exclusive.removeChild(exclusiveContent);
        title.textContent = 'Welcome To Web Storage Exercise';
    } else {
        var name = localStorage.getItem('name');
        exclusiveContent.textContent = 'This content is visible when localStorage had stored the name user\'s entered. Current user is ' + name +'.';
        exclusive.appendChild(exclusiveContent);
        title.textContent = 'Welcome, ' + name + '.';
        userExists.style.display = 'block';
        noUserExists.style.display = 'none';
        exclusive.style.display = 'block';
    }
}

document.body.onload = checkNameExists;