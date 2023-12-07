function nextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
}

function previousPage() {
    if (document.getElementById('page2').style.display === 'flex') {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page1').style.display = 'flex';
    } else if (document.getElementById('page3').style.display === 'flex') {
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page2').style.display = 'flex';
    }
}


function submitForm() {
    var runningValue = parseInt(document.getElementById('option1').value, 10) || 0;
    var pushupValue = parseInt(document.getElementById('option2').value, 10) || 0;

    var totalPoints = runningValue * 5 + pushupValue * 1;
    var weightageAverage = runningValue * 5 + pushupValue * 7;

    document.getElementById('totalPoints').innerText = totalPoints;
    document.getElementById('weightageAverage').innerText = weightageAverage;

    // Display the result page
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'flex';

    // Display the grading information based on total points
    var grade = getGrade(totalPoints);
    document.getElementById('grade').innerText = grade;

    var pre = getGradee(totalPoints);
    document.getElementById('pre').innerText = pre;
}

function getGrade(totalPoints) {
    if (totalPoints >= 30) {
        return 'A ';
    } else if (totalPoints >= 20) {
        return 'B ';
    } else if (totalPoints >= 10) {
        return 'C ';
    } else {
        return 'No Grade';
    }
}


function getGradee(totalPoints) {
    if (totalPoints >= 30) {
        return 'Pass';
    } else if (totalPoints >= 20) {
        return 'Pass';
    } else if (totalPoints >= 10) {
        return 'Fail';
    } else {
        return 'Fail';
    }
}
