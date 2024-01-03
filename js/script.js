const quoteBtn = document.querySelector('#quote-btn');
const tweetBtn = document.querySelector('#tweet-btn');
const quoteContent = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author-span');

quoteBtn.addEventListener('click', getQuote);

async function getQuote() {
    const response = await fetch('https://api.quotable.io/random')
    let quote = await response.json();

    quoteContent.innerHTML = quote.content;
    quoteAuthor.innerText = quote.author;
}


tweetBtn.addEventListener('click', createTweet);

function createTweet() {

    window.open(`https://twitter.com/intent/tweet?text=${quoteContent.innerHTML} (${quoteAuthor.innerHTML})`);

}