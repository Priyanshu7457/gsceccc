const quizData = [
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
        question: "Which font size is not available in the list in LibreOffice Writer?",
        options: ["15", "16", "19", "20"],
        correctAnswer: "19"
    },
    {
        question: "What is the default font color in LibreOffice Writer?",
        options: ["Yellow", "Red", "Green", "Blue"],
        correctAnswer: "Red" // Assuming black is the default color
    },
    {
        question: "What is the default highlight color in LibreOffice Writer?",
        options: ["Yellow", "Red", "Green", "Blue"],
        correctAnswer: "Yellow" // Assuming yellow is the default color
    },
    {
        question: "What is the extension of LibreOffice Writer?",
        options: [".odp", ".odt", ".ods", ".ott"],
        correctAnswer: ".odt"
    },
    {
        question: "Wizard option available in which menu in LibreOffice Writer?",
        options: ["File", "View", "Edit", "Insert"],
        correctAnswer: "File"
    },
    {
        question: "Shortcut key to insert function wizard in LibreOffice Calc?",
        options: ["Ctrl+F2", "Ctrl+F7", "Ctrl+F1", "Ctrl+F11"],
        correctAnswer: "Ctrl+F2"
    },
    {
        question: "Shortcut key for format cells in LibreOffice Calc?",
        options: ["Ctrl+2", "Ctrl+1", "Ctrl+5", "Ctrl+3"],
        correctAnswer: "Ctrl+1"
    },
    {
        question: "Shortcut key to insert cells in LibreOffice Calc?",
        options: ["Ctrl++", "Ctrl+-", "Ctrl+=", "Ctrl+0"],
        correctAnswer: "Ctrl++"
    },
    {
        question: "Maximum number of rows in LibreOffice Calc?",
        options: ["1048576", "1048580", "1084562", "1048575"],
        correctAnswer: "1048576"
    },
    {
        question: "Maximum number of columns in LibreOffice Calc?",
        options: ["1030", "1024", "1058", "1000"],
        correctAnswer: "1024"
    },
    {
        question: "Full form of SEO?",
        options: ["SEARCH ENGINE OPTIMIZATION", "SERVER ENGINE OPTIMAL", "BOTH A & B", "NONE OF THESE"],
        correctAnswer: "SEARCH ENGINE OPTIMIZATION"
    },
    {
        question: "Full form of IMEI?",
        options: ["INTERNATIONAL MOBILE EQUIPMENT IDENTITY", "INTERNATIONAL MOBILE ENABLE IDENTITY", "INTERNETWORK MOBILE EQUIPMENT IDENTITY", "NONE OF THESE"],
        correctAnswer: "INTERNATIONAL MOBILE EQUIPMENT IDENTITY"
    },
    {
        question: "Full form of FTP?",
        options: ["FILE TEXT PROTOCOL", "FILE TRANSFER PROTOCOL", "FILE TRIBAL PROTOCOL", "NONE OF THESE"],
        correctAnswer: "FILE TRANSFER PROTOCOL"
    },
    {
        question: "Full form of HTML?",
        options: ["HYPERTEXT MARKUP LANGUAGE", "HYPERTEXT MAKER LANGUAGE", "HYPERTEXT MARGIN LANGUAGE", "NONE OF THESE"],
        correctAnswer: "HYPERTEXT MARKUP LANGUAGE"
    },
    {
        question: "Web search engine stores information about many web pages by a?",
        options: ["WEB CRAWLER", "WEB ORGANIZER", "WEB ROUTER", "WEB INDEXER"],
        correctAnswer: "WEB CRAWLER"
    },
    {
        question: "Usually, the signature appears at which place in the email?",
        options: ["At the end", "In the beginning", "In the middle", "None of the above"],
        correctAnswer: "At the end"
    },
    {
        question: "What is the minimum age to join Facebook?",
        options: ["18 years", "15 years", "13 years", "10 years"],
        correctAnswer: "13 years"
    },
    {
        question: "Email is elegant mail.",
        options: ["TRUE", "FALSE"],
        correctAnswer: "FALSE"
    },
    {
        question: "Twitter is an example of",
        options: ["E-mail System", "System application", "Social Networking", "Web URL"],
        correctAnswer: "Social Networking"
    },
    {
        question: "Twitter is also known as",
        options: ["Microblogging", "System application", "Browser", "Web URL"],
        correctAnswer: "Microblogging"
    },
    {
        question: "Choose the correct Instant Messaging app",
        options: ["Twitter", "Linkedin", "Telegram", "Instagram"],
        correctAnswer: "Telegram"
    },
    {
        question: "ORS stands for",
        options: ["Open Resource System", "Online Registration System", "Open Reform System", "Open Repair System"],
        correctAnswer: "Online Registration System"
    },
    {
        question: "E-payment can be done through UPI.",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "Who among the following is the founder of Credit Cards?",
        options: ["Kevin Duffy", "Reid Halfman", "John Biggins", "None of These"],
        correctAnswer: "John Biggins"
    },
    {
        question: "What is the full form of MMID?",
        options: ["Mobile Money Identification", "Mobile Money Identifier", "Mobile Money Information", "None of these"],
        correctAnswer: "Mobile Money Identifier"
    },
    {
        question: "For secure electronic data interchange (EDI) transmission on the internet used….",
        options: ["TCP/IP", "MIME", "S/MIME", "None of above"],
        correctAnswer: "S/MIME"
    },
    {
        question: "_______ gets propagated through networks and technologies like SMS, Bluetooth, wireless medium, USBs, and infrared to affect mobile phones.",
        options: ["Worms", "Antivirus", "Malware", "Multimedia Files"],
        correctAnswer: "Malware"
    },
    {
        question: "Data Encryption Standard (DES) was designed by?",
        options: ["HP", "Sony", "Intel", "IBM"],
        correctAnswer: "IBM"
    },

    {
        question: "How many keys are used for asymmetric-key cipher?",
        options: ["1 Key", "2 Keys", "3 Keys", "4 Keys"],
        correctAnswer: "2 Keys"
    },
    {
        question: "NOSQL stands for...",
        options: ["Negative SQL", "None Opend SQL", "Not only SQL", "None of these"],
        correctAnswer: "Not only SQL"
    },
    {
        question: "Robotics is also a major field related to Artificial Intelligence.",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "Which of the following options is not best described about Industry 4.0?",
        options: ["Smart factory", "Speed", "Analytics", "None of above"],
        correctAnswer: "Speed"
    },
    {
        question: "IOT stands for",
        options: ["Intranet of Things", "Industry of Things", "Internet of Things", "None of above"],
        correctAnswer: "Internet of Things"
    },
    {
        question: "The objective for Industry 4.0 is",
        options: ["Increase efficiency", "Reduced complexity", "Enabled self-controlling", "All of above"],
        correctAnswer: "All of above"
    },
    {
        question: "The huge number of devices connected to the Internet of Things has to communicate automatically, not via humans. What is this called?",
        options: ["Bot to Bot (B2B)", "Machine to Machine (M2M)", "InterCloud", "Skynet"],
        correctAnswer: "Machine to Machine (M2M)"
    },
    {
        question: "An electronic page in a presentation is called as…",
        options: ["Page", "E-page", "Slide", "E-slide"],
        correctAnswer: "Slide"
    },
    {
        question: "LibreOffice Impress is called…",
        options: ["Word processor", "Writer", "Calc", "Presentation"],
        correctAnswer: "Presentation"
    },
    {
        question: "A set of pre-designed formats of text or color scheme is called…",
        options: ["Template", "Slide", "Schema", "Presentation scheme"],
        correctAnswer: "Template"
    },
    {
        question: "Which one of the following is presentation graphics software?",
        options: ["Word processor", "Writer", "Calc", "Impress"],
        correctAnswer: "Impress"
    },
    {
        question: "The maximum number of slides that can be printed on an A4 Size page in LibreOffice Impress is...",
        options: ["1", "4", "5", "9"],
        correctAnswer: "9"
    },
    {
        question: "Arrange memory units in ascending order.",
        options: ["ZB, KB, GB, MB", "KB, MB, GB, ZB", "GB, MB, KB, ZB", "MB, KB, ZB, GB"],
        correctAnswer: "KB, MB, GB, ZB"
    },
    {
        question: "In which year did DVDs come into the market?",
        options: ["1999", "1982", "1995", "1991"],
        correctAnswer: "1995"
    },
    {
        question: "Which device was used in the first generation of computers?",
        options: ["IC", "Transistor", "Vacuum Tubes", "None of these"],
        correctAnswer: "Vacuum Tubes"
    },
    {
        question: "What is the correct sequence of a working computer?",
        options: ["Output, Storage, Input, Process", "Process, Output, Storage, Input", "Input, Process, Output, Storage", "Storage, Input, Process, Output"],
        correctAnswer: "Input, Process, Output, Storage"
    },
    {
        question: "When you start up the computer, the screen at which the BIOS version, manufacturer, and data are displayed is called?",
        options: ["Kernel Loading", "Power On Self Test (POST)", "System Configuration", "Bootstrap"],
        correctAnswer: "Power On Self Test (POST)"
    },
    {
        question: "Linux is a(n) … operating system.",
        options: ["Open source", "Microsoft", "Windows", "Mac"],
        correctAnswer: "Open source"
    },
    {
        question: "Which of the following is not an operating system?",
        options: ["DOS", "Linux", "Windows", "Oracle"],
        correctAnswer: "Oracle"
    },
    {
        question: "The ….. program compresses large files into a smaller file.",
        options: ["WinZip", "WinShrink", "WinStyle", "None of above"],
        correctAnswer: "WinZip"
    },
    {
        question: "What is the full form of PDF?",
        options: ["Portable Document File", "Portable Data Format", "Portable Document Format", "Partial Data File"],
        correctAnswer: "Portable Document Format"
    },
    {
        question: "Which of the following is software whose source code is viewable by the user?",
        options: ["Open source", "Both", "Half open half closed", "Off"],
        correctAnswer: "Open source"
    },
    {
        question: "How many selection modes are available in LibreOffice Writer?",
        options: ["3", "4", "5", "9"],
        correctAnswer: "5"
    },
    {
        question: "The shortcut key Ctrl+[ in LibreOffice Writer is used to decrease the font size. By default, the size of the font is decreased by how much if we press the shortcut key Ctrl+[?",
        options: ["4", "2", "3", "1"],
        correctAnswer: "2"
    },
    {
        question: "How to insert page border in LibreOffice Writer?",
        options: ["Insert -> Page Border", "View -> Page Border", "Format -> Page Border", "Edit -> Page Border"],
        correctAnswer: "Format -> Page Border"
    },
    {
        question: "In LibreOffice Writer, which of the following options shows the available choices in hyperlink?",
        options: ["Internet, Mail, Document, New Document", "Place in the Document, New Document", "Place in this Document, Mail, Document, New Document", "Internet, Mail"],
        correctAnswer: "Internet, Mail, Document, New Document"
    },
    {
        question: "While formatting the shadow style of a table in LibreOffice Writer, which one of the following is not the available position?",
        options: ["Cast shadow to top left", "Cast shadow to top bottom", "Cast shadow to bottom right", "Cast shadow to top right"],
        correctAnswer: "Cast shadow to top bottom"
    },
    {
        question: "Last column address in LibreOffice Calc?",
        options: ["AMI", "AMO", "AMJ", "AMU"],
        correctAnswer: "AMJ"
    },
    {
        question: "By default, how many sheets in LibreOffice Calc?",
        options: ["2", "1", "4", "6"],
        correctAnswer: "1"
    },
    {
        question: "Maximum number of sheet limit in LibreOffice Calc?",
        options: ["10000", "36000", "32000", "20000"],
        correctAnswer: "32000"
    },
    {
        question: "Shortcut key to increase column width in LibreOffice Calc?",
        options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
        correctAnswer: "Alt+Right Arrow"
    },
    {
        question: "Shortcut key to decrease column width in LibreOffice Calc?",
        options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
        correctAnswer: "Alt+Left Arrow"
    },
    {
        question: "Which Menu of LibreOffice Impress found slide transition command available?",
        options: ["File", "View", "Format", "Edit"],
        correctAnswer: "View"
    },
    {
        question: "In LibreOffice Impress, in order to see all the slides on one screen, use...",
        options: ["View, Slide", "View, Master", "View, Slide Sorter", "View, Slide Show"],
        correctAnswer: "View, Slide Sorter"
    },
    {
        question: "Which menu command is used to create a text box on a slide?",
        options: ["Tool/Text box", "View/Text box", "Insert/Text box", "Format/Text box"],
        correctAnswer: "Insert/Text box"
    },
    {
        question: "Which shortcut key is used for a slide show from the current slide?",
        options: ["F5", "Shift+F5", "Ctrl+F5", "None of the Above"],
        correctAnswer: "Shift+F5"
    },
    {
        question: "We use ............... in our slides to hold text, clip art, and charts.",
        options: ["Text box", "Drawing box", "Placeholders", "Window"],
        correctAnswer: "Placeholders"
    },
    {
        question: "Network topology for a large network is?",
        options: ["STAR", "TREE", "BUS", "IRREGULAR"],
        correctAnswer: "STAR"
    },
    {
        question: "What is the format of an IP address?",
        options: ["34 bit", "48 bit", "32 bit", "64 bit"],
        correctAnswer: "32 bit"
    },
    {
        question: "A web crawler is also called as?",
        options: ["Link Directory", "Web Spider", "Search Optimizer", "Web Manager"],
        correctAnswer: "Web Spider"
    },
    {
        question: "Which of the following software could be used to build a website?",
        options: ["PowerPoint", "Excel", "ERP", "Dreamweaver"],
        correctAnswer: "Dreamweaver"
    },
    {
        question: "Wi-Fi Alliance certifies products based on the",
        options: ["IEEE 802.5", "IEEE 802.9", "IEEE 802.3", "IEEE 802."],
        correctAnswer: "IEEE 802.5"
    },
    {
        question: "CC in email stands for",
        options: ["Carbon Catch", "Carbon Copy", "Consider Copy", "Carbon Coupon"],
        correctAnswer: "Carbon Copy"
    },
    {
        question: "Instagram is a",
        options: ["Educational website", "Search Engine", "Social Networking website", "Shopping website"],
        correctAnswer: "Social Networking website"
    },
    {
        question: "The place where all types of email messages are organized is called what?",
        options: ["Inbox", "Mailbox", "Outbox", "None of These"],
        correctAnswer: "Mailbox"
    },
    {
        question: "Which of the following contains the body of the email message?",
        options: ["Image", "Both Image And Text", "Only Image", "Only Text"],
        correctAnswer: "Both Image And Text"
    },
    {
        question: "Email addresses separate the username from the ISP using the symbol",
        options: ["&", "@", "$", "%"],
        correctAnswer: "@"
    },
    {
        question: "Name of Bhim UPI is related to Mahatma Gandhi?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "FALSE"
    },
    {
        question: "Traditional AI techniques still used today include all of the following EXCEPT:",
        options: ["Searching", "Heuristics", "Pattern Recognition", "Parallel Processing"],
        correctAnswer: "Parallel Processing"
    },
    {
        question: "USSD was launched by?",
        options: ["RBI", "SBI", "Bank of Baroda", "Union Bank of India"],
        correctAnswer: "Union Bank of India"
    },
    {
        question: "What is one advantage of the online system for paying bills?",
        options: ["You can pay faster", "You can save money", "You can track transactions in real-time", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which one of the following cloud concepts is related to sharing and pooling the resources?",
        options: ["Polymorphism", "Virtualization", "Abstraction", "None of the mentioned"],
        correctAnswer: "Virtualization"
    },
    {
        question: "Which of the following software could be used to build a website?",
        options: ["Power Points", "Excel", "ERP", "Dreamweaver"],
        correctAnswer: "Dreamweaver"
    },
    {
        question: "Which device is used to backup the data?",
        options: ["System software", "Network drive", "Keyboard", "Printer"],
        correctAnswer: "Network drive"
    },
    {
        question: "Which of the following can be treated as private communication through encryption?",
        options: ["Cryptomessaging", "Crypto currency", "Random Messaging", "Cryptography"],
        correctAnswer: "Cryptomessaging"
    },
    {
        question: "The process of identifying objects and shapes in a photograph, drawing, video, or other visual images.",
        options: ["Pattern Recognition", "Image analysis", "OCR", "Fuzzy logic"],
        correctAnswer: "Image analysis"
    },
    {
        question: "The ability to recover and read deleted or damaged files from a criminal's computer is an example of a low Enforcement specialty called:",
        options: ["Robotics", "Simulation", "Computer forensics", "Animation"],
        correctAnswer: "Computer forensics"
    },
    {
        question: "What was the name of the first recognized IoT device?",
        options: ["Smart Watch", "ATM", "Radio", "Video Game"],
        correctAnswer: "ATM"
    },
    {
        question: "......... is being used by the Internet of Things?",
        options: ["Radio identification technology", "Satellite", "Cable", "Broadband"],
        correctAnswer: "Radio identification technology"
    },
    {
        question: "When was the term IoT first coined?",
        options: ["1998", "1999", "2000", "2001"],
        correctAnswer: "1999"
    },
    {
        question: "The science of examining raw data with the purpose of drawing conclusions about that information?",
        options: ["Data Analytics", "Descriptive Analytics", "In-memory Analytics", "Predictive Analytics"],
        correctAnswer: "Data Analytics"
    },
    {
        question: "The ......... cloud infrastructure is operated for the exclusive use of an organization?",
        options: ["Public", "Private", "Community", "All of the mentioned"],
        correctAnswer: "Private"
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
