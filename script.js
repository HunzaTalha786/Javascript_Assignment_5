// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

var city =prompt("Enter your city name.");
if (city=="karachi"){
    document.write(`<h2>"Welcome to city of lights."</h2><br/><hr><br/>`);
}
else{
   document.write(`<h2>"Welcome to ${city}.</h2><br/><hr><br/>`);
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

var gender =prompt("Enter your gender");
if(gender=="male"){
    document.write(`<p style=font-size:20px;>Good Morning Sir!<p/><hr>`);
}
else if(gender=="female"){
    document.write(`<p style=font-size:20px;>Good Morning Ma’am!</p><br/><hr><br/>`);
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color : Message
// Red          : Must Stop
// Yellow       :Ready to move
// Green        :Move now

var color= prompt("Write a color of traffic signal.");
if(color=="Red"){
    document.write(`"Must Stop"!<br/><br><hr><br/>`);
}
else if(color="Yellow"){
    document.write(`"Ready to move"!<br/><br><hr><br/>`);
}
else if(color="Green"){
    document.write(`"Move ow"!<br/><br><hr><br/>`);
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”.

document.write(`<h1>Refill Fuel in a car:</h1><br>`);


var fuel=prompt("write a remaining fuel amount.");
if(fuel<0.25){
    document.write(`“Please refill the fuel in your car”.<br/><hr><br/>`);
}
else{
   document.write(`“No need to refill the fuel in your car”.<br/><hr><br/>`);
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a:
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} 
document.write(`<p style="font-size:20px";>a:Yes, the alert message "given condition for variable a is true" would be displayed when this script is run.
 </p><br>`);

//  b:
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write(`<p style="font-size:20px";>b: The condition "b++ === 83" evaluates to "false" because the value returned by "b++" is "82", not "83". Since the condition is false, the code inside the "if" block (the "alert" statement) will not execute.As a result, no alert will be shown.
</p><br>`);

// c(1):
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

document.write(`<p style="font-size:20px";>c(1): 12 === 13 is false, this alert will not be triggered. </p><br>`);

// c(2):
if (c === 13){
alert("condition 2 is true");
}
document.write(`<p style="font-size:20px";>c(2):After the first condition,"c" is now 13.Since "c === 13" is true, this alert will be triggered.</p><br>`);

// c(3):
if (++c < 14){
alert("condition 3 is true");
}
document.write(`<p style="font-size:20px";>c(3):Here, "++c" increments "c" from 13 to 14 before the comparison.Since "14 < 14" is false, this alert will not be triggered.</p><br>`);

// c(4):
if(c === 14){
alert("condition 4 is true");
}
document.write(`<p style="font-size:20px";>c(4):At this point, "c is 14. Since "c === 14" is true, this alert will be triggered..</p><br><br>`);

document.write(`<p style="font-size:20px";>Conclusion:Thus, the alerts that will be shown are  "condition 2 is true" and "condition 4 is true"</p><br>`);

// d:
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

document.write(`<p style="font-size:20px";>d:This code will successfully display an alert box saying "The cost equals".</p><br>`);


//e:
 if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
   
    document.write(`<p style="font-size:20px";>e:when this code runs, you will see an alert with the message "True", and there will be no alert for "False".</p><br>`);
    

    // f:
     if("car" < "cat"){
        alert("car is smaller than cat");
        }
        document.write(`<p style="font-size:20px";>f : when this code runs, you will see an alert with the message "car is smaller than cat".</p><br><br><hr></br>`);

      
      
        //   6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
      //   percentage on your page. Take percentage & compute grade as per following table:

      document.write(`<h1>Marks Sheet</h1><br>`);

      var total_marks=300;
      document.write(`Total Marks:${total_marks}<br>`);

      var subj_1=+prompt("Enter your marks for subject_1.");
      var subj_2=+prompt("Enter your marks for subject_2.");
      var subj_3=+prompt("Enter your marks for subject_3.");

      var obtained_marks=subj_1 + subj_2 + subj_3;
      document.write(`Obtained Marks:${obtained_marks}<br>`);

      var per = obtained_marks/total_marks*100;
      document.write(`Percentage:${per}%<br>`);

      var grade =per;
      if(per>=80){
         document.write(`Grade:A-one<br>`);
         document.write(`Remarks:Excellent <br><br><hr><br>`);
      }

      else if(per>=70){
         document.write(`Grade:A<br>`);
         document.write(`Remarks:Good <br><br><hr><br>`);
      }

      else if(per>=60){
         document.write(`Grade:B<br>`);
         document.write(`Remarks:You need to improve<br><br><hr><br>`);
      }

      else if(per<60){
         document.write(`Grade:Fail<br>`);
         document.write(`Remarks:Sorry <br><br><hr/><br>`);
      }

//       7. Guess game:
//  Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var num=prompt("Guess the secret number?");

document.write(`<h1>Guess the secret number?</h1><br/>`);

if(num==5){
   document.write(`"Bingo! Correct answer"<br><br><hr><br>`);
}
else if(num>=6){
   document.write(`"Close enough to the correct answer"<br><br><hr><br>`);
}
else{
   document.write(`"wrong number!"<br><br><hr/><br>`);
}
  
// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number 
// is divisible by 3.

var divide=prompt("write a number which can divisible by 3?");

document.write(`<h1>Show result if number divisible by 3 or not?:</h1><br/>`);

if(divide%3===0){
   document.write(`"Number is divisible by 3"<br><br><hr><br>`);
}

else{
   document.write(`"Number can't divisible by 3"<br><br><hr><br>`);
} 

// 9. Write a program that checks whether the given input is an even number or an odd number.

var number=prompt("Enter even or odd number?");

document.write(`<h1>Even and Odd Number</h1><br/>`);

if(number%2===0){
   document.write(`"It's an Even number."<br><br><hr><br>`);
}
else 
{
   document.write(`"It's a Odd number."<br><br><hr><br>`);
}

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



var T=prompt("Enter the tempreture of your city");

document.write(`<h1>Weather Tempreture</h1><br/>`);
if(T>40){
   document.write(`"It is too hot outside."<br><br><hr><br/>`);
}
else if(T>30){
   document.write (`"It is too hot outside."<br><br><hr><br>`);
}
else if(T>20){
   document.write(`<br>"Today’s Weather is cool."<br><br><hr><br>`);
}

 else if(T>10){
   document.write(`<br>"OMG! Today’s weather is so Cool."<br><br><hr><br>`);
 }
 else{
   document.write(`<br>"cool Weather! "<br><br><hr><br>`);
 }



//  11. Write a program to create a calculator for +,-,*, / & % 
//  using if statements. Take the following input:
//  a. First number
//  b. Second number
//  c. Operation (+, -, *, /, %)
//  Compute & show the calculated result to user.

document.write(`<h1>Calculator</h1><br>`);

var num1=+prompt("Enter the First Number");
document.write(`First Number:${num1}<br>`);
var num2=+prompt("Enter the Second Number");
document.write(`Second Number:${num2}<br>`);
var operation=prompt("Enter the Operation(+, -, *, /, %):");
document.write(`Operation:${operation}<br>`);
var result;

if (operation === '+') {
   result = num1 + num2;
} else if (operation === '-') {
   result = num1 - num2;
} else if (operation === '*') {
   result = num1 * num2;
} else if (operation === '/') {
   if (num2 !== 0) {
       result = num1 / num2;
   } else {
       result = "Error: Division by zero is not allowed.";
   }
} else if (operation === '%') {
   if (num2 !== 0) {
       result = num1 % num2;
   } else {
       result = "Error: Modulo by zero is not allowed.";
   }
} else {
   result = "Error: Invalid operation.";
}

// Display the result
document.write(`Result: ${result}`);






