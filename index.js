const questions = [
    // Çoktan Seçmeli Sorular (30 adet)
    {
        type: "multiple-choice",
        question: "MSSQL'de değişken tanımlamak için hangi anahtar kelime kullanılır?",
        options: ["DECLARE", "VAR", "SET", "DEFINE"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "MySQL'de değişkene değer atamak için hangi komut kullanılır?",
        options: ["ASSIGN", "SET", "LET", "VAR"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de IF bloğunda tek komut varsa hangi yapı gerekmez?",
        options: ["IF...THEN", "BEGIN...END", "TRY...CATCH", "CASE...WHEN"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MySQL'de WHILE döngüsü nasıl sonlandırılır?",
        options: ["END WHILE", "END LOOP", "BREAK", "EXIT"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "Kullanıcı tanımlı fonksiyonların hangi özelliği vardır?",
        options: ["Sadece parametre alır", "Sadece değer döndürür", "Parametre alıp değer döndürebilir", "Hiçbiri"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de fonksiyon oluştururken hangi anahtar kelime kullanılır?",
        options: ["CREATE PROC", "CREATE FUNCTION", "CREATE METHOD", "CREATE DEF"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MySQL'de fonksiyon tanımlarken DELIMITER neden kullanılır?",
        options: ["Hız için", "Güvenlik için", "Noktalı virgül çakışmasını önlemek için", "Sadece zorunlu olduğu için"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "Harmonik ortalama formülü nedir?",
        options: ["(a+b)/2", "√(a*b)", "2/(1/a + 1/b)", "a*b/(a+b)"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de fonksiyon parametrelerinde hangi sembol kullanılır?",
        options: ["#", "@", "$", "%"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MySQL'de fonksiyon tanımında DETERMINISTIC ne anlama gelir?",
        options: ["Fonksiyon hızlıdır", "Aynı girdi için hep aynı çıktı verir", "Fonksiyon güvenlidir", "Hiçbiri"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "Stored Procedure'ın ana amacı nedir?",
        options: ["Sadece veri sorgulamak", "SQL kodunu veritabanında saklamak", "Sadece veri silmek", "Sadece tablo oluşturmak"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de Stored Procedure nasıl çalıştırılır?",
        options: ["CALL", "EXEC", "RUN", "EXECUTE"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MySQL'de Stored Procedure nasıl çalıştırılır?",
        options: ["EXEC", "CALL", "RUN", "START"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "Stored Procedure'da OUTPUT parametresi ne için kullanılır?",
        options: ["Veri almak için", "Veri göndermek için", "Sonuç döndürmek için", "Hata yakalamak için"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "Transaction'da ACID kurallarından A harfi neyi temsil eder?",
        options: ["Accuracy", "Atomicity", "Availability", "Authentication"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de Transaction nasıl başlatılır?",
        options: ["START TRANSACTION", "BEGIN TRANSACTION", "INIT TRANSACTION", "OPEN TRANSACTION"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MySQL'de Transaction nasıl başlatılır?",
        options: ["BEGIN TRANSACTION", "START TRANSACTION", "INIT TRANSACTION", "OPEN TRANSACTION"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "Transaction'da işlemleri kalıcı hale getirmek için hangi komut kullanılır?",
        options: ["SAVE", "COMMIT", "APPLY", "FINISH"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "Transaction'da işlemleri geri almak için hangi komut kullanılır?",
        options: ["UNDO", "CANCEL", "ROLLBACK", "REVERT"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "Trigger ne zaman çalışır?",
        options: ["Manuel olarak çağırıldığında", "Belirli veritabanı olaylarında otomatik", "Sadece hata durumunda", "Sadece gece yarısı"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de AFTER Trigger ne zaman tetiklenir?",
        options: ["İşlemden önce", "İşlem sırasında", "İşlemden sonra", "Hata durumunda"],
        correct: 2
    },
    {
        type: "multiple-choice",
        question: "MySQL'de BEFORE Trigger ne zaman tetiklenir?",
        options: ["İşlemden sonra", "İşlemden önce", "İşlem sırasında", "Hata durumunda"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de yeni eklenen satırlara erişmek için hangi anahtar kelime kullanılır?",
        options: ["NEW", "INSERTED", "ADDED", "CREATED"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MySQL'de silinen satırlara erişmek için hangi anahtar kelime kullanılır?",
        options: ["DELETED", "OLD", "REMOVED", "DROPPED"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MSSQL'de INSTEAD OF Trigger'ın özelliği nedir?",
        options: ["İşlemden sonra çalışır", "İşlem yerine çalışır", "İşlemden önce çalışır", "Hata durumunda çalışır"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "Fonksiyon ile Stored Procedure arasındaki temel fark nedir?",
        options: ["Hiç fark yok", "Fonksiyon değer döndürür, SP döndürmez", "SP parametre alır, fonksiyon almaz", "SP daha hızlıdır"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "@@IDENTITY ne işe yarar?",
        options: ["Kullanıcı kimliğini verir", "Son eklenen IDENTITY değerini verir", "Tablo sayısını verir", "Hiçbiri"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "MySQL'de AUTO_INCREMENT alanın son değerini almak için hangi fonksiyon kullanılır?",
        options: ["LAST_INSERT_ID()", "AUTO_INCREMENT_ID()", "IDENTITY_VALUE()", "NEW_ID()"],
        correct: 0
    },
    {
        type: "multiple-choice",
        question: "SIGNAL komutu MySQL'de ne için kullanılır?",
        options: ["Sinyal göndermek", "Hata üretmek", "Bildirim yapmak", "Uyarı vermek"],
        correct: 1
    },
    {
        type: "multiple-choice",
        question: "RAISERROR komutu MSSQL'de ne için kullanılır?",
        options: ["Performansı artırmak", "Hata mesajı üretmek", "Veri silmek", "Bağlantı kurmak"],
        correct: 1
    },

    // Kod Yazma Soruları (3 adet)
    {
        type: "code",
        question: "MSSQL'de iki sayının çarpımını hesaplayan bir fonksiyon yazın",
        description: "Fonksiyon adı 'Carpim' olsun, iki FLOAT parametre alsın (@a, @b) ve sonucu döndürsün.",
        correctAnswer: `CREATE FUNCTION Carpim(@a FLOAT, @b FLOAT)
RETURNS FLOAT
AS
BEGIN
    DECLARE @sonuc FLOAT;
    SET @sonuc = @a * @b;
    RETURN @sonuc;
END;`
    },
    {
        type: "code",
        question: "MySQL'de öğrenci bilgilerini listeleyen bir Stored Procedure yazın",
        description: "Procedure adı 'OgrenciListesi' olsun, parametre olarak bölüm kodu alsın ve o bölümdeki öğrencileri listelesin.",
        correctAnswer: `DELIMITER //
CREATE PROCEDURE OgrenciListesi(bolum_kodu CHAR(4))
BEGIN
    SELECT * FROM OGRENCILER 
    WHERE BOLUM = bolum_kodu;
END //
DELIMITER ;`
    },
    {
        type: "code",
        question: "MSSQL'de hesaplar tablosu için para transferi Transaction'ı yazın",
        description: "Bir hesaptan diğerine para transfer eden Transaction yazın. Gönderen ve alıcı hesap numaraları ile miktar parametrelerini kullanın.",
        correctAnswer: `BEGIN TRANSACTION;
UPDATE hesaplar 
SET hesap = hesap - @miktar 
WHERE mno = @gonderen;

UPDATE hesaplar 
SET hesap = hesap + @miktar 
WHERE mno = @alici;
COMMIT;`
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let answeredQuestions = new Set();

// DOM elementleri
const quizContainer = document.getElementById('quiz-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const progress = document.getElementById('progress');
const resultsSection = document.getElementById('results-section');
const quizSection = document.querySelector('.quiz-section');
const restartBtn = document.getElementById('restart-btn');

// Quiz başlatma
function initQuiz() {
    totalQuestionsSpan.textContent = questions.length;
    userAnswers = new Array(questions.length).fill(null);
    displayQuestion();
    updateProgress();
    updateNavigation();
}

// Soruyu gösterme
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    let questionHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            ${question.description ? `<p class="description">${question.description}</p>` : ''}
        </div>
    `;

    if (question.type === "multiple-choice") {
        questionHTML += '<div class="options">';
        question.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === index;
            const isAnswered = answeredQuestions.has(currentQuestionIndex);
            const isCorrect = isAnswered && index === question.correct;
            const isIncorrect = isAnswered && isSelected && index !== question.correct;
            
            questionHTML += `
                <div class="option ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''} ${isAnswered ? 'disabled' : ''}"
                     onclick="selectOption(${index})">
                    ${option}
                </div>
            `;
        });
        questionHTML += '</div>';

        if (answeredQuestions.has(currentQuestionIndex)) {
            const isCorrect = userAnswers[currentQuestionIndex] === question.correct;
            questionHTML += `
                <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Doğru!' : '✗ Yanlış! Doğru cevap: ' + question.options[question.correct]}
                </div>
            `;
        }
    } else if (question.type === "code") {
        questionHTML += `
            <div class="code-editor">
                <textarea id="code-answer" rows="10" placeholder="Kodunuzu buraya yazın...">${userAnswers[currentQuestionIndex] || ''}</textarea>
            </div>
        `;
    }

    quizContainer.innerHTML = questionHTML;
    updateNavigation();
}

function selectOption(index) {
    if (answeredQuestions.has(currentQuestionIndex)) return;
    
    userAnswers[currentQuestionIndex] = index;
    answeredQuestions.add(currentQuestionIndex);
    
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        score++;
    }
    
    displayQuestion();
    updateProgress();
}

function calculateScore() {
    let correctCount = 0;
    let wrongCount = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] !== null) {
            if (question.type === "multiple-choice") {
                if (userAnswers[index] === question.correct) {
                    correctCount++;
                } else {
                    wrongCount++;
                }
            } else if (question.type === "code") {
                // Code questions are evaluated manually
                const codeAnswer = userAnswers[index];
                if (codeAnswer && codeAnswer.trim() === question.correctAnswer.trim()) {
                    correctCount++;
                } else {
                    wrongCount++;
                }
            }
        }
    });
    
    return {
        correct: correctCount,
        wrong: wrongCount,
        total: questions.length,
        percentage: Math.round((correctCount / questions.length) * 100)
    };
}

function showResults() {
    const results = calculateScore();
    
    document.getElementById('score-percentage').textContent = `${results.percentage}%`;
    document.getElementById('correct-answers').textContent = results.correct;
    document.getElementById('wrong-answers').textContent = results.wrong;
    document.getElementById('total-score').textContent = results.correct;
    
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    answeredQuestions.clear();
    score = 0;
    
    resultsSection.style.display = 'none';
    quizSection.style.display = 'block';
    
    displayQuestion();
    updateProgress();
    updateNavigation();
}

function updateProgress() {
    const progress = (answeredQuestions.size / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
    
    if (answeredQuestions.size === questions.length) {
        finishBtn.style.display = 'block';
    } else {
        finishBtn.style.display = 'none';
    }
}

// Event Listeners
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
        updateNavigation();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
        updateNavigation();
    }
});

finishBtn.addEventListener('click', () => {
    showResults();
});

restartBtn.addEventListener('click', () => {
    restartQuiz();
});

// Quiz'i başlat
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});