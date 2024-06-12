# Basic Blackjack Game

## Overview

This is a simple Blackjack game implemented in JavaScript. The game allows a player to start a new game and draw new cards with the objective of reaching exactly 21 points (Blackjack). If the total points exceed 21, the player loses.

## Rules

1. **Card Values:**
   - Ace (1) is considered as 11 points.
   - King (13), Queen (12), and Jack (11) are each considered as 10 points.
   - All other cards (2-10) retain their face values.

2. **Game Flow:**
   - Click the "Start Game" button to draw two initial cards.
   - The sum of these two cards will be displayed.
   - Click the "New Card" button to draw an additional card.
   - The game ends if the total points exceed 21 (player loses) or reach exactly 21 (Blackjack).

## Usage

1. **Starting the Game:**
   - Click the "Start Game" button to begin.
   - Two random cards will be displayed with their total sum.

2. **Drawing a New Card:**
   - Click the "New Card" button to draw an additional card.
   - The new card will be added to the total sum and displayed.

3. **Winning or Losing:**
   - If the total sum of your cards reaches exactly 21, you win (Blackjack).
   - If the total sum exceeds 21, you lose.

## Installation and Setup

To install and run the game locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/basic-blackjack.git

2. Navigate to the project directory:
    ```bash
    cd blackjack

3. Open `index.html` in your web browser to start the game.

## Example

1. **Start Game:**
    - Initial cards: 8, 7
    - Total: 15

2. **Draw New Card:**
    - New Card: 5
    - Total: 20

3. **Draw Another Card:**
    - New Card: 2
    - Total: 22 (You Lose)

## Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Acknowledgements
- This project is inspired by the classic card game, Blackjack.

