const quizData = [
    {
        question: "Libre office impress is called….",
        options: ["word processor", "writer", "calc", "presentation"],
        correctAnswer: "presentation",
    },
    {
        question: "The ......... cloud infrastructure is operated for the exclusive use of an organization?",
        options: ["Public", "Private", "Community", "All of the mentioned"],
        correctAnswer: "Private"
    },

    {
        question: "Data encryption is used for",
        options: [" Security", "Performance", "Storage", "All of above - ऊपर के सभी"],
        correctAnswer: " Security"
    },
    {
        question:
            "Which one of the following is not an option in the drop down menu of header in libre office writer.",
        options: [
            "insert page number",
            "delete header",
            "format header",
            "create header",
        ],
        correctAnswer: "create header",
    },
    {
        question: "What is ARPANET?",
        options: ["ADVANCE RESEARCH PRIVATE AGENCY NETWORK", "ADVANCE RESEARCH PROJECT AGENCY NETWORK", "ADVANCED RESEARCH PUBLIC AGENCY NETWORK", "NONE OF THESE"],
        correctAnswer: "ADVANCE RESEARCH PROJECT AGENCY NETWORK"
    },
    {
        question: "The ________ is the message after transformation.",
        options: ["Plaintext", "Secret-text", "Ciphertext", "None of the above"],
        correctAnswer: "Ciphertext"
    },
    {
        question: "Computer viruses are man made",
        options: [" TRUE", "FALSE"],
        correctAnswer: " TRUE"
    },

    {
        question: "A process that is repeated, evaluated, and refined is called __________",
        options: ["Diagnostic", "Descriptive", "Interpretive", "Iterative"],
        correctAnswer: "Iterative"
    },
    {
        question: "What does the term 'Malware' stand for?",
        options: ["Malfunctioning Software", "Malicious Firmware", "Malfunctioning Hardware", "Malicious Software"],
        correctAnswer: "Malicious Software"
    },
    {
        question: "............ Shortcut key is used for slide show from current slide.",
        options: ["F5", "Shift+F5", "Ctrl+F5", "None of the Above"],
        correctAnswer: "Shift+F5",
    },
    {
        question: "Which memory is called as a volatile memory?",
        options: ["RAM", "ROM", "BOTH a & b", "none of these"],
        correctAnswer: "RAM"
    },
    {
        question: "What is the internet?",
        options: ["NETWORK OF NETWORKS.", "WIRELESS NETWORK.", "HYPERTEXT DOCUMENTS.", "VIRTUAL NETWORK."],
        correctAnswer: "NETWORK OF NETWORKS."
    },
    {
        question: "Which is not a non-impact printer?",
        options: ["Thermal Printer", "Dot Matrix Printer", "Inkjet Printer", "Laser Printer"],
        correctAnswer: "Dot Matrix Printer"
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
        question: "What is Artificial Intelligence?",
        options: ["Putting your intelligence into Computer", "Programming with your own intelligence", "Making a Machine intelligent", "Playing a Game"],
        correctAnswer: "Making a Machine intelligent"
    },

    {
        question: "Shortcut key for position and size in libreoffice impress",
        options: ["F1", "F3", "F2", "F4"],
        correctAnswer: "F4",
    },
    {
        question: "What is optimal zoom percentage in libreoffice impress",
        options: ["95%", "125%", "100%", "91%"],
        correctAnswer: "95%",
    },
    {
        question: "What are slide transition variant options.",
        options: ["Inside and common slide", "Most slide and least slide", "Outside and most side", "Outside and inside"],
        correctAnswer: "Outside and inside",
    },


    {
        question: "Who creates 123d design?",
        options: ["shapeways", "autodesk", "makeware", "ethereum"],
        correctAnswer: "autodesk"
    },


    // Q50
    {
        question: "Which computers operate essentially by counting?",
        options: ["Digital computers", "Analog computers", "Portable computers", "Hybrid computers"],
        correctAnswer: "Digital computers"
    },
    // Q51
    {
        question: "................. represents raw facts, whereas ................... is data made meaningful.",
        options: ["Information, bits", "Information, reporting", "Records, bytes", "Data, information"],
        correctAnswer: "Data, information"
    },


    {
        question: "Shortcut key insert textbox in libreoffice impress.",
        options: ["F5", "F2", "F3", "F4"],
        correctAnswer: "F2",
    },
    {
        question: "What is minimum zoom percentage in libreoffice impress",
        options: ["20%", "5%", "2%", "10%"],
        correctAnswer: "5%",
    },
    {
        question: "In computer security, what means that the information in a computer system can only be accessible by authorized parties?",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        correctAnswer: "Confidentiality"
    },
    {
        question: "Shortcut key to decrease column width in LibreOffice Calc?",
        options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
        correctAnswer: "Alt+Left Arrow"
    },
    {
        question: "What is the maximum zoom percentage in LibreOffice Impress?",
        options: ["300%", "450%", "500%", "3000%"],
        correctAnswer: "3000%",
    },
    {
        question: "Shortcut key of update new style in LibreOffice Writer:",
        options: ["ctrl+C", "ctrl+shift+f11", "CTRL+f7", "shift+f11"],
        correctAnswer: "ctrl+shift+f11",
    },
    {
        question: "Which of the following command is used to see the content of the tar(backup.tar) file without extracting it?",
        options: ["tar -xvf backup.tar", "tar -svf backup.tar", "tar -tvf backup.tar", "none of these"],
        correctAnswer: "tar -tvf backup.tar"
    },
    {
        question: "In which menu option digital signature in libre office writer",
        options: ["file", "edit", "insert", "help"],
        correctAnswer: "file",
    },
    {
        question: "Shortcut key of save as in libre office writer",
        options: ["crtl+shift+s", "ctrl+s", "crtl+n", "ctrl+y"],
        correctAnswer: "crtl+shift+s",
    },
    {
        question: "What are the two main types of Virtual Reality?",
        options: ["Fully immersive and non-immersive", "VR and AR", "Reality and Unreality", "Oculus Rift and HTC Vive"],
        correctAnswer: "Fully immersive and non-immersive"
    },
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
    //   Q25
    {
        question: "3d object command found in the status bar",
        options: ["false", "true"],
        correctAnswer: "true",
    },
    //   Q26
    {
        question:
            "There are six rows in an inserted table in a document of libre office writer.Height of the third row and fourth row are 1 cm and 2 cm if the updated heights of both rows if you choose the option distribute rows evenly of size subme.",
        options: [
            "height of both rows will be 2 cm",
            "height of both rows will be 1.5 cm",
            "height of both rows will be 1 cm",
            "height of both rows will be 3 cm",
        ],
        correctAnswer: "height of both rows will be 1.5 cm",
    },

    {
        question: "A/an ________ algorithm transforms ciphertext to plaintext.",
        options: ["Encryption", "Decryption", "Both (A) and (B)", "None of the above"],
        correctAnswer: "Decryption"
    },
    {
        question: "A/an ________ algorithm transforms plaintext to ciphertext.",
        options: ["Encryption", "Decryption", "Both (A) and (B)", "None of the above"],
        correctAnswer: "Encryption"
    },


    {
        question: "What is the purpose of the id command?",
        options: ["Print effective and real UID", "Print effective and real GID", "Print effective and real UID and GID", "None of these"],
        correctAnswer: "Print effective and real UID and GID"
    },
    // Q3
    {
        question: "Which is not an impact printer?",
        options: ["Dot Matrix Printer", "Drum Printer", "Chain Printer", "Laser Printer"],
        correctAnswer: "Laser Printer"
    },
    {
        question: "The default name of the Impress presentation is ................",
        options: ["Calc", "Slide 1", "Writer", "Untitled 1"],
        correctAnswer: "Untitled 1",
    },

    {
        question: "The shell used for Single user mode shell is:",
        options: ["bash", "Csh", "ksh", "sh"],
        correctAnswer: "sh"
    },

    // Q78
    {
        question: "Shortcut key of new style in LibreOffice Writer:",
        options: ["ctrl+C", "shift+12", "CTRL+f7", "shift+f11"],
        correctAnswer: "shift+f11",
    },

    {
        question: "Which of these is not a major type of cloud computing usage?",
        options: ["Hardware as a service", "Platform as a service", "Software as a service", "Infrastructure as a service"],
        correctAnswer: "Hardware as a service"
    },
    {
        question: "The initial state and successor function implicitly define the state space of the problem.",
        options: ["Initial state", "State-space", "problem space", "problem place"],
        correctAnswer: "State-space"
    },
    {
        question: "Shortcut key of open new document in libre office writer",
        options: ["crtl+z", "ctrl+m", "crtl+n", "ctrl+y"],
        correctAnswer: "crtl+n",
    },
    {
        question: "Which of these should be avoided in an E-mail?",
        options: ["Writes a wrong e-mail address", "Subject line", "Smiley’s", "Re-reading"],
        correctAnswer: "Writes a wrong e-mail address"
    },
    {
        question: "E-payments can be done through",
        options: ["Wallets", "Digital Wallets", "Cash", "None of the above"],
        correctAnswer: "Digital Wallets"
    },

    {
        question: "Is email case sensitive?",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "What is HTTP?",
        options: ["HYPER TEXT TRANSMISSION PROTOCOL.", "HIGH TEXT TRANSMISSION PROTOCOL.", "HYPER TEXT TRANSFER PROTOCOL.", "NONE OF THESE"],
        correctAnswer: "HYPER TEXT TRANSFER PROTOCOL."
    },
    {
        question: "In which menu option export as pdf in libre office write",
        options: ["file", "format", "tools", "edit"],
        correctAnswer: "file",
    },
    {
        question: "Which one is least Secure?",
        options: [" Password", "Keycard", "Retina", "Fingerprint"],
        correctAnswer: " Keycard"
    },
    {
        question: "Which command is used to show process hierarchy in tree format?",
        options: ["ps –tree", "pstree", "ps –t", "none of these"],
        correctAnswer: "pstree",
    },
    {
        question: "The ________ is the original message before transmission.",
        options: ["Ciphertext", "Plaintext", "Secret-text", "None of the above"],
        correctAnswer: "Plaintext"
    },

    {
        question: "Maximum number of sheet limit in LibreOffice Calc?",
        options: ["10000", "36000", "32000", "Option 4"],
        correctAnswer: "10000",
    },
    {
        question: "Which bar is used to access the command and tools",
        options: ["menu", "bar", "tools", "status"],
        correctAnswer: "tools",
    },
    //   Q29
    {
        question: "Which is on the left side of the status bar?",
        options: [
            "zoom slider",
            "digital signature",
            "information area",
            "cursor position",
        ],
        correctAnswer: "information area",
    },
    {
        question: "Shortcut key to increase column width in LibreOffice Calc?",
        options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
        correctAnswer: "Alt+Right Arrow",
    },

    {
        question: "Shortcut key of text body in LibreOffice Writer:",
        options: ["ctrl+C", "ctrl+E", "CTRL+2", "CTRL+0"],
        correctAnswer: "CTRL+0",
    },


    {
        question: "What is notes view in Libre office impress?",
        options: ["notes view", "outline view", "both a & b", "none of these"],
        correctAnswer: "outline view",
    },
    {
        question: "What is the shortcut key for slide show in Libre office impress?",
        options: ["f5", "f7", "f8", "f1"],
        correctAnswer: "f5",
    },
    {
        question: "What is restarting a previously started computer called?",
        options: ["Booting", "Clotting", "Warm booting", "Cold booting"],
        correctAnswer: "Warm booting"
    },

    {
        question: "Which of the following allow you to select more than one slide in Libre office impress?",
        options: ["drag each slide", "shift+click on each slide", "ctrl+click on each slide", "click on each slide"],
        correctAnswer: "ctrl+click on each slide",
    },
    {
        question: "First slide known as in Libre office impress?",
        options: ["home slide", "title slide", "main slide", "none of these"],
        correctAnswer: "title slide",
    },
    {
        question: "What is the shortcut key for jump to last edited slide in Libre office impress?",
        options: ["ctrl+shift+f3", "alt+shift+f4", "ctrl+shift+f7", "alt+shift+f5"],
        correctAnswer: "alt+shift+f5",
    },
    {
        question: "which of the following is not one of libreoffice impress views.",
        options: ["outline view", "impress view", "slide shorter view", "slide view"],
        correctAnswer: "impress view",
    },
    {
        question: "an electronic page in presentation is called as….",
        options: ["page", "e- page", "slide", "e-slide"],
        correctAnswer: "slide",
    },
    {
        question: "...... provides virtual machines, virtual storage, virtual infrastructure, and other hardware assets?",
        options: ["IaaS", "SaaS", "PaaS", "All of the mentioned"],
        correctAnswer: "IaaS"
    },


    {
        question: "AADHAR is a unique identity number issued by____?",
        options: ["UBI", "UIAI", "UIDAI", "UBDAI"],
        correctAnswer: "UIDAI"
    },

    {
        question: "a set of pre-designed formats of text or color scheme is called…..",
        options: ["template", "slide", "schema", "presentation scheme"],
        correctAnswer: "template",
    },
    {
        question: "in open office, impress comes under whivh menu.",
        options: ["Tools", "Project", "Application", "office"],
        correctAnswer: "Tools",
    },
    {
        question: "In vi editor, which command reads the content of another file?",
        options: ["read", "r", "ex", "none of the mentioned"],
        correctAnswer: "ex"
    },

    {
        question: "__________ programs can be used to accomplish functions indirectly that an unauthorized user could not accomplish directly.",
        options: ["Zombie", "Worm", "Trojan Horses", "Logic Bomb"],
        correctAnswer: "Trojan Horses"
    },
    {
        question: "which one of the following is presentation graphics software.",
        options: ["word processor", "writer", "calc", "impress"],
        correctAnswer: "impress",
    },
    {
        question: "The maximum number of slide can be printed on A4 Size page in LibreOffice Impress is ...............",
        options: ["1", "4", "5", "9"],
        correctAnswer: "9",
    },
    {
        question: "Which Menu of LibreOffice Impress found slide transition command available?",
        options: ["File", "view", "Format", "Edit"],
        correctAnswer: "view",
    },
    {
        question: "How many parts are there in an E-mail?",
        options: ["3", "2", "4", "None of these"],
        correctAnswer: "2"
    },  // Q49
    {
        question: "A digital computer did not score over an analog computer in terms of:",
        options: ["Reliability", "Speed", "Cost", "Accuracy"],
        correctAnswer: "Accuracy"
    },
    {
        question: "In LibreOffice Impress in order to see all the slides on one screen use ..............",
        options: ["View, Slide", "View, Master", "View, Slide sorter", "View, Slide show"],
        correctAnswer: "View, Slide sorter",
    },
    // Q76
    {
        question: "Shortcut key of heading 2 in LibreOffice Writer:",
        options: ["ctrl+C", "ctrl+E", "CTRL+2", "CTRL+1"],
        correctAnswer: "CTRL+2",
    },
    // Q77

    {
        question: "ECB stands for",
        options: ["electronic code book", "electronic cipher book", "C electronic clear book", "none of these"],
        correctAnswer: "electronic code book"
    },
    {
        question: "Which menu command is used to create a text box on a slide?",
        options: ["Tool/Text box", "View/Text box", "Insert/Text box", "Format/Text box"],
        correctAnswer: "Insert/Text box",
    },
    {
        question: "The command chmod 761 letter is equivalent to",
        options: ["chmod 4=7, g = 6, o = 1 letter", "chmod a = 761 letter", "chmod u = rwx, g = rw, o = x letter", "chmod 167 letter"],
        correctAnswer: "chmod u = rwx, g = rw, o = x letter"
    },

    {
        question: "We use ............... in our slides to hold text, clip art and charts.",
        options: ["Text box", "Drawing box", "Placeholders", "Window"],
        correctAnswer: "Placeholders",
    },
    {
        question: "In which menu master slide function available?",
        options: ["Slide Show", "Slide", "view", "Tools"],
        correctAnswer: "view",
    },
    {
        question: "which option is not available during print handouts",
        options: ["per page six slide", "per page two slide", "per page three slide", "per page five slide"],
        correctAnswer: "per page five slide",
    },

    {
        question: "We can create a new presentation by using all of the following except.",
        options: ["Ctrl+N", "Ctrl+O", "Click On New Icon", "File Menu"],
        correctAnswer: "Ctrl+N",
    },
    {
        question: "Which command is used to print the login shell of a user?",
        options: ["echo $SHELL", "echo $LOGIN", "echo $LSHELL", "None of the Above"],
        correctAnswer: "echo $SHELL"
    },
    {
        question: "Which command shows all the abbreviations in vi editor?",
        options: ["ab", "abb", "show", "none of the mentioned"],
        correctAnswer: "ab"
    },
    {
        question: "Which of the following will be the full form of IRCTC?",
        options: ["Indian Railway Catering and Tourism Corporation", "Indian Railway Corporation and Tourism Catering", "Indian Railway Catering and Travel Corporation", "None of These"],
        correctAnswer: "Indian Railway Catering and Tourism Corporation"
    },
    // Q75
    {
        question: "Shortcut key of center alignment in LibreOffice Writer:",
        options: ["ctrl+C", "ctrl+E", "CTRL+J", "CTRL+R"],
        correctAnswer: "CTRL+J",
    },

    {
        question: "If a robot is able to change its own trajectory as per the external conditions, then the robot is considered as the__",
        options: ["Mobile", "Non-Servo", "Open Loop", "Intelligent"],
        correctAnswer: "Intelligent"
    },
    {
        question: "User threads are supported above the kernel and managed without",
        options: ["kernel support", "memory", "registers", "operating system"],
        correctAnswer: "kernel support"
    },


    {
        question: "How many types of service models are mainly present in the cloud?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },

    {
        question: "Which of the following is an independent malicious program that needs no host program?",
        options: ["Trap doors", "Trojan horse", "Virus", "Worm"],
        correctAnswer: "Worm"
    },
    {
        question: "What is the full form of NUUP?",
        options: [" National Unified USSD Platform", "National Unifier USSD Platform", "National Universal USSD Platform", "None"],
        correctAnswer: " National Unified USSD Platform"
    },
    {
        question: "How many digits are in IMEI?",
        options: [" 15", "17", "12", "13"],
        correctAnswer: " 15"
    },
    {
        question: "Full form of IMEI?",
        options: [" International mobile equipment identify", "Internet mobile equipment identify", "International mobile equipment identity", "None"],
        correctAnswer: "International mobile equipment identity"
    },
    {
        question: "How many digits is the MMID number?",
        options: [" 7", "5", "12", "11"],
        correctAnswer: " 7"
    },
    {
        question: "What is the full form of IVR?",
        options: [" Inter voice response", "interactive voice response", "interactive violet response", "interactive voice respect"],
        correctAnswer: "interactive voice response"
    },
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













//This code uses the shuffleArray function to shuffle the elements in the data array.It then creates a new array(shuffledArray) by using the spread operator (...). The shuffled array is printed to the console, but you can modify the code based on your specific requirements.





