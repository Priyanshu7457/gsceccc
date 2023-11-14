const quizData = [
    {
        question: "Runs on computer hardware and serves as a platform for other systems to run on",
        options: ["Operating system", "Application system", "System software", "All of the above"],
        correctAnswer: "Operating system"
    },
    {
        question: "Which is the first program run on a computer when the computer boots up?",
        options: ["System software", "Operating system", "System operations", "None"],
        correctAnswer: "Operating system"
    },
    {
        question: "When you start up the computer, the boot-up storage at which the BIOS version's manufacturer and data are displayed on the monitor is called",
        options: ["Bootstrap", "Power on self-test (POST)", "System configuration", "Kernel loading"],
        correctAnswer: "Power on self-test (POST)"
    },
    {
        question: "The operating system is the most common type of … Software",
        options: ["Communication", "Application", "System", "Word processing software"],
        correctAnswer: "System"
    },
    {
        question: "A bar that informs you of the available options in your computer, opened applications, background running applications and can be used to switch between applications quickly is",
        options: ["Menu bar", "Tool bar", "Status bar", "Task bar"],
        correctAnswer: "Task bar"
    },
    {
        question: "How many menus are available in LibreOffice Writer?",
        options: ["15", "16", "11", "13"],
        correctAnswer: "11"
    },
    {
        question: "What is the default font size in LibreOffice Writer?",
        options: ["15", "16", "11", "12"],
        correctAnswer: "12"
    },
    {
        question: "What is the default font name in LibreOffice Writer?",
        options: ["Liberation Sans", "Liberation Serif", "Times New Roman", "Calibri"],
        correctAnswer: "Liberation Serif"
    },
    {
        question: "What is the minimum zoom in LibreOffice Writer?",
        options: ["10%", "20%", "5%", "15%"],
        correctAnswer: "20%"
    },
    {
        question: "Document name is appear on which bar in LibreOffice Writer?",
        options: ["Status bar", "Title bar", "Standard toolbar", "Task bar"],
        correctAnswer: "Title bar"
    },
    {
        question: "How many menus in LibreOffice Impress?",
        options: ["12", "13", "10", "11"],
        correctAnswer: "10"
    },
    {
        question: "Duplicate shape key in LibreOffice Impress.",
        options: ["Shift+F3", "Ctrl+F2", "Shift+F1", "Ctrl+F3"],
        correctAnswer: "Shift+F3"
    },
    {
        question: "Navigator key in LibreOffice Impress.",
        options: ["Ctrl+Shift+F3", "Ctrl+Shift+F4", "Ctrl+Shift+F7", "Ctrl+Shift+F5"],
        correctAnswer: "Ctrl+Shift+F5"
    },
    {
        question: "By default, what is the layout of a slide in LibreOffice Impress?",
        options: ["Landscape", "Portrait", "Both A & B", "None of these"],
        correctAnswer: "Landscape"
    },
    {
        question: "What is notes view in LibreOffice Impress?",
        options: ["Notes view", "Outline view", "Both A & B", "None of these"],
        correctAnswer: "Outline view"
    },
    {
        question: "What is internet?",
        options: ["Network of networks", "Wireless network", "Hypertext documents", "Virtual network"],
        correctAnswer: "Network of networks"
    },
    {
        question: "What is ARPANET?",
        options: ["Advance Research Private Agency Network", "Advance Research Project Agency Network", "Advanced Research Public Agency Network", "None of these"],
        correctAnswer: "Advance Research Project Agency Network"
    },
    {
        question: "What is HTTP?",
        options: ["Hyper Text Transmission Protocol", "High Text Transmission Protocol", "Hyper Text Transfer Protocol", "None of these"],
        correctAnswer: "Hyper Text Transfer Protocol"
    },
    {
        question: "What is WWW & who invented WWW?",
        options: ["World Wide Web – Tim Berners Lee", "Word Wide Web – Ken Thomson", "Word Wide Wire – Kevin Ashton", "None of these"],
        correctAnswer: "World Wide Web – Tim Berners Lee"
    },
    {
        question: "Full form of WWWW?",
        options: ["World Wide Web Worm", "World Wide Wire Worm", "Word Wide Worm Web", "None of these"],
        correctAnswer: "World Wide Web Worm"
    },
    {
        question: "Allows the user to send a file with email.",
        options: ["Draft", "Messenger", "Sent", "Attachments"],
        correctAnswer: "Attachments"
    },
    {
        question: "Which is not a type of e-commerce?",
        options: ["Business to Business (B2B)", "Business to Customer (B2C)", "Alpha-commerce (A2A)", "Consumer-to-business (C2B)"],
        correctAnswer: "Alpha-commerce (A2A)"
    },
    {
        question: "E-mail stands for",
        options: ["Electronic man", "Electromagnetic mail", "Electronic mail", "Engine Mail"],
        correctAnswer: "Electronic mail"
    },
    {
        question: "OSI Reference Layer responsible for routing",
        options: ["Physical", "Network", "Data link", "Transport"],
        correctAnswer: "Network"
    },
    {
        question: "LinkedIn can be used to",
        options: ["Build connections", "Stay in touch with colleagues", "Search jobs", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Why is one-time password safe?",
        options: ["Easy to generate", "Not sharable", "Different for every access", "Encrypted password"],
        correctAnswer: "Different for every access"
    },
    {
        question: "What does BHIM stand for?",
        options: ["Bharat Interface for Money", "Bharat Interface for Machine", "Bharat Internet for Money", "Bharat Interface to Money"],
        correctAnswer: "Bharat Interface for Money"
    },
    {
        question: "The correct full form for UPI is",
        options: ["Unified Payment Interface", "Intermediate Payment Interface", "Unified Pay Interface", "Unified Peoples Interface"],
        correctAnswer: "Unified Payment Interface"
    },
    {
        question: "Which of the following will be the full form of IRCTC?",
        options: ["Indian Railway Catering and Tourism Corporation", "Indian Railway Corporation and Tourism Catering", "Indian Railway Catering and Travel Corporation", "None of These"],
        correctAnswer: "Indian Railway Catering and Tourism Corporation"
    },
    {
        question: "AADHAR is a unique identity number issued by____?",
        options: ["UBI", "UIAI", "UIDAI", "UBDAI"],
        correctAnswer: "UIDAI"
    },
    {
        question: "What does the term 'Malware' stand for?",
        options: ["Malfunctioning Software", "Malicious Firmware", "Malfunctioning Hardware", "Malicious Software"],
        correctAnswer: "Malicious Software"
    },
    {
        question: "In computer security,...... means that the information in a computer system can only be accessible by viewing authorized parties.",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        correctAnswer: "Confidentiality"
    },
    {
        question: "Which of the following is an independent malicious program that needs no host program?",
        options: ["Trap doors", "Trojan horse", "Virus", "Worm"],
        correctAnswer: "Worm"
    },
    {
        question: "…………… programs can be used to accomplish functions indirectly that an unauthorized user could not accomplish directly.",
        options: ["Zombie", "Worm", "Trojan Horses", "Logic Bomb"],
        correctAnswer: "Trojan Horses"
    },
    {
        question: "Which of the following malicious programs do not replicate automatically?",
        options: ["Trojan Horse", "Virus", "Worm", "Zombie"],
        correctAnswer: "Trojan Horse"
    },
    {
        question: "What is the Full Form of 'IIOT'?",
        options: ["INFORMATION IOT", "INDUSTRIAL IOT", "INTELLIGENT IOT", "INNOVATIVE IOT"],
        correctAnswer: "INDUSTRIAL IOT"
    },
    {
        question: "In which of the following years was the blockchain invented?",
        options: ["2012", "2005", "2008", "2010"],
        correctAnswer: "2008"
    },
    {
        question: "A type of VR environment in which subjects are visually isolated from the real environment.",
        options: ["Immersive", "Semi-immersive", "Non-immersive", "Augmented"],
        correctAnswer: "Immersive"
    },
    {
        question: "Students where applications and services that use virtualization resources, what is the distribution network called?",
        options: ["Soft Computing", "Distributing Computing", "Hybrid Computing", "Cloud Computing"],
        correctAnswer: "Cloud Computing"
    },
    {
        question: "Mixed Reality Experience Combines Elements From Virtual Reality And Augmented Reality?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "Taskbar is used for",
        options: ["Navigation program", "Switching between programs", "Start a program", "All of above"],
        correctAnswer: "All of above"
    },
    {
        question: "A small part of the taskbar that has icons of background running applications is",
        options: ["Start button", "Quick launch", "Taskbar", "System tray"],
        correctAnswer: "System tray"
    },
    {
        question: "Recently deleted files are stored in",
        options: ["Recycle bin", "Desktop", "Taskbar", "My computer"],
        correctAnswer: "Recycle bin"
    },
    {
        question: "Which of the following operating systems reads and reacts in actual time?",
        options: ["Quick Response System", "Real Time System", "Time Sharing System", "Batch Processing System"],
        correctAnswer: "Real Time System"
    },
    {
        question: "The primary purpose of an operating system is:",
        options: ["To make the most efficient use of the computer hardware", "To allow people to use the computer", "To keep systems programmers employed", "To make computers easier to use"],
        correctAnswer: "To make the most efficient use of the computer hardware"
    },
    {
        question: "Correct sequence of bars in LibreOffice Writer?",
        options: ["Status bar, Title bar, Standard toolbar, Menu bar", "Menu bar, Title bar, Status bar, Standard toolbar", "Title bar, Menu bar, Standard toolbar, Status bar", "None of these"],
        correctAnswer: "Title bar, Menu bar, Standard toolbar, Status bar"
    },
    {
        question: "What is the default user interface in LibreOffice Writer?",
        options: ["Standard toolbar", "Tabbed", "Single toolbar", "None of these"],
        correctAnswer: "Standard toolbar"
    },
    {
        question: "How many user interfaces in LibreOffice Writer?",
        options: ["7", "6", "5", "10"],
        correctAnswer: "7"
    },
    {
        question: "What is the minimum & maximum font size in LibreOffice Writer?",
        options: ["8, 98", "6, 97", "10, 100", "6, 96"],
        correctAnswer: "6, 96"
    },
    {
        question: "Which font size is available in the list in LibreOffice Writer?",
        options: ["28", "35", "41", "30"],
        correctAnswer: "28"
    },
    {
        question: "What is the shortcut key for slide show in LibreOffice Impress?",
        options: ["F5", "F7", "F8", "F1"],
        correctAnswer: "F5"
    },
    {
        question: "Which of the following allows you to select more than one slide in LibreOffice Impress?",
        options: ["Drag each slide", "Shift+click on each slide", "Ctrl+click on each slide", "Click on each slide"],
        correctAnswer: "Ctrl+click on each slide"
    },
    {
        question: "First slide known as in LibreOffice Impress?",
        options: ["Home slide", "Title slide", "Main slide", "None of these"],
        correctAnswer: "Title slide"
    },
    {
        question: "What is the shortcut key for jump to the last edited slide in LibreOffice Impress?",
        options: ["Ctrl+Shift+F3", "Alt+Shift+F4", "Ctrl+Shift+F7", "Alt+Shift+F5"],
        correctAnswer: "Alt+Shift+F5"
    },
    {
        question: "Which of the following is not one of LibreOffice Impress views?",
        options: ["Outline view", "Impress view", "Slide sorter view", "Slide view"],
        correctAnswer: "Impress view"
    },
    {
        question: "What is a protocol?",
        options: ["Set of rules for communication", "Set of commands for communication", "Both A & B", "None of these"],
        correctAnswer: "Set of rules for communication"
    },
    {
        question: "What is the port number of HTTP?",
        options: ["70", "80", "90", "100"],
        correctAnswer: "80"
    },
    {
        question: "Full form of DNS.",
        options: ["Domain Name System", "Domain Name Server", "Both A & B", "None of these"],
        correctAnswer: "Domain Name System"
    },
    {
        question: "Full form of MIME.",
        options: ["Multipurpose Internet Mail Extension", "Multiply Internet Mail Extension", "Manufacture Internet Mail Extension", "None of these"],
        correctAnswer: "Multipurpose Internet Mail Extension"
    },
    {
        question: "Which is the first graphical web browser?",
        options: ["Opera", "Mozilla", "Mosaic", "None of these"],
        correctAnswer: "Mosaic"
    },
    {
        question: "CEO and founder of Facebook is",
        options: ["Mark Zuckerberg", "Mark Saverin and Andrew McCollum", "Dustin Biden and Chris Hughes", "None of the above"],
        correctAnswer: "Mark Zuckerberg"
    },
    {
        question: "______ is used to send an email to some other person in addition to the main subject receiver without disclosing details to all.",
        options: ["Carbon Copy", "Blind Carbon Copy", "Double Carbon Copy", "Xerox Copy"],
        correctAnswer: "Blind Carbon Copy"
    },
    {
        question: "Choose the correct format for Gmail address",
        options: ["abc@gmail.com", "abc@gmail-com", "abcgmail@com", "None of the above"],
        correctAnswer: "abc@gmail.com"
    },
    {
        question: "What is the max size of attachment in Gmail?",
        options: ["25 MB", "25 TB", "25 GB", "25 KB"],
        correctAnswer: "25 MB"
    },
    {
        question: "What is a blog?",
        options: ["Web browser", "Website or weblog", "Search engine", "None of the mentioned"],
        correctAnswer: "Website or weblog"
    },
    {
        question: "E-payments can be done through",
        options: ["Wallets", "Digital Wallets", "Cash", "None of the above"],
        correctAnswer: "Digital Wallets"
    },
    {
        question: "The number of digits printed on an ATM Debit card is",
        options: ["10", "16", "11", "13"],
        correctAnswer: "16"
    },
    {
        question: "_____ is the fastest technique to instantly transfer funds electronically between different banks.",
        options: ["NEFT", "RTGS", "SMPS", "IMPS"],
        correctAnswer: "IMPS"
    },
    {
        question: "AEPS stands for:",
        options: ["Aadhaar Enabled Payment Source", "Aadhaar Enrolled Payment System", "Aadhaar Enabled Payment System", "None of the above"],
        correctAnswer: "Aadhaar Enabled Payment System"
    },
    {
        question: "In Online Internet Banking, which payment method is used to immediately transfer the money?",
        options: ["RTGS", "UPI", "NEFT", "IMPS"],
        correctAnswer: "IMPS"
    },
    {
        question: "The …………….. is a code embedded in some legitimate program that is set to “explode” when certain conditions are met.",
        options: ["Trap doors", "Trojan horse", "Logic Bomb", "Virus"],
        correctAnswer: "Logic Bomb"
    },
    {
        question: "The ……….. is code that recognizes some special sequence of input or is triggered by being run from a certain user ID or by an unlikely sequence of events.",
        options: ["Trap doors", "Trojan horse", "Logic Bomb", "Virus"],
        correctAnswer: "Trap doors"
    },
    {
        question: "In computer security,...... means that computer system assets can be modified only by authorized parties.",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        correctAnswer: "Integrity"
    },
    {
        question: "…………. means that the sender must not be able to deny sending a message that he sent.",
        options: ["Non-repudiation", "Integrity", "Authentication", "None of the above"],
        correctAnswer: "Non-repudiation"
    },
    {
        question: "………. refers to the situation in which services or data become unavailable, unusable, and destroyed.",
        options: ["Interruption", "Integrity", "Authentication", "All of these"],
        correctAnswer: "Interruption"
    },
    {
        question: "The Full Name Of CMS Is Content Management System?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "A Robot is a...............?",
        options: ["Multi-functional manipulator", "Programmable", "Both (Programmable) and (Multi-functional manipulator)", "None of the options"],
        correctAnswer: "Both (Programmable) and (Multi-functional manipulator)"
    },
    {
        question: "The full name of NASSCOM is National Association of Software and Service Companies?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "What is the full form of RPA?",
        options: ["Real Time Process Automation", "Robotic Process Automation", "Robotic Program Automation", "Robotic Process Application"],
        correctAnswer: "Robotic Process Automation"
    },
    {
        question: "Which day is celebrated as World Computer Literacy Day?",
        options: ["December 2", "November 2", "December 12", "November 12"],
        correctAnswer: "December 2"
    },
    {
        question: "Which memory is called as a volatile memory?",
        options: ["RAM", "ROM", "BOTH a & b", "none of these"],
        correctAnswer: "RAM"
    },
    {
        question: "Which is not a non-impact printer?",
        options: ["Thermal Printer", "Dot Matrix Printer", "Inkjet Printer", "Laser Printer"],
        correctAnswer: "Dot Matrix Printer"
    },
    {
        question: "Which is not an impact printer?",
        options: ["Dot Matrix Printer", "Drum Printer", "Chain Printer", "Laser Printer"],
        correctAnswer: "Laser Printer"
    },
    {
        question: "The ................. of the computer includes the programs or instructions.",
        options: ["Software", "Icon", "Information", "Hardware"],
        correctAnswer: "Software"
    },
    {
        question: "An analog computer did not score over a digital computer in terms of.",
        options: ["Reliability", "Speed", "Cost", "Accuracy"],
        correctAnswer: "Cost"
    },
    {
        question: "What key is used to start the computer in safe mode?",
        options: ["F11", "F9", "F12", "F8"],
        correctAnswer: "F8"
    },
    {
        question: "Hard disks and diskettes are.",
        options: ["Indirect access storage device", "Direct access storage device", "Not a storage device", "Sequential access storage device"],
        correctAnswer: "Direct access storage device"
    },
    {
        question: "A program embedded in a semiconductor chip during their manufacture is called?",
        options: ["Liveware", "Humanware", "Hardware", "Firmware"],
        correctAnswer: "Firmware"
    },
    {
        question: "Full form of EEPROM",
        options: ["Electronic erasable program read-only memory", "Electrically erasable programmable read-only memory", "Both a & b", "None of these"],
        correctAnswer: "Electrically erasable programmable read-only memory"
    },
    {
        question: "Which of the following is not an input device?",
        options: ["Optical scanners", "Voice recognition device", "COM (Computer Output to Microfilm)", "OCR"],
        correctAnswer: "COM (Computer Output to Microfilm)"
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
    }
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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
