const quizData = [
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
  {
    question: "What are the main components of the CPU?",
    options: ["Hard Disk, Monitor, Keyboard", "RAM, ROM, Printer", "CD, DVD, Pendrive", "Control Unit, Memory Unit, ALU"],
    correctAnswer: "Control Unit, Memory Unit, ALU"
  },
  {
    question: "Which of the following devices can be used to convert characters of printed text into an image?",
    options: ["OCR", "MICR", "OMR", "All of the options"],
    correctAnswer: "All of the options"
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
    question: "One nibble is equal to?",
    options: ["Half a byte", "One byte", "Both a & b", "None of these"],
    correctAnswer: "Half a byte"
  },
  // Q23
  {
    question: "What is the full form of UNIVAC?",
    options: ["Universal Automatic Computer", "Uniary All Communication", "Both a & b", "None of these"],
    correctAnswer: "Universal Automatic Computer"
  },
  {
    question: "1000 gigabytes is equal to?",
    options: ["1 PB", "1 ZB", "1 TB", "1 MB"],
    correctAnswer: "1 TB"
  },
  // Q15
  {
    question: "Apple company used chips from which company for its computer?",
    options: ["Motorola", "Intel", "Both a & b", "None of these"],
    correctAnswer: "Both a & b"
  },

  {
    question: "Shortcut key of increase font size in LibreOffice Writer:",
    options: ["crtl+]", "ctrl+[", "ctrl++", "ctrl+1"],
    correctAnswer: "ctrl+]",
  },
  {
    question: "Which command prints the directory stack?",
    options: ["cd", "dirs", "popd", "pushd"],
    correctAnswer: "dirs"
  },
  {
    question: "Which command removes a directory from the directory stack?",
    options: ["dirs", "popd", "pushd", "rm"],
    correctAnswer: "popd"
  },
  {
    question: "Arrange memory units in ascending order.",
    options: ["ZB, KB, GB, MB", "KB, MB, GB, ZB", "GB, MB, KB, ZB", "MB, KB, ZB, GB"],
    correctAnswer: "KB, MB, GB, ZB"
  },
  // Q17
  {
    question: "In which year did DVDs come into the market?",
    options: ["1999", "1982", "1995", "1991"],
    correctAnswer: "1995"
  },
  // Q18
  {
    question: "Which device was used in the first generation of computers?",
    options: ["IC", "Transistor", "Vacuum Tubes", "None of these"],
    correctAnswer: "Vacuum Tubes"
  },
  // Q19
  {
    question: "What is the correct sequence of a working computer?",
    options: ["Output, Storage, Input, Process", "Process, Output, Storage, Input", "Input, Process, Output, Storage", "Storage, Input, Process, Output"],
    correctAnswer: "Input, Process, Output, Storage"
  },
  // Q20
  {
    question: "When you start up the computer, the screen at which the BIOS version, manufacturer, and data are displayed is called?",
    options: ["Kernel Loading", "Power On Self Test (POST)", "System Configuration", "Bootstrap"],
    correctAnswer: "Power On Self Test (POST)"
  },
  // Q21

  // Q25
  {
    question: "What are the input devices?",
    options: ["Printer", "Hard disk", "Keyboard, Mouse", "Monitor"],
    correctAnswer: "Keyboard, Mouse"
  },

  // Q29
  {
    question: "In which year did CDs come into the market?",
    options: ["1999", "1982", "1985", "1991"],
    correctAnswer: "1982"
  },
  // Q31
  {
    question: "How many bits and characters are there in ASCII?",
    options: ["7 bits & 128 characters", "9 bits & 120 characters", "8 bits & 256 characters", "None of these"],
    correctAnswer: "7 bits & 128 characters"
  },
  // Q32
  {
    question: "Which is the first artificial language?",
    options: ["High level", "Low and high", "LISP", "None of these"],
    correctAnswer: "LISP"
  }, {
    question: "Which command is used to bring the background process to forground?",
    options: ["bg", "fg", "background", "forground"],
    correctAnswer: "fg"
  },
  {
    question: "How to run a process in the background?",
    options: ["&", "*", "?", "|"],
    correctAnswer: "&"
  },
  {
    question: "Which signal is sent by the command “kill -9 ” ?",
    options: ["INT", "TERM", "KILL", "STOP"],
    correctAnswer: "KILL"
  },
  {
    question: "Which of the following values for STAT column of ps command is not true:",
    options: ["status R means running", "Status S means sleeping", "Status E means exited", "Status Z means zombie"],
    correctAnswer: "Status E means exited"
  },
  {
    question: "we can change the priority of a running process using",
    options: ["nice", "renice", "priority cannot be changed for a running process", "only superuser can change the priority"],
    correctAnswer: "renice"
  },
  {
    question: "User’s Primary Group id is listed in which file, at the time of creation of the user (On a standard Unix system)",
    options: ["/etc/passwd", "/etc/groups", "/etc/login", "/etc/profile"],
    correctAnswer: "/etc/passwd"
  },
  {
    question: "The encrypted password of a user is stored in",
    options: ["/etc/shadow", "/etc/enpasswwd", "/etc/.passwd", "/etc/passwd"],
    correctAnswer: "/etc/shadow"
  },
  {
    question: "The /etc/passwd file doesn’t contain",
    options: ["userid", "home directory for a user", "login shell name", "none of the mentioned"],
    correctAnswer: "none of the mentioned"
  },


  {
    question: "User id 0 is",
    options: ["An innvalid user id", "The id of the root user", "The id of a user when the user’s account is deleted", "None of the mentioned"],
    correctAnswer: "The id of the root user"
  },
  {
    question: "Which of the following command can be used to change the user password?",
    options: ["user can’t change the password", "passwd", "passd", "pwd"],
    correctAnswer: "passwd"
  },
  {
    question: "What does the following command do?\nwho | wc –l",
    options: ["List the number of users logged in", "List the users", "List the number of users in the system", "Display the content of who command"],
    correctAnswer: "List the number of users logged in"
  }, {
    question: "Shortcut key for formatting marks in LibreOffice Writer:",
    options: ["crtl+shift+r", "ctrl+shift+c", "crtl+f10", "ctrl+f11"],
    correctAnswer: "ctrl+f11",
  },
  //   Q59
  {
    question: "Shortcut key for the sidebar in LibreOffice Writer:",
    options: ["crtl+shift+r", "ctrl+shift+c", "crtl+f5", "ctrl+f11"],
    correctAnswer: "crtl+f5",
  },
  //   Q60
  {
    question: "Shortcut key for styles or manage styles in LibreOffice Writer:",
    options: ["crtl+shift+f11", "shift+f11", "f11", "f12"],
    correctAnswer: "crtl+shift+f11",
  },
  // Q61
  {
    question: "Shortcut key for navigator in LibreOffice Writer:",
    options: ["crtl+shift+f11", "shift+f11", "f11", "f5"],
    correctAnswer: "f5",
  },


  // Q65
  {
    question: "Shortcut key for hyperlink in LibreOffice Writer:",
    options: ["crtl+alt+c", "shift+f11", "ctrl+k", "f5"],
    correctAnswer: "ctrl+k",
  },
  // Q66
  {
    question: "Shortcut key of clear direct formatting in LibreOffice Writer:",
    options: ["crtl+m", "shift+f11", "ctrl+k", "f5"],
    correctAnswer: "crtl+m",
  },
  // Q67
  {
    question: "Shortcut key of bullet list in LibreOffice Writer:",
    options: ["crtl+m", "shift+f12", "ctrl+k", "f5"],
    correctAnswer: "crtl+m",
  },
  // Q68
  {
    question: "Shortcut key of number list in LibreOffice Writer:",
    options: ["crtl+m", "shift+f12", "ctrl+k", "f12"],
    correctAnswer: "crtl+m",
  },
  // Q69
  {
    question: "Shortcut key of double underline in LibreOffice Writer:",
    options: ["crtl+m", "shift+f12", "ctrl+d", "f12"],
    correctAnswer: "ctrl+d",
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
    question: "Which memory is called non-volatile memory?",
    options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
    correctAnswer: "ROM"
  },
  {
    question: "Shortcut key of subscript in LibreOffice Writer:",
    options: ["crtl+shift+B", "shift+f12", "ctrl+d", "f12"],
    correctAnswer: "crtl+shift+B",
  },
  {
    question: "Minimum zoom in LibreOffice Calc?",
    options: ["10%", "20%", "30%", "5%"],
    correctAnswer: "10%"
  },
  {
    question: "Shortcut key for edit in LibreOffice Calc?",
    options: ["F2", "F1", "F4", "F7"],
    correctAnswer: "F2"
  }, {
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
  }, {
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
    question: "MAC stands for?",
    options: ["MEDIA ACCESS CONTROL", "MAIN ACCESS CONTROL", "BOTH A AND B", "NONE OF THESE"],
    correctAnswer: "MEDIA ACCESS CONTROL"
  },
  {
    question: "Size of MAC address?",
    options: ["64 bit", "48 bit", "128 bit", "32 bit"],
    correctAnswer: "48 bit"
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
    question: "What is the code used for IMEI number?",
    options: ["*#06#", "*##06", "*06#*", "None of these"],
    correctAnswer: "*#06#"
  },
  {
    question: "Watching live video on the internet is called?",
    options: ["STREAMING", "BROWSING", "BUFFERING", "NONE OF THESE"],
    correctAnswer: "STREAMING"
  },
  {
    question: "How many layers in TCP/IP?",
    options: ["5", "4", "7", "9"],
    correctAnswer: "4"
  },
  {
    question: "DHCP stands for?",
    options: ["DYNAMIC HOST CONFIGURATION PROTOCOL", "DYNAMIC HIGH CONTROL PROTOCOL", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "DYNAMIC HOST CONFIGURATION PROTOCOL"
  },
  {
    question: "Which guided media provides the highest mode of speed?",
    options: ["COAXIAL CABLE", "FIBER OPTIC CABLE", "UNSHIELDED TWISTED PAIR", "NONE OF THESE"],
    correctAnswer: "FIBER OPTIC CABLE"
  },
  {
    question: "ISP exchanges internet traffic between their networks by?",
    options: ["INTERNET EXCHANGE POINT", "ISP END POINT", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "INTERNET EXCHANGE POINT"
  },
  {
    question: "What is the loopback IP address?",
    options: ["127.0.0.1", "127.0.0.0", "127.1.1.0", "NONE OF THESE"],
    correctAnswer: "127.0.0.1"
  },

  {
    question: "The size of packet is larger than the size of frame?",
    options: ["true", "false"],
    correctAnswer: "false"
  },
  {
    question: "WLAN stands for ",
    options: ["Wireless Local Area Network", "Wired Local Area Network", "Wireless Local Ambiguity Network", " Wired Latent Area Network"],
    correctAnswer: "Wireless Local Area Network"
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
    question: "Split window option is found in which menu in LibreOffice Calc?",
    options: ["Edit", "Insert", "View", "Tools"],
    correctAnswer: "View"
  },
  {
    question: "How many chart types are there in LibreOffice Calc?",
    options: ["10", "11", "20", "12"],
    correctAnswer: "11"
  },
  {
    question: "By default, legend shows on which side in a chart?",
    options: ["Left", "Center", "Top", "Right"],
    correctAnswer: "Right"
  },

  {
    question: "Which command executes ‘command’ in place of the current process instead of creating a new process?",
    options: ["exec", "command", "trap", "none of the mentioned"],
    correctAnswer: "exec"
  }, {
    question: "What is the timing of NEFT?",
    options: ["8:00 am to 6:00 pm", "8:00 am to 7:00 pm", "6:30 am to 5:30 pm", "None"],
    correctAnswer: "8:00 am to 7:00 pm"
  },
  {
    question: "Which language is not there?",
    options: ["Low-level language", "Medium-level language", "High-level language", "None"],
    correctAnswer: "Medium-level language"
  },
  {
    question: "ATM means",
    options: [
      "Any Time Money",
      "Auto Truck of Mahindra",
      "Automated Teller Machine",
      "None of above"
    ],
    correctAnswer: "Automated Teller Machine"
  },
  {
    question: "What is the validity period of a cheque?",
    options: [
      "4 months from the date of issue",
      "3 months from the date of issue",
      "1 month from the date of issue",
      "Unlimited"
    ],
    correctAnswer: "3 months from the date of issue"
  },
  {
    question: "What is the full meaning of N in UMANG App?",
    options: ["New", "National", "New-age", "None"],
    correctAnswer: "New-age"
  },

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
    question: "Which of the following is a component of Artificial Intelligence?",
    options: ["Learning", "Training", "Designing", "Puzzling"],
    correctAnswer: "Learning"
  },
  {
    question: "What is the function of an Artificial Intelligence 'Agent'?",
    options: ["Mapping of goal sequence to an action", "Work without the direct interference of the people", "Mapping of percept sequence to an action", "Mapping of environment sequence to an action"],
    correctAnswer: "Mapping of percept sequence to an action"
  },

  {
    question: "Which of the following machine requires input from the humans but can interpret the outputs themselves?",
    options: ["Actuators", "Sensor", "Agents", "AI system"],
    correctAnswer: "AI system"
  },
  {
    question: "Which of the following are the approaches to Artificial Intelligence?",
    options: ["Applied approach", "Strong approach", "Weak approach", "All of the mentioned"],
    correctAnswer: "All of the mentioned"
  },
  {
    question: "Face Recognition system is based on which type of approach?",
    options: ["Weak AI approach", "Applied AI approach", "Cognitive AI approach", "Strong AI approach"],
    correctAnswer: "Applied AI approach"
  },
  {
    question: "Which of the following is an advantage of artificial intelligence?",
    options: ["Reduces the time taken to solve the problem", "Helps in providing security", "Has the ability to think hence makes the work easier", "All of the above"],
    correctAnswer: "All of the above"
  },

  // Q33
  {
    question: "In which type of computer are data represented as discrete signals?",
    options: ["Digital computer", "Analog computer", "Both digital and analog", "Hybrid computer"],
    correctAnswer: "Digital computer"
  },
  // Q34
  {
    question: "Fourth generation language(4GL) is a:",
    options: ["Procedural language", "Structural language", "Non-procedural language", "All of the above"],
    correctAnswer: "Non-procedural language"
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
