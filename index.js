// task-1 1)Write a for loop to print the numbers from 1 to 20.//

for (var i=1; i<=20; i++) {
    console.log(i);
}

// task-2 2)Create a for loop to print the squares of numbers from 1 to 10.//

for (var i=1; i<=10; i++) {
    square = i*i; 
    console.log(square);
}

// task-3 3)Use a for loop to print the first 10 multiples of 5.//

for (var i=1; i<=10; i++) {
    console.log(i*5);
}

//task-4 4)Write a for loop to print numbers from 20 to 1 in reverse order.//

for (var i=20; i>=1; i--) {
    console.log(i);
}

//task-5 5)Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).//

for (var i=20; i>=2; i-=2) {
    console.log(i);
}

// task-6 6)Print each element of the array.
// -	Input: [10, 20, 30, 40, 50]

// -	Expected Output:
//  	10  
//      20  
//      30  
//      40  
//      50  

var arr = [10, 20, 30, 40, 50];
for (i=0; i<arr.length; i++){
console.log (arr[i]);
}

// task-7 7)Print the index of each element along with its value
// –	Input: ['apple', 'banana', 'cherry']

//  –	Expected Output:
//   	Index 0: apple  
//       Index 1: banana  
//       Index 2: cherry  

var arr = ['apple', 'banana', 'cherry'];
for(i=0; i<arr.length; i++) {
    console.log('index',+i+ ':'+arr[i]);
}
