// Quiz data
const quizData = {
    english: {
        title: "English Mastery",
        beginner: {
            timeLimit: 15,
            questions: [
                {
                    question: "Which of the following is the correct plural form of 'child'?",
                    options: ["childs", "children", "childes", "child's"],
                    correct: 1
                },
                {
                    question: "Choose the correct sentence:",
                    options: ["She don't like coffee", "She doesn't likes coffee", "She doesn't like coffee", "She not like coffee"],
                    correct: 2
                },
                {
                    question: "What is the synonym of 'happy'?",
                    options: ["sad", "joyful", "angry", "tired"],
                    correct: 1
                },
                {
                    question: "Which word is a noun?",
                    options: ["run", "quickly", "beautiful", "book"],
                    correct: 3
                },
                {
                    question: "What is the past tense of 'go'?",
                    options: ["goed", "went", "gone", "going"],
                    correct: 1
                },
                {
                    question: "Choose the correct article: '_____ apple is red.'",
                    options: ["A", "An", "The", "No article"],
                    correct: 1
                },
                {
                    question: "What type of word is 'slowly'?",
                    options: ["noun", "verb", "adjective", "adverb"],
                    correct: 3
                },
                {
                    question: "Which sentence is correct?",
                    options: ["I have two cats", "I has two cats", "I having two cats", "I had two cats yesterday"],
                    correct: 0
                },
                {
                    question: "What is the opposite of 'big'?",
                    options: ["large", "huge", "small", "giant"],
                    correct: 2
                },
                {
                    question: "Choose the correct spelling:",
                    options: ["recieve", "receive", "receve", "receiv"],
                    correct: 1
                }
            ]
        },
        intermediate: {
            timeLimit: 12,
            questions: [
                {
                    question: "Which sentence demonstrates correct subject-verb agreement?",
                    options: ["The team are playing well", "The team is playing well", "The team were playing well", "The team have playing well"],
                    correct: 1
                },
                {
                    question: "Identify the figure of speech: 'The wind whispered through the trees.'",
                    options: ["Metaphor", "Simile", "Personification", "Alliteration"],
                    correct: 2
                },
                {
                    question: "Choose the correct conditional: 'If I _____ rich, I would travel the world.'",
                    options: ["am", "was", "were", "will be"],
                    correct: 2
                },
                {
                    question: "What is the meaning of the idiom 'break the ice'?",
                    options: ["To be very cold", "To start a conversation", "To break something", "To be clumsy"],
                    correct: 1
                },
                {
                    question: "Which word is spelled correctly?",
                    options: ["accomodate", "accommodate", "acomodate", "acommodate"],
                    correct: 1
                },
                {
                    question: "Identify the passive voice sentence:",
                    options: ["John wrote the letter", "The letter was written by John", "John is writing the letter", "John will write the letter"],
                    correct: 1
                },
                {
                    question: "What is the antonym of 'abundant'?",
                    options: ["plentiful", "scarce", "numerous", "ample"],
                    correct: 1
                },
                {
                    question: "Choose the correct preposition: 'She is good _____ mathematics.'",
                    options: ["in", "at", "on", "with"],
                    correct: 1
                }
            ]
        },
        advanced: {
            timeLimit: 10,
            questions: [
                {
                    question: "Which literary device is exemplified in: 'The silence was deafening'?",
                    options: ["Oxymoron", "Paradox", "Irony", "Hyperbole"],
                    correct: 0
                },
                {
                    question: "Identify the grammatical error: 'Between you and I, this secret must remain confidential.'",
                    options: ["No error", "Should be 'you and me'", "Should be 'among you and I'", "Should be 'confidentially'"],
                    correct: 1
                },
                {
                    question: "What is the etymology of the word 'etymology'?",
                    options: ["Latin origin", "Greek origin", "French origin", "Germanic origin"],
                    correct: 1
                },
                {
                    question: "Which sentence demonstrates correct use of the subjunctive?",
                    options: ["If I was you, I'd leave", "I suggest that he goes immediately", "It's important that she be on time", "I wish I was there"],
                    correct: 2
                },
                {
                    question: "Identify the rhetorical device: 'Ask not what your country can do for you—ask what you can do for your country.'",
                    options: ["Chiasmus", "Anaphora", "Epistrophe", "Zeugma"],
                    correct: 0
                }
            ]
        }
    },
    aptitude: {
        title: "Aptitude Challenge",
        beginner: {
            timeLimit: 15,
            questions: [
                {
                    question: "What is 25% of 80?",
                    options: ["15", "20", "25", "30"],
                    correct: 1
                },
                {
                    question: "If a train travels 60 km in 1 hour, how far will it travel in 3 hours?",
                    options: ["120 km", "150 km", "180 km", "200 km"],
                    correct: 2
                },
                {
                    question: "What is 7 × 8?",
                    options: ["54", "56", "58", "64"],
                    correct: 1
                },
                {
                    question: "If you buy 3 apples for $6, how much does each apple cost?",
                    options: ["$1", "$2", "$3", "$4"],
                    correct: 1
                },
                {
                    question: "What is the next number: 2, 4, 6, 8, ?",
                    options: ["9", "10", "11", "12"],
                    correct: 1
                },
                {
                    question: "What is 100 ÷ 4?",
                    options: ["20", "25", "30", "35"],
                    correct: 1
                },
                {
                    question: "If a rectangle has length 10 and width 5, what is its area?",
                    options: ["15", "30", "50", "100"],
                    correct: 2
                },
                {
                    question: "What is 15 + 27?",
                    options: ["40", "41", "42", "43"],
                    correct: 2
                },
                {
                    question: "How many minutes are in 2 hours?",
                    options: ["100", "110", "120", "130"],
                    correct: 2
                },
                {
                    question: "What is 50% of 200?",
                    options: ["50", "75", "100", "150"],
                    correct: 2
                }
            ]
        },
        intermediate: {
            timeLimit: 12,
            questions: [
                {
                    question: "If 3x + 5 = 20, what is the value of x?",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "What is the compound interest on $1000 at 10% per annum for 2 years?",
                    options: ["$200", "$210", "$220", "$250"],
                    correct: 1
                },
                {
                    question: "A car travels 240 km in 4 hours. What is its average speed?",
                    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
                    correct: 1
                },
                {
                    question: "What is the next number in the sequence: 1, 4, 9, 16, ?",
                    options: ["20", "24", "25", "30"],
                    correct: 2
                },
                {
                    question: "If the ratio of boys to girls in a class is 3:2 and there are 15 boys, how many girls are there?",
                    options: ["8", "10", "12", "15"],
                    correct: 1
                },
                {
                    question: "What is 15% of 240?",
                    options: ["30", "32", "36", "40"],
                    correct: 2
                },
                {
                    question: "A shopkeeper sells an item for $120, making a 20% profit. What was the cost price?",
                    options: ["$96", "$100", "$105", "$110"],
                    correct: 1
                },
                {
                    question: "What is the area of a circle with radius 7 cm? (Use π = 22/7)",
                    options: ["154 cm²", "144 cm²", "164 cm²", "174 cm²"],
                    correct: 0
                }
            ]
        },
        advanced: {
            timeLimit: 10,
            questions: [
                {
                    question: "If log₂(x) = 5, what is the value of x?",
                    options: ["10", "25", "32", "64"],
                    correct: 2
                },
                {
                    question: "What is the derivative of x³ + 2x² - 5x + 3?",
                    options: ["3x² + 4x - 5", "3x² + 2x - 5", "x² + 4x - 5", "3x² + 4x + 5"],
                    correct: 0
                },
                {
                    question: "In a geometric progression, if the first term is 2 and the common ratio is 3, what is the 5th term?",
                    options: ["162", "154", "146", "138"],
                    correct: 0
                },
                {
                    question: "What is the probability of getting exactly 2 heads in 4 coin tosses?",
                    options: ["1/4", "3/8", "1/2", "5/8"],
                    correct: 1
                },
                {
                    question: "If sin θ = 3/5, what is cos θ? (assuming θ is acute)",
                    options: ["4/5", "3/4", "5/4", "5/3"],
                    correct: 0
                }
            ]
        }
    },
    reasoning: {
        title: "Logical Reasoning",
        beginner: {
            timeLimit: 15,
            questions: [
                {
                    question: "What comes next in the pattern: A, C, E, G, ?",
                    options: ["H", "I", "J", "K"],
                    correct: 1
                },
                {
                    question: "If all cats are animals and some animals are pets, which is true?",
                    options: ["All cats are pets", "Some cats are pets", "No cats are pets", "Cannot be determined"],
                    correct: 3
                },
                {
                    question: "Complete the analogy: Day : Night :: Hot : ?",
                    options: ["Warm", "Cool", "Cold", "Temperature"],
                    correct: 2
                },
                {
                    question: "Which number doesn't belong: 2, 4, 6, 9, 10?",
                    options: ["2", "4", "6", "9"],
                    correct: 3
                },
                {
                    question: "If today is Monday, what day will it be after 10 days?",
                    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
                    correct: 1
                },
                {
                    question: "What comes next: 1, 1, 2, 3, 5, ?",
                    options: ["7", "8", "9", "10"],
                    correct: 1
                },
                {
                    question: "Complete: Cat : Meow :: Dog : ?",
                    options: ["Run", "Bark", "Jump", "Sleep"],
                    correct: 1
                },
                {
                    question: "Which shape comes next: Circle, Square, Triangle, Circle, Square, ?",
                    options: ["Circle", "Square", "Triangle", "Rectangle"],
                    correct: 2
                },
                {
                    question: "If BOOK is coded as CPPL, how is WORD coded?",
                    options: ["XPSE", "XQSE", "YPSE", "YQSE"],
                    correct: 0
                },
                {
                    question: "What is the missing number: 2, 6, 12, 20, 30, ?",
                    options: ["40", "42", "44", "46"],
                    correct: 1
                }
            ]
        },
        intermediate: {
            timeLimit: 12,
            questions: [
                {
                    question: "If FRIEND is written as HUMJTK, how is CANDLE written?",
                    options: ["EDRIRL", "ECQFNG", "DCPMJG", "ECQGMH"],
                    correct: 1
                },
                {
                    question: "If some doctors are teachers and all teachers are educated, then:",
                    options: ["All doctors are educated", "Some doctors are educated", "No doctors are educated", "Cannot be determined"],
                    correct: 1
                },
                {
                    question: "If you rearrange 'LISTEN', you get:",
                    options: ["SILENT", "ENLIST", "TINSEL", "All of the above"],
                    correct: 3
                },
                {
                    question: "Complete the series: Z, Y, X, W, V, ?",
                    options: ["U", "T", "S", "R"],
                    correct: 0
                },
                {
                    question: "In a certain logic, if MATHEMATICS is 1 and PHYSICS is 2, what is CHEMISTRY?",
                    options: ["2", "3", "4", "5"],
                    correct: 1
                },
                {
                    question: "If P + Q means P is the father of Q, P - Q means P is the sister of Q, what does A + B - C mean?",
                    options: ["A is uncle of C", "A is grandfather of C", "A is father of C", "Cannot be determined"],
                    correct: 1
                },
                {
                    question: "In a row of 40 students, A is 16th from left and B is 18th from right. How many students are between A and B?",
                    options: ["5", "6", "7", "8"],
                    correct: 0
                },
                {
                    question: "What comes next in the series: 1, 8, 27, 64, ?",
                    options: ["100", "125", "144", "169"],
                    correct: 1
                },
                {
                    question: "If in a code language, COMPUTER is written as RFUVQNPC, then MEDICINE is written as:",
                    options: ["EOJDEJDM", "EOJDJEJM", "EOJDEJME", "EOJDJEME"],
                    correct: 0
                }
            ]
        },
        advanced: {
            timeLimit: 10,
            questions: [
                {
                    question: "A man walks 5 km towards north, then turns left and walks 4 km, then turns left and walks 5 km. How far is he from the starting point?",
                    options: ["3 km", "4 km", "5 km", "6 km"],
                    correct: 1
                },
                {
                    question: "If ROSE is coded as 6821, CHAIR is coded as 73456 and PREACH is coded as 961473, what is the code for SEARCH?",
                    options: ["214673", "216473", "214763", "216743"],
                    correct: 0
                },
                {
                    question: "In a certain code, if MONKEY is written as XDJMNL, then TIGER is written as:",
                    options: ["SHFDQ", "UJHFS", "SHFDR", "UJGFR"],
                    correct: 0
                },
                {
                    question: "What is the next term in the series: 2, 6, 12, 20, 30, 42, ?",
                    options: ["56", "58", "60", "62"],
                    correct: 0
                },
                {
                    question: "If P is the husband of Q, R is the son of P and S is the daughter of Q, T is the brother of P. How is T related to R?",
                    options: ["Father", "Uncle", "Brother", "Cousin"],
                    correct: 1
                }
            ]
        }
    },
    general: {
        title: "General Knowledge",
        beginner: {
            timeLimit: 15,
            questions: [
                {
                    question: "What is the capital of France?",
                    options: ["London", "Berlin", "Paris", "Madrid"],
                    correct: 2
                },
                {
                    question: "How many continents are there?",
                    options: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "What is the largest planet in our solar system?",
                    options: ["Earth", "Mars", "Jupiter", "Saturn"],
                    correct: 2
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correct: 2
                },
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "O2", "H2"],
                    correct: 0
                },
                {
                    question: "Which ocean is the largest?",
                    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                    correct: 3
                },
                {
                    question: "How many days are there in a leap year?",
                    options: ["365", "366", "367", "364"],
                    correct: 1
                },
                {
                    question: "What is the smallest country in the world?",
                    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                    correct: 1
                },
                {
                    question: "Which gas do plants absorb from the atmosphere?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                    correct: 2
                },
                {
                    question: "What is the hardest natural substance?",
                    options: ["Gold", "Iron", "Diamond", "Platinum"],
                    correct: 2
                }
            ]
        },
        intermediate: {
            timeLimit: 12,
            questions: [
                {
                    question: "Who wrote 'Romeo and Juliet'?",
                    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                    correct: 1
                },
                {
                    question: "What is the currency of Japan?",
                    options: ["Yuan", "Won", "Yen", "Rupee"],
                    correct: 2
                },
                {
                    question: "In which year did World War II end?",
                    options: ["1944", "1945", "1946", "1947"],
                    correct: 1
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Mercury"],
                    correct: 1
                },
                {
                    question: "Who invented the telephone?",
                    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
                    correct: 1
                },
                {
                    question: "What is the longest river in the world?",
                    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                    correct: 1
                },
                {
                    question: "Which element has the chemical symbol 'Au'?",
                    options: ["Silver", "Gold", "Aluminum", "Argon"],
                    correct: 1
                },
                {
                    question: "In which country would you find Machu Picchu?",
                    options: ["Brazil", "Chile", "Peru", "Ecuador"],
                    correct: 2
                }
            ]
        },
        advanced: {
            timeLimit: 10,
            questions: [
                {
                    question: "What is the Higgs boson also known as?",
                    options: ["God particle", "Dark matter", "Antimatter", "Quantum particle"],
                    correct: 0
                },
                {
                    question: "Which treaty ended World War I?",
                    options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Westphalia"],
                    correct: 0
                },
                {
                    question: "What is the study of earthquakes called?",
                    options: ["Geology", "Seismology", "Meteorology", "Volcanology"],
                    correct: 1
                },
                {
                    question: "Who developed the theory of relativity?",
                    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
                    correct: 1
                },
                {
                    question: "What is the most abundant gas in Earth's atmosphere?",
                    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                    correct: 2
                }
            ]
        }
    }
};

// Global variables
let currentCategory = null;
let currentLevel = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let timer = null;
let timeRemaining = 0;
let startTime = null;
let customQuizzes = JSON.parse(localStorage.getItem('customQuizzes')) || [];
let questionCounter = 0;

// Initialize particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Show level selection
function showLevels(category) {
    currentCategory = category;
    const categoryData = quizData[category];
    
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('levelScreen').classList.remove('hidden');
    document.getElementById('levelTitle').textContent = categoryData.title;
    
    // Update question counts
    document.getElementById('beginnerQuestions').textContent = categoryData.beginner.questions.length;
    document.getElementById('intermediateQuestions').textContent = categoryData.intermediate.questions.length;
    document.getElementById('advancedQuestions').textContent = categoryData.advanced.questions.length;
}

// Start quiz
function startQuiz(level) {
    currentLevel = level;
    currentQuiz = quizData[currentCategory][level];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = new Array(currentQuiz.questions.length).fill(null);
    timeRemaining = currentQuiz.timeLimit * 60;
    startTime = Date.now();

    document.getElementById('levelScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('userStats').classList.remove('hidden');
    
    document.getElementById('quizTitle').textContent = quizData[currentCategory].title;
    document.getElementById('quizLevel').textContent = `${level.charAt(0).toUpperCase() + level.slice(1)} Level`;
    document.getElementById('totalQuestions').textContent = currentQuiz.questions.length;
    
    displayQuestion();
    startTimer();
}

// Display question
function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = `option-button p-4 sm:p-6 border-2 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ${
            selectedAnswers[currentQuestionIndex] === index
                ? 'option-selected border-cyan-400 bg-cyan-400/20'
                : 'border-white/30 bg-white/10 hover:border-white/50'
        }`;
        optionDiv.innerHTML = `
            <label class="flex items-center cursor-pointer">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/50 mr-3 sm:mr-4 flex items-center justify-center flex-shrink-0">
                    ${selectedAnswers[currentQuestionIndex] === index ? '<div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full"></div>' : ''}
                </div>
                <span class="text-white text-sm sm:text-base lg:text-lg leading-relaxed">${option}</span>
            </label>
        `;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons for both mobile and desktop
    const prevBtns = document.querySelectorAll('#prevBtn');
    const nextBtns = document.querySelectorAll('#nextBtn');
    
    prevBtns.forEach(btn => {
        btn.disabled = currentQuestionIndex === 0;
    });
    
    nextBtns.forEach(btn => {
        btn.textContent = currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish 🎯' : 'Next →';
    });
}

// Select answer
function selectAnswer(answerIndex) {
    selectedAnswers[currentQuestionIndex] = answerIndex;
    displayQuestion(); // Refresh to show selection
}

// Navigation functions
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Timer functions
function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timeText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timers = document.querySelectorAll('#timer');
    timers.forEach(timer => {
        timer.textContent = timeText;
    });
}

// Finish quiz
function finishQuiz() {
    clearInterval(timer);
    
    // Calculate score
    score = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === currentQuiz.questions[index].correct) {
            score++;
        }
    });
    
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    // Show results
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    document.getElementById('finalScore').textContent = `${score}/${currentQuiz.questions.length}`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update all score displays (mobile and desktop)
    const currentScores = document.querySelectorAll('#currentScore');
    currentScores.forEach(scoreElement => {
        scoreElement.textContent = score;
    });
    document.getElementById('totalScore').textContent = score;
    
    // Performance message
    const messageDiv = document.getElementById('performanceMessage');
    if (percentage >= 90) {
        messageDiv.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/30';
        messageDiv.innerHTML = '<h3 class="text-2xl font-bold text-green-400 mb-2">🏆 Outstanding Performance!</h3><p class="text-white/80">You\'re a true master of this subject!</p>';
    } else if (percentage >= 75) {
        messageDiv.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-500/20 border border-blue-400/30';
        messageDiv.innerHTML = '<h3 class="text-2xl font-bold text-blue-400 mb-2">⭐ Excellent Work!</h3><p class="text-white/80">You have a strong grasp of the subject!</p>';
    } else if (percentage >= 60) {
        messageDiv.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30';
        messageDiv.innerHTML = '<h3 class="text-2xl font-bold text-yellow-400 mb-2">👍 Good Effort!</h3><p class="text-white/80">You\'re on the right track!</p>';
    } else {
        messageDiv.className = 'mb-8 p-6 rounded-2xl bg-gradient-to-r from-red-400/20 to-pink-500/20 border border-red-400/30';
        messageDiv.innerHTML = '<h3 class="text-2xl font-bold text-red-400 mb-2">💪 Keep Practicing!</h3><p class="text-white/80">Every expert was once a beginner!</p>';
    }
}

// Navigation functions
function goHome() {
    clearInterval(timer);
    hideAllScreens();
    document.getElementById('homeScreen').classList.remove('hidden');
    document.getElementById('userStats').classList.add('hidden');
}

function retakeQuiz() {
    startQuiz(currentLevel);
}

function hideAllScreens() {
    const screens = ['homeScreen', 'levelScreen', 'quizScreen', 'createQuizScreen', 'myQuizzesScreen', 'resultsScreen'];
    screens.forEach(screen => {
        document.getElementById(screen).classList.add('hidden');
    });
}

// Custom Quiz Functions
function showCreateQuiz() {
    hideAllScreens();
    document.getElementById('createQuizScreen').classList.remove('hidden');
    resetCreateQuizForm();
}

function showMyQuizzes() {
    hideAllScreens();
    document.getElementById('myQuizzesScreen').classList.remove('hidden');
    displaySavedQuizzes();
}

function addQuestion() {
    questionCounter++;
    const questionId = `question_${questionCounter}`;
    
    const questionHtml = `
        <div class="bg-white/10 rounded-2xl p-6 border border-white/20" id="${questionId}">
            <div class="flex justify-between items-center mb-4">
                <h4 class="text-lg font-bold text-white">Question ${questionCounter}</h4>
                <button onclick="removeQuestion('${questionId}')" class="text-red-400 hover:text-red-300 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="space-y-4">
                <div>
                    <label class="block text-white/80 text-sm font-medium mb-2">Question Text</label>
                    <textarea placeholder="Enter your question..." rows="2"
                                class="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all duration-300 question-text"></textarea>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-white/80 text-sm font-medium mb-2">Option A</label>
                        <input type="text" placeholder="Option A..."
                                class="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all duration-300 option-input">
                    </div>
                    <div>
                        <label class="block text-white/80 text-sm font-medium mb-2">Option B</label>
                        <input type="text" placeholder="Option B..."
                                class="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all duration-300 option-input">
                    </div>
                    <div>
                        <label class="block text-white/80 text-sm font-medium mb-2">Option C</label>
                        <input type="text" placeholder="Option C..."
                                class="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all duration-300 option-input">
                    </div>
                    <div>
                        <label class="block text-white/80 text-sm font-medium mb-2">Option D</label>
                        <input type="text" placeholder="Option D..."
                                class="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all duration-300 option-input">
                    </div>
                </div>
                
                <div>
                    <label class="block text-white/80 text-sm font-medium mb-2">Correct Answer</label>
                    <select class="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-all duration-300 correct-answer">
                        <option value="" style="background-color: #1e293b; color: white;">Select correct answer...</option>
                        <option value="0" style="background-color: #1e293b; color: white;">Option A</option>
                        <option value="1" style="background-color: #1e293b; color: white;">Option B</option>
                        <option value="2" style="background-color: #1e293b; color: white;">Option C</option>
                        <option value="3" style="background-color: #1e293b; color: white;">Option D</option>
                    </select>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('questionsContainer').insertAdjacentHTML('beforeend', questionHtml);
    updateQuestionsDisplay();
    updateButtonStates();
    
    // Add event listeners
    const questionElement = document.getElementById(questionId);
    const inputs = questionElement.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', updateButtonStates);
    });
}

function removeQuestion(questionId) {
    document.getElementById(questionId).remove();
    updateQuestionsDisplay();
    updateButtonStates();
}

function updateQuestionsDisplay() {
    const container = document.getElementById('questionsContainer');
    const message = document.getElementById('noQuestionsMessage');
    
    if (container.children.length === 0) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
}

function updateButtonStates() {
    const quizName = document.getElementById('customQuizName').value.trim();
    const questions = document.querySelectorAll('#questionsContainer > div');
    let allQuestionsValid = true;
    
    questions.forEach(questionDiv => {
        const questionText = questionDiv.querySelector('.question-text').value.trim();
        const options = Array.from(questionDiv.querySelectorAll('.option-input')).map(input => input.value.trim());
        const correctAnswer = questionDiv.querySelector('.correct-answer').value;
        
        if (!questionText || options.some(opt => !opt) || !correctAnswer) {
            allQuestionsValid = false;
        }
    });
    
    const isValid = quizName && questions.length > 0 && allQuestionsValid;
    
    const previewBtn = document.getElementById('previewBtn');
    const saveBtn = document.getElementById('saveBtn');
    
    if (isValid) {
        previewBtn.disabled = false;
        previewBtn.className = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300';
        saveBtn.disabled = false;
        saveBtn.className = 'bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300';
    } else {
        previewBtn.disabled = true;
        previewBtn.className = 'bg-blue-500/50 text-white/50 font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-not-allowed';
        saveBtn.disabled = true;
        saveBtn.className = 'bg-green-500/50 text-white/50 font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-not-allowed';
    }
}

function collectQuizData() {
    const quizName = document.getElementById('customQuizName').value.trim();
    const timeLimit = parseInt(document.getElementById('customQuizTimeLimit').value) || 15;
    const questions = [];
    
    document.querySelectorAll('#questionsContainer > div').forEach(questionDiv => {
        const questionText = questionDiv.querySelector('.question-text').value.trim();
        const options = Array.from(questionDiv.querySelectorAll('.option-input')).map(input => input.value.trim());
        const correctAnswer = parseInt(questionDiv.querySelector('.correct-answer').value);
        
        questions.push({
            question: questionText,
            options: options,
            correct: correctAnswer
        });
    });
    
    return {
        id: 'quiz_' + Date.now(),
        name: quizName,
        timeLimit: timeLimit,
        questions: questions,
        createdAt: new Date().toISOString()
    };
}

function saveQuiz() {
    const quizData = collectQuizData();
    customQuizzes.push(quizData);
    localStorage.setItem('customQuizzes', JSON.stringify(customQuizzes));
    
    showMessage('Quiz saved successfully! 🎉', 'success');
    resetCreateQuizForm();
}

function previewQuiz() {
    const quizData = collectQuizData();
    startCustomQuiz(quizData);
}

function startCustomQuiz(quizData) {
    currentCategory = 'custom';
    currentLevel = 'custom';
    currentQuiz = {
        questions: quizData.questions,
        timeLimit: quizData.timeLimit
    };
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = new Array(currentQuiz.questions.length).fill(null);
    timeRemaining = currentQuiz.timeLimit * 60;
    startTime = Date.now();

    hideAllScreens();
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('userStats').classList.remove('hidden');
    
    document.getElementById('quizTitle').textContent = quizData.name;
    document.getElementById('quizLevel').textContent = 'Custom Quiz';
    document.getElementById('totalQuestions').textContent = currentQuiz.questions.length;
    
    displayQuestion();
    startTimer();
}

function resetCreateQuizForm() {
    document.getElementById('customQuizName').value = '';
    document.getElementById('customQuizTimeLimit').value = '15';
    document.getElementById('questionsContainer').innerHTML = '';
    questionCounter = 0;
    updateQuestionsDisplay();
    updateButtonStates();
}

function displaySavedQuizzes() {
    const container = document.getElementById('savedQuizzesContainer');
    const noQuizzesMessage = document.getElementById('noSavedQuizzes');
    
    customQuizzes = JSON.parse(localStorage.getItem('customQuizzes')) || [];
    
    if (customQuizzes.length === 0) {
        container.classList.add('hidden');
        noQuizzesMessage.classList.remove('hidden');
        return;
    }
    
    container.classList.remove('hidden');
    noQuizzesMessage.classList.add('hidden');
    container.innerHTML = '';
    
    customQuizzes.forEach((quiz, index) => {
        const quizCard = document.createElement('div');
        quizCard.className = 'card-hover bg-white/15 backdrop-blur-lg rounded-3xl p-6 border border-white/20';
        quizCard.innerHTML = `
            <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">📝</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${quiz.name}</h3>
                <div class="bg-white/10 rounded-lg p-3 mb-4">
                    <div class="flex justify-between text-sm text-white/80 mb-1">
                        <span>Questions:</span>
                        <span>${quiz.questions.length}</span>
                    </div>
                    <div class="flex justify-between text-sm text-white/80 mb-1">
                        <span>Time Limit:</span>
                        <span>${quiz.timeLimit} min</span>
                    </div>
                    <div class="flex justify-between text-sm text-white/80">
                        <span>Created:</span>
                        <span>${new Date(quiz.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="space-y-2">
                    <button onclick="startCustomQuiz(customQuizzes[${index}])" class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300">
                        Start Quiz
                    </button>
                    <button onclick="deleteQuiz(${index})" class="w-full bg-red-500/20 hover:bg-red-500/30 text-red-300 font-bold py-2 px-4 rounded-xl transition-all duration-300 border border-red-400/30">
                        Delete
                    </button>
                </div>
            </div>
        `;
        container.appendChild(quizCard);
    });
}

function deleteQuiz(index) {
    if (confirm('Are you sure you want to delete this quiz?')) {
        customQuizzes.splice(index, 1);
        localStorage.setItem('customQuizzes', JSON.stringify(customQuizzes));
        displaySavedQuizzes();
        showMessage('Quiz deleted successfully!', 'success');
    }
}

function showMessage(text, type = 'success') {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const tempMessage = document.createElement('div');
    tempMessage.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg z-50 fade-in`;
    tempMessage.textContent = text;
    document.body.appendChild(tempMessage);
    setTimeout(() => tempMessage.remove(), 3000);
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Add event listeners for create quiz form fields
    const formInputs = ['customQuizName', 'customQuizTimeLimit'];
    formInputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', updateButtonStates);
        }
    });

    // Initial call to check button states in case the form is pre-filled
    updateButtonStates();
});