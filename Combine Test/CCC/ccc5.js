const quizData = [
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
    question: "Which key is used to print a document in LibreOffice Impress?",
    options: ["Ctrl+A", "Ctrl+C", "Ctrl+P", "Ctrl+D"],
    correctAnswer: "Ctrl+P"
  },
  {
    question: "Which of the following shortcut keys is used to end the presentation in LibreOffice Impress?",
    options: ["End", "Esc", "Home", "None of the above"],
    correctAnswer: "Esc"
  },
  {
    question: "Which of the following keys is used to select the objects in the order in which they were created?",
    options: ["Tab Key", "Esc Key", "Function Key", "None of the above"],
    correctAnswer: "Tab Key"
  },
  {
    question: "Which option can be used to set custom timings for slides in a presentation?",
    options: ["Slide Timings", "Slide Timer", "Rehearsal", "Slide show setup"],
    correctAnswer: "Rehearsal"
  },
  {
    question: "In presentations, which of the following can be inserted?",
    options: ["Sound Clips", "Movie Clips", "Both (A) & (B)", "None of the above"],
    correctAnswer: "Both (A) & (B)"
  },
  {
    question: "Which of the following is the shortcut key to start a slide show from the current slide?",
    options: ["F5", "Shift+F5", "Ctrl+F5", "None of the above"],
    correctAnswer: "Shift+F5"
  },
  {
    question: "Which of the following menu has the Background in Libre Impress",
    options: ["Insert", "Slide", "Slide Show", "View"],
    correctAnswer: "Slide"
  },
  {
    question: "Pressing Which Of The Following Does Not Advance 'slide Show'?",
    options: ["Esc Key", "F5 Key", "Mouse Button", "None of These"],
    correctAnswer: "Esc Key"
  },
  {
    question: "Libreoffice Impress Can Also Be Known As 'open Source Presentation Software Module'?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "How to start a new presentation in impress in using",
    options: ["New presentation", "Create presentation", "Open presentation", "Presentation wizard"],
    correctAnswer: "New presentation"
  },
  {
    question: "In which menu option emphasis in libre office writer",
    options: ["File", "Form", "Window", "Styles"],
    correctAnswer: "Styles"
  },
  {
    question: "In which menu option watermark in libre office writer",
    options: ["File", "Form", "Format", "Styles"],
    correctAnswer: "Format"
  },
  {
    question: "If you want to save your document in a remote location in libre office writer, click on",
    options: ["Save as", "Save remote", "Save", "Open remote"],
    correctAnswer: "Save remote"
  },
  {
    question: "In which menu option digital signature in libre office writer",
    options: ["File", "Form", "Format", "Styles"],
    correctAnswer: "File"
  },
  {
    question: "In which menu option export as PDF in libre office writer",
    options: ["File", "Form", "Format", "Styles"],
    correctAnswer: "File"
  },
  {
    question: "Shortcut key for open a new document in libre office writer",
    options: ["Ctrl+M", "Ctrl+N", "Ctrl+P", "Ctrl+Z"],
    correctAnswer: "Ctrl+N"
  },
  {
    question: "Shortcut key for save as in libre office writer",
    options: ["Ctrl+M+Shift", "Ctrl+Shift+S", "Ctrl+S", "Ctrl+Z"],
    correctAnswer: "Ctrl+Shift+S"
  },
  {
    question: "Shortcut key for save in libre office writer",
    options: ["Ctrl+M+Shift", "Ctrl+Shift+S", "Ctrl+S", "Ctrl+Z"],
    correctAnswer: "Ctrl+S"
  },
  {
    question: "Shortcut key for print in libre office writer",
    options: ["Ctrl+M", "Ctrl+N", "Ctrl+P", "Ctrl+Z"],
    correctAnswer: "Ctrl+P"
  },
  {
    question: "Shortcut key for print preview in libre office writer",
    options: ["Ctrl+Shift+M", "Ctrl+Shift+N", "Ctrl+Shift+P", "Ctrl+Shift+O"],
    correctAnswer: "Ctrl+Shift+O"
  },
  {
    question: "Which language is used in the fifth generation?",
    options: ["Assembly language", "High-level language", "Artificial language", "None of these"],
    correctAnswer: "Artificial language"
  },
  {
    question: "Who invented IC?",
    options: ["Charles Babbage", "JS Kilby and Robert Noyce", "Mark Waugh", "None of these"],
    correctAnswer: "JS Kilby and Robert Noyce"
  },
  {
    question: "Which memory is called the waiting room of the computer?",
    options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
    correctAnswer: "RAM"
  },
  {
    question: "Starting a computer is known as:",
    options: ["Booting", "Clotting", "Smoothing", "None of these"],
    correctAnswer: "Booting"
  },
  {
    question: "What is slang language?",
    options: ["Standard vocabulary", "Non-standard vocabulary", "Fancy words", "Formal language"],
    correctAnswer: "Non-standard vocabulary"
  },
  {
    question: "What are the two types of memory?",
    options: ["Primary & Secondary", "Low and High", "Both Primary and Secondary", "None of these"],
    correctAnswer: "Primary & Secondary"
  },
  {
    question: "What is restarting a previously started computer called?",
    options: ["Booting", "Clotting", "Warm booting", "Cold booting"],
    correctAnswer: "Warm booting"
  },
  {
    question: "A digital computer did not score over an analog computer in terms of:",
    options: ["Reliability", "Speed", "Cost", "Accuracy"],
    correctAnswer: "Accuracy"
  },
  {
    question: "Which computers operate essentially by counting?",
    options: ["Digital computers", "Analog computers", "Portable computers", "Hybrid computers"],
    correctAnswer: "Digital computers"
  },
  {
    question: "................. represents raw facts, whereas ................... is data made meaningful.",
    options: ["Information, bits", "Information, reporting", "Records, bytes", "Data, information"],
    correctAnswer: "Data, information"
  },
  {
    question: "What is the maximum filename size in Linux in bytes?",
    options: ["32", "64", "126", "255"],
    correctAnswer: "255"
  },
  {
    question: "Ubuntu software is based on the principles of open source software development?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "If the system time and date are incorrect, you can reset using ...........?",
    options: ["Write File", "Calendar", "Task Manager", "System Setting"],
    correctAnswer: "System Setting"
  },
  {
    question: "A folder is also called a directory?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "DOS is based on GUI",
    options: ["TRUE", "FALSE"],
    correctAnswer: "FALSE"
  },
  {
    question: "What do you use to directly delete a file so that the file is not stored in the recycling bin?",
    options: ["Delete", "Shift + Delete", "Right click - Delete", "None"],
    correctAnswer: "Shift + Delete"
  },
  {
    question: "What will you do first with Cut, Copy?",
    options: ["Text Select", "Paste", "Bold", "None"],
    correctAnswer: "Text Select"
  },
  {
    question: "Which of the following file extensions indicate only graphics files?",
    options: ["BMP and DOC", "JPEG and TXT", "TXT and STK", "BMP and GIF"],
    correctAnswer: "BMP and GIF"
  },
  {
    question: "What is the default file extension of notepad?",
    options: [".doc", ".html", ".txt", ".tif"],
    correctAnswer: ".txt"
  },
  {
    question: "Which of the following is not the OPERATING SYSTEM?",
    options: ["DOS", "Linux", "Windows", "Oracle"],
    correctAnswer: "Oracle"
  },
  {
    question: "Which of the following devices is used in Artificial Intelligence?",
    options: ["Art", "Design", "Input", "Neural Network"],
    correctAnswer: "Neural Network"
  },
  {
    question: "Total elements in the Open IoT Architecture is __",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "Which of the following is not a fundamental component of an IoT system?",
    options: ["Sensors", "Actuators", "Microprocessors", "Transformer"],
    correctAnswer: "Transformer"
  },
  {
    question: "Which of the following is used to capture data from the physical world in IoT devices?",
    options: ["Sensors", "Actuators", "Microprocessors", "Microcontrollers"],
    correctAnswer: "Sensors"
  },
  {
    question: "Which of the following protocol is used to link all the devices in the IoT?",
    options: ["HTTP", "UDP", "Network", "TCP/IP"],
    correctAnswer: "TCP/IP"
  },
  {
    question: "Which wireless communication protocol is commonly used in IoT devices?",
    options: ["Wi-Fi", "Bluetooth", "NFC", "Infrared"],
    correctAnswer: "Bluetooth"
  },
  {
    question: "Which of the following is not a main element of IoT?",
    options: ["People", "Process", "Security", "Things"],
    correctAnswer: "People"
  },
  {
    question: "What is the benefit of HTTP over MQTT?",
    options: ["More Secure", "Lightweight", "Both A and B", "None"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Mostly used protocols in IoT are?",
    options: ["ZigBee", "MQTT", "XMPP", "All of above"],
    correctAnswer: "All of above"
  },
  {
    question: "What is the full form of 'AI'?",
    options: ["Artificially Intelligent", "Artificial Intelligence", "Artificially Intelligence", "Advanced Intelligence"],
    correctAnswer: "Artificial Intelligence"
  },
  {
    question: "The objective for industry 4.0 is",
    options: ["Increase efficiency", "Reduced complexity", "Enabled self-controlling", "All of above"],
    correctAnswer: "All of above"
  },
  {
    question: "This is not a benefit of Big Data analytics",
    options: ["Faster, better decision making", "Cost Reduction", "Manage of Data", "None of the above"],
    correctAnswer: "Manage of Data"
  },
  {
    question: "Unsolicited Bulk E-mails (UBI) are called __________",
    options: ["SMS", "MMS", "Spam emails", "Malicious emails"],
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
    options: ["Phishing", "Soliciting", "Dos attacks", "Stalking"],
    correctAnswer: "Dos attacks"
  },
  {
    question: "Which of the following is not an external threat to a computer or a computer network.",
    options: ["Ignorance", "Trojan horse", "Adware", "Crackers"],
    correctAnswer: "Ignorance"
  },
  {
    question: "When a person is harassed repeatedly by being followed, called, or written to, he or she is the target of",
    options: ["Bullying", "Stalking", "Identity theft", "Phishing"],
    correctAnswer: "Stalking"
  },
  {
    question: "Viruses are",
    options: ["Man-made", "Naturally occur", "Machine made", "All of these"],
    correctAnswer: "Man-made"
  },
  {
    question: "Monitors user activity on the internet and transmits that information in the background to someone else",
    options: ["Malware", "Spyware", "Adware", "None of these"],
    correctAnswer: "Spyware"
  },
  {
    question: "QR Code stands for",
    options: ["Quick Result Code", "Quadratic Response Code", "Quick Response Code", "Quick Rely Code"],
    correctAnswer: "Quick Response Code"
  },
  {
    question: "Who developed QR Code.",
    options: ["Intel 1990", "DENSO WAVE in 1994", "Apple in 1995", "None of these"],
    correctAnswer: "DENSO WAVE in 1994"
  },
  {
    question: "What is the shape of QR Code.",
    options: ["Rectangle", "Circle", "Square", "Triangle"],
    correctAnswer: "Square"
  },
  {
    question: "What is the nature of QR Code.",
    options: ["3D", "2D", "Both A & B", "None of these"],
    correctAnswer: "2D"
  },
  {
    question: "Who launched UPI?",
    options: ["Raghu Ram Rajan", "Sashi Kant Das", "Urjit Patel", "None of these"],
    correctAnswer: "Raghu Ram Rajan"
  },
  {
    question: "Who developed UPI?",
    options: ["NPCI", "ICICI", "NSEI", "None of these"],
    correctAnswer: "NPCI"
  },
  {
    question: "How much money can be transferred by UPI in one day?",
    options: ["200000", "500000", "100000", "300000"],
    correctAnswer: "100000"
  },
  {
    question: "How much money can be transferred by BHIM in one day?",
    options: ["20000", "50000", "10000", "40000"],
    correctAnswer: "40000"
  },
  {
    question: "IFSC stands for",
    options: ["Indian Financial System Code", "Indian Fund System Code", "Indian Financial System Core", "None of these"],
    correctAnswer: "Indian Financial System Code"
  },
  {
    question: "How many digits are there in the IFSC code?",
    options: ["10", "12", "11", "13"],
    correctAnswer: "11"
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
    question: "Unwanted E-mail is called as.",
    options: ["Trash", "Spam", "Both A & B", "None of these"],
    correctAnswer: "Spam"
  },
  {
    question: "What is the maximum limit of characters on Twitter to write a message or tweet?",
    options: ["280", "140", "560", "110"],
    correctAnswer: "280"
  },
  {
    question: "What was the old name of Twitter?",
    options: ["Twter", "Twttr", "Twiter", "None of these"],
    correctAnswer: "Twttr"
  },
  {
    question: "Which is not an example of instant messaging?",
    options: ["WhatsApp", "Facebook Messenger", "Telegram", "E-mail"],
    correctAnswer: "E-mail"
  },
  {
    question: "Who is the father of Telegram?",
    options: ["Jack Dorsey", "Elon Musk", "Mark Zuckerberg", "Pavel Durov & Nikolai"],
    correctAnswer: "Pavel Durov & Nikolai"
  },
  {
    question: "A person who writes a blog or weblog is known as.",
    options: ["Webmaster", "Communicator", "Blogger", "None of these"],
    correctAnswer: "Blogger"
  },
  {
    question: "Size of MAC address.",
    options: ["64 bit", "48 bit", "128 bit", "32 bit CCC"],
    correctAnswer: "48 bit"
  },
  {
    question: "Which is the first search engine?",
    options: ["Archi", "Bing", "Alta Vista", "Cha-Cha"],
    correctAnswer: "Archi"
  },
  {
    question: "Which is the first web browser?",
    options: ["WWW – (1990)", "Internet Explorer", "Netscape Navigator", "Safari"],
    correctAnswer: "WWW – (1990)"
  },
  {
    question: "Internet started in which year in India.",
    options: ["1990", "1995", "1996", "1999"],
    correctAnswer: "1995"
  },
  {
    question: "What is the code used for IMEI number.",
    options: ["*#06#", "*##06", "*06#*", "None of these"],
    correctAnswer: "*#06#"
  },
  {
    question: "Watching live video on the internet is called.",
    options: ["Streaming", "Browsing", "Buffering", "None of these"],
    correctAnswer: "Streaming"
  },
  {
    question: "How many layers in TCP/IP?",
    options: ["5", "4", "7", "9"],
    correctAnswer: "4"
  },
  {
    question: "DHCP stands for.",
    options: ["Dynamic Host Configuration Protocol", "Dynamic High Control Protocol", "Both A & B", "None of these"],
    correctAnswer: "Dynamic Host Configuration Protocol"
  },
  {
    question: "Which guided media provides the highest mode of speed?",
    options: ["Coaxial cable", "Fiber optic cable", "Unshielded twisted pair", "None of these"],
    correctAnswer: "Fiber optic cable"
  },
  {
    question: "ISP exchanges internet traffic between their networks by",
    options: ["Internet Exchange Point", "ISP End Point", "Both A & B", "None of these"],
    correctAnswer: "Internet Exchange Point"
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
