document.addEventListener('DOMContentLoaded', () => {

    // 1. Get the HTML elements
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    // 2. Create your list of quotes (Now 50+!)
    const quotes = [
        { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
        { text: "You don't have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
        { text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", author: "Oprah Winfrey" },
        { text: "It's not stress that kills us, it is our reaction to it.", author: "Hans Selye" },
        { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
        { text: "A single step is all it takes to start a journey of a thousand miles.", author: "Laozi" },
        { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { text: "Focus on the step in front of you, not the whole staircase.", author: "Unknown" },
        { text: "A little progress each day adds up to big results.", author: "Satya Nani" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Act as if what you do makes a difference. It does.", author: "William James" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
        { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
        { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
        { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
        { text: "Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing.", author: "William Arthur Ward" },
        { text: "Your positive action combined with positive thinking results in success.", author: "Shiv Khera" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "It is never too late to be what you might have been.", author: "George Eliot" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "If you can dream it, you can do it.", author: "Walt Disney" },
        { text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison" },
        { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
        { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
        { text: "A creative man is motivated by the desire to achieve, not by the desire to beat others.", author: "Ayn Rand" },
        { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
        { text: "The mind is everything. What you think you become.", author: "Buddha" },
        { text: "Problems are not stop signs, they are guidelines.", author: "Robert H. Schuller" },
        { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
        { text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali" },
        { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
        { text: "To be calm is the highest achievement of the self.", author: "Zen Proverb" },
        { text: "Worrying does not take away tomorrow's troubles, it takes away today's peace.", author: "Unknown" },
        { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
        { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
        { text: "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.", author: "Hermann Hesse" },
        { text: "Difficult roads often lead to beautiful destinations.", author: "Zig Ziglar" },
        { text: "Nothing is permanent. Don't stress yourself too much because no matter how bad the situation is... it will change.", author: "Unknown" },
        { text: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", author: "Benjamin Franklin" },
        { text: "One of the best ways to reduce stress is to accept the things you cannot control.", author: "M. P. Neary" },
        { text: "The day is already blessed, find it.", author: "Unknown" },
        { text: "Sometimes the most productive thing you can do is relax.", author: "Mark Black" },
        { text: "If you want to conquer the anxiety of life, live in the moment, live in the breath.", author: "Amit Ray" },
        { text: "Do what you can, with what you've got, where you are.", author: "Theodore Roosevelt" },
        { text: "Calmness is the cradle of power.", author: "Josiah Gilbert Holland" },
        { text: "Set peace of mind as your highest goal, and organize your life around it.", author: "Brian Tracy" },
        { text: "You can't calm the storm, so stop trying. What you can do is calm yourself. The storm will pass.", author: "Timber Hawkeye" },
        { text: "Stress is the alarm clock that tells you it's time to make a change.", author: "Unknown" }
    ];

    // 3. Function to show a new random quote
    function getNewQuote() {
        // Pick a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Set the text content of the HTML elements
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteAuthor.textContent = `– ${randomQuote.author}`;
    }

    // 4. Add the click event listener to the button
    newQuoteBtn.addEventListener('click', getNewQuote);

    // Show a random quote when the page first loads
    getNewQuote();
});