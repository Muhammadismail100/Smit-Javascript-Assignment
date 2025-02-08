// 1. Write a program that takes input a name from user & greet the
// user like this:
// let userName = prompt("Enter your name:");
// alert("Hello " + userName + "!");



// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”
// let city = prompt("Enter your city name:");
// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// }else{
//     alert("Wecome to our City");
// }



// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.
// 5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:
// let gender = prompt("Enter your gender (male/female):");
// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am.");
// } else {
//     alert("Good Morning!");
// }




// 5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:
// Signal color Message
// red vehicles must stop
// yellow vehicles should get ready to move
// green vehicles can move now
// let signalColor = prompt("Enter traffic signal color (red, yellow, green):");
// if (signalColor.toLowerCase() === "red") {
//     alert("Vehicles must stop");
// } else if (signalColor.toLowerCase() === "yellow") {
//     alert("Vehicles should get ready to move");
// } else if (signalColor.toLowerCase() === "green") {
//     alert("Vehicles can move now");
// } else {
//     alert("Invalid color!");
// }





// 6. Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show
// the message “You are welcome”
// let maxAge = prompt("Enter maximum age:");
// let currentAge = prompt("Enter your current age:");

// if (Number(currentAge) <= Number(maxAge)) {
//     alert("You are welcome");
// } else {
//     alert("You are over the age limit");
// }




// 7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”
// let fuel = prompt("Enter remaining fuel in litres:");
// if (Number(fuel) < 0.25) {
//     alert("Please refill the fuel in your car");
// }





// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:
// Percentage % Grade Remarks
// Greater than or equal to 80 A-one Excellent
// Greater than or equal to 70 A Good
// Greater than or equal to 60 B You need to improve
// Less than 60 Fail Sorry
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// let subject1 = prompt("Enter marks for Subject 1:");
// let subject2 = prompt("Enter marks for Subject 2:");
// let subject3 = prompt("Enter marks for Subject 3:");
// let totalMarks = prompt("Enter total marks:");

// let obtainedMarks = Number(subject1) + Number(subject2) + Number(subject3);
// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write(`Total Marks: ${totalMarks}<br>`);
// document.write(`Marks Obtained: ${obtainedMarks}<br>`);
// document.write(`Percentage: ${percentage}%<br>`);
// document.write(`Grade: ${grade}<br>`);
// document.write(`Remarks: ${remarks}<br>`);




// 10. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.



// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// 12. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.



// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)



// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :



// 15. Write a program that checks whether the given input is an
// even number or an odd number.



// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



// 17. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.



// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.



// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”



// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").

// 21. The Translator:
// Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)




// 22. Write a program to take input a number & tell whether it’s a
// positive or negative number.
// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Run the program for a few different inputs and show the result
// to make sure it works.
