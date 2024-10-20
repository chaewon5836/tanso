const quizData = [
    {
        question: "탄소 발자국 감소가 필요한 이유는 무엇일까요?",
        choices: [
            "지구의 온도를 높여 HOT한 지구를 만들기 위해",
            "이산화탄소를 더 많이 배출할 수 있는 환경을 만들기 위해",
            "지구 온난화를 억제하고 기후변화의 위험을 감소시키기 위해",
            "박채원과 임선우가 문어가 되기 위해"
        ],
        correct: 2,
        explanation: "탄소 발자국 감소는 이산화탄소 배출량을 줄여 지구 온난화를 막기 위해 필요합니다."
    },
    {
        question: "탄소 발자국 감소를 위해 할 수 있는 일이 아닌 것은 무엇일까요?",
        choices: [
            "사용하지 않는 전등 끄기",
            "쓰레기 분리배출하기",
            "하루 15시간 릴스 보기",
            "대중교통 이용하기"
        ],
        correct: 2,
        explanation: "하루 15시간 릴스를 보는 것은 탄소 발자국 \'증가\'와 관련이 있습니다."
    },
    {
        question: "탄소 발자국 감소를 위해 노력하시겠습니까?",
        choices: ["예", "예", "예", "예"],
        correct: [0, 1, 2, 3],
        explanation: "2번 문제 해설: 하루 15시간 릴스를 보는 것은 탄소 발자국 \'증가\'와 관련이 있습니다."
    }
];

let currentQuiz = 0;
let score = 0; // 점수

const questionElement = document.getElementById('question');
const choicesElements = document.querySelectorAll('.choice');
const resultElement = document.getElementById('result');
const explanationElement = document.getElementById('explanation');

function loadQuiz() {
    const currentQuestion = quizData[currentQuiz];
    questionElement.textContent = currentQuestion.question;
    choicesElements.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
    });
    resultElement.textContent = '';
    explanationElement.textContent = '';
}

function selectAnswer(selectedIndex) {
    // 정답 체크 및 점수 증가
    if (Array.isArray(quizData[currentQuiz].correct)) {
        if (quizData[currentQuiz].correct.includes(selectedIndex)) {
            score++;
        }
    } else {
        if (selectedIndex === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        resultElement.textContent = `${quizData.length}문제 중 ${score}문제를 맞히셨습니다!`;
        explanationElement.textContent = quizData[currentQuiz - 1].explanation; // 마지막 문제 해설
    }
}

window.onload = function() {
    loadQuiz();
};
