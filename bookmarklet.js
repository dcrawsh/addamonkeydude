

javascript:(function()
{ 



fileRef = document.createElement('link');
fileRef.rel = 'stylesheet';
fileRef.type = 'text/css';
fileRef.href = 'bookmarklet.css';
document.getElementsByTagName('head')[0].appendChild(fileRef);
    

let div = document.createElement('div');
let span = document.createElement('span');

let picture = document.createElement('img');

var fileRef;



picture.src = 'https://cdn.britannica.com/81/65381-050-B34096B5/orangutan-branches-tree.jpg';
document.body.appendChild(div);
div.appendChild(span);
div.appendChild(picture);

div.classList.add('tooltip');
span.classList.add('tooltiptext');
span.innerText = 'This monkey is crazy for cocopuffs';

}

)();