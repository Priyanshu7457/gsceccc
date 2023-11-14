const quizData = [
    {
        question: "The conference that launched the AI revolution in 1956 was held at?",
        options: ["Dartmouth", "Harvard", "New York", "Stanford"],
        correctAnswer: "Dartmouth"
    },
    {
        question: "Bitcoin is based on ............ blockchain?",
        options: ["Private", "Public", "Public permissioned", "Permissioned"],
        correctAnswer: "Public"
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
        question: "How many digits is the MMID number?",
        options: ["7", "5", "12", "11"],
        correctAnswer: "7"
    },
    {
        question: "What is the full form of IVR?",
        options: ["Inter voice response", "Interactive voice response", "Interactive violet response", "Interactive voice respect"],
        correctAnswer: "Interactive voice response"
    },
    {
        question: "Data encryption is used for",
        options: ["Security", "Performance", "Storage", "All of above"],
        correctAnswer: "Security"
    },
    {
        question: "Which one is least Secure?",
        options: ["Password", "Keycard", "Retina", "Fingerprint"],
        correctAnswer: "Keycard"
    },
    {
        question: "Computer viruses are man-made",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "A firewall is a security device deployed at the boundary of corporate intranet to protect it from unauthorized access",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "Which of the following options is not best described about industry 4.0",
        options: ["Smart factory", "Speed", "Analytics", "None of above"],
        correctAnswer: "Speed"
    },
    {
        question: "ATM means",
        options: ["Any Time Money", "Auto Truck of Mahindra", "Automated Teller Machine", "None of above"],
        correctAnswer: "Automated Teller Machine"
    },
    {
        question: "What is the validity period of a cheque?",
        options: ["4 months from date of issue", "3 months from date of issue", "1 month from date of issue", "Unlimited"],
        correctAnswer: "3 months from date of issue"
    },
    {
        question: "What is the full meaning of N in UMANG App?",
        options: ["New", "National", "New-age", "None"],
        correctAnswer: "New-age"
    },
    {
        question: "Bank having the maximum number of branches in India",
        options: ["Reserve Bank of India", "State Bank of India", "Punjab National Bank", "Bank of Baroda"],
        correctAnswer: "State Bank of India"
    },
    {
        question: "What is the full form of IMPS?",
        options: ["Immediate Payment Service", "Immediate fund transfer service", "Interested Payment Service", "A & B both"],
        correctAnswer: "Immediate Payment Service"
    },
    {
        question: "What is the full form of PMSBY?",
        options: ["Pradhan Mantri Secure Bima Yojna", "Pradhan Mantri Security Bima Yojna", "Pradhan Mantri Suraksha Bima Yojna", "None"],
        correctAnswer: "Pradhan Mantri Suraksha Bima Yojna"
    },
    {
        question: "When did RTGS start?",
        options: ["2005", "2004", "2008", "2007"],
        correctAnswer: "2004"
    },
    {
        question: "When did NEFT start?",
        options: ["2005", "2004", "2008", "2007"],
        correctAnswer: "2005"
    },
    {
        question: "PIN stands for",
        options: ["Personal Identification Number", "Permanent Identification Number", "Primary Identification Number", "None of these"],
        correctAnswer: "Personal Identification Number"
    },
    {
        question: "QR Code stands for",
        options: ["Quick Result Code", "Quadratic Response Code", "Quick Response Code", "Quick Rely Code"],
        correctAnswer: "Quick Response Code"
    },
    {
        question: "In which year was the first email sent?",
        options: ["1971", "1982", "1990", "1969"],
        correctAnswer: "1971"
    },
    {
        question: "Which protocol is used to send the mail?",
        options: ["SMTP", "HTTP", "TCP/IP", "FTP"],
        correctAnswer: "SMTP"
    },
    {
        question: "SMTP stands for",
        options: ["Simple Mail Transfer Protocol", "Simplex Mail Transport Protocol", "Super Mail Transfer Protocol", "None of these"],
        correctAnswer: "Simple Mail Transfer Protocol"
    },
    {
        question: "Which protocol is used to receive mail in the mailbox?",
        options: ["SMTP", "TCP/IP", "HTTP", "POP3"],
        correctAnswer: "POP3"
    },
    {
        question: "Which of these should be avoided in an E-mail?",
        options: ["Writes a wrong e-mail address", "Subject line", "Smiley’s", "Re-reading"],
        correctAnswer: "Writes a wrong e-mail address"
    },
    {
        question: "How many parts in E-mail?",
        options: ["3", "2", "4", "None of these"],
        correctAnswer: "2"
    },
    {
        question: "Is email case-sensitive?",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "What is the port number of SMTP?",
        options: ["80", "25", "30", "21"],
        correctAnswer: "25"
    },
    {
        question: "Command `echo www.sanfoundary.com>/proc/sys/kernel/hostname` will",
        options: ["Do nothing", "Change host name", "www.sanfoundary.com", "None of these"],
        correctAnswer: "Change host name"
    },
    {
        question: "Length of IPv4 address?",
        options: ["40-60 bytes", "20-40 bytes", "0-20 bytes", "20-60 bytes"],
        correctAnswer: "20-60 bytes"
    },
    {
        question: "In a network, participating computers are referred to as?",
        options: ["Nodes", "Client", "Server", "All of the above"],
        correctAnswer: "Nodes"
    },
    {
        question: "In a network with 25 computers, which topology would require?",
        options: ["Bus", "Mesh", "Ring", "Hybrid"],
        correctAnswer: "Mesh"
    },
    {
        question: "Full screen in Google Chrome used by key?",
        options: ["F11", "F5", "F8", "F12"],
        correctAnswer: "F11"
    },
    {
        question: "Open a new tab in Google Chrome by pressing which key?",
        options: ["CTRL + R", "CTRL + N", "CTRL + T", "CTRL + M"],
        correctAnswer: "CTRL + T"
    },
    {
        question: "Open downloads in Google Chrome by pressing which key?",
        options: ["CTRL + R", "CTRL + J", "CTRL + T", "CTRL + M"],
        correctAnswer: "CTRL + J"
    },
    {
        question: "Modem stands for?",
        options: ["Modulator-Demodulator", "Modify-Demodify", "Manipulator-Demanipulator", "None of these"],
        correctAnswer: "Modulator-Demodulator"
    },
    {
        question: "OSI stands for?",
        options: ["Open System Interconnection", "Open Source Initiative", "Open Source Interconnection", "None of these"],
        correctAnswer: "Open System Interconnection"
    },
    {
        question: "How many layers in OSI reference model?",
        options: ["7", "6", "9", "8"],
        correctAnswer: "7"
    },
    {
        question: "Size of IPV6 address.",
        options: ["32 BIT", "128 BIT", "255 BIT", "130 BIT"],
        correctAnswer: "128 BIT"
    },
    {
        question: "MAC stands for",
        options: ["MEDIA ACCESS CONTROL", "MAIN ACCESS CONTROL", "BOTH A AND B", "NONE OF THESE"],
        correctAnswer: "MEDIA ACCESS CONTROL"
    },
    {
        question: "Template is a ready-made style that you can use for your LibreOffice Impress presentations.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Is Ctrl+5 used for a slide show?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "Can we set a custom slide show in LibreOffice Impress?",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The shortcut key to move to the first slide of a presentation is...",
        options: ["Ctrl+Home", "Ctrl+End", "Ctrl+Enter", "None of the above"],
        correctAnswer: "Ctrl+Home"
    },
    {
        question: "How many menus are found in LibreOffice Impress?",
        options: ["3", "5", "8", "10"],
        correctAnswer: "10"
    },
    {
        question: "The keyboard combination that can be used to open a presentation file is...",
        options: ["Ctrl+Q", "Ctrl+O", "Ctrl+P", "Ctrl+S"],
        correctAnswer: "Ctrl+O"
    },
    {
        question: "__________ is used to go to the previous slide in LibreOffice Impress.",
        options: ["Ctrl+Page Up", "Ctrl+Page Down", "Ctrl+Page Left", "Ctrl+Page Right"],
        correctAnswer: "Ctrl+Page Up"
    },
    {
        question: "__________ is used to move the cursor with selection to the left.",
        options: ["Shift+Arrow Left", "Shift+Arrow Right", "Shift+Arrow Up", "Shift+Arrow Down"],
        correctAnswer: "Shift+Arrow Left"
    },
    {
        question: "In Impress presentation for animation, we select slide object and click Format menu > animation.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "What is the file extension of LibreOffice Impress?",
        options: [".odt", ".ods", ".odp", ".pptx"],
        correctAnswer: ".odp"
    },
    {
        question: "In LibreOffice, which format cannot be added?",
        options: ["XML", "BIP", "HTML", "EXML"],
        correctAnswer: "EXML"
    },
    {
        question: "Which one of the following is not an option available in the drop-down menu of line type while inserting a line chart in LibreOffice Calc?",
        options: ["Stepped", "Smooth", "Straight", "Curved"],
        correctAnswer: "Stepped"
    },
    {
        question: "Which one of the following is not a valid operator type in LibreOffice Calc?",
        options: ["Arithmetic", "Comparative", "Text", "Referential"],
        correctAnswer: "Referential"
    },
    {
        question: "What is the default height of a cell in LibreOffice Calc?",
        options: ["4.4 inch", "0.45 inch", "4.5 cm", "0.45 cm"],
        correctAnswer: "0.45 cm"
    },
    {
        question: "If a variable is missing from the formula, then the error message displayed is?",
        options: ["510", "511", "576", "566"],
        correctAnswer: "510"
    },
    {
        question: "What is the result of the formula '=PRODUCT(2,SUM(5,7))' in LibreOffice Calc?",
        options: ["14", "24", "12", "17"],
        correctAnswer: "24"
    },
    {
        question: "ceiling(97,7) displays the result in LibreOffice Calc",
        options: ["98", "99", "97", "#num"],
        correctAnswer: "98"
    },
    {
        question: "product(5, 2) displays the result in LibreOffice Calc",
        options: ["11", "10", "12", "7"],
        correctAnswer: "10"
    },
    {
        question: "quotient(5, 2) displays the result in LibreOffice Calc",
        options: ["1", "2", "10", "7"],
        correctAnswer: "2"
    },
    {
        question: "count(5, 0, 0, 0, 0) displays the result in LibreOffice Calc",
        options: ["1", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "Which of the following options is not an option in the print dialog box?",
        options: ["Print the selected pages", "Set the paper orientation", "Collate copies", "Print selected text"],
        correctAnswer: "Print the selected pages"
    },
    {
        question: "In which menu option find and replace in LibreOffice Writer?",
        options: ["File", "Format", "Edit", "Insert"],
        correctAnswer: "Edit"
    },
    {
        question: "In which menu option wizard in LibreOffice Writer?",
        options: ["File", "Format", "Edit", "Insert"],
        correctAnswer: "File"
    },
    {
        question: "In which menu option mail merge in LibreOffice Writer?",
        options: ["File", "Format", "Edit", "Tools"],
        correctAnswer: "Tools"
    },
    {
        question: "In which menu option word count in LibreOffice Writer?",
        options: ["Tools", "Format", "Edit", "Insert"],
        correctAnswer: "Tools"
    },
    {
        question: "In which menu option macros in LibreOffice Writer?",
        options: ["File", "Tools", "Edit", "Insert"],
        correctAnswer: "Tools"
    },
    {
        question: "In which menu option new window in LibreOffice Writer?",
        options: ["File", "Tools", "Window", "Insert"],
        correctAnswer: "Window"
    },
    {
        question: "In which menu option donate to LibreOffice in LibreOffice Writer?",
        options: ["File", "Tools", "Window", "Help"],
        correctAnswer: "Help"
    },
    {
        question: "In which menu option restart in safe mode in LibreOffice Writer?",
        options: ["File", "Tools", "Window", "Help"],
        correctAnswer: "Help"
    },
    {
        question: "In which menu option push button in LibreOffice Writer?",
        options: ["File", "Form", "Window", "Help"],
        correctAnswer: "Form"
    },
    {
        question: "Which of the following options is used to connect a Windows 10 computer to a printer?",
        options: ["Bluetooth and Other Device", "Printer", "Printers and Scanners", "Scanner"],
        correctAnswer: "Printers and Scanners"
    },
    {
        question: "Which command is used to get a print of a file in Linux?",
        options: ["Mv", "Cp", "Ipr", "Pt"],
        correctAnswer: "Ipr"
    },
    {
        question: "A(n) __________ is a set of instructions that a computer follows to perform a task.",
        options: ["Compiler", "Software", "Interpreter", "Programming Language"],
        correctAnswer: "Software"
    },
    {
        question: "Which of the following does not fall under the category of open source?",
        options: ["Open Office", "Linux", "Ubuntu", "Windows 10"],
        correctAnswer: "Windows 10"
    },
    {
        question: "What is the shortcut key to open 'File Explorer' in Windows 10?",
        options: ["Window key + A", "Window key + F", "Window key + E", "Window key + D"],
        correctAnswer: "Window key + E"
    },
    {
        question: "Libre office belongs to OSI, and the full name of OSI is?",
        options: ["Open Source Interchange", "Open Source Internet", "Open Source Initiative", "None of these"],
        correctAnswer: "Open Source Initiative"
    },
    {
        question: "Which command will give you information about how much disk space each file in the current directory uses?",
        options: ["Is-1", "ls -la", "du", "ls –a"],
        correctAnswer: "du"
    },
    {
        question: "Process or task in Linux is represented by?",
        options: ["Task build", "Task struct", "Task construct", "Task domain"],
        correctAnswer: "Task struct"
    },
    {
        question: "A true statement about 'chown' command in Linux is",
        options: ["Creates a thread", "Creates a child process", "Changes the mode of operation to kernel mode", "Changes the users and/or group ownership of each given file"],
        correctAnswer: "Changes the users and/or group ownership of each given file"
    },
    {
        question: "Which command is used to check the Linux version?",
        options: ["uname -a", "uname-n", "uname-s", "kernel"],
        correctAnswer: "uname -a"
    },
    {
        question: "Which is the first artificial language?",
        options: ["High level", "Low and high", "LISP", "None of these"],
        correctAnswer: "LISP"
    },
    {
        question: "In which type of computer are data represented as discrete signals?",
        options: ["Digital computer", "Analog computer", "Both digital and analog", "Hybrid computer"],
        correctAnswer: "Digital computer"
    },
    {
        question: "Fourth-generation language(4GL) is a:",
        options: ["Procedural language", "Structural language", "Non-procedural language", "All of the above"],
        correctAnswer: "Non-procedural language"
    },
    {
        question: "The fast and expensive storage device is:",
        options: ["Electronic disk", "Magnetic disk", "Register", "Optical disk"],
        correctAnswer: "Register"
    },
    {
        question: "Which memory is called volatile as well as non-volatile?",
        options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
        correctAnswer: "ROM"
    },
    {
        question: "Who is the father of the computer?",
        options: ["Ray Tomilson", "Charles Babbage", "Khen Thomson", "JS Kilby"],
        correctAnswer: "Charles Babbage"
    },
    {
        question: "Full form of ALU is:",
        options: ["Any Long Unit", "Arithmetic Logic Unit", "All Level Unit", "None of these"],
        correctAnswer: "Arithmetic Logic Unit"
    },
    {
        question: "Programs that are easily understandable are known as:",
        options: ["Word processing", "User-friendly", "Information", "Icon"],
        correctAnswer: "User-friendly"
    },
    {
        question: "A device that converts a digital signal to an analog signal is:",
        options: ["DAC", "P2M", "ADC", "PWM"],
        correctAnswer: "DAC"
    },
    {
        question: "In the latest generation computers, instructions are executed:",
        options: ["Sequentially", "Sequentially and parallel", "Parallel only", "In random manner"],
        correctAnswer: "Sequentially and parallel"
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
