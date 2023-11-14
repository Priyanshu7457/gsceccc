const quizData = [
    {
        question: "Which of the following is not an 'Open Source'?",
        options: ["Open Office", "Linux", "Ubuntu", "Windows 10"],
        correctAnswer: "Windows 10"
    },
    {
        question: "Transaction ID and reference number are the same?",
        options: ["true", "false"],
        correctAnswer: "false"
    },
    {
        question: "Which of the following is not hardware?",
        options: ["Punch card reader", "Magnetic tape reader", "Printer", "Assembler"],
        correctAnswer: "Assembler"
    },
    {
        question: "What characteristics of read-only memory (ROM) makes it useful?",
        options: [
            "ROM information can be easily updated",
            "ROM provides very large amounts of inexpensive data storage",
            "ROM chips are easily swapped between different brands of computers",
            "Data in ROM is non-volatile, that is, it remains there even without electrical power"
        ],
        correctAnswer: "Data in ROM is non-volatile, that is, it remains there even without electrical power"
    },
    {
        question: "Inputs required during AEPS transaction are?",
        options: ["IIN + Aadhaar number + Biometric data", "Account number + Bank number + Bank IFSC code", "Pin + Aadhar card + Account number", "IIN + Aadhaar card + Biometric data"],
        correctAnswer: "IIN + Aadhaar number + Biometric data"
    },
    {
        question: "What are the input devices?",
        options: ["Printer", "Hard disk", "Keyboard, Mouse", "Monitor"],
        correctAnswer: "Keyboard, Mouse"
    },
    {
        question: "A bar that informs you of the available options in your computer, opened applications, background running applications and can be used to switch between applications quickly is",
        options: ["Menu bar", "Tool bar", "Status bar", "Task bar"],
        correctAnswer: "Task bar"
    },
    {
        question: "Which of the following is the class of computer threat",
        options: ["Phishing", "Soliciting", "Dos attacks", "Stalking"],
        correctAnswer: "Dos attacks"
    },
    {
        question: "Which Printer Is Commonly Used For Desktop Publishing?",
        options: ["Daisy Wheel Printer", "Dot-matrix Printer", "Laser Printer", "Ink-jet Printer"],
        correctAnswer: "Laser Printer"
    },
    {
        question: "What is Meghdoot?",
        options: ["Mobile Seva", "Govt. Cloud Service", "Online seva", "Cloud center service"],
        correctAnswer: "Govt. Cloud Service"
    },
    {
        question: "Who can edit sent mail?",
        options: ["Sender", "Receiver", "None", "Both A & B"],
        correctAnswer: "None"
    },
    {
        question: "Which operation is not performed by a computer?",
        options: ["Inputting", "Processing", "Controlling", "Understanding"],
        correctAnswer: "Understanding"
    },
    {
        question: "Line spacing refers to.",
        options: ["The space between the lines of text.", "The height of lines.", "The length of lines.", "Both (a) and (c)"],
        correctAnswer: "The space between the lines of text."
    },
    {
        question: "LibreOffice Calc is a powerful.",
        options: ["Word processing software", "Spreadsheet package", "DBMS package", "Communication package"],
        correctAnswer: "Spreadsheet package"
    },
    {
        question: "A dedicated computer.",
        options: ["Is used by one person only.", "Is assigned one and only one task.", "Uses only one kind of software.", "Is meant for application software"],
        correctAnswer: "Is assigned one and only one task."
    },
    {
        question: "MAC address is a ……… byte address.",
        options: ["6", "4", "8", "2"],
        correctAnswer: "6"
    },
    {
        question: "The term bit is short for.",
        options: ["Megabyte", "Binary language", "Binary digit", "Binary number"],
        correctAnswer: "Binary digit"
    },
    {
        question: "The keystrokes Ctrl+ I is used to.",
        options: ["Increase font size", "Insert a line break", "Indicate the text show should be bold", "Applies italic format to the selected text"],
        correctAnswer: "Applies italic format to the selected text"
    },
    {
        question: "Credit cards are a convenient substitute for …………. ",
        options: ["Cash", "Cheque", "Both cash & cheque", "None of the options"],
        correctAnswer: "Both cash & cheque"
    },
    {
        question: "How many daily settlement batches are there in NEFT during a weekday",
        options: ["24", "12", "23", "11"],
        correctAnswer: "12"
    },
    {
        question: "NEFT operates in how many batches in a day",
        options: ["Hourly basis", "Half-hourly basis", "Two-hourly basis", "Quarterly basis"],
        correctAnswer: "Half-hourly basis"
    },
    {
        question: "Face Recognition system is based on which type of approach?",
        options: ["Weak AI approach", "Applied AI approach", "Cognitive AI approach", "Strong AI approach"],
        correctAnswer: "Applied AI approach"
    },
    {
        question: "Which of the following is an advantage of artificial intelligence?",
        options: ["Reduces the time taken to solve the problem", "Helps in providing security", "Has the ability to think hence makes the work easier", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which of the following can improve the performance of an AI agent?",
        options: ["Perceiving", "Learning", "Observing", "All of the mentioned"],
        correctAnswer: "Learning"
    },
    {
        question: "Which of the following is/are the composition for AI agents?",
        options: ["Program only", "Architecture only", "Both Program and Architecture", "None of the mentioned"],
        correctAnswer: "Both Program and Architecture"
    },
    {
        question: "On which of the following approaches is a basic line-following robot based?",
        options: ["Applied approach", "Weak approach", "Strong approach", "Cognitive approach"],
        correctAnswer: "Weak approach"
    },
    {
        question: "Artificial Intelligence has evolved extremely in all fields except for _________",
        options: ["Web mining", "Construction of plans in real-time dynamic systems", "Understanding natural language robustly", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "Which of the following is an example of artificial intelligent agent/agents?",
        options: ["Autonomous Spacecraft", "Human", "Robot", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "Which of the following is an expansion of Artificial Intelligence application?",
        options: ["Game Playing", "Planning and Scheduling", "Diagnosis", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "Which of the following environments is strategic?",
        options: ["Rational", "Deterministic", "Partial", "Stochastic"],
        correctAnswer: "Deterministic"
    },
    {
        question: "Which of the following is the branch of Artificial Intelligence?",
        options: ["Machine Learning", "Cyber forensics", "Full-Stack Developer", "Network Design"],
        correctAnswer: "Machine Learning"
    },
    {
        question: "In how many categories is the process of Artificial Intelligence categorized?",
        options: ["Categorized into 5 categories", "Processes are categorized based on the input provided", "Categorized into 3 categories", "Process is not categorized"],
        correctAnswer: "Categorized into 3 categories"
    },
    {
        question: "Based on which of the following parameters is Artificial Intelligence categorized?",
        options: ["Based on functionality only", "Based on capabilities only", "Based on capabilities and functionality", "It is not categorized"],
        correctAnswer: "Based on capabilities and functionality"
    },
    {
        question: "Which of the following is a component of Artificial Intelligence?",
        options: ["Learning", "Training", "Designing", "Puzzling"],
        correctAnswer: "Learning"
    },


    {
        question: "round(1780,-2) displays the result in LibreOffice Calc",
        options: ["1700", "1780", "1800", "None of these"],
        correctAnswer: "1800"
    },
    {
        question: "round(18964,-5) displays the result in LibreOffice Calc",
        options: ["0", "1", "2", "5"],
        correctAnswer: "0"
    },
    {
        question: "quotient(509.8, 7) displays the result in LibreOffice Calc",
        options: ["72", "73", "74", "75"],
        correctAnswer: "72"
    },
    {
        question: "power(5, 2) displays the result in LibreOffice Calc",
        options: ["25", "10", "7", "None of these"],
        correctAnswer: "25"
    },
    {
        question: "Shortcut key for date in LibreOffice Calc",
        options: ["Ctrl+Shift+;", "Ctrl+;", "Ctrl++", "Ctrl+Shift+:"],
        correctAnswer: "Ctrl+;"
    },
    {
        question: "Shortcut key for time in LibreOffice Calc",
        options: ["Ctrl+Shift+;", "Ctrl+;", "Ctrl++", "Ctrl+Shift+:"],
        correctAnswer: "Ctrl+Shift+;"
    },
    {
        question: "Which is not the maximum zoom size in LibreOffice Calc",
        options: ["200", "300", "400", "500"],
        correctAnswer: "500"
    },
    {
        question: "floor(123, 11) displays the result in LibreOffice Calc",
        options: ["121", "120", "135", "125"],
        correctAnswer: "121"
    },
    {
        question: "Which formula result shows that 16% of A1 in LibreOffice Calc",
        options: ["A1*16%", "A1%16", "A1#16%", "A1%*16"],
        correctAnswer: "A1*16%"
    },
    {
        question: "Shortcut key for reaching the first column cell in LibreOffice Calc",
        options: ["Ctrl+Home", "Home", "Alt+Home", "None of these"],
        correctAnswer: "Ctrl+Home"
    },
    {
        question: "What is the function of an Artificial Intelligence “Agent”?",
        options: ["Mapping of goal sequence to an action", "Work without the direct interference of the people", "Mapping of precept sequence to an action", "Mapping of environment sequence to an action"],
        correctAnswer: "Mapping of precept sequence to an action"
    },
    {
        question: "Which of the following is not a type of Artificial Intelligence agent?",
        options: ["Learning AI agent", "Goal-based AI agent", "Simple reflex AI agent", "Unity-based AI agent"],
        correctAnswer: "Unity-based AI agent"
    },
    {
        question: "Which of the following is not the commonly used programming language for Artificial Intelligence?",
        options: ["Perl", "Java", "PROLOG", "LISP"],
        correctAnswer: "Perl"
    },
    {
        question: "Which of the following is not an application of artificial intelligence?",
        options: ["Face recognition system", "Chatbots", "LIDAR", "DBMS"],
        correctAnswer: "DBMS"
    },
    {
        question: "Which of the following machines requires input from humans but can interpret the outputs themselves?",
        options: ["Actuators", "Sensor", "Agents", "AI system"],
        correctAnswer: "AI system"
    },
    {
        question: "Which of the following are the approaches to Artificial Intelligence?",
        options: ["Applied approach", "Strong approach", "Weak approach", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },


    {
        question: "In blockchain, blocks are linked........ ?",
        options: ["Backward to the previous block", "Forward to the next block", "Not linked with each other", "Both directions"],
        correctAnswer: "Backward to the previous block"
    },
    {
        question: "Where do you store your cryptocurrency?",
        options: ["Bank account", "Floppy disk", "Crypto Wallet", "In your pocket"],
        correctAnswer: "Crypto Wallet"
    },
    {
        question: "What is Meghdoot?",
        options: ["Mobile Seva", "Govt. Cloud Service", "Online seva", "Cloud center service"],
        correctAnswer: "Govt. Cloud Service"
    },
    {
        question: "Atulya App is related to?",
        options: ["Tourism", "Business", "Naukari", "Nota"],
        correctAnswer: "Tourism"
    },

    {
        question: "DigiLocker cannot be used to?",
        options: ["Share documents", "Store documents", "Verify documents", "Buy documents"],
        correctAnswer: "Buy documents"
    },
    {
        question: "Which is not required for accessing the service of POS system?",
        options: ["PIN", "Internet", "Debit/Credit Card", "Account Number"],
        correctAnswer: "Account Number"
    },
    {
        question: "From what date did all banks start to share their ATM cost for the transaction?",
        options: ["September 1, 2009", "January 1, 2009", "April 1, 2009", "July 1, 2009"],
        correctAnswer: "April 1, 2009"
    },
    {
        question: "Utility of e-wallet is not the same as to?",
        options: ["RuPay Card", "Debit Card", "Credit Card", "Cash Card"],
        correctAnswer: "Credit Card"
    },
    {
        question: "Who started the ATM card first?",
        options: ["SBI", "HSBC", "HDFC", "ICICI"],
        correctAnswer: "HSBC"
    },
    {
        question: "How many digits are there in CVV of ATM and Credit Card?",
        options: ["6 digits", "4 digits", "3 digits", "5 digits"],
        correctAnswer: "3 digits"
    },
    {
        question: "What is meant by Aadhaar seeding?",
        options: ["Linking of Aadhaar with Bank account", "Duplicate issuance of Aadhaar", "Transfer of Aadhaar", "None of above"],
        correctAnswer: "Linking of Aadhaar with Bank account"
    },
    {
        question: "PPF means",
        options: ["Pension Planning Funds", "Person having Pension Facilities", "Public Provident Fund", "Permanent Practitioners Forum"],
        correctAnswer: "Public Provident Fund"
    },
    {
        question: "What is the timing of NEFT?",
        options: ["8:00 am to .6:00 pm", "8:00 am to 7:00 pm", "6:30 am to 5:30 pm", "None"],
        correctAnswer: "8:00 am to 7:00 pm"
    },









    {
        question: "Multiple desktops can be created using:",
        options: ["Taskbar icon", "Task view icon", "Store icon", "Task review icon"],
        correctAnswer: "Task view icon"
    },
    {
        question: "Full form of TFT?",
        options: ["Tight film transistor", "Thin film transistor", "Think film transistor", "None of these"],
        correctAnswer: "Thin film transistor"
    },
    {
        question: "What characteristics of read-only memory (ROM) makes it useful?",
        options: [
            "ROM information can be easily updated",
            "ROM provides very large amounts of inexpensive data storage",
            "ROM chips are easily swapped between different brands of computers",
            "Data in ROM is non-volatile, that is, it remains there even without electrical power"
        ],
        correctAnswer: "Data in ROM is non-volatile, that is, it remains there even without electrical power"
    },
    {
        question: "1000 gigabytes is equal to?",
        options: ["1 PB", "1 ZB", "1 TB", "1 MB"],
        correctAnswer: "1 TB"
    },
    {
        question: "Apple company used chips from which company for its computer?",
        options: ["Motorola", "Intel", "Both a & b", "None of these"],
        correctAnswer: "Motorola"
    },
    {
        question: "Default font size in LibreOffice Calc?",
        options: ["12", "11", "10", "13"],
        correctAnswer: "10"
    },
    {
        question: "Default font name in LibreOffice Calc?",
        options: ["Liberation Sans", "Liberation Serif", "Times New Roman", "Calibri"],
        correctAnswer: "Liberation Sans"
    },
    {
        question: "Maximum zoom in LibreOffice Calc?",
        options: ["600%", "300%", "100%", "400%"],
        correctAnswer: "400%"
    },
    {
        question: "Minimum zoom in LibreOffice Calc?",
        options: ["10%", "20%", "30%", "5%"],
        correctAnswer: "20%"
    },
    {
        question: "Shortcut key for edit in LibreOffice Calc?",
        options: ["F2", "F1", "F4", "F7"],
        correctAnswer: "F2"
    },
    {
        question: "Split window option is found in which menu in LibreOffice Calc?",
        options: ["Edit", "Insert", "View", "Tools"],
        correctAnswer: "View"
    },
    {
        question: "How many chart types are there in LibreOffice Calc?",
        options: ["10", "11", "20", "12"],
        correctAnswer: "10"
    },
    {
        question: "By default, legend shows on which side in a chart?",
        options: ["Left", "Center", "Top", "Right"],
        correctAnswer: "Right"
    },
    {
        question: "Which of the following is a type of chart?",
        options: ["Circle", "Bubble", "Square", "Right"],
        correctAnswer: "Bubble"
    },
    {
        question: "Which of the following is not a type of chart?",
        options: ["Pie", "Bubble", "Column", "Square"],
        correctAnswer: "Square"
    },
    {
        question: "Which of the following is an essential file of an MS-DOS boot disk?",
        options: ["COMMAND.COM", "START.COM", "TREE.COM", "VER.COM"],
        correctAnswer: "COMMAND.COM"
    },
    {
        question: "A software that is easy to use is considered to be",
        options: ["User-happy", "User-simple", "User-friendly", "None of the above"],
        correctAnswer: "User-friendly"
    },
    {
        question: "Which type of command requires additional files to perform specific operations?",
        options: ["Internal commands", "External commands", "Valuable commands", "Primary commands"],
        correctAnswer: "External commands"
    },
    {
        question: "Which command is used to see the version of the operating system?",
        options: ["Vol", "Version", "Ver", "None of the above"],
        correctAnswer: "Ver"
    },
    {
        question: "Which of the following is not a multitasking operating system?",
        options: ["Windows", "Linux", "Win NT", "DOS"],
        correctAnswer: "DOS"
    },
    {
        question: "Which language is not there?",
        options: ["Low level language", "Medium level language", "High level language", "None"],
        correctAnswer: "Medium level language"
    },

    {
        question: "Startup is started for whom?",
        options: ["Doctors", "Entrepreneurs", "Students", "Youngsters"],
        correctAnswer: "Entrepreneurs"
    },
    {
        question: "Who invented the term Internet of Things?",
        options: ["Bill Gates", "Kevin Ashton", "Steve Jobs", "McDonald"],
        correctAnswer: "Kevin Ashton"
    },
    {
        question: "Cloud in cloud computing means ....?",
        options: ["Wireless", "Hard-drive", "People", "Internet"],
        correctAnswer: "Internet"
    },
    {
        question: "What are the two main sections of the Cloud Computing System?",
        options: ["Terminal and Nodes", "Front and Back", "Network and Server", "None of these"],
        correctAnswer: "Front and Back"
    },
    {
        question: "How many digits are in IMEI?",
        options: ["15", "17", "12", "13"],
        correctAnswer: "15"
    },
    {
        question: "Full form of IMEI?",
        options: ["International mobile equipment identify", "Internet mobile equipment identify", "International mobile equipment identity", "None"],
        correctAnswer: "International mobile equipment identity"
    },
    {
        question: "Full form of MMID?",
        options: ["Mobile Money Identifier", "Mobile making identifier", "Money mobile identifier", "Mobile money immediate"],
        correctAnswer: "Mobile Money Identifier"
    },

    {
        question: "What is the name of Artificial Intelligence which allows machines to handle vague information with a deftness that mimics human intuition?",
        options: ["Human intelligence", "Boolean logic", "Functional logic", "Fuzzy logic"],
        correctAnswer: "Fuzzy logic"
    },
    {
        question: "What is the code of USSD.",
        options: ["*99#", "*#99", "#*99", "None of these"],
        correctAnswer: "*99#"
    },
    {
        question: "Which of the following is not a sub-module of an e-wallet.",
        options: ["Digital cash", "Profile manager", "Transaction manager", "Communication manager"],
        correctAnswer: "Digital cash"
    },
    {
        question: "A company requires its users to change passwords every month. This improves the _______ of the network",
        options: ["Performance", "Reliability", "Security", "None of the above"],
        correctAnswer: "Security"
    },
    {
        question: "A company buys a computer to serve as a backup to its main server. This will mainly affect the _______ of the network.",
        options: ["Performance", "Reliability", "Security", "None of the above"],
        correctAnswer: "Reliability"
    },
    {
        question: "BIOS Stands for Basic Integrated Operating System",
        options: ["true", "false"],
        correctAnswer: "false"
    },
    {
        question: "A company requires each employee to power off his computer at the end of the day. This rule was implemented to make the network _______",
        options: ["Perform better", "More reliable", "More secure", "More error-free"],
        correctAnswer: "More secure"
    },
    {
        question: "What Security tradeoff occurs while using IDS (Intrusion Detection System)?",
        options: ["Change in permission", "Login Failures", "Change in privilege", "Performance degradation"],
        correctAnswer: "Performance degradation"
    },
    {
        question: "EDI (Electronic Data Interchange) uses",
        options: ["Requires an extranet", "Requires value-added network", "Can be done on the internet", "Requires a corporate intranet"],
        correctAnswer: "Can be done on the internet"
    },
];
console.log(quizData.length);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the 'data' array
shuffleArray(quizData);

const shuffledArray = [...quizData];
const quiz = new Quiz(shuffledArray);
quiz.startQuiz();
const box1 = new box();

const countdownElement = document.getElementById("timer");
let timeInSeconds = 5400; // Set the countdown time in seconds
let Content = document.querySelector(".alert-content");
function updateCountdown() {

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    countdownElement.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeInSeconds <= 0) {
        quiz.showFinalScore('Time Up!');
        box1.showCustomAlert();
        clearInterval(updateCountdown);
    } else {
        timeInSeconds--;
    }
}

setInterval(updateCountdown, 1000);
