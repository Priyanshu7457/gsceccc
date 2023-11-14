const quizData = [
    {
        question: "The size of virtual memory",
        options: ["on the database", "on the address line", "on disk space", "All of the above"],
        correctAnswer: "on disk space"
    },
    {
        question: "What will be the short name for reusable optical storage?",
        options: ["CD", "RW", "ROM", "DVD"],
        correctAnswer: "RW"
    },
    {
        question: "Which of the following symbols is used by the 'hexadecimal number system'?",
        options: ["0-7", "0-9, A-F", "0-9", "None"],
        correctAnswer: "0-9, A-F"
    },
    {
        question: "Which of these is a type of sound file?",
        options: ["DAT files", "LOG files", "DRV files", "WAV files"],
        correctAnswer: "WAV files"
    },
    {
        question: "Which of these commands could you use to show one page of output at a time?",
        options: ["less", "sed", "pause", "grep"],
        correctAnswer: "less"
    },
    {
        question: "Which of the following command output contains userid?",
        options: ["ls", "help", "date", "ls –l"],
        correctAnswer: "ls –l"
    },
    {
        question: "Which of the following commands can be used to copy files across systems?",
        options: ["ssh", "telnet", "rsh", "ftp"],
        correctAnswer: "ftp"
    },
    {
        question: "pwd command displays",
        options: ["user password", "password file content", "present working directory", "none of the mentioned"],
        correctAnswer: "present working directory"
    },
    {
        question: "Which tar command option is used to list the files in a tape archive format?",
        options: ["cvf", "tvf", "xvf", "ovf"],
        correctAnswer: "tvf"
    },
    {
        question: "Which of the following commands will allow the user to search contents of a file for a particular pattern",
        options: ["touch", "grep", "find", "ls"],
        correctAnswer: "grep"
    },
    {
        question: "Which one shows the name of the operating system?",
        options: ["uname -n", "uname -r", "uname -o", "uname –m"],
        correctAnswer: "uname -o"
    },
    {
        question: "Shell is?",
        options: ["Command Interpreter", "Interface between Kernel and Hardware", "Interface between user and applications", "Command Compiler"],
        correctAnswer: "Command Interpreter"
    },
    {
        question: "What is sed?",
        options: ["a non-interactive stream editor", "an IDE", "a hex editor", "none of the mentioned"],
        correctAnswer: "a non-interactive stream editor"
    },
    {
        question: "Which command is used to mount file system read-only.",
        options: ["mount –a", "mount –v", "mount –f", "mount –r"],
        correctAnswer: "mount –r"
    },
    {
        question: "‘kill %s’ command will",
        options: ["terminate the job whose command line starts with s", "terminate the last job", "terminate the first job", "none of the mentioned"],
        correctAnswer: "terminate the job whose command line starts with s"
    },
    {
        question: "‘stty tostop’ command will",
        options: ["stop all jobs running in the shell", "stop background jobs if they try to send output to the terminal", "this is not a valid command", "none of the mentioned"],
        correctAnswer: "stop background jobs if they try to send output to the terminal"
    },
    {
        question: "Which one of the following statements is not true?",
        options: ["vim editor is the improved version of vi editor", "vi editor commands are not case sensitive", "vi editor has two modes of operation: command mode and insert mode", "vi stands for visual editor"],
        correctAnswer: "vi editor commands are not case sensitive"
    },
    {
        question: "In vi editor, which command reads the content of another file?",
        options: ["read", "r", "ex", "none of the mentioned"],
        correctAnswer: "ex"
    },
    {
        question: "Which command shows all the abbreviations in vi editor?",
        options: ["ab", "abb", "show", "none of the mentioned"],
        correctAnswer: "ab"
    },
    {
        question: "The shell used for Single user mode shell is:",
        options: ["bash", "Csh", "ksh", "sh"],
        correctAnswer: "sh"
    },
    {
        question: "Short cut key of subscript in LibreOffice Writer",
        options: ["ctrl+shift+v", "ctrl+shift+j", "ctrl+shift+b", "ctrl+shift+r"],
        correctAnswer: "ctrl+shift+b"
    },
    {
        question: "Short cut key of superscript in LibreOffice Writer",
        options: ["ctrl+shift+v", "ctrl+shift+p", "ctrl+shift+b", "ctrl+shift+r"],
        correctAnswer: "ctrl+shift+p"
    },
    {
        question: "Short cut key of increase font size in LibreOffice Writer",
        options: ["ctrl+]", "ctrl+[", "ctrl+}", "ctrl+{"],
        correctAnswer: "ctrl+]"
    },
    {
        question: "Short cut key of decrease font size in LibreOffice Writer",
        options: ["ctrl+]", "ctrl+[", "ctrl+}", "ctrl+{"],
        correctAnswer: "ctrl+["
    },
    {
        question: "Short cut key of cycle case in LibreOffice Writer",
        options: ["shift+f12", "ctrl+f14", "shift+f3", "shift+f1"],
        correctAnswer: "shift+f3"
    },
    {
        question: "Short cut key of center alignment in LibreOffice Writer",
        options: ["ctrl+h", "ctrl+d", "ctrl+m", "ctrl+e"],
        correctAnswer: "ctrl+e"
    },
    {
        question: "Short cut key of heading 2 in LibreOffice Writer",
        options: ["ctrl+1", "ctrl+2", "ctrl+3", "ctrl+4"],
        correctAnswer: "ctrl+2"
    },
    {
        question: "Short cut key of text body in LibreOffice Writer",
        options: ["ctrl+0", "ctrl+2", "ctrl+3", "ctrl+4"],
        correctAnswer: "ctrl+0"
    },
    {
        question: "Short cut key of new style in LibreOffice Writer",
        options: ["shift+f12", "shift+f11", "shift+f3", "shift+f4"],
        correctAnswer: "shift+f11"
    },
    {
        question: "Short cut key of update new style in LibreOffice Writer",
        options: ["Ctrl+shift+f12", "Ctrl+shift+f11", "Ctrl+shift+f3", "Ctrl+shift+f4"],
        correctAnswer: "Ctrl+shift+f11"
    },
    {
        question: "In LibreOffice Calc, the shortcut key of going at the last of left of the cell is?",
        options: ["Alt + Tab", "Tab", "Alt", "Shift + Tab"],
        correctAnswer: "Shift + Tab"
    },
    {
        question: "What is the combination of row and column in LibreOffice Calc?",
        options: ["Cell", "Table", "Position", "Data"],
        correctAnswer: "Cell"
    },
    {
        question: "In LibreOffice Calc, cos, sin, fact, exp are a category of?",
        options: ["Data", "Math/Tring", "Mathematical", "String"],
        correctAnswer: "Mathematical"
    },
    {
        question: "What is the shortcut key of formatting of the cell in LibreOffice Calc?",
        options: ["Ctrl + 1", "Ctrl + F2", "Ctrl + 2", "Ctrl + M"],
        correctAnswer: "Ctrl + 1"
    },
    {
        question: "In which menu, the merge cells command is found?",
        options: ["Format", "Style", "Sheet", "Edit"],
        correctAnswer: "Format"
    },
    {
        question: "What is the shortcut key to reach the last cell of a spreadsheet in LibreOffice Calc?",
        options: ["Ctrl + Home", "Ctrl + End", "Ctrl + Shift + Home", "None of the above"],
        correctAnswer: "Ctrl + End"
    },
    {
        question: "What is the value of =round (175,-2)?",
        options: ["100", "173", "200", "None of Above"],
        correctAnswer: "200"
    },
    {
        question: "LibreOffice Calc फाइल by default किस नाम से से save होता है?",
        options: ["Untitled1", "Calc1", "Spreadsheet1", "None"],
        correctAnswer: "Untitled1"
    },
    {
        question: "LibreOffice Calc में किसी cell का address कहां दिखाई देता है?",
        options: ["Formula Bar", "Address Book", "Name box", "None"],
        correctAnswer: "Name box"
    },
    {
        question: "Impress Slides can be controlled remotely by……….?",
        options: ["WIFI", "Ethernet", "Bluetooth", "NFC"],
        correctAnswer: "Bluetooth"
    },
    {
        question: "LibreOffice Impress is Also known as the presentation module of Libre Open-source Software.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "What is the handout in LibreOffice impress?",
        options: ["Soft copy slide", "All slides in LibreOffice impress", "Printed hard copy of the slide", "The first slide in LibreOffice impress"],
        correctAnswer: "Printed hard copy of the slide"
    },
    {
        question: "With which command can we go to the first slide of the presentation?",
        options: ["Page Up", "Page Down", "Ctrl + Home", "Ctrl + End"],
        correctAnswer: "Ctrl + Home"
    },
    {
        question: "In LibreOffice Portrait and Landscape are.",
        options: ["Page Size", "Page Orientation", "Text Effect", "Page Layout"],
        correctAnswer: "Page Orientation"
    },
    {
        question: "Which of the following should you use if you want all the slides in the presentation to have the same 'look'?",
        options: ["The slide layout option", "Add a slide option", "Outline view", "A presentation design template"],
        correctAnswer: "A presentation design template"
    },
    {
        question: "What kind of program is LibreOffice impress?",
        options: ["Spreadsheet", "Word processing", "Presentation", "None of these"],
        correctAnswer: "Presentation"
    },
    {
        question: "LibreOffice cannot format which of the following files in Impress?",
        options: ["Html", "Jpeg", "Gif", "WAV"],
        correctAnswer: "Html"
    },
    {
        question: "You can create a new presentation in impress by using except",
        options: ["Ctrl + N", "Click on New Icon", "File Menu > New Presentation", "Ctrl + O"],
        correctAnswer: "Ctrl + O"
    },
    {
        question: "Special effects used to introduce slides in a presentation are called.",
        options: ["Present animations", "Effects", "Custom animations", "Transitions"],
        correctAnswer: "Transitions"
    },
    {
        question: "In terms of animation, what is a trigger?",
        options: ["An action button that advances to the next slide", "An item on the slide that performs an action when clicked", "The name of a motion path", "All of the above"],
        correctAnswer: "An item on the slide that performs an action when clicked"
    },
    {
        question: "Which is considered as a repository of Aadhaar number?",
        options: ["NPCI LOGGER", "NPCI FISHER", "NPCI MAPPER", "NPCI REDUCER"],
        correctAnswer: "NPCI MAPPER"
    },
    {
        question: "Which is not required for online banking?",
        options: ["Bank interface", "Transaction password", "Customer ID", "ATM password"],
        correctAnswer: "ATM password"
    },
    {
        question: "Which of the following is not related to e-banking?",
        options: ["Electronic clearing system", "Demand draft", "ATM", "E-challan"],
        correctAnswer: "Demand draft"
    },
    {
        question: "Which of the following cannot be tracked using POS?",
        options: ["Pricing accuracy", "Gross revenue", "Inventory charges", "Promotions"],
        correctAnswer: "Promotions"
    },
    {
        question: "The eligible criteria for the banks which can participate in UPI are that the Bank should have approval from RBI for mobile banking service and also should be live on….",
        options: ["AEPS", "BBPS", "CT", "IMPS"],
        correctAnswer: "IMPS"
    },
    {
        question: "Which information component is not part of an e-wallet?",
        options: ["Encryption of the data", "User name", "Amount to be paid", "User debit card details"],
        correctAnswer: "User debit card details"
    },
    {
        question: "What is the transaction charges for the RTGS amounting between 2 lakh to 5 lakhs",
        options: ["100", "30", "50", "25"],
        correctAnswer: "25"
    },
    {
        question: "In the context of DigiLocker, what is the role of the issuer",
        options: ["Issue printed documents to citizens", "Issue e-documents to citizens", "Issue e-document to government"],
        correctAnswer: "Issue e-documents to citizens"
    },
    {
        question: "Which is not required for accessing the service of the POS system",
        options: ["Internet", "PIN", "Debit/Credit card", "Account number"],
        correctAnswer: "Account number"
    },
    {
        question: "Which one is not a finance company.",
        options: ["IRDA", "Loan companies", "Mutual benefits finance companies", "Hire purchase finance company."],
        correctAnswer: "IRDA"
    },
    {
        question: "QR is the trademark for a type of?",
        options: ["Pin", "Scratch code", "Barcode", "Pattern"],
        correctAnswer: "Barcode"
    },
    {
        question: "On smartphones, OTP can never be delivered directly through",
        options: ["Authy", "Duo mobile", "IM swap", "Google Authenticator"],
        correctAnswer: "Google Authenticator"
    },
    {
        question: "In UPI, ______ is an Address which uniquely identifies a person’s bank account.",
        options: ["Primary Address", "Unique Address", "Bank Address", "Payment Address"],
        correctAnswer: "Payment Address"
    },
    {
        question: "Which of the following terms is used for Sending money in UPI?",
        options: ["PULL", "PUSH", "TRANSFER", "PUT"],
        correctAnswer: "PUSH"
    },
    {
        question: "Which of the following terms is used for receiving money in UPI?",
        options: ["PULL", "PUSH", "TRANSFER", "PUT"],
        correctAnswer: "PULL"
    },
    {
        question: "What does S stand for in PSP with respect to UPI?",
        options: ["Software", "Service", "System", "Synchronized"],
        correctAnswer: "Service"
    },
    {
        question: "RTGS stands for",
        options: ["Real Time Gross Sale", "Real Time Gross Settlement", "Real Time Growth Settlement", "Real Time Group Service"],
        correctAnswer: "Real Time Gross Settlement"
    },
    {
        question: "Credit card also called as.",
        options: ["Plastic money", "Debit money", "Postpaid money", "None of these"],
        correctAnswer: "Plastic money"
    },
    {
        question: "Which one of the following is not money market securities",
        options: ["Treasury bills", "Certificates of deposits", "Commercial paper", "National saving certificates"],
        correctAnswer: "National saving certificates"
    },
    {
        question: "Which of the following services are not available on UMANG app.",
        options: ["ePathshala", "eMigrate safe employment services aboard", "e-Tuition", "EPFO"],
        correctAnswer: "e-Tuition"
    },
    {
        question: "OTP is also known as.",
        options: ["Stable password", "Dynamic password", "Static password", "Fixed password"],
        correctAnswer: "Dynamic password"
    },
    {
        question: "Which banking facility is not provided by USSD.",
        options: ["Checking account balance", "Mobile pin management", "Checking Aadhaar linked overdraft status", "Requesting internet banking password"],
        correctAnswer: "Requesting internet banking password"
    },
    {
        question: "PNR status is available to the user through",
        options: ["UMANG", "RAIL SAARTHI", "IRCTC", "CRIS"],
        correctAnswer: "IRCTC"
    },
    {
        question: "Inputs required during AEPS transaction are?",
        options: ["IIN + Aadhaar number + Biometric data", "Account number + Bank number + Bank IFSC code", "Pin + Aadhar card + Account number", "IIN + Aadhaar card + Biometric data"],
        correctAnswer: "IIN + Aadhaar number + Biometric data"
    },
    {
        question: "Phones that offer advanced features not typically found in cellular phones",
        options: ["DSLs", "Notebook", "Smartphones", "Tablets"],
        correctAnswer: "Smartphones"
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
    {
        question: "EDI (Electronic Data Interchange) over the internet uses",
        options: ["MIME to attach EDI forms to e-mail messages", "FTP to send business forms", "HTTP to send business forms", "SGML to send business forms"],
        correctAnswer: "MIME to attach EDI forms to e-mail messages"
    },
    {
        question: "A firewall is a",
        options: ["Wall built to prevent fires from damaging a corporate intranet", "Security device deployed at the boundary of a company to prevent unauthorized physical access", "Security device deployed at the boundary of a corporate intranet to protect it from unauthorized access", "Device to prevent all accesses from the internet to the corporate intranet"],
        correctAnswer: "Security device deployed at the boundary of a corporate intranet to protect it from unauthorized access"
    },
    {
        question: "A firewall may be implemented in",
        options: ["Routers which connect intranet to the internet", "Bridges used in an intranet", "Expensive modem", "User’s application programs"],
        correctAnswer: "Routers which connect intranet to the internet"
    },
    {
        question: "DES stands for…",
        options: ["Data encryption standard", "Data elimination standard", "Data encapsulation standard", "None of these"],
        correctAnswer: "Data encryption standard"
    },
    {
        question: "How many keys are required if two parties communicate using Symmetric Cryptography?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "One"
    },
    {
        question: "Which of the following are the 5 big ideas of AI?",
        options: ["Perception", "Human-AI Interaction", "Societal Impact", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What are the main goals of AI?",
        options: ["To Create Expert Systems", "To Implement Human Intelligence in Machines", "Both A and B", "None of the Above"],
        correctAnswer: "Both A and B"
    },
    {
        question: "Which of the following is an application of AI?",
        options: ["Gaming", "Expert Systems", "Vision Systems", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "In which year did John McCarthy coin the term Artificial Intelligence?",
        options: ["1950", "1953", "1956", "1959"],
        correctAnswer: "1956"
    },
    {
        question: "What is Artificial intelligence?",
        options: ["Putting your intelligence into a computer", "Programming with your intelligence", "Making a machine intelligent", "Playing a game"],
        correctAnswer: "Making a machine intelligent"
    },
    {
        question: "A process that is repeated, evaluated, and refined is called ________",
        options: ["Diagnostic", "Descriptive", "Interpretive", "Iterative"],
        correctAnswer: "Iterative"
    },
    {
        question: "If a robot is able to change its trajectory as per the external conditions, then the robot is considered as the__",
        options: ["Mobile", "Non-Servo", "Open Loop", "Intelligent"],
        correctAnswer: "Intelligent"
    },
    {
        question: "A technique that was developed to determine whether a machine could or could not demonstrate the artificial intelligence known as the___",
        options: ["Boolean Algebra", "Turing Test", "Logarithm", "Algorithm"],
        correctAnswer: "Turing Test"
    },
    {
        question: "The component of an Expert system is_________.",
        options: ["Knowledge Base", "Inference Engine", "User Interface", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "An AI agent perceives and acts upon the environment using___.",
        options: ["Sensors", "Perceiver", "Actuators", "Both a and c"],
        correctAnswer: "Both a and c"
    }


];

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
