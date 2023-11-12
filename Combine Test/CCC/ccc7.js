const quizData = [
  {
    question: "What is the code of USSD?",
    options: ["*99#", "*#99", "#*99", "None of these"],
    correctAnswer: "*99#"
  },

  {
    question: "A/an ________ algorithm transforms ciphertext to plaintext.",
    options: ["Encryption", "Decryption", "Both (A) and (B)", "None of the above"],
    correctAnswer: "Decryption"
  },
  {
    question: "Which is the first artificial language?",
    options: ["High level", "Low and high", "LISP", "None of these"],
    correctAnswer: "LISP"
  },

  {
    question: "DES stands for…",
    options: ["data encryption standard", "data elimination standard", "data encapsulation standard", "none of these"],
    correctAnswer: "data encryption standard"
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
    question: "The ________ is the original message before transmission.",
    options: ["Ciphertext", "Plaintext", "Secret-text", "None of the above"],
    correctAnswer: "Plaintext"
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
    question: "ECB stands for",
    options: ["electronic code book", "electronic cipher book", "C electronic clear book", "none of these"],
    correctAnswer: "electronic code book"
  },
  {
    question: "What is the loopback IP address?",
    options: ["127.0.0.1", "127.0.0.0", "127.1.1.0", "NONE OF THESE"],
    correctAnswer: "127.0.0.1"
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
    question: "What are the main components of the CPU?",
    options: ["Hard Disk, Monitor, Keyboard", "RAM, ROM, Printer", "CD, DVD, Pendrive", "Control Unit, Memory Unit, ALU"],
    correctAnswer: "Control Unit, Memory Unit, ALU"
  },
  {
    question: "Which of the following devices can be used to convert characters of printed text into an image?",
    options: ["OCR", "MICR", "OMR", "All of the options"],
    correctAnswer: "All of the options"
  },

  {
    question: "If Maruti company purchases a tire from MRF company, this business is called as:",
    options: ["B2B", "C2C", "B2C", "G2G"],
    correctAnswer: "B2B"
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
    question: "A/an ________ algorithm transforms plaintext to ciphertext.",
    options: ["Encryption", "Decryption", "Both (A) and (B)", "None of the above"],
    correctAnswer: "Encryption"
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
    question: "Which command prints the directory stack?",
    options: ["cd", "dirs", "popd", "pushd"],
    correctAnswer: "dirs"
  },
  {
    question: "Shortcut key of increase font size in LibreOffice Writer:",
    options: ["crtl+]", "ctrl+[", "ctrl++", "ctrl+1"],
    correctAnswer: "ctrl+]",
  },

  {
    question: "Which of the following protocols is recommended to be turned off because it transmits usernames and passwords in plaintext?",
    options: ["TELECOMMUNICATION NETWORK (TELNET)", "HTTPS (HYPER TEXT TRANSFER PROTOCOL SECURED)", "SSL (SECURE SOCKET LAYER)", "TFTP (TRIVIAL FILE TRANSFER PROTOCOL)"],
    correctAnswer: "TELECOMMUNICATION NETWORK (TELNET)"
  },
  {
    question: "Which command removes a directory from the directory stack?",
    options: ["dirs", "popd", "pushd", "rm"],
    correctAnswer: "popd"
  },

  {
    question: "What idea did American Express come up with in 2000 to combat identity theft?",
    options: ["none of the options", "a disposable transaction number", "a no-hack website", "an online-fraud detective service"],
    correctAnswer: "an online-fraud detective service"
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
    question: "Which app is used for ticket booking from IRCTC?",
    options: ["Rail Tail", "Rail Connect", "Rail Sarthi", "None of these"],
    correctAnswer: "Rail Connect"
  },
  {
    question: "The ________ is the message after transformation.",
    options: ["Plaintext", "Secret-text", "Ciphertext", "None of the above"],
    correctAnswer: "Ciphertext"
  },
  // Q19
  {
    question: "What is the correct sequence of a working computer?",
    options: ["Output, Storage, Input, Process", "Process, Output, Storage, Input", "Input, Process, Output, Storage", "Storage, Input, Process, Output"],
    correctAnswer: "Input, Process, Output, Storage"
  },
  {
    question: "Which of the following is not a typical characteristic of an ethical hacker?",
    options: ["Excellent knowledge of Windows", "Understands the process of exploiting network vulnerabilities", "Patience, persistence, and perseverance", "Has the highest level of security for the organization"],
    correctAnswer: "Has the highest level of security for the organization"
  },

  // Q20
  {
    question: "When you start up the computer, the screen at which the BIOS version, manufacturer, and data are displayed is called?",
    options: ["Kernel Loading", "Power On Self Test (POST)", "System Configuration", "Bootstrap"],
    correctAnswer: "Power On Self Test (POST)"
  },
  // Q21


  {
    question: "The certificate authority signs the digital certificate with...",
    options: ["user’s private key", "it’s own public key", "it’s own private key", "user’s public key"],
    correctAnswer: "it’s own public key"
  },


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
  // Q30
  {
    question: "Which command is used to bring the background process to forground?",
    options: ["bg", "fg", "background", "forground"],
    correctAnswer: "fg"
  },




  {
    question: "The initial state and successor function implicitly define the state space of the problem.",
    options: ["Initial state", "State-space", "problem space", "problem place"],
    correctAnswer: "State-space"
  },
  {
    question: "Which guided media provides the highest mode of speed?",
    options: ["COAXIAL CABLE", "FIBER OPTIC CABLE", "UNSHIELDED TWISTED PAIR", "NONE OF THESE"],
    correctAnswer: "FIBER OPTIC CABLE"
  },

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
    question: "How many keys are required if two parties communicate using Symmetric Cryptography?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: "One"
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
    question: "Navigator key in Libre office impress.",
    options: ["ctrl+shift+f3", "ctrl+shift+f4", "ctrl+shift+f7", "ctrl+shift+f5"],
    correctAnswer: "ctrl+shift+f5"
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
    question: "To protect against phishing, what is the recommendation for changing your finance password?",
    options: ["no need to change", "every 2 months", "every 6 months", "every 12 months"],
    correctAnswer: "every 6 months"
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
    question: "Which of the following is a strong password?",
    options: ["123456", "P@ssw0rd", "ILoveYou123", "All of the above"],
    correctAnswer: "P@ssw0rd"
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
    question: "How to start a new presentation in impress in using",
    options: ["New presentation", "Create presentation", "Open presentation", "Presentation wizard"],
    correctAnswer: "New presentation",
  },
  {
    question: "Which device was used in the first generation of computers?",
    options: ["IC", "Transistor", "Vacuum Tubes", "None of these"],
    correctAnswer: "Vacuum Tubes"
  },
  {
    question: "How many sections in the sidebar of impress",
    options: ["9", "5", "3", "7"],
    correctAnswer: "7",
  },

  {
    question: "ISP exchanges internet traffic between their networks by?",
    options: ["INTERNET EXCHANGE POINT", "ISP END POINT", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "INTERNET EXCHANGE POINT"
  },


  {
    question: "Which of the following command is used to see the content of the tar(backup.tar) file without extracting it?",
    options: ["tar -xvf backup.tar", "tar -svf backup.tar", "tar -tvf backup.tar", "none of these"],
    correctAnswer: "tar -tvf backup.tar"
  },
  {
    question: "What is the purpose of the id command?",
    options: ["Print effective and real UID", "Print effective and real GID", "Print effective and real UID and GID", "None of these"],
    correctAnswer: "Print effective and real UID and GID"
  },
  {
    question: "Which command is used to print the login shell of a user?",
    options: ["echo $SHELL", "echo $LOGIN", "echo $LSHELL", "None of the Above"],
    correctAnswer: "echo $SHELL"
  },
  {
    question: "Rehearse time will start counting in units.",
    options: ["Mini seconds", "Hours", "Minutes", "Seconds"],
    correctAnswer: "Seconds",
  },

  {
    question: "What is flashing or blinking light called on the screen?",
    options: ["An icon", "A cursor", "A pixel", "None"],
    correctAnswer: "A cursor"
  },



  {
    question: "Which of the following is not a sub-module of an e-wallet?",
    options: ["Digital cash", "Profile manager", "Transaction manager", "Communication manager"],
    correctAnswer: "Digital cash"
  },
  {
    question: "Is it safe to click on links in promotional emails, open attachments and to share personal information?",
    options: ["false", "true"],
    correctAnswer: "false"
  },
  {
    question: "NPCI was launched in which year?",
    options: ["2008", "2010", "2006", "2015"],
    correctAnswer: "2008"
  },
  {
    question: "DHCP stands for?",
    options: ["DYNAMIC HOST CONFIGURATION PROTOCOL", "DYNAMIC HIGH CONTROL PROTOCOL", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "DYNAMIC HOST CONFIGURATION PROTOCOL"
  },
  {
    question: "Which one is not a key stakeholder of Digilocker?",
    options: ["Citizens", "Requesters", "Issuers", "Government"],
    correctAnswer: "Issuers"
  },

  {
    question: "What is S/MIME?",
    options: ["Secure Multipurpose Intranet Mail Extensions", "Secure Multipurpose Internet Mail Extensions", "Secure Multipurpose Internet Message Extensions", "Secure Multipurpose Intranet Message Extensions"],
    correctAnswer: "Secure Multipurpose Internet Mail Extensions"
  },

  {
    question: "What is minimum zoom percentage in libreoffice impress",
    options: ["20%", "5%", "2%", "10%"],
    correctAnswer: "5%",
  },

  {
    question: "Which feature is not supported in Windows 10?",
    options: ["Trusted Boot", "Windows Hello", "Microsoft Passport", "Windows Hi"],
    correctAnswer: "Windows Hi"
  },
  {
    question: "The size of packet is larger than the size of frame?",
    options: ["true", "false"],
    correctAnswer: "false"
  },
  {
    question: "Shortcut key for position and size in libreoffice impress",
    options: ["F1", "F3", "F2", "F4"],
    correctAnswer: "F4",
  },
  {
    question: "The correct combination of e-wallet components is...",
    options: ["Software and hardware", "Software and information", "Hardware and internet", "Hardware and information"],
    correctAnswer: "Software and information"
  },
  // Q31
  {
    question: "How many bits and characters are there in ASCII?",
    options: ["7 bits & 128 characters", "9 bits & 120 characters", "8 bits & 256 characters", "None of these"],
    correctAnswer: "7 bits & 128 characters"
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
    question: "What is the Full Form of ‘IIOT’?",
    options: ["INFORMATION IOT", "INDUSTRIAL IOT", "INTELLIGENT IOT", "INNOVATIVE IOT"],
    correctAnswer: "INDUSTRIAL IOT"
  },
  {
    question: "Duplicate shape key in Libre office impress.",
    options: ["shift+f3", "ctrl+f2", "shift+f1", "ctrl+f3"],
    correctAnswer: "shift+f3"
  },

  {
    question: "In symmetric key cryptography, the key used by the sender and receiver is...",
    options: ["different", "never shared", "Two keys are used", "shared"],
    correctAnswer: "shared"
  },

  {
    question: "Which of the following detection processes is not used by antivirus software?",
    options: ["Signature-based detection", "Heuristic detection", "Behavioral-based detection", "Signature-less detection"],
    correctAnswer: "Signature-less detection"
  },
  {
    question: "Which of these are fairly secure online payment services?",
    options: ["ePostMe and Post me later", "eBillMe and Bill me later", "epayMe and pay me later", "all of the above"],
    correctAnswer: "eBillMe and Bill me later"
  },

  {
    question: "Libre office impress is called….",
    options: ["word processor", "writer", "calc", "presentation"],
    correctAnswer: "presentation",
  },
  {
    question: "Protecting information from being disclosed to unauthorized parties is known as...",
    options: ["information technology", "confidentiality", "availability", "integrity"],
    correctAnswer: "confidentiality"
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
