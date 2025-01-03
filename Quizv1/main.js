// Pertanyaan dan jawaban
    const quizData = [
        {
            question: "What is the capital city of Indonesia?",
            answer: "jakarta"
        },
        {
            question: "What is the national motto of Indonesia?",
            answer: "bhinneka tunggal ika"
        },
        {
            question: "What is the official language of Indonesia?",
            answer: "indonesian"
        },
        {
            question: "What is the currency used in Indonesia?",
            answer: "rupiah"
        },
        {
            question: "What is the name of Indonesia's largest island?",
            answer: "kalimantan"
        },
        {
            question: "What is the tallest mountain in Indonesia?",
            answer: "puncak jaya"
        },
        {
            question: "What is the traditional Indonesian martial art called?",
            answer: "pencak silat"
        },
        {
            question: "Which Indonesian city is known as the 'City of Flowers'?",
            answer: "bandung"
        },
        {
            question: "What is the famous Indonesian rice terrace in Bali called?",
            answer: "tegalalang"
        },
        {
            question: "What is the traditional Indonesian dish made of fermented soybeans?",
            answer: "tempeh"
        }
    ];

let currentQuestionIndex = 0;

// Menampilkan pertanyaan
function displayQuestion() {
    const questionElement = document.getElementById("questions");
    if (!questionElement) {
        console.error("Element with ID 'questions' not found!");
        return;
    }
    console.log("Displaying question:", quizData[currentQuestionIndex].question);
    questionElement.textContent = quizData[currentQuestionIndex].question;
}

// Cek jawaban
function answers() {
    const userAnswer = document.getElementById("name-input").value.trim().toLowerCase();
    const correctAnswer = quizData[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct! 🎉");
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            displayQuestion(); // Tampilkan pertanyaan berikutnya
            document.getElementById("name-input").value = ""; // Kosongkan input
        } else {
            alert("Congratulations! You've completed the quiz! 🎊");
            document.getElementById("questions").textContent = "You've answered all the questions!";
        }
    } else {
        alert("Wrong answer. Try again! ❌");
    }
}

// Tunggu hingga DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    displayQuestion();
});
