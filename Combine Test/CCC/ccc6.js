const quizData = [
  {
    question: "What is the internet?",
    options: ["NETWORK OF NETWORKS.", "WIRELESS NETWORK.", "HYPERTEXT DOCUMENTS.", "VIRTUAL NETWORK."],
    correctAnswer: "NETWORK OF NETWORKS."
  },

  {
    question: "Capital adequacy norms declared in the year 1996 is applicable to which type of banks?",
    options: ["Foreign banks", "Co-operative banks", "Private sector banks", "Nationalized banks"],
    correctAnswer: "Nationalized banks"
  },
  {
    question: "What does modem stand for?",
    options: ["Modulator-Demodulator", "Modify-Demodify", "Manipulator-Demanipulator", "None of these"],
    correctAnswer: "Modulator-Demodulator"
  },
  {
    question: "By default what is layout of slide in Libre office impress?",
    options: ["Landscape", "portrait", "both a & b", "none of these"],
    correctAnswer: "Landscape",
  },
  {
    question: "How many digits are there in IFSC code?",
    options: ["10", "12", "11", "13"],
    correctAnswer: "11"
  },
  {
    question: "Which is not a non-impact printer?",
    options: ["Thermal Printer", "Dot Matrix Printer", "Inkjet Printer", "Laser Printer"],
    correctAnswer: "Dot Matrix Printer"
  },
  {
    question: "Email addresses separate the user name from the ISP using the symbol",
    options: ["&", "@", "$", "%"],
    correctAnswer: "@"
  },
  {
    question: "To open downloads in Google Chrome, which key combination is used?",
    options: ["CTRL + R", "CTRL + Z", "CTRL + T", "CTRL + M"],
    correctAnswer: "CTRL + J"
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
    question: "Shortcut key to increase column width in LibreOffice Calc?",
    options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
    correctAnswer: "Alt+Right Arrow"
  },

  {
    question: "Which memory is called as a volatile memory?",
    options: ["RAM", "ROM", "BOTH a & b", "none of these"],
    correctAnswer: "RAM"
  },
  {
    question: "Shortcut key to decrease column width in LibreOffice Calc?",
    options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
    correctAnswer: "Alt+Left Arrow"
  },
  {
    question: "How many characters are there in the bank name in IFSC?",
    options: ["5", "4", "6", "3"],
    correctAnswer: "4"
  },


  {
    question: "What does OSI stand for?",
    options: ["Open System Interconnection", "Open Source Initiative", "Open Source Interconnection", "None of these"],
    correctAnswer: "Open System Interconnection"
  },

  {
    question: "What is the maximum time limit of video that can be uploaded to twitter?",
    options: ["30 Seconds", "1 Minute", "2 Minutes", "2 Minutes 20 Seconds"],
    correctAnswer: "2 Minutes 20 Seconds"
  },
  {
    question: "Which digit separates the bank name and branch code in IFSC?",
    options: ["0", "1", "3", "2"],
    correctAnswer: "0"
  },
  {
    question: "Shortcut key for duplicating shapes in LibreOffice?",
    options: ["Shift+F2", "Shift+F3", "Shift+F4", "Shift+F1"],
    correctAnswer: "Shift+F3"
  },
  //   Q33
  {
    question: "In which menu option mail merge in libre office writer",
    options: ["file", "format", "edit", "tools"],
    correctAnswer: "tools",
  },
  {
    question: "In which menu option macros in libre office writer",
    options: ["file", "format", "tools", "edit"],
    correctAnswer: "tools",
  },
  {
    question: "What is a web crawler also called as?",
    options: ["Link Directory", "Web Spider", "Search Optimizer", "Web Manager"],
    correctAnswer: "Web Spider"
  },
  {
    question:
      "In which menu option donate to libre office in libre office writer",
    options: ["file", "help", "window", "edit"],
    correctAnswer: "help",
  },

  {
    question: "Maximum number of columns in LibreOffice Calc?",
    options: ["1030", "1024", "1058", "1000"],
    correctAnswer: "1024"
  },



  {
    question: "For which card does one have to make advance payment?",
    options: ["Smart card", "Debit card", "Credit card", "Gold card"],
    correctAnswer: "Debit card"
  },
  {
    question: "Which of the following is not a component of e-governance?",
    options: ["Political components", "Technological component", "Service component", "Financial components"],
    correctAnswer: "Financial components"
  },

  {
    question: "What is the maximum limit of characters in a tweet on Twitter?",
    options: ["280", "140", "560", "110"],
    correctAnswer: "280"
  },
  {
    question: "What is notes view in Libre office impress?",
    options: ["notes view", "outline view", "both a & b", "none of these"],
    correctAnswer: "outline view",
  },
  {
    question: "Which of the following terms IS NOT one of the five basic parts of a robot?",
    options: ["Peripheral tools", "End effectors", "Controller", "Drive"],
    correctAnswer: "Peripheral tools"
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
    question: "Which of the following places would be LEAST likely to include operational robots?",
    options: ["Warehouse", "Factory", "Hospitals", "Private homes"],
    correctAnswer: "Private homes"
  },
  {
    question: "Which function counts only numeric data in LibreOffice Calc?",
    options: ["COUNT()", "COUNTA()", "Both A & B", "None of these"],
    correctAnswer: "COUNT()"
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
    question: "Cloud computing system is?",
    options: ["Connectionless", "Reliable", "Stateless", "Stateful"],
    correctAnswer: "Stateless"
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
    question: "Twitter is an example of",
    options: ["E-mail System", "System application", "Social Networking", "Web URL"],
    correctAnswer: "Social Networking"
  },
  {
    question: "All cloud computing applications suffer from the inherent _______ that is intrinsic in their WAN connectivity.",
    options: ["Noise", "Propagation", "Latency", "All of the mentioned"],
    correctAnswer: "Latency"
  },
  {
    question: "Which of the following is the Cloud Platform provided by Amazon?",
    options: ["AWS", "Cloudera", "Azure", "All of the mentioned"],
    correctAnswer: "AWS"
  },

  {
    question: "Twitter is also known as",
    options: ["microblogging", "System application", "browser", "Web URL"],
    correctAnswer: "microblogging"
  },
  {
    question: "How many layers in OSI reference model?",
    options: ["7", "6", "9", "8"],
    correctAnswer: "7"
  },
  {
    question: "CC in email stands for",
    options: ["Carbon catch", "Carbon copy", "Consider copy", "Carbon coupon"],
    correctAnswer: "Carbon copy"
  },
  {
    question: "It detects moving objects with a predefined area of interest.",
    options: ["Motion tracker", "SMD", "HMD", "Motion analyzer"],
    correctAnswer: "HMD"
  },

  {
    question: "How many photos can be uploaded to Facebook simultaneously?",
    options: ["10", "15", "25", "30"],
    correctAnswer: "30"
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
    question: "To open a new tab in Google Chrome, which key combination is used?",
    options: ["CTRL + R", "CTRL + N", "CTRL + T", "CTRL + M"],
    correctAnswer: "CTRL + T"
  },
  {
    question: "To open downloads in Google Chrome, which key combination is used?",
    options: ["CTRL + R", "CTRL + Z", "CTRL + T", "CTRL + M"],
    correctAnswer: "CTRL + J"
  },
  {
    question: "What does modem stand for?",
    options: ["Modulator-Demodulator", "Modify-Demodify", "Manipulator-Demanipulator", "None of these"],
    correctAnswer: "Modulator-Demodulator"
  },
  {
    question: "What does OSI stand for?",
    options: ["Open System Interconnection", "Open Source Initiative", "Open Source Interconnection", "None of these"],
    correctAnswer: "Open System Interconnection"
  },

  {
    question: "How many layers in OSI reference model?",
    options: ["7", "6", "9", "8"],
    correctAnswer: "7"
  },
  {
    question: "Size of IPV6 address?",
    options: ["32 BIT", "128 BIT", "255 BIT", "130 BIT"],
    correctAnswer: "128 BIT"
  },

  {
    question: "Which is the first search engine?",
    options: ["ARCHI", "BING", "ALTA VISTA", "CHA-CHA.COM"],
    correctAnswer: "ARCHI"
  },
  {
    question: "Which is the first web browser?",
    options: ["WWW – (1990)", "INTERNET EXPLORER", "NETSCAPE NAVIGATOR", "SAFARI"],
    correctAnswer: "WWW – (1990)"
  },
  {
    question: "Internet started in which year in India?",
    options: ["1990", "1995", "1996", "1999"],
    correctAnswer: "1990"
  },

  {
    question: "What is the full meaning of N in UMANG App?",
    options: ["New", "National", "New-age", "None"],
    correctAnswer: "New-age"
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
  //   Q27

  {
    question: "Bank having maximum number of branches in India",
    options: ["Reserve Bank of India", "State Bank of India", "Punjab National Bank", "Bank of Baroda"],
    correctAnswer: "State Bank of India"
  }, {
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
    options: ["Based on functionally only", "Based on capabilities only", "Based on capabilities and functionality", "It is not categorized"],
    correctAnswer: "Based on capabilities and functionality"
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
    question: "The ________ is the message after transformation.",
    options: ["Plaintext", "Secret-text", "Ciphertext", "None of the above"],
    correctAnswer: "Ciphertext"
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
    question: "Instagram is a",
    options: ["educational website", "search engine", "social networking website", "shopping website"],
    correctAnswer: "social networking website"
  },


  {
    question: "What does IFSC stand for?",
    options: ["Indian Financial System Code", "Indian Fund System Code", "Indian Financial System Core", "None of these"],
    correctAnswer: "Indian Financial System Code"
  },

  {
    question: "The Place Where All Types Of Email Messages Are Organized Is Called What?",
    options: ["Inbox", "Mailbox", "Outbox", "None Of These"],
    correctAnswer: "Mailbox"
  },


  {
    question: "Which of these schools was not among the early leaders in artificial intelligence research?",
    options: ["Dartmouth University", "Stanford University", "Massachusetts Institute of Technology", "Harvard University"],
    correctAnswer: "Harvard University"
  },


  {
    question: "Which Of The Following Contains The Body Of The Email Message?",
    options: ["Image", "Both Image And Text", "Only Image", "Only Text"],
    correctAnswer: "Both Image And Text"
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
    question: "Last column address in LibreOffice Calc?",
    options: ["AMI", "AMO", "AMJ", "AMU"],
    correctAnswer: "AMJ"
  },
  {
    question: "By default, how many sheets in LibreOffice Calc?",
    options: ["2", "1", "4", "6"],
    correctAnswer: "3"
  },

  {
    question: "What is the shortcut key for slide show in Libre office impress?",
    options: ["f5", "f7", "f8", "f1"],
    correctAnswer: "f5",
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
    question: "Can we send email without subject?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "Maximum number of sheet limit in LibreOffice Calc?",
    options: ["10000", "36000", "32000", "20000"],
    correctAnswer: "10000"
  },

  {
    question: "What is the full form of IMPS?",
    options: ["Immediate Payment Service", "Immediate Fund Transfer Service", "Interested Payment Service", "A & B both"],
    correctAnswer: "Immediate Payment Service"
  },
  {
    question: "QR Code stands for",
    options: ["Quick Result Code", "Quadratic Response Code", "Quick Response Code", "Quick Relay Code"],
    correctAnswer: "Quick Response Code"
  },
  {
    question: "What is the full form of PMSBY?",
    options: ["Pradhan Mantri Secure Bima Yojna", "Pradhan Mantri Security Bima Yojna", "Pradhan Mantri Suraksha Bima Yojna", "None"],
    correctAnswer: "Pradhan Mantri Suraksha Bima Yojna"
  },
  {
    question: "Size of MAC address?",
    options: ["64 bit", "48 bit", "128 bit", "32 bit"],
    correctAnswer: "48 bit"
  },
  {
    question: "PIN stands for",
    options: ["Personal Identification Number", "Permanent Identification Number", "Primary Identification Number", "None of these"],
    correctAnswer: "Personal Identification Number"
  },

  {
    question: "Who developed QR Code?",
    options: ["Intel 1990", "DENSO WAVE in 1994", "Apple in 1995", "None of these"],
    correctAnswer: "DENSO WAVE in 1994"
  },
  {
    question: "What is the shape of QR Code?",
    options: ["Rectangle", "Circle", "Square", "Triangle"],
    correctAnswer: "Square"
  },
  {
    question: "What is the nature of QR Code?",
    options: ["3D", "2D", "Both A & B", "None of these"],
    correctAnswer: "2D"
  },
  {
    question: "Who launched UPI?",
    options: ["Raghuram Rajan", "Shaktikanta Das", "Urjit Patel", "None of these"],
    correctAnswer: "Raghuram Rajan"
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
    question: "MAC stands for?",
    options: ["MEDIA ACCESS CONTROL", "MAIN ACCESS CONTROL", "BOTH A AND B", "NONE OF THESE"],
    correctAnswer: "MEDIA ACCESS CONTROL"
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
