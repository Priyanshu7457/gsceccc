const quizData = [
    {
        question: "Which option can be used to set custom timings for slides in a presentation?",
        options: ["Slide Timings", "Slide Timer", "Rehearsal", "Slide show setup"],
        correctAnswer: "Rehearsal",
    },
    {
        question: "In presentations, which of the following can be inserted?",
        options: ["Sound Clips", "Movie Clips", "Both (A) & (B)", "None of the above"],
        correctAnswer: "Both (A) & (B)",
    },
    {
        question: "Which of the following is the shortcut key to start a slide show from the current slide?",
        options: ["f5", "shift+f5", "ctrl+f5", "none of the above"],
        correctAnswer: "shift+f5",
    },
    {
        question: "Which of the following menu has the Background in Libre Impress",
        options: ["Insert", "Slide", "Slide Show", "view"],
        correctAnswer: "Slide",
    },
    {
        question: "Pressing Which Of The Following Does Not Advance 'slide Show'?",
        options: ["Esc Key", "F5 Key", "Mouse Button", "None of These"],
        correctAnswer: "Esc Key",
    },
    {
        question: "Libreoffice Impress Can Also Be Known As 'open Source Presentation Software Module'?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE",
    },
    {
        question: "How to start a new presentation in impress in using",
        options: ["New presentation", "Create presentation", "Open presentation", "Presentation wizard"],
        correctAnswer: "New presentation",
    },
    {
        question: "How many sections in the sidebar of impress",
        options: ["9", "5", "3", "7"],
        correctAnswer: "7",
    },
    {
        question: "Rehearse time will start counting in units.",
        options: ["Mini seconds", "Hours", "Minutes", "Seconds"],
        correctAnswer: "Seconds",
    },
    {
        question: "Shortcut key for position and size in libreoffice impress",
        options: ["F1", "F3", "F2", "F4"],
        correctAnswer: "F4",
    },
    {
        question: "Length of IPv4 address?",
        options: ["40-60 bytes", "20-40 bytes", "0-20 bytes", "20-60 bytes"],
        correctAnswer: "20-60 bytes"
    },
    {
        question: "Which one of the following is controlled by WWW?",
        options: ["Virtual banking", "Universal banking", "Wholesale banking", "None"],
        correctAnswer: "Virtual banking"
    },
    {
        question: "Which of the following is not a component of e-governance?",
        options: ["Political components", "Technological component", "Service component", "Financial components"],
        correctAnswer: "Financial components"
    },
    {
        question: "Which of these is the easiest way of communication?",
        options: ["E-mail", "Telephone", "Fax", "Letter"],
        correctAnswer: "E-mail"
    },
    {
        question: "To create a new email, click on which button?",
        options: ["Inbox", "Sent box", "Compose", "New mail"],
        correctAnswer: "Compose"
    },
    {
        question: "Unwanted E-mail is called as",
        options: ["Trash", "Spam", "Both A & B", "None of these"],
        correctAnswer: "Both A & B"
    },





    {
        question: "What is the maximum limit of characters in a tweet on Twitter?",
        options: ["280", "140", "560", "110"],
        correctAnswer: "280"
    },
    {
        question: "What was the old name of Twitter?",
        options: ["Twter", "Twttr", "Twiter", "None of these"],
        correctAnswer: "Twttr"
    },
    {
        question: "Which of the following is not an example of instant messaging?",
        options: ["WhatsApp", "Facebook Messenger", "Telegram", "E-mail"],
        correctAnswer: "E-mail"
    },
    {
        question: "Who is the father of Telegram?",
        options: ["Jack Dorsey", "Elon Musk", "Mark Zuckerberg", "Pavel Durov & Nikolai"],
        correctAnswer: "Pavel Durov & Nikolai"
    },
    {
        question: "A person who writes a blog or weblog is known as:",
        options: ["Webmaster", "Communicator", "Blogger", "None of these"],
        correctAnswer: "Blogger"
    },
    {
        question: "If you are buying a product from Flipkart, Amazon, and Snapdeal, this type of business model is called:",
        options: ["B2B", "C2C", "B2C", "G2G"],
        correctAnswer: "B2C"
    },
    {
        question: "Quikr and OLX are examples of C2C business model. (True/False)",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "If Maruti company purchases a tire from MRF company, this business is called as:",
        options: ["B2B", "C2C", "B2C", "G2G"],
        correctAnswer: "B2B"
    },
    {
        question: "Which app is used for ticket booking from IRCTC?",
        options: ["Rail Tail", "Rail Connect", "Rail Sarthi", "None of these"],
        correctAnswer: "Rail Connect"
    },
    {
        question: "UMANG stands for:",
        options: [
            "Unified Mobile Application for New Age Governance",
            "Unified Mobile Application for New Age Government",
            "Ultimate Mobile Application for New Age Governance",
            "User Mobile Application for New Age Governance"
        ],
        correctAnswer: "Unified Mobile Application for New Age Governance"
    },
    {
        question: "UMANG app was launched in which year?",
        options: ["15 August, 2015", "26 January 2017", "23 November 2017", "30 January 2014"],
        correctAnswer: "23 November 2017"
    },
    {
        question: "UMANG app is available in how many languages?",
        options: ["13", "12", "15", "20"],
        correctAnswer: "13"
    },
    {
        question: "UMANG app was launched by which organization?",
        options: [
            "Ministry of Electronics and Information Technology (MeitY) and National e-Governance Division (NeGD)",
            "National Payment Corporation of India (NPCI)",
            "Synergised Advanced Application Rail Travel Help and Information (Saarthi)",
            "None of these"
        ],
        correctAnswer: "Ministry of Electronics and Information Technology (MeitY) and National e-Governance Division (NeGD)"
    },
    {
        question: "DigiLocker was launched in which year?",
        options: ["2020", "2015", "2016", "2017"],
        correctAnswer: "2015"
    },
    {
        question: "What is the maximum storage space in DigiLocker?",
        options: ["2 GB", "1 GB", "5 GB", "8 GB"],
        correctAnswer: "1 GB"
    },
    {
        question: "What is meant to be online buying and selling of goods?",
        options: ["E-commerce", "Digi Locker", "Digital Payment", "None of these"],
        correctAnswer: "E-commerce"
    },
    {
        question: "DigiLocker is connected with:",
        options: ["From Aadhar Card", "From PAN Card", "Both A & B", "None of these"],
        correctAnswer: "From Aadhar Card"
    },
    {
        question: "Which is not an advantage of using DigiLocker?",
        options: [
            "Secure access to Govt. issued documents",
            "Document Generation",
            "Easy to carry",
            "Minimize the use of physical documents"
        ],
        correctAnswer: "Document Generation"
    },
    {
        question: "This is not a benefit of Big Data analytics",
        options: [" Faster, better decision making", "Cost Reduction", "Manage of Data", "None of the above"],
        correctAnswer: "Manage of Data"
    },
    {
        question: "Unsolicited Bulk E-mails (UBI) are called __________",
        options: ["SMS", "MMS", "Spam emails", "malicious emails"],
        correctAnswer: "Spam emails"
    },
    {
        question: "_____________ is an encryption program or add-ons which provides cryptographic privacy & authentication for email communication.",
        options: ["Powerful Good Privacy", "Pretty Good Privacy", "Pretty Good Encryption", "Pretty Strong Encryption"],
        correctAnswer: "Pretty Good Privacy"
    },
    {
        question: "PGP is abbreviated as _______________",
        options: ["Pretty Good Privacy", "Powerful Good Privacy", "Protocol Giving Privacy", "Pretty Good Protocol"],
        correctAnswer: "Pretty Good Privacy"
    },
    {
        question: "Which of the following is the class of computer threat",
        options: ["phishing", "soliciting", "Dos attacks", "stalking"],
        correctAnswer: "Dos attacks"
    },
    {
        question: "Which of the following is not an external threat to a computer or a computer network.",
        options: [" Ignorance", "Trojan horse", "Adware", "Crackers"],
        correctAnswer: " Ignorance"
    },
    {
        question: "When a person is harassed repeatedly by being followed, called, or written to, he or she is the target of",
        options: [" bullying", "stalking", "identity theft", "phishing"],
        correctAnswer: "stalking"
    },
    {
        question: "The main tasks of an AI agent are_______.",
        options: ["Input and Output", "Moment and Humanly Actions", "Perceiving, thinking, and acting on the environment", "None of the above"],
        correctAnswer: "Perceiving, thinking, and acting on the environment"
    },
    {
        question: "The Bayesian Network gives________",
        options: ["A complete description of the problem", "Partial Description of the domain", "A complete description of the domain", "None of the above"],
        correctAnswer: "A complete description of the domain"
    },
    {
        question: "An Algorithm is said as a Complete algorithm if_______________",
        options: ["It ends with a solution (if any exists).", "It begins with a solution.", "It does not end with a solution.", "It contains a loop"],
        correctAnswer: "It ends with a solution (if any exists)."
    },
    {
        question: "Robot is derived from the Czech word",
        options: ["Rabota", "Robota", "Rebota", "Ribota"],
        correctAnswer: "Robota"
    },
    {
        question: "A Robot is a",
        options: ["Programmable", "Multi-functional manipulator", "Both (A) and (B)", "None of the above"],
        correctAnswer: "Both (A) and (B)"
    },
    {
        question: "Which of the following terms IS NOT one of the five basic parts of a robot?",
        options: ["Peripheral tools", "End effectors", "Controller", "Drive"],
        correctAnswer: "Peripheral tools"
    },
    {
        question: "Which of the following places would be LEAST likely to include operational robots?",
        options: ["Warehouse", "Factory", "Hospitals", "Private homes"],
        correctAnswer: "Private homes"
    },
    {
        question: "Which of the following is the Cloud Platform provided by Amazon?",
        options: ["AWS", "Cloudera", "Azure", "All of the mentioned"],
        correctAnswer: "AWS"
    },
    {
        question: "It detects moving objects with a predefined area of interest.",
        options: ["Motion tracker", "SMD", "HMD", "Motion analyzer"],
        correctAnswer: "HMD"
    },
    {
        question: "WLAN stands for ",
        options: ["Wireless Local Area Network", "Wired Local Area Network", "Wireless Local Ambiguity Network", " Wired Latent Area Network"],
        correctAnswer: "Wireless Local Area Network"
    },

    {
        question: "Netiquette is a rule related to",
        options: ["Food habits", "Cyber habits", "Retailing habits", "Banking habits"],
        correctAnswer: "Cyber habits"
    },

    {
        question: "Which of the following items is not used in Local Area Networks (LANS)?",
        options: ["Computer", "Modem", "Printer", "Cable"],
        correctAnswer: "Modem"
    },

    {
        question: "Which device are commonly shared between computers",
        options: ["Mouse", "Speakers", "Printers", "Keyboard"],
        correctAnswer: "Printers"
    },
    // Q5
    {
        question: "An analog computer did not score over a digital computer in terms of.",
        options: ["Reliability", "Speed", "Cost", "Accuracy"],
        correctAnswer: "Cost"
    },
    // Q6
    {
        question: "What key is used to start the computer in safe mode?",
        options: ["F11", "F9", "F12", "F8"],
        correctAnswer: "F8"
    },
    // Q7
    {
        question: "Hard disks and diskettes are.",
        options: [
            "Indirect access storage device",
            "Direct access storage device",
            "Not a storage device",
            "Sequential access storage device"
        ],
        correctAnswer: "Direct access storage device"
    },
    // Q8
    {
        question: "A program embedded in a semiconductor chip during their manufacture is called?",
        options: ["Liveware", "Humanware", "Hardware", "Firmware"],
        correctAnswer: "Firmware"
    },
    // Q9
    {
        question: "Full form of EEPROM",
        options: [
            "Electronic erasable program read-only memer",
            "Electrically erasable programmable read-only memory",
            "Both a & b",
            "None of these"
        ],
        correctAnswer: "Electrically erasable programmable read-only memory"
    },
    // Q10
    {
        question: "Which of the following is not an input device?",
        options: [
            "Optical scanners",
            "Voice recognition device",
            "COM (Computer Output to Microfilm)",
            "OCR"
        ],
        correctAnswer: "COM (Computer Output to Microfilm)"
    },
    // Q11
    {
        question: "Multiple desktops can be created using.",
        options: [
            "Taskbar icon",
            "Task view icon",
            "Store icon",
            "Task review icon"
        ],
        correctAnswer: "Task view icon"
    },
    {
        question:
            "In libre office writer, which of the following options shows the available choices in hyperlink.",
        options: [
            "internet ,mail, document, new document",
            "place in the document, new document",
            "place in this document, mail, document, new document",
            "internet, mail",
        ],
        correctAnswer: "internet ,mail, document, new document",
    },
    //   Q19
    {
        question:
            "While formatting the shadow style of a table in libre office writer, which one of the following is not the available position.",
        options: [
            "cast shadow to top left",
            "cast shadow to top bottom",
            "cast shadow to bottom right",
            "cast shadow to top right",
        ],
        correctAnswer: "cast shadow to top bottom",
    },
    //   Q20
    {
        question: "Which of the following is not available in font spacing?",
        options: ["condensed", "expanded", "loosely", "normal"],
        correctAnswer: "loosely",
    },
    //   Q21
    {
        question:
            "ctrl+ shift + backspace is shortcut key to delete text to beginning of sentence in libre office.",
        options: ["false", "true"],
        correctAnswer: "true",
    },
    //   Q22
    {
        question:
            "While customizing the font color, which one of the following is not the available color coding scheme in libre office writer ?",
        options: ["WXY", "HSB", "RGB", "CMYK"],
        correctAnswer: "WXY",
    },
    //   Q23
    {
        question:
            "What is the correct sequence of steps required to insert the footer in libre office writer document.",
        options: [
            "insert > footer >default style",
            "insert > footer",
            "insert > header & footer > footer >default style",
            "header & footer > footer",
        ],
        correctAnswer: "insert > header & footer > footer >default style",
    },
    //   Q24
    {
        question:
            "Which feature in libre office write remove extra spaces between pages.",
        options: [
            "Edit -> Hide White space",
            "view -> Hide White space",
            "file -> Hide White space",
            "tools -> Hide White space",
        ],
        correctAnswer: "view -> Hide White space",
    },
    {
        question: "Help key shortcut used in LibreOffice is ..............",
        options: ["F1", "F2", "F3", "F5"],
        correctAnswer: "F1",
    },
    {
        question: "Template is readymade styles that you can use for your LibreOffice Impress presentations.",
        options: ["True", "False"],
        correctAnswer: "True",
    },
    {
        question: "Is Ctrl+5 is used for slide show?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
    },
    {
        question: "We can set custom slide show in LibreOffice Impress.",
        options: ["True", "False"],
        correctAnswer: "True",
    },
    {
        question: "The shortcut key for move first slide of a presentation is ..................",
        options: ["Ctrl+Home", "Ctrl+End", "Ctrl+Enter", "None of the above"],
        correctAnswer: "Ctrl+Home",
    },
    {
        question: "How many menus are found in LibreOffice Impress?",
        options: ["3", "5", "8", "10"],
        correctAnswer: "10",
    },
    {
        question: "The ................ keyboard combination can be used to open a presentation file.",
        options: ["Ctrl+Q", "Ctrl+O", "Ctrl+P", "Ctrl+S"],
        correctAnswer: "Ctrl+O",
    },
    {
        question: "................ is used to go to the previous slide in LibreOffice Impress.",
        options: ["Ctrl+Page Up", "Ctrl+Page Dowm", "Ctrl+Page Left", "Ctrl+Page Right"],
        correctAnswer: "Ctrl+Page Up",
    },
    {
        question: "........... is used to move cursor with selection to the left.",
        options: ["Shift+Arrow Left", "Shift+Arrow Right", "Shift+Arrow Up", "Shift+Arrow Down"],
        correctAnswer: "Shift+Arrow Left",
    },
    {
        question: "In impress presentation for animation we select slide object and click Format menu > animation.",
        options: ["True", "False"],
        correctAnswer: "True",
    },
    {
        question: "Document name is appear on which bar in libre office writer?",
        options: ["status bar", "title bar", "standard tool bar", "task bar"],
        correctAnswer: "title bar",
    },
    //   Q6
    {
        question: "correct sequence of bar in libre office writer?",
        options: [
            "status bar,title bar,standard tool bar,menu bar",
            "menu bar,title bar,status bar, standard tool bar",
            "title bar,menu bar,standard tool bar, status bar",
            "none of these",
        ],
        correctAnswer: "title bar,menu bar,standard tool bar, status bar",
    },

    {
        question: "Which of the following shortcut key is used to end the presentation in LibreOffice Impress?",
        options: ["End", "Esc", "Home", "None of the above"],
        correctAnswer: "Esc",
    },
    {
        question: "Which of the following key is used to select the objects in the order in which they were created?",
        options: ["Tab Key", "Esc Key", "Function Key", "None of the above"],
        correctAnswer: "Tab Key",
    },
    //   Q25
    {
        question: "3d object command found in the status bar",
        options: ["false", "true"],
        correctAnswer: "true",
    },
    // Q12
    {
        question: "Full form of TFT?",
        options: [
            "Tight film transistor",
            "Thin film transistor",
            "Think film transistor",
            "None of these"
        ],
        correctAnswer: "Thin film transistor"
    },
    // Q13
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
        question: "What will happen when CTRL+W pressed",
        options: ["Open the tab on a browser", "Close a tab on a browser", "Close the Browser", "Open the Browser"],
        correctAnswer: "Close a tab on a browser"
    },

    {
        question: ".Com Is Stands for Communication",
        options: ["true", "false"],
        correctAnswer: "false"
    },

    {
        question: "Which of the following is not a networking device?",
        options: ["Gateway", "Router", "Switch", "Linux"],
        correctAnswer: "Linux"
    },

    {
        question: "Which of these schools was not among the early leaders in artificial intelligence research?",
        options: ["Dartmouth University", "Stanford University", "Massachusetts Institute of Technology", "Harvard University"],
        correctAnswer: "Harvard University"
    },
    {
        question: "What is the name for information sent from robot sensors to robot controllers?",
        options: ["Temperature", "Pressure", "Feedback", "Signal"],
        correctAnswer: "Feedback"
    },
    {
        question: "Which of the following terms refers to the left-right movement of a robot arm?",
        options: ["Yaw", "Pitch", "Swing", "Roll"],
        correctAnswer: "Yaw"
    },
    {
        question: "Which of the following terms refers to the up-down movement of a robot arm?",
        options: ["Yaw", "Pitch", "Swing", "Roll"],
        correctAnswer: "Pitch"
    },
    {
        question: "A robot's 'arm' is also known as its:",
        options: ["End effectors", "Actuator", "Manipulator", "Servomechanism"],
        correctAnswer: "Manipulator"
    },
    {
        question: "Viruses are",
        options: [" man made", "naturally occur", "machine made", "all of these"],
        correctAnswer: " man made"
    },
    {
        question: "Monitors user activity on the internet and transmits that information in the background to someone else",
        options: [" malware", "spyware", "adware", "none of these"],
        correctAnswer: "spyware"
    },
    {
        question: "It allows a visited website to store its own information about a user on the user’s computer",
        options: [" spam", "cookies", "malware", "adware"],
        correctAnswer: "cookies"
    },
    {
        question: "Who is the father of Computer Security or Cyber Security?",
        options: ["Robert", "Charles", "Bob Thomas", "August Kerckhoffs"],
        correctAnswer: "August Kerckhoffs"
    },

    {
        question: "Where are deleted e-mails stored?",
        options: ["Draft", "Trash", "Inbox", "Sent Mail"],
        correctAnswer: "Trash"
    },

    {
        question: "in open office, impress comes under whivh menu.",
        options: ["Tools", "Project", "Application", "office"],
        correctAnswer: "Tools",
    },
    {
        question: "which option is not available during print handouts",
        options: ["per page six slide", "per page two slide", "per page three slide", "per page five slide"],
        correctAnswer: "per page five slide",
    },
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
