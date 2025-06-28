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



