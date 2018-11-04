var variableStringQuestion = ["What was Monica's name on her high school field hockey team?", "What do they call Ross when he gets angry?", "question3",
    "question4", "question5", "question6", "question7", "question8", "question9", "question10"]

var variableStringAnswerOne = ["Big Fat Goalie", "Rizzo"]
var variableStringAnswerTwo = ["Harmonica", "Red Ross"]
var variableStringAnswerThree = ["Laundry", "Ms.Chanandler Bong"]
var variableStringAnswerFour = ["Rachel", "Dr. Filange"]

var variableIntegerCorrectAnswer = [1,2]
var x = -1
increaseTheQuestionNumber()

function AllAnswerVerification(answerClicked) {
    console.log('answer ' +answerClicked +' was selected')
    if (variableIntegerCorrectAnswer[x] === 1) {
        alert('answer ' +answerClicked +' is Correct')
    } else {
        alert('answer ' +answerClicked +' is Wrong')

    }
    increaseTheQuestionNumber()
}
// Event ahndler for Answer 1
document.getElementById('htmlanswerOne').addEventListener('click', funkAnswerOneClicked)
 
function funkAnswerOneClicked(){
    AllAnswerVerification(1)
}

// Event ahndler for Answer 2
document.getElementById('htmlanswerTwo').addEventListener('click', funkAnswerTwoClicked)

function funkAnswerTwoClicked() {
    AllAnswerVerification(2)
}

// Event ahndler for Answer 3
document.getElementById('htmlanswerThree').addEventListener('click', funkAnswerThreeClicked)

function funkAnswerThreeClicked() {
    AllAnswerVerification(3)
}
// Event ahndler for Answer 4
document.getElementById('htmlanswerFour').addEventListener('click', funkAnswerFourClicked)

function funkAnswerFourClicked() {
    console.log('answer Four was selected')
    if (variableIntegerCorrectAnswer[x] === 4) {
        alert('answer 4 is Correct')
    } else {
        alert('answer 4 is Wrong')
    }
    increaseTheQuestionNumber()
}

function increaseTheQuestionNumber() {
    x = x + 1
    if (x === 10) {
        endGame()
    } else {
        document.getElementById('htmlquestion').innerText = variableStringQuestion[x]
        document.getElementById('htmlanswerOne').innerText = variableStringAnswerOne[x]
        document.getElementById('htmlanswerTwo').innerText = variableStringAnswerTwo[x]
        document.getElementById('htmlanswerThree').innerText = variableStringAnswerThree[x]
        document.getElementById('htmlanswerFour').innerText = variableStringAnswerFour[x]
    }
}
function endGame() {
    alert('Game over man, Game Over')
}