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
    
    if (question.type === 'multiple-choice') {
        quizContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" data-index="${index}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Option click handlers
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                userAnswers[currentQuestionIndex] = parseInt(option.dataset.index);
                updateNavigation();
            });
        });
        
        // Önceki cevabı göster
        if (userAnswers[currentQuestionIndex] !== null) {
            document.querySelector(`[data-index="${userAnswers[currentQuestionIndex]}"]`).classList.add('selected');
        }
        
    } else if (question.type === 'code') {
        quizContainer.innerHTML = `
            <div class="code-question">
                <h3>${question.question}</h3>
                <p>${question.description}</p>
                <textarea class="code-input" placeholder="Kodunuzu buraya yazın..."></textarea>
            </div>
        `;
        
        const codeInput = document.querySelector('.code-input');
        codeInput.value = userAnswers[currentQuestionIndex] || '';
        
        codeInput.addEventListener('input', () => {
            userAnswers[currentQuestionIndex] = codeInput.value;
            updateNavigation();
        });
    }
}

// Progress bar güncelleme
function updateProgress() {
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progress.style.width = progressPercent + '%';
}

// Navigation buttons güncelleme
function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
}

// Sonuçları hesaplama
function calculateScore() {
    score = 0;
    questions.forEach((question, index) => {
        if (question.type === 'multiple-choice') {
            if (userAnswers[index] === question.correct) {
                score++;
            }
        } else if (question.type === 'code') {
            // Kod sorularında basit string karşılaştırması (gerçek uygulamada daha gelişmiş olmalı)
            const userCode = userAnswers[index]?.toLowerCase().replace(/\s+/g, ' ').trim() || '';
            const correctCode = question.correctAnswer.toLowerCase().replace(/\s+/g, ' ').trim();
            if (userCode.includes('create') && userCode.includes('function') || 
                userCode.includes('create') && userCode.includes('procedure') ||
                userCode.includes('begin') && userCode.includes('transaction')) {
                score += 0.5; // Kod sorularına yarım puan
            }
        }
    });
}

// Sonuçları gösterme
function showResults() {
    calculateScore();
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    const correctAnswers = Math.floor(score);
    const wrongAnswers = questions.length - correctAnswers;
    
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('total-score').textContent = score.toFixed(1);
    
    // Renk değiştirme
    const scoreCircle = document.querySelector('.score-circle');
    if (percentage >= 80) {
        scoreCircle.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    } else if (percentage >= 60) {
        scoreCircle.style.background = 'linear-gradient(135deg, #ff9800, #f57c00)';
    } else {
        scoreCircle.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
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
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    score = 0;
    resultsSection.style.display = 'none';
    quizSection.style.display = 'block';
    initQuiz();
});

// Quiz'i başlat
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});