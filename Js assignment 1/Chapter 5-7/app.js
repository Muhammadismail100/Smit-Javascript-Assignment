// 1. Write a program that take two numbers & add them in a new
// variable. Show the result in your browser.
// let num1 = 13;
// let num2 = 9;
// let sum = num1 + num2;
// document.write(`Sum of ${num1} and ${num2} is ${sum}`);


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus. E.g.
// let num1 = 13;
// let num2 = 9;
// document.write("<h3>Task 2: Arithmetic Operations</h3>");
// document.write("Subtraction: " + (num1 - num2) + "<br>");
// document.write("Multiplication: " + (num1 * num2) + "<br>");
// document.write("Division: " + (num2 / num1) + "<br>");
// document.write("Modulus: " + (num2 % num1) + "<br><br>");


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by
// 3. Output : “The remainder is : 1”

// let value;
// document.write("Value after variable declaration is: " + value + "<br>");
// value = 3;
// document.write("Initial value: " + value + "<br>");
// value++;
// document.write("Value after increment is: " + value + "<br>");
// value += 7;
// document.write("Value after addition is: " + value + "<br>");
// value--;
// document.write("Value after decrement is: " + value + "<br>");
// document.write("The remainder is: " + (value % 3) + "<br><br>");



// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:
// let ticketPrice = 600;
// let totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR<br><br>");




// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// let celsius = 25;
// let fahrenheit = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");



// 7. Write a program to implement checkout process of a shopping
// cart system for an e-commerce website. Store the following in
// variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// let priceItem1 = 650, priceItem2 = 100;
// let quantityItem1 = 3, quantityItem2 = 7;
// let shippingCharges = 100;
// let totalCartCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.write("Total cost of your order is: " + totalCartCost + " PKR<br><br>");



// 8. Write a script to take total marks & marks obtained by a
// student. Compute the percentage & show the result in your
// browser.
// let totalMarks = 500;
// let marksObtained = 420;
// let percentage = (marksObtained / totalMarks) * 100;
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%<br><br>");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
// to convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and
// 1 Saudi Riyal = 28 Pakistani Rupee)
// let usd = 10, sar = 25;
// let totalPKR = (usd * 104) + (sar * 28);
// document.write("Total Currency in PKR: " + totalPKR + "<br><br>");



// 10. Write a program to initialize a variable with some number
// and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.
// let num = 5;
// let result = ((num + 5) * 10) / 2;
// document.write("Final result: " + result + "<br><br>");


// 11. The Age Calculator: Forgot how old someone is? Calculate
// it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
// let currentYear = 2025;
// let birthYear = 2005;
// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;
// document.write("They are either " + age2 + " or " + age1 + " years old.<br><br>");



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is
// NN”. (Hint : Area of a circle = π r2, π = 3.142)
// let radius = 5;
// let circumference = 2 * 3.142 * radius;
// let area = 3.142 * radius * radius;
// document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
// document.write("The area is: " + area.toFixed(2) + "<br><br>");




// 13. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// let number = 10;
// document.write("Result:<br>The value of number is: " + number + "<br>");
// document.write("The value after ++number is: " + (++number) + "<br>");
// document.write("The value after number++ is: " + (number++) + "<br>");
// document.write("Now the value of number is: " + number + "<br><br>");




// 14. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// let a = 2, b = 1;
// let resultTask14 = --a - --b + ++b + b--;
// document.write("Result: " + resultTask14 + "<br>");
// document.write("Explanation:<br>");
// document.write("--a = 1<br>");
// document.write("--a - --b = 1 - 0 = 1<br>");
// document.write("--a - --b + ++b = 1 + 1 = 2<br>");
// document.write("--a - --b + ++b + b-- = 2 + 1 = 3<br><br>");


// 15. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no
// more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

// Output the result to the screen like so: “You will need NNNN to
// let favoriteSnack = "Chips";
// let currentAge = 25;
// let maxAge = 75;
// let perDay = 3;
// let totalNeeded = (maxAge - currentAge) * 365 * perDay;
// document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");