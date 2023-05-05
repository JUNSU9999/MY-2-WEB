const quotes = [
    {
        quote: 'When you have faults, do not fear to abandon them.',
        author: 'Confucius',
    },
    {
        quote: 'Age is no guarantee of maturity.',
        author: 'Lawana',
    },
    {
        quote: 'You will face many defeats in life, but never let yourself be defeated.',
        author: 'Maya Angelou',
    },
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela',
    },
    {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
    },
    {
        quote: 'This too shall pass.',
        author: 'Et hoc transibit',
    },
    {
        quote: 'Only I can change me life, no one can do it for me.',
        author: 'Carol Burnett',
    },
    {
        quote: 'The two most important days in your life are the day you are born and the day you find out why.',
        author: 'Mark Twain',
    },
    {
        quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston S. Churchill',
    },
    {
        quote: 'Success usually comes to those who are too busy to be looking for it.',
        author: 'Henry David Thoreau',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
