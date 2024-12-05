
const questions = [
    { question: "Apa nama kerajaan kuno yang ada di Indonesia pada abad ke-7?", options: ["A. Srivijaya", "B. Majapahit", "C. Mataram", "D. Singhasari"], answer: "A" },
    { question: "Siapa yang mendeklarasikan kemerdekaan Indonesia pada tahun 1945?", options: ["A. Sukarno", "B. Suharto", "C. Hatta", "D. Sjahrir"], answer: "A" },
    { question: "Apa nama peristiwa yang terjadi pada tanggal 10 November 1945?", options: ["A. Pertempuran Surabaya", "B. Gerakan 30 September", "C. Proklamasi", "D. Perang Diponegoro"], answer: "A" },
    { question: "Siapa presiden pertama Indonesia?", options: ["A. Sukarno", "B. Suharto", "C. Habibie", "D. Megawati"], answer: "A" },
    { question: "Apa nama perjanjian yang mengakhiri perang kemerdekaan Indonesia?", options: ["A. Perjanjian Renville", "B. Perjanjian Linggarjati", "C. Perjanjian Roem-Royen", "D. Perjanjian New York"], answer: "B" },
    { question: "Siapa pahlawan nasional yang dikenal sebagai Bapak Pendidikan Nasional?", options: ["A. Ki Hajar Dewantara", "B. R.A. Kartini", "C. Soekarno", "D. Mohammad Hatta"], answer: "A" },
    { question: "Apa nama organisasi yang didirikan pada tahun 1908?", options: ["A. Budi Utomo", "B. Sarekat Islam", "C. Muhammadiyah", "D. Partai Nasional Indonesia"], answer: "A" },
    { question: "Siapa wakil presiden pertama Indonesia?", options: ["A. Mohammad Hatta", "B. Sutan Sjahrir", "C. Ki Hajar Dewantara", "D. Soekarno"], answer: "A" },
    { question: "Apa nama peristiwa yang terjadi pada tanggal 30 September 1965?", options: ["A. G30S/PKI", "B. Peristiwa Madiun", "C. Perang Diponegoro", "D. Bandung Lautan Api"], answer: "A" },
    { question: "Apa nama teks yang dibacakan oleh Soekarno pada 17 Agustus 1945?", options: ["A. Teks Proklamasi", "B. Pembukaan UUD 1945", "C. Pancasila", "D. Dekrit Presiden"], answer: "A" },
    { question: "Siapa yang dikenal sebagai Bapak Koperasi Indonesia?", options: ["A. Mohammad Hatta", "B. Ki Hajar Dewantara", "C. R.A. Kartini", "D. Soekarno"], answer: "A" },
    { question: "Apa nama organisasi pemuda yang lahir pada tahun 1928?", options: ["A. Sumpah Pemuda", "B. Budi Utomo", "C. Jong Java", "D. Jong Indonesia"], answer: "D" },
    { question: "Kapan Indonesia secara resmi menjadi anggota PBB?", options: ["A. 1950", "B. 1955", "C. 1957", "D. 1960"], answer: "C" },
    { question: "Apa nama kerajaan Hindu pertama di Indonesia?", options: ["A. Kutai", "B. Tarumanegara", "C. Sriwijaya", "D. Majapahit"], answer: "A" },
    { question: "Siapa raja pertama Majapahit?", options: ["A. Raden Wijaya", "B. Hayam Wuruk", "C. Gajah Mada", "D. Tribhuwana Tunggadewi"], answer: "A" },
    { question: "Apa semboyan yang tercantum dalam lambang negara Indonesia?", options: ["A. Bhinneka Tunggal Ika", "B. Pancasila", "C. NKRI Harga Mati", "D. Merdeka atau Mati"], answer: "A" },
    { question: "Apa nama kapal perang Belanda yang dihancurkan di Surabaya pada 10 November 1945?", options: ["A. HNLMS Kortenaer", "B. HNLMS De Ruyter", "C. HNLMS Evertsen", "D. HNLMS Java"], answer: "C" },
    { question: "Apa nama deklarasi yang ditandatangani oleh Indonesia, Malaysia, dan Thailand pada tahun 1967?", options: ["A. Deklarasi Bangkok", "B. Deklarasi ASEAN", "C. Deklarasi Jakarta", "D. Deklarasi Manila"], answer: "A" },
    { question: "Siapa pemimpin perang Diponegoro?", options: ["A. Pangeran Diponegoro", "B. Sultan Agung", "C. Sultan Hasanuddin", "D. Sultan Baabullah"], answer: "A" },
    { question: "Apa nama aliansi negara Asia-Afrika yang diinisiasi Indonesia?", options: ["A. Konferensi Asia-Afrika", "B. Gerakan Non-Blok", "C. Maphilindo", "D. ASEAN"], answer: "B" }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(button, currentQuestion));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(button, currentQuestion) {
    const selectedAnswer = button.innerText.charAt(0);
    const isCorrect = selectedAnswer === currentQuestion.answer;

    Array.from(optionsElement.children).forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });

    button.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) score++;
    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.classList.add('hidden');
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = 'Kuis selesai!';
    optionsElement.innerHTML = '';
    scoreContainer.classList.remove('hidden');
    finalScoreElement.innerText = `${score} dari ${questions.length}`;
}

restartButton.addEventListener('click', startGame);

startGame();
