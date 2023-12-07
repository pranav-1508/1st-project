// script.js
function nextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
}

function previousPage() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'flex';
}

function submitForm() {
    var runningValue = parseInt(document.getElementById('option1').value, 10) || 0;
    var pushupValue = parseInt(document.getElementById('option2').value, 10) || 0;

    var totalPoints = runningValue * 5 + pushupValue * 1;
    var weightageAverage = runningValue * 5 + pushupValue * 7;

    document.getElementById('totalPoints').innerText = totalPoints;
    document.getElementById('weightageAverage').innerText = weightageAverage;
    document.getElementById('result').style.display = 'block';
}
