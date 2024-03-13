// // var lastname = "Hopper"
// // console.log(lastname == "Hopper")

// // let sum = 0
// // let i = 1

// // while(i <= 5) {
// //     console.log("first", {sum, i})

// //     if (i==4) break
// //     sum += i
// //     i++
// //     console.log("second", {sum, i})
// // }
// // // alert(sum)
// // document.write(sum)

// let miles, gallon;
// // do {
// //      miles = parseInt(prompt("Enter a mile, must be positive"))
// //      gallon = parseInt(prompt("Enter a gallon, must be positive"))
// // } while (Number.isNaN(miles) || Number.isNaN(gallon ) || miles <=0 || gallon  <=0)

// // const asnwer = miles/gallon
// // document.write(`miles per gallon = ${asnwer}`)

// // let again = "y"

// // do {
// //     miles = parseInt(prompt("Enter miles driven"))
// //     gallon = parseInt(prompt("Enter gallons of gas used"))
// //     console.log("yes")
// //     if (miles > 0 && gallon > 0) {
// //         const mpg = parseFloat(miles/gallon)
// //         document.write(`miles per gallon = ${mpg.toFixed(2)}`)
// //         console.log("it works")
// //     } else {
// //         alert('One or both entries are invalid')
// //     }
// //     again = prompt("Repeat entries? y/n:", "y")
// // } while (again == "y")

// let scores = [];
// let sum = 0;
// let again = "y";
// // for (let i = 1; i < 6; i++) {
// //   scores[i] = parseInt(prompt(`Enter scores for course ${i}`));
// //   // if (Number.isNaN(i)) {

// //   // }
// //   sum += i;

// // }
// // const avg = sum / scores.length;
// // console.log({scores: scores.length, sum, scores})
// // document.write(`average = ${avg}`);

// do {
//   const numberOfClasses = parseInt(
//     prompt("Enter the number of classes you are taking")
//   );
//   if (Number.isNaN(numberOfClasses)) {
//     alert("Enter a valid number");
//     continue
//   }
//   for (var i = 1; i <= numberOfClasses; i++) {
//      const score = parseInt(prompt(`Enter a score for class ${i}`));
//     scores.push(score)
//     sum += score;
//   }
//   const avg = sum / scores.length;
//   again = prompt("Calculate again? y/n?", "y");
//   document.write(avg);
// } while (again == "y");

// let again = "y";
// const scores = [];
// let sum = 0;
// do {
//   let numberOfCourses = parseInt(prompt("How many courses are you taking?"));

//   while (isNaN(numberOfCourses) || numberOfCourses <= 0) {
//     alert("Must be a valid positive number greater than 0");
//     numberOfCourses = parseInt(prompt("How many courses are you taking?"));
//   }

//   for (let i = 1; i <= numberOfCourses; i++) {
//     const score = parseInt(prompt(`Enter score for class ${i}`));
//     scores[i - 1] = score;
//     sum += score;
//   }
//   const average = sum / scores.length;
//   for (var score in scores) {
//     const num = parseInt(score) + 1
//     document.write(`<p>The score for class ${num} is ${scores[score]}</p>`)
//   }
//   document.write(`<p>The sum is ${sum}</p>`)
//   document.write(`<p>The average is ${average}</p>`)
//   again = prompt("Do you want to calculate again? y/n?", "y");
// } while (again == "y");

// for (let i = 0; i<= 15; i++) {
//   if (i%2 == 0) {
//     alert(`${i} is even`)
//   } else  alert(`${i} is odd`)
// }

// const data = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 },
// ];

// let sum = 0;

// for (student in data) {
//   sum += data[student].marks;
//   if (data[student].marks < 60) {
//     document.write(`${data[student].name} has an F grade`);
//   } else if (data[student].marks >= 60 && data[student].marks < 70) {
//     document.write(`${data[student].name} has a D grade`);
//   } else if (data[student].marks >= 70 && data[student].marks < 80) {
//     document.write(`${data[student].name} has a C grade`);
//   } else if (data[student].marks >= 80 && data[student].marks < 90) {
//     document.write(`${data[student].name} has a B grade`);
//   } else if (data[student].marks >= 90 && data[student].marks < 100) {
//     document.write(`${data[student].name} has a C grade`);
//   }
// }

// const avg = sum / data.length;
// document.write(`The average score is ${avg}`);

// let loggedIn = false

// while(!loggedIn) {
//   for(i = 0; i < 3; i++) {
//     document.write(" <p>Incorrect login credentials</p>")
//     if(i == 2)   loggedIn = true
//   }
// }
// document.write(" <p>Succesful log in</p>")

for (i = 1; i <= 100; i++) {
  if (i % 10 == 0 && i != 50 && i !=100) {
    document.write(`<p>Checkpoint! ${i}</p>`);
  } else if (i == 50) {
    document.write(`<p>Half way there!</p>`);
  } else if (i == 100) document.write(`<p>You made it!!</p>`);
}
document.write(`<p>All done!!</p>`);
