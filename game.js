// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    const gameContainer = document.getElementById('game-container');

    // Function to create a new bubble
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Give it a random size and starting position
        const size = Math.random() * 40 + 20; // 20px to 60px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 90}%`; // 0% to 90% from left
        
        // Give it a random float speed
        const duration = Math.random() * 5 + 8; // 8 to 13 seconds
        bubble.style.animationDuration = `${duration}s`;

        // Add the pop effect on click
        bubble.addEventListener('click', () => {
            // Add the 'pop' class
            bubble.classList.add('pop');
            
            // Remove the bubble from the page after the pop animation finishes
            setTimeout(() => {
                bubble.remove();
            }, 200); // 200ms matches the CSS transition
        });

        // Add the new bubble to the game
        gameContainer.appendChild(bubble);

        // Remove the bubble if it floats off-screen (to keep page fast)
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000); // Remove after its animation duration
    }

    // Create a new bubble every 1.5 seconds
    setInterval(createBubble, 1500);

});
/* =========================================
  MEMORY MATCH GAME LOGIC
=========================================
*/

// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    // Only run this code if the memory game board exists on the page
    const gameBoard = document.getElementById('memory-game-board');
    if (gameBoard) {
        
        // --- 1. Setup Game Variables ---
        const icons = ["😊", "🎵", "🌳", "🧘", "☀️", "❤️", "⭐", "🦋"];
        let cards = [...icons, ...icons]; // Create pairs of icons
        let flippedCards = [];
        let moves = 0;
        let lockBoard = false; // Prevents clicking more than 2 cards
        const movesCounter = document.getElementById('moves-counter');

        // --- 2. Shuffle Cards ---
        function shuffleCards() {
            cards.sort(() => 0.5 - Math.random());
        }

        // --- 3. Create Game Board ---
        function createBoard() {
            gameBoard.innerHTML = ''; // Clear old board
            moves = 0;
            movesCounter.textContent = '0';

            shuffleCards();
            
            cards.forEach(icon => {
                const card = document.createElement('div');
                card.classList.add('memory-card');
                card.dataset.icon = icon;

                // Create the front and back faces
                card.innerHTML = `
                    <div class="card-face card-front">${icon}</div>
                    <div class="card-face card-back"></div>
                `;

                gameBoard.appendChild(card);
                
                // Add click listener
                card.addEventListener('click', handleCardClick);
            });
        }

        // --- 4. Handle Clicking a Card ---
        function handleCardClick(event) {
            // Get the card that was clicked
            const clickedCard = event.currentTarget;

            // If board is locked, or card is already flipped/matched, do nothing
            if (lockBoard || clickedCard.classList.contains('flipped')) {
                return;
            }

            flipCard(clickedCard);
            flippedCards.push(clickedCard);

            // Check if it's the 1st or 2nd card flipped
            if (flippedCards.length === 2) {
                // It's the 2nd card, check for a match
                incrementMoves();
                checkForMatch();
            }
        }

        function flipCard(card) {
            card.classList.add('flipped');
        }

        function unflipCards() {
            lockBoard = true; // Lock board
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.remove('flipped'));
                resetFlippedCards();
            }, 1200); // Wait 1.2 seconds before flipping back
        }

        function checkForMatch() {
            const [cardOne, cardTwo] = flippedCards;
            
            if (cardOne.dataset.icon === cardTwo.dataset.icon) {
                // It's a match!
                cardOne.classList.add('matched');
                cardTwo.classList.add('matched');
                resetFlippedCards();
            } else {
                // Not a match
                unflipCards();
            }
        }

        function incrementMoves() {
            moves++;
            movesCounter.textContent = moves;
        }

        function resetFlippedCards() {
            flippedCards = [];
            lockBoard = false; // Unlock board
        }

        // --- 5. Start the Game ---
        createBoard();
    }
});
/* =========================================
  MINDFUL SEQUENCE GAME LOGIC
=========================================
*/

// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    // Only run this code if the sequence game board exists
    const gameBoard = document.getElementById('sequence-game-board');
    if (gameBoard) {

        // --- 1. Setup Game Variables ---
        const pads = document.querySelectorAll('.sequence-pad');
        const startButton = document.getElementById('sequence-start-btn');
        const statusDisplay = document.getElementById('sequence-status');
        
        let gameSequence = [];
        let playerSequence = [];
        let level = 0;
        let isPlaying = false;

        // --- 2. Game Functions ---

        function startGame() {
            gameSequence = [];
            playerSequence = [];
            level = 0;
            startButton.textContent = "Restart Game";
            nextLevel();
        }

        function nextLevel() {
            level++;
            statusDisplay.textContent = `Level: ${level}`;
            playerSequence = []; // Reset player's turn
            
            // Add a new random step to the sequence
            const nextStep = Math.floor(Math.random() * 4) + 1;
            gameSequence.push(nextStep);

            playSequence();
        }

        async function playSequence() {
            gameBoard.classList.add('disabled'); // Disable pads
            
            // Loop through the sequence and "light up" pads
            for (const step of gameSequence) {
                await lightUpPad(step);
            }
            
            gameBoard.classList.remove('disabled'); // Enable pads
            statusDisplay.textContent += " - Your Turn";
        }

        function lightUpPad(padNumber) {
            const pad = document.querySelector(`.sequence-pad[data-pad="${padNumber}"]`);
            
            // Return a promise so we can wait for it
            return new Promise((resolve) => {
                setTimeout(() => {
                    pad.classList.add('active');
                    setTimeout(() => {
                        pad.classList.remove('active');
                        setTimeout(() => resolve(), 150); // Short pause
                    }, 500); // How long pad stays lit
                }, 150); // Pause between lights
            });
        }

        function handlePadClick(event) {
            if (gameBoard.classList.contains('disabled')) return;

            const clickedPadNumber = parseInt(event.target.dataset.pad);
            playerSequence.push(clickedPadNumber);

            // Light up the pad the player clicked
            const pad = event.target;
            pad.classList.add('active');
            setTimeout(() => pad.classList.remove('active'), 200);

            // Check if the click was correct
            const currentStep = playerSequence.length - 1;
            if (playerSequence[currentStep] !== gameSequence[currentStep]) {
                gameOver();
                return;
            }

            // If player's sequence is complete, move to next level
            if (playerSequence.length === gameSequence.length) {
                statusDisplay.textContent = "Correct!";
                setTimeout(() => nextLevel(), 1000);
            }
        }

        function gameOver() {
            statusDisplay.textContent = `Game Over! You reached level ${level}.`;
            gameBoard.classList.add('disabled');
            startButton.textContent = "Try Again?";
        }

        // --- 3. Start Event Listeners ---
        startButton.addEventListener('click', startGame);
        pads.forEach(pad => {
            pad.addEventListener('click', handlePadClick);
        });
    }
});