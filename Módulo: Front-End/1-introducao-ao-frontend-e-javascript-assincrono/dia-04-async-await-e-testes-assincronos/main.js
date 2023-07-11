const getQuoteButtoy = document.querySelectro('.get-quote');
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const errorText = document.querySelector('.error');
const API_URL = `https://dummyjson.com/quotes/random`;

getQuoteButton.addEventListerner('click', async () => {
    //    fetch(API_URL)
    //        .then((response) => response.json())
    //        .then((data) => {
    //            quoteText.innerText = data.quote;
    //            authorText.innerText = data.author;
    //            errorText.innerText = "";
    //        })
    //        .catch((error) => {
    //            quoteText.innerText = "";
    //            authorText.innerText = "";
    //            errorText.innerText = `Error getting quote: ${error.message}`
    //        });

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        quoteText.innerText = data.quote;
        authorText.innerText = data.author;
        errorText.innerText = "";
    } catch (error) {
        quoteText.innerText = "";
        authorText.innerText = "";
        errorText.innerText = `Error getting quote: ${error.message}`;
    }
});