const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

const hexBtn = document.querySelector('.hexBtn');

const quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.    ',
    name: 'Oscar Wilde'
  },
  {
    quote: 'So many books, so little time.',
    name: 'Frank Zappa'
  },
  {
    quote: 'A room without books is like a body without a soul',
    name: 'Marcus Tullius Cicero'
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    name: 'Mae West'
  },
  {
    quote: 'Be the change that you wish to see in the world',
    name: 'Mahatma Gandhi'
  },
  {
    quote: 'In three words I can sum up everything I\'ve learned about life: it goes on.',
    name: ' Robert Frost'
  }
]


quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
  let number = Math.floor(Math.random()*quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}