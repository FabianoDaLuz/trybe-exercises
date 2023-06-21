const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

const insertPhraseInDOM = () => {
    const phrasesList = JSON.parse(localStorae.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    const phraseText = phrasesList[listLength];
    const phrase = document.createElement('li');
    phrase.innerText = phraseText;

}