const quizData = [
{
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        answer: 'William Shakespeare'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
        answer: 'Mars'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        answer: 'Leonardo da Vinci'
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippo'],
        answer: 'Blue Whale'
    },
    {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'NaCl'],
        answer: 'H2O'
    },
    {
        question: 'Which country is famous for the Great Wall?',
        options: ['China', 'India', 'USA', 'Russia'],
        answer: 'China'
    },
    {
        question: 'Who developed the theory of relativity?',
        options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Stephen Hawking'],
        answer: 'Albert Einstein'
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Diamond', 'Platinum', 'Silver'],
        answer: 'Diamond'
    }

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement('li');
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.answer) {
        score++;
        scoreElement.innerText = score;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert(`Quiz ended! Your final score is ${score}/${quizData.length}`);
    }
}

loadQuestion();
