# Mystery Calculator
## The mystery calculator knows all
### A remake of the classic Christmas magic trick

This project 'guesses' the user's selected number by utilising bitwise binary calculation.

### How it works
A trick number is associated with each card.
The trick number is the number in the top left corner of the card.
The trick number is a bitwise number, with each of the values in the card.
The trick number in this particular algorithm is 32 or less.

The user is asked to select a number between 1 and 63.

The user is then asked to select all the cards that have their number in it.

Once the user selects all the cards, the user's number is calculated by adding all the trick numbers of the cards selected.

### Sample bitwise calculation

Check if trick number 64 is bitwise with number 32

That is - 1000000 bitwise 100000 = 0

Or..

trick number 8 bitwise 12,

That is - 10000 bitwise 1100 = 10000

If values are bitwise, include them so we can use them in this trick!

Once these values are included, we can assume that every card with these numbers in them has a bitwise number at the top left

With this mind, if a user selects a card with a bitwise number, we can assume that the user's number has that number in it.

### Example

User selects the number 13

The trick number for the cards containing 13 are 1, 4, 8

The user selects the cards with the trick numbers 1, 4, 8

When added together, the user's number is 13
