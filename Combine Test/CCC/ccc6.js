const quizData = [
  {
    question: "Various applications and documents are displayed on the Windows desktop by?",
    options: ["Mark", "Icon", "Label", "Graph"],
    correctAnswer: "Icon"
  },
  {
    question: "Which of the following is not hardware?",
    options: ["Punch card reader", "Magnetic tape reader", "Printer", "Assembler"],
    correctAnswer: "Assembler"
  },
  {
    question: "Which of the following is the fastest, biggest, costliest computer?",
    options: ["Notebook", "Personal computer", "Laptop", "Super computer"],
    correctAnswer: "Super computer"
  },
  {
    question: "What is the name of India’s first supercomputer?",
    options: ["Saga 220", "PARAM 8000", "ENIAC", "EDVAC"],
    correctAnswer: "PARAM 8000"
  },
  {
    question: "When a computer prints a report, it is called?",
    options: ["Hard Copy", "Soft Copy", "System Copy", "None of these"],
    correctAnswer: "Hard Copy"
  },
  {
    question: "India’s first supercomputer PARAM 8000 developed by which organization.",
    options: ["C-DAC", "Microsoft", "Intel", "None of these"],
    correctAnswer: "C-DAC"
  },
  {
    question: "Interrupts are sent by ________ and received by _________.",
    options: ["CPU, I/O Devices", "I/O Devices, CPU", "Timer, I/O Devices", "CPU, ALU"],
    correctAnswer: "I/O Devices, CPU"
  },
  {
    question: "Which among the following memories is used in Digital Camera?",
    options: ["Virtual Memory", "Flash Memory", "Main Memory", "Cache Memory"],
    correctAnswer: "Flash Memory"
  },
  {
    question: "Which Of The Following Structures Is Followed By A USB Device?",
    options: ["List", "Tree", "Hash", "Huffman"],
    correctAnswer: "Tree"
  },
  {
    question: "Who Among The Following Is The Founder Of 'ENIAC'?",
    options: ["J. Presper Eckert", "John Mauchly", "A & B Both", "Hobby"],
    correctAnswer: "A & B Both"
  },
  {
    question: "What is the full form of GUI?",
    options: ["Graphical User Interface", "Geographical User of Internet", "Giga Uses Internet", "Graphical Unlimited Interface"],
    correctAnswer: "Graphical User Interface"
  },
  {
    question: "Select the Odd one",
    options: ["Operating System", "Interpreter", "Compiler", "Assembler"],
    correctAnswer: "Operating System"
  },
  {
    question: "BOSS (Bharat Operating System Solutions) OS is developed in",
    options: ["USA", "UK", "INDIA - India", "China"],
    correctAnswer: "INDIA - India"
  },
  {
    question: "What is the use of folders in a computer?",
    options: ["Name your files", "Ensure the computer starts properly", "Organize the files on a disk", "Create a file allocation table"],
    correctAnswer: "Organize the files on a disk"
  },
  {
    question: "Software designed for a specific purpose is called as.",
    options: ["System Software", "Application Software", "Specific Software", "Compiler"],
    correctAnswer: "Application Software"
  },
  {
    question: "A system that can process two or more programs is called Multiprogramming",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "FAT means File allocation table.",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "The task manager can be activated by the key combination.",
    options: ["ALT+DEL", "CTRL+DEL", "CTRL+ALT+DEL", "SHIFT+ALT+DEL"],
    correctAnswer: "CTRL+ALT+DEL"
  },
  {
    question: "Access time is",
    options: ["Seek time + latency time", "Seek time", "Seek time - latency time", "Latency time"],
    correctAnswer: "Seek time + latency time"
  },
  {
    question: "Types of Software includes",
    options: ["Systems Software", "Application Software", "Both A and B", "None of These"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Short cut key of exit LibreOffice in LibreOffice Writer",
    options: ["CTRL+Q", "CTRL+N", "CTRL+P", "CTRL+Z"],
    correctAnswer: "CTRL+Q"
  },
  {
    question: "Short cut key of repeat in LibreOffice Writer",
    options: ["CTRL+SHIFT+M", "CTRL+SHIFT+Y", "CTRL+SHIFT+P", "CTRL+SHIFT+O"],
    correctAnswer: "CTRL+SHIFT+Y"
  },
  {
    question: "Short cut key of redo in LibreOffice Writer",
    options: ["CTRL+Q", "CTRL+N", "CTRL+P", "CTRL+Y"],
    correctAnswer: "CTRL+Y"
  },
  {
    question: "Short cut key of paste special in LibreOffice Writer",
    options: ["CTRL+SHIFT+V", "CTRL+SHIFT+Y", "CTRL+SHIFT+P", "CTRL+SHIFT+O"],
    correctAnswer: "CTRL+SHIFT+V"
  },
  {
    question: "Short cut key of find & replace in LibreOffice Writer",
    options: ["CTRL+H", "CTRL+N", "CTRL+P", "CTRL+Y"],
    correctAnswer: "CTRL+H"
  },
  {
    question: "Short cut key of go to page in LibreOffice Writer",
    options: ["CTRL+H", "CTRL+N", "CTRL+G", "CTRL+Y"],
    correctAnswer: "CTRL+G"
  },
  {
    question: "Short cut key of track changes or record in LibreOffice Writer",
    options: ["CTRL+SHIFT+V", "CTRL+SHIFT+Y", "CTRL+SHIFT+C", "CTRL+SHIFT+O"],
    correctAnswer: "CTRL+SHIFT+C"
  },
  {
    question: "Short cut key of ruler in LibreOffice Writer",
    options: ["CTRL+SHIFT+V", "CTRL+SHIFT+Y", "CTRL+SHIFT+C", "CTRL+SHIFT+R"],
    correctAnswer: "CTRL+SHIFT+R"
  },
  {
    question: "Short cut key of formatting marks in LibreOffice Writer",
    options: ["CTRL+F12", "CTRL+8", "CTRL+F10", "CTRL+F11"],
    correctAnswer: "CTRL+F10"
  },
  {
    question: "Short cut key of side bar in LibreOffice Writer",
    options: ["CTRL+F12", "CTRL+F5", "CTRL+F10", "CTRL+F11"],
    correctAnswer: "CTRL+F5"
  },
  {
    question: "If cell width is not enough in LibreOffice Calc, display the result",
    options: ["***", "$$$", "###", "@@@"],
    correctAnswer: "###"
  },
  {
    question: "The active cell is G7. If you press the HOME key, then you will reach at :",
    options: ["G1", "A7", "G7", "None of these"],
    correctAnswer: "A7"
  },
  {
    question: "The active cell is G7. If you press the CTRL + HOME key, then you will reach at :",
    options: ["G1", "A7", "A1", "None of these"],
    correctAnswer: "A1"
  },
  {
    question: "SUM(5,2) display the result in LibreOffice Calc",
    options: ["7", "10", "3", "25"],
    correctAnswer: "7"
  },
  {
    question: "Which of the following function is used to display current date and time in LibreOffice Calc?",
    options: ["Date()", "Date()", "Now()", "Time()"],
    correctAnswer: "Now()"
  },
  {
    question: "COUNT(4,2,3,8)/COUNT(a,b,c,d) display the result in LibreOffice Calc",
    options: ["#DIV/0!", "#NUM!", "Divided by zero error", "None of these"],
    correctAnswer: "#DIV/0!"
  },
  {
    question: "If you select column D4 and D5 and press CTRL+-, what result displays in LibreOffice Calc.",
    options: ["New column insert after D5", "New column insert before D4", "Column D4 & D5 will be deleted", "None of these"],
    correctAnswer: "Column D4 & D5 will be deleted"
  },
  {
    question: "AVERAGE(4,2,6,4) display the result in LibreOffice Calc",
    options: ["4", "6", "8", "2"],
    correctAnswer: "4"
  },
  {
    question: "Which is not a correct function in LibreOffice Calc",
    options: ["=MAX()", "=SUM()", "=COUNT()", "=AVG()"],
    correctAnswer: "=AVG()"
  },
  {
    question: "COUNTA(4,a,p,5,0,h) display the result in LibreOffice Calc",
    options: ["3", "6", "5", "2"],
    correctAnswer: "3"
  },
  {
    question: "How many sections in the sidebar of Impress",
    options: ["9", "5", "3", "7"],
    correctAnswer: "7"
  },
  {
    question: "Rehearse time will start counting in units.",
    options: ["Mini seconds", "Hours", "Minutes", "Seconds"],
    correctAnswer: "Seconds"
  },
  {
    question: "Shortcut key for position and size in LibreOffice Impress",
    options: ["F1", "F3", "F2", "F4"],
    correctAnswer: "F4"
  },
  {
    question: "What is optimal zoom percentage in LibreOffice Impress",
    options: ["95%", "125%", "100%", "91%"],
    correctAnswer: "95%"
  },
  {
    question: "What are slide transition variant options.",
    options: ["Inside and common slide", "Most slide and least slide", "Outside and most side", "Outside and inside"],
    correctAnswer: "Outside and inside"
  },
  {
    question: "In OpenOffice, Impress comes under which menu.",
    options: ["Tools", "Project", "Application", "Office"],
    correctAnswer: "Tools"
  },
  {
    question: "Which option is not available during print handouts",
    options: ["Per page six slide", "Per page two slide", "Per page three slide", "Per page five slide"],
    correctAnswer: "Per page five slide"
  },
  {
    question: "Shortcut key insert textbox in LibreOffice Impress.",
    options: ["F5", "F2", "F3", "F4"],
    correctAnswer: "F2"
  },
  {
    question: "What is the minimum zoom percentage in LibreOffice Impress?",
    options: ["20%", "5%", "2%", "10%"],
    correctAnswer: "5%"
  },
  {
    question: "Which of these terms do we use when an image in clip art changes the direction that it was originally facing?",
    options: ["Mirror", "Rotate", "Flip", "Group"],
    correctAnswer: "Rotate"
  },
  {
    question: "What is loopback IP ADDRESS?",
    options: ["127.0.0.1", "127.0.0.0", "127.1.1.0", "None of these"],
    correctAnswer: "127.0.0.1"
  },
  {
    question: "The size of the packet is larger than the size of the frame?",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "WLAN stands for",
    options: [
      "Wireless Local Area Network",
      "Wired Local Area Network",
      "Wireless Local Ambiguity Network",
      "Wired Latent Area Network"
    ],
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
    question: "Which devices are commonly shared between computers?",
    options: ["Mouse", "Speakers", "Printers", "Keyboard"],
    correctAnswer: "Printers"
  },
  {
    question: "What will happen when CTRL+W is pressed?",
    options: ["Open the tab on a browser", "Close a tab on a browser", "Close the Browser", "Open the Browser"],
    correctAnswer: "Close a tab on a browser"
  },
  {
    question: ".Com Is Stands for Communication?",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "Which of the following is not a networking device?",
    options: ["Gateway", "Router", "Switch", "Linux"],
    correctAnswer: "Linux"
  },
  {
    question: "In which of the following topologies is the hub used?",
    options: ["Ring", "Bus", "Star", "Mesh"],
    correctAnswer: "Star"
  },
  {
    question: "If you are buying a product from Flipkart, Amazon, and Snapdeal, this type of business model is called",
    options: ["B2B", "C2C", "B2C", "G2G"],
    correctAnswer: "B2C"
  },
  {
    question: "Quikr, OLX are examples of C2C business models.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "If Maruti company purchases a tire from MRF company, this business is called",
    options: ["B2B", "C2C", "B2C", "G2G"],
    correctAnswer: "B2B"
  },
  {
    question: "Which app is used for ticket booking from IRCTC?",
    options: ["Rail Tail", "Rail Connect", "Rail Sarthi", "None of these"],
    correctAnswer: "Rail Connect"
  },
  {
    question: "UMANG stands for",
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
    question: "UMANG app is launched in how many languages?",
    options: ["13", "12", "15", "20"],
    correctAnswer: "13"
  },
  {
    question: "UMANG app is launched by which organization?",
    options: [
      "Ministry of Electronics and Information Technology (MeitY) and National e-Governance Division (NeGD).",
      "National Payment Corporation of India (NPCI)",
      "Synergised Advanced Application Rail Travel Help and Information (Saarthi).",
      "None of these"
    ],
    correctAnswer: "Ministry of Electronics and Information Technology (MeitY) and National e-Governance Division (NeGD)."
  },
  {
    question: "DigiLocker was launched in which year?",
    options: ["2020", "2015", "2016", "2017"],
    correctAnswer: "2015"
  },
  {
    question: "What is the maximum storage space in DigiLocker?",
    options: ["2 GB", "1 GB", "5 GB", "GB"],
    correctAnswer: "1 GB"
  },
  {
    question: "How many characters are in the bank name in IFSC?",
    options: ["5", "4", "6", "3"],
    correctAnswer: "4"
  },
  {
    question: "Which digit separates the bank name and branch code from each other in IFSC?",
    options: ["0", "1", "3", "2"],
    correctAnswer: "0"
  },
  {
    question: "For which card does one have to make an advance payment?",
    options: ["Smart card", "Debit card", "Credit card", "Gold card"],
    correctAnswer: "Debit card"
  },
  {
    question: "Capital adequacy norms declared in the year 1996 are applicable to",
    options: ["Foreign banks", "Co-operative banks", "Private sector banks", "Nationalized banks"],
    correctAnswer: "Nationalized banks"
  },
  {
    question: "NEFT works on the principle of which of the following?",
    options: ["Deferred Net Settlement", "Different Net Settlement", "Core Banking System", "None of these"],
    correctAnswer: "Deferred Net Settlement"
  },
  {
    question: "Single platform for pan India e-gov services in India",
    options: ["NABARD", "UPI", "UMANG", "BHIM"],
    correctAnswer: "UMANG"
  },
  {
    question: "Which banking service is used to send money internationally?",
    options: ["NEFT", "RTGS", "SWIFT", "All of the above"],
    correctAnswer: "SWIFT"
  },
  {
    question: "SWIFT stands for",
    options: [
      "The Society for Worldwide Interbank Financial Telecommunications.",
      "The Society for Worldwide International Financial Telecommunications",
      "The Society for Worldwide Internetwork Financial Telecommunications",
      "None of these"
    ],
    correctAnswer: "The Society for Worldwide Interbank Financial Telecommunications."
  },
  {
    question: "What is the expiry date format on an ATM card?",
    options: ["YY/MM", "DD/MM", "MM/YY", "None of these"],
    correctAnswer: "MM/YY"
  },
  {
    question: "How many passport offices are there in India?",
    options: ["40", "37", "51", "48"],
    correctAnswer: "37"
  },
  {
    question: "It allows a visitor to a website to store its own information about a user on the user’s computer",
    options: ["Spam", "Cookies", "Malware", "Adware"],
    correctAnswer: "Cookies"
  },
  {
    question: "Who is the father of Computer Security or Cyber Security?",
    options: ["Robert", "Charles", "Bob Thomas", "August Kerckhoffs"],
    correctAnswer: "August Kerckhoffs"
  },
  {
    question: "__________ is a violent act done using the Internet, which either threatens any technology user or leads to the loss of life or otherwise harms anyone in order to accomplish political gain.",
    options: ["Cyber attack", "Cyber-warfare", "Cyber-terrorism", "Cyber campaign"],
    correctAnswer: "Cyber-terrorism"
  },
  {
    question: "Which of the following is an objective of network security?",
    options: ["Confidentiality", "Integrity", "Availability", "All of the Above"],
    correctAnswer: "All of the Above"
  },
  {
    question: "XSS is abbreviated as _______",
    options: ["X Site Scripting", "Cross Site Scripting", "Cross Site Security", "Extreme Secure Scripting"],
    correctAnswer: "Cross Site Scripting"
  },
  {
    question: "Which of the following is not a cybercrime?",
    options: ["AES", "Malware", "Man in the Middle", "Denial of Service"],
    correctAnswer: "AES"
  },
  {
    question: "Which method of hacking will record all your keystrokes?",
    options: ["Keylogger", "Keyjacking", "Keyhijacking", "Keyboard monitoring"],
    correctAnswer: "Keylogger"
  },
  {
    question: "Which of the following refers to exploring the appropriate, ethical behaviors related to the online environment and digital media platform?",
    options: ["Cyber Ethics", "Cyber Low", "Cyber Safety", "Cyber Security"],
    correctAnswer: "Cyber Ethics"
  },
  {
    question: "An/A ________ is an act that violates cyber-security.",
    options: ["Threat", "Attack", "Exploit", "Vulnerability"],
    correctAnswer: "Attack"
  },
  {
    question: "In system hacking, which of the following is the most crucial activity?",
    options: ["Covering tracks", "Cracking passwords", "Information gathering", "None of the above"],
    correctAnswer: "Cracking passwords"
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
