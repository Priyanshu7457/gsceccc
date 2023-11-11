const quizData = [
  {
    question: ".Com Is Stands for Communication",
    options: ["true", "false"],
    correctAnswer: "false"
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
    question: "Which of the following environments is strategic?",
    options: ["Rational", "Deterministic", "Partial", "Stochastic"],
    correctAnswer: "Deterministic"
  },
  {
    question: "What is the name of Artificial Intelligence which allows machines to handle vague information with a deftness that mimics human intuition?",
    options: ["Human intelligence", "Boolean logic", "Functional logic", "Fuzzy logic"],
    correctAnswer: "Fuzzy logic"
  },

  {
    question: "Minimum zoom in LibreOffice Calc?",
    options: ["10%", "20%", "30%", "5%"],
    correctAnswer: "10%"
  },
  {
    question: "Which of the following is not a networking device?",
    options: ["Gateway", "Router", "Switch", "Linux"],
    correctAnswer: "Linux"
  },

  {
    question: "Which of the following is an application of AI?",
    options: ["Gaming", "Expert Systems", "Vision Systems", "All of the above"],
    correctAnswer: "All of the above"
  },
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
    question: "in open office, impress comes under whivh menu.",
    options: ["Tools", "Project", "Application", "office"],
    correctAnswer: "Tools",
  },


  {
    question: "An/A ________ is an act that violates cyber-security.",
    options: ["Threat", "Attack", "Exploit", "Vulnerability"],
    correctAnswer: "Attack"
  },

  {
    question: "In which of the following topologies is the hub used?",
    options: ["Ring", "Bus", "Star", "Mesh"],
    correctAnswer: "Star"
  },
  {
    question: "In system hacking, which of the following is the most crucial activity?",
    options: ["Covering tracks", "Cracking passwords", "Information gathering", "None of the above"],
    correctAnswer: "Cracking passwords"
  }, {
    question: "When a network upgrades to a transmission medium with a data rate that is 100 times faster, this improves the _______ of the network.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Performance"
  },
  {
    question: "A company doubles the number of nodes on its network. The greatest impact will be on the _______ of the network",
    options: ["Performance", "Reliability", "Security", "none of the above"],
    correctAnswer: "Performance"
  },

  {
    question: "A company changes its network configuration so that only one router instead of two can access the Internet. The greatest impact will be on the _______ of the network",
    options: ["Performance", "Reliability", "Security", "none of the above"],
    correctAnswer: "Security"
  },
  {
    question: "A company requires its users to change passwords every month. This improves the _______ of the network",
    options: ["Performance", "Reliability", "Security", "none of the above"],
    correctAnswer: "Security"
  },

  {
    question: "A company buys a computer to serve as a backup to its main server. This will mainly affect the _______ of the network.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Reliability"
  },


  {
    question: "A company requires each employee to power off his computer at the end of the day. This rule was implemented to make the network _______",
    options: ["perform better", "more reliable", "more secure", "more error-free"],
    correctAnswer: "more secure"
  },
  {
    question: "What Security tradeoff occurs while using IDS (Intrusion Detection System)?",
    options: ["Change in permission", "Login Failures", "Change in privilege", "Performance degradation"],
    correctAnswer: "Performance degradation"
  },
  {
    question: "EDI (Electronic Data Interchange) use",
    options: ["requires an extranet", "requires value-added network", "can be done on internet", "requires a corporate intranet"],
    correctAnswer: "can be done on internet"
  },

  {
    question: "Which memory is called non-volatile memory?",
    options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
    correctAnswer: "Both RAM and ROM"
  },
  {
    question: "Shortcut key of subscript in LibreOffice Writer:",
    options: ["crtl+shift+B", "shift+f12", "ctrl+d", "f12"],
    correctAnswer: "crtl+shift+B",
  },
  {
    question: "Mobile security is also known as __________",
    options: ["Wireless security", "OS Security", "Cloud security", "Database security"],
    correctAnswer: "Wireless security"
  },
  {
    question: "Which of the following is/are the composition for AI agents?",
    options: ["Program only", "Architecture only", "Both Program and Architecture", "None of the mentioned"],
    correctAnswer: "Both Program and Architecture"
  },
  {
    question: "On which of the following approach is a basic line-following robot based?",
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
    question: "A firewall is a",
    options: ["wall built to prevent fires from damaging a corporate intranet", "security device deployed at the boundary of a company to prevent unauthorized physical access", "security device deployed at the boundary of a corporate intranet to protect it from unauthorized access", "device to prevent all accesses from the internet to the corporate intranet"],
    correctAnswer: "security device deployed at the boundary of a corporate intranet to protect it from unauthorized access"
  },
  {
    question: "A firewall may be implemented in",
    options: ["routers which connect intranet to internet", "bridges used in an intranet", "expensive modem", "user’s application programs"],
    correctAnswer: "routers which connect intranet to internet"
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
    question: "All received mails are deposited in:",
    options: ["Inbox", "Draft", "Sent mail", "No where"],
    correctAnswer: "Inbox"
  },
  {
    question: "We can send through e-mail:",
    options: ["File", "Picture", "Message", "All the above"],
    correctAnswer: "All the above"
  },
  {
    question: "LinkedIn is related to.",
    options: ["employment", "e-commerce", "both a and b", "none of these"],
    correctAnswer: "employment"
  },
  {
    question: "Which of the following is NOT a social networking site?",
    options: ["Facebook", "twitter", "Instagram", "Google"],
    correctAnswer: "Google"
  },
  {
    question: "Which one of the following is an example of instant messaging?",
    options: ["Wikipedia", "Facebook", "Telegram & WhatsApp", "YouTube"],
    correctAnswer: "Telegram & WhatsApp"
  },
  {
    question: "MIME stands for Multipurpose Internet Mail Extensions",
    options: ["true", "false"],
    correctAnswer: "true"
  },
  {
    question: "Who was the father of E-mail?",
    options: ["Tim Berners Lee", "Ken Thomson", "Vint Cerf", "Ray Tomlinson"],
    correctAnswer: "Ray Tomlinson"
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
    question: "SMTP stands for.",
    options: ["Simple Mail Transfer Protocol", "Simplex Mail Transport Protocol", "Super Mail Transfer Protocol", "None of these"],
    correctAnswer: "Simple Mail Transfer Protocol"
  },
  {
    question: "Which protocol is used to receive a mail in the mailbox?",
    options: ["SMTP", "TCP/IP", "HTTP", "POP3"],
    correctAnswer: "POP3"
  },
  {
    question: "which option is not available during print handouts",
    options: ["per page six slide", "per page two slide", "per page three slide", "per page five slide"],
    correctAnswer: "per page five slide",
  },

  {
    question: "Which of these should be avoided in an E-mail?",
    options: ["Writes a wrong e-mail address", "Subject line", "Smiley’s", "Re-reading"],
    correctAnswer: "Writes a wrong e-mail address"
  },
  {
    question: "How many parts are there in an E-mail?",
    options: ["3", "2", "4", "None of these"],
    correctAnswer: "2"
  },
  {
    question: "Is email case sensitive?",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "What is the port number of SMTP?",
    options: ["80", "25", "30", "21"],
    correctAnswer: "25"
  },
  {
    question: "Command 'echo www.sanfoundary.com>/proc/sys/kernel/hostname' will",
    options: ["Do nothing", "Change host name", "www.sanfoundary.com", "None of these"],
    correctAnswer: "www.sanfoundary.com"
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
    question: "What is the maximum limit of characters in a tweet on Twitter?",
    options: ["280", "140", "560", "110"],
    correctAnswer: "280"
  },

  {
    question: "Default font size in LibreOffice Calc?",
    options: ["12", "11", "10", "13"],
    correctAnswer: "12"
  },
  // Q2
  {
    question: "Default font name in LibreOffice Calc?",
    options: ["Liberation Sans", "Liberation Serif", "Times New Roman", "Calibri"],
    correctAnswer: "Liberation Sans"
  },
  {
    question: "To create a new email, click on which button?",
    options: ["Inbox", "Sent box", "Compose", "New mail"],
    correctAnswer: "Compose"
  },

  {
    question: "Hackers cannot do which of the following after compromising your phone?",
    options: ["Shoulder surfing", "Steal your information", "Use your app credentials", "Accessing your voice mail"],
    correctAnswer: "Shoulder surfing"
  },
  {
    question: "What is the advantage of DigiLocker?",
    options: [
      "Issue e-documents to citizens & eliminates physical documents",
      "Issue physical documents to citizens",
      "Both A & B",
      "None of these"
    ],
    correctAnswer: "Issue e-documents to citizens & eliminates physical documents"
  },


  {
    question: "What is Artificial Intelligence?",
    options: ["Putting your intelligence into Computer", "Programming with your own intelligence", "Making a Machine intelligent", "Playing a Game"],
    correctAnswer: "Making a Machine intelligent"
  },
  {
    question: "Unwanted E-mail is called as",
    options: ["Trash", "Spam", "Both A & B", "None of these"],
    correctAnswer: "Both A & B"
  },
  {
    question: "Transmits time and response time measure the ……… of the network.",
    options: ["Performance", "Reliability", "Security", "Longevity"],
    correctAnswer: "Performance"
  },
  {
    question: "Shortcut key insert textbox in libreoffice impress.",
    options: ["F5", "F2", "F3", "F4"],
    correctAnswer: "F2",
  },
  {
    question: "In artificial Intelligence, knowledge can be represented as_______.",
    options: ["Predicate Logic", "Propositional Logic", "Compound Logic", "Both A & B"],
    correctAnswer: "Both A & B"
  },
  {
    question: "Ways to achieve AI in real life are_________.",
    options: ["Machine Learning", "Deep Learning", "Both a & b", "None of the above"],
    correctAnswer: "Both a & b"
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
    question: "What is minimum zoom percentage in libreoffice impress",
    options: ["20%", "5%", "2%", "10%"],
    correctAnswer: "5%",
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
    question: "EDI (Electronic Data Interchange) over the internet uses",
    options: ["MIME to attach EDI forms to e-mail messages", "FTP to send business forms", "HTTP to send business forms", "SGML to send business forms"],
    correctAnswer: "MIME to attach EDI forms to e-mail messages"
  },

  {
    question: "DigiLocker is connected with:",
    options: ["From Aadhar Card", "From PAN Card", "Both A & B", "None of these"],
    correctAnswer: "From Aadhar Card"
  },
  {
    question: "In which year did John McCarthy coin the term Artificial Intelligence?",
    options: ["1950", "1953", "1956", "1959"],
    correctAnswer: "1956"
  },

  {
    question: "Encryption technique improves a network’s",
    options: ["Performance", "Reliability", "Security", "Longevity"],
    correctAnswer: "Security"
  },
  {
    question: "A ………… illicitly introduced code that damages a network device.",
    options: ["Protocol", "Virus", "Catastrophe", "Medium"],
    correctAnswer: "Virus"
  },
  {
    question: "When a server goes down, this is a network _______ issue.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Reliability"
  },
  {
    question: "Shortcut key of superscript in LibreOffice Writer:",
    options: ["crtl+shift+B", "shift+f12", "ctrl+shift+P", "f12"],
    correctAnswer: "crtl+shift+B",
  },
  {
    question: "Maximum zoom in LibreOffice Calc?",
    options: ["600%", "300%", "100%", "400%"],
    correctAnswer: "600%"
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
