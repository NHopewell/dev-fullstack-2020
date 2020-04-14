// Leap Year Calculator 
isLeapYear = function(year) {
    var leap = false;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 == 0) {
                leap = true
            } 
        } else {
            leap = true;
        }
    }
    if (leap) {
        console.log("This is a leap year");
        return;
    }
    console.log("This is not a leap year");
}
isLeapYear(1989);


// BMI Year Calculator 
function bmiCalculator (weight, height) {
    
    var bmi = Math.round(weight / (Math.pow(height, 2)));
    
    if (bmi > 24.9) {
        end = ", so you are overweight";
    } else if (bmi > 18.5) {
        end = ", so you are normal weight";
    } else {
        end = ", so you are underweight";
    }

    msg = "Your BMI is " + bmi + end;
    
    return msg;
}
bmiCalculator(60, 2);

// single number fizzbuzz
var myArray = [];
counter = 1;

fizzBuzz = function(arr) {
    if (counter % 3 === 0) {

        if (counter % 5 === 0) {
            arr.push("fizzbuzz");
        } else {
            arr.push("fizz"); 
        }
    } else if (counter % 5 === 0) {
        arr.push("buzz");
    } else {
        arr.push(counter);
    }

    counter++; 
}

fizzBuzz(myArray);
myArray;

// while fizzbuzz
var myArray = [];
counter = 1;

while (counter < 101) {
    if (counter % 3 === 0) {

        if (counter % 5 === 0) {
            myArray.push("fizzbuzz");
        } else {
            myArray.push("fizz"); 
        }
    } else if (counter % 5 === 0) {
        myArray.push("buzz");
    } else {
        myArray.push(counter);
    }

    counter++; 
}
myArray;

//for loop fizz buzz
for (i = 1; i < 101; i++) {
    if (i % 3 === 0) {

        if (i % 5 === 0) {
            myArray.push("fizzbuzz");
        } else {
            myArray.push("fizz"); 
        }
    } else if (i % 5 === 0) {
        myArray.push("buzz");
    } else {
        myArray.push(i);
    }
}
myArray;

// who pays lunch?
var names = "Nick John Bob Mary Luke".split(" ");

whoPays = function(arr) {
    choice = Math.round(Math.random() * (arr.length - 1));

    return arr[choice] + " is going to buy lunch today!";
}

x = whoPays(names);
x;


//99 bottles of beer on the wall while loop
var bottles = 99;

while (bottles >= 1) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");

    if (bottles === 1) {
        console.log("Take one down, pass it around, no more bottles of beer on the wall");
    } else {
        console.log("Take one down, pass it around, " + (bottles-1) + " bottles of beer on the wall.");
    }
    console.log("");
    bottles--;
    
}
console.log("No more bottles of beer on the wall, no more bottles of beer.")
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")

// 99 bottles as a for loop:
for (i=99; i>0; i--) {
    console.log(i+ " bottles of beer on the wall, " + i + " bottles of beer.");

    if (i === 1) {
        console.log("Take one down, pass it around, no more bottles of beer on the wall");
    } else if (i > 1) {
        console.log("Take one down, pass it around, " + (i-1) + " bottles of beer on the wall");
    }
    console.log("");
    
}
console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");