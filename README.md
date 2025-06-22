# Number-Guessing-Game-
"Guess the Number" is the ultimate showdown between your brain and a sneaky little computer. Somewhere between 1 and 100, the machine picks a secret number and dares you to find it. Will you guess it in 3 tries and feel like a genius? Or take 27 and question your life choices?

![image](https://github.com/user-attachments/assets/207df8e8-d9f7-49ff-b9ce-f5565adc63b7)


🎯 Guess the Number - Python Game

Welcome to **Guess the Number**, the ultimate brain-vs-machine battle where the computer picks a number, and you try to guess it! It's simple, fun, and weirdly addictive.

🧠 How to Play

1. Run the Python script.
2. Type in your guesses when prompted.
3. The game will tell you whether your guess is too high or too low.
4. Keep guessing until you hit the right number!
5. Celebrate like a boss. 

🚀 How to Run

1. Make sure you have Python installed.
2. Save the script as `guess_the_number.py`.
3. Run it using your terminal or command prompt:

import random

def guess_the_number():
    number_to_guess = random.randint(1, 100)
    guess = None
    attempts = 0

    print("🎯 Welcome to Guess the Number!")
    print("I'm thinking of a number between 1 and 100. Can you guess it?")

    while guess != number_to_guess:
        try:
            guess = int(input("Enter your guess: "))
            attempts += 1
            if guess < number_to_guess:
                print("Too low! 📉 Try again.")
            elif guess > number_to_guess:
                print("Too high! 📈 Try again.")
            else:
                print(f"🎉 You got it in {attempts} tries! The number was {number_to_guess}.")
        except ValueError:  
            print("🚫 Please enter a valid number!")

# Start the game
guess_the_number()
