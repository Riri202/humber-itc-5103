let again = "y";

do {
    const numCourses = parseInt(prompt("Enter the number of courses you are taking:"));

    if (isNaN(numCourses) || numCourses <= 0) {
        alert("Please enter a valid positive number for the number of courses.");
        continue;
    }

    const scores = [];
    let sum = 0;

    for (let i = 1; i <= numCourses; i++) {
        let score = parseFloat(prompt(`Enter the score for Course ${i}:`));

        while (isNaN(score) || score <= 0) {
            alert("Please enter a valid positive number for the score.");
            score = parseFloat(prompt(`Enter the score for Course ${i}:`));
        }

        scores.push(score);
        sum += score;
    }

    const average = sum / numCourses;

    document.write("Scores for each course:");
    scores.forEach((score, index) => {
        document.write(`<br>Course ${index + 1}: ${score}`);
    });

    document.write(`<br>Sum: ${sum}`);
    document.write(`<br>Average: ${average.toFixed(2)}`);

    again = prompt("Do you want to calculate the average again? (y/n):", "y");
} while (again === "y");
