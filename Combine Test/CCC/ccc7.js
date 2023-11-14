const quizData = [
  {
    question: "Which of the following is not an 'Open Source'?",
    options: ["Open Office", "Linux", "Ubuntu", "Windows 10"],
    correctAnswer: "Windows 10"
  },
  {
    question: "What Is The Capacity of A 3.5 Inch Floppy Disk?",
    options: ["1.40 Mb", "1.44 Gb", "1.40 Gb", "1.44 Mb"],
    correctAnswer: "1.44 Mb"
  },
  {
    question: "Flash memory is a type of ________ memory",
    options: ["Primary", "RAM", "Secondary", "All of these"],
    correctAnswer: "Secondary"
  },
  {
    question: "Which component of a computer connects the processor to the other hardware",
    options: ["System Bus", "CPU", "Memory", "Input Unit"],
    correctAnswer: "System Bus"
  },
  {
    question: "Which is used with a stylus to produce freehand drawings?",
    options: ["Graphics Tablet", "Drawing pen", "Light pen", "Reflector"],
    correctAnswer: "Graphics Tablet"
  },
  {
    question: "Which one is the correct order of memory in descending order?",
    options: ["TB GB MB KB", "TB MB GB KB", "GB TB MB KB", "TB GB KB MB"],
    correctAnswer: "TB GB MB KB"
  },
  {
    question: "What is the full form of EBCDIC?",
    options: ["Executable Binary Coded Decimal Interchange Code", "Extended Binary Coded Decimal Interchange Code", "Executable Binary Coded Decimal Information Code", "Extended Binary Coded Decimal Information Code"],
    correctAnswer: "Extended Binary Coded Decimal Interchange Code"
  },
  {
    question: "A floppy disk contains …..?",
    options: ["Sectors only", "Circular tracks", "Both circular tracks and sectors", "None of the above"],
    correctAnswer: "Both circular tracks and sectors"
  },
  {
    question: "To create large size drawings, architects and engineers often use a device called..?",
    options: ["Dot Matrix Printer", "Line Printer", "Plotter", "Laser Printer"],
    correctAnswer: "Plotter"
  },
  {
    question: "Laser printer resolution is specified in terms of…?",
    options: ["API", "DPI", "CPI", "LSI"],
    correctAnswer: "DPI"
  },
  {
    question: "The DOS command to retrieve the list of a file is",
    options: ["DIR", "MD", "CD", "RD"],
    correctAnswer: "DIR"
  },
  {
    question: "Unix is a single-user operating system",
    options: ["TRUE", "FALSE"],
    correctAnswer: "FALSE"
  },
  {
    question: "Railway Reservation System is an example of a Real-time Application.",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "Which command is used to display the operating system name?",
    options: ["os", "unix", "kernel", "uname"],
    correctAnswer: "uname"
  },
  {
    question: "Which option of ls command is used to view the file inode number?",
    options: ["–l", "-o", "–a", "–i"],
    correctAnswer: "–i"
  },
  {
    question: "Which command is used to perform a backup in Unix?",
    options: ["Backup", "cpio", "zip", "gzip"],
    correctAnswer: "cpio"
  },
  {
    question: "Which command creates an empty file if the file does not exist?",
    options: ["cat", "touch", "ed", "read"],
    correctAnswer: "touch"
  },
  {
    question: "Which command is used to identify the file type?",
    options: ["Type", "File", "Finfo", "Info"],
    correctAnswer: "File"
  },
  {
    question: "Command used to determine the path of an executable file is",
    options: ["which", "where", "wexec", "what"],
    correctAnswer: "which"
  },
  {
    question: "Command used to count the number of characters in a file is",
    options: ["grep", "wc", "count", "cut"],
    correctAnswer: "wc"
  },
  {
    question: "Shortcut key of styles or manage styles in LibreOffice Writer",
    options: ["F12", "F5", "F11", "F10"],
    correctAnswer: "F11"
  },
  {
    question: "Shortcut key of navigator in LibreOffice Writer",
    options: ["F12", "F5", "F10", "F11"],
    correctAnswer: "F5"
  },
  {
    question: "Shortcut key of full screen in LibreOffice Writer",
    options: ["Ctrl+Shift+V", "Ctrl+Shift+J", "Ctrl+Shift+C", "Ctrl+Shift+R"],
    correctAnswer: "Ctrl+Shift+J"
  },
  {
    question: "Shortcut key of formula bar in LibreOffice Writer",
    options: ["F12", "F5", "F2", "F11"],
    correctAnswer: "F2"
  },
  {
    question: "Shortcut key of comment in LibreOffice Writer",
    options: ["Ctrl+Alt+V", "Ctrl+Alt+C", "Ctrl+Shift+C", "Ctrl+Shift+R"],
    correctAnswer: "Ctrl+Alt+C"
  },
  {
    question: "Shortcut key of hyperlink in LibreOffice Writer",
    options: ["Ctrl+H", "Ctrl+N", "Ctrl+K", "Ctrl+Y"],
    correctAnswer: "Ctrl+K"
  },
  {
    question: "Shortcut key of clear direct formatting in LibreOffice Writer",
    options: ["Ctrl+H", "Ctrl+N", "Ctrl+M", "Ctrl+Y"],
    correctAnswer: "Ctrl+M"
  },
  {
    question: "Shortcut key of bullet list in LibreOffice Writer",
    options: ["Shift+F12", "Ctrl+F14", "Shift+F2", "Shift+F1"],
    correctAnswer: "Shift+F2"
  },
  {
    question: "Shortcut key of number list in LibreOffice Writer",
    options: ["F12", "F5", "F2", "F11"],
    correctAnswer: "F12"
  },
  {
    question: "Shortcut key of double underline in LibreOffice Writer",
    options: ["Ctrl+H", "Ctrl+D", "Ctrl+M", "Ctrl+Y"],
    correctAnswer: "Ctrl+D"
  },
  {
    question: "Are Alphabet Right and Numbers Left Aligned in LibreOffice Calc?",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "Is there use of a filter in LibreOffice Calc?",
    options: ["Copy data", "Make charts", "Arrange data", "See specific data"],
    correctAnswer: "See specific data"
  },
  {
    question: "Which of the following is not a valid Zoom Percentage in LibreOffice Calc?",
    options: ["500", "100", "400", "300"],
    correctAnswer: "500"
  },
  {
    question: "Which is not a valid operator type in LibreOffice Calc?",
    options: ["Arithmetic", "Comparative", "Referential", "Text"],
    correctAnswer: "Referential"
  },
  {
    question: "What is the shortcut key to select the entire row in Calc?",
    options: ["Shift+Alt", "Ctrl+Shift", "Ctrl+Spacebar", "Shift+Spacebar"],
    correctAnswer: "Shift+Spacebar"
  },
  {
    question: "What is the shortcut key to select the entire column in Calc?",
    options: ["Shift+Alt", "Ctrl+Shift", "Ctrl+Spacebar", "Shift+Spacebar"],
    correctAnswer: "Ctrl+Spacebar"
  },
  {
    question: "What is the meaning of ### in a cell of Calc?",
    options: ["The formula is wrong", "Cell width is not proper enough to show the data", "Calculations can be corrected", "None"],
    correctAnswer: "Cell width is not proper enough to show the data"
  },
  {
    question: "Which of the following is the shortcut key to insert cells from Calc?",
    options: ["Ctrl+2", "Shift+ +", "Ctrl+ +", "None of these"],
    correctAnswer: "Ctrl+ +"
  },
  {
    question: "In LibreOffice Calc, the shortcut key of going at the last of the left of the cell is?",
    options: ["Alt+Tab", "Tab", "Alt", "Shift+Tab"],
    correctAnswer: "Shift+Tab"
  },
  {
    question: "What is the combination of row and column in LibreOffice Calc?",
    options: ["Cell", "Table", "Position", "Data"],
    correctAnswer: "Cell"
  },
  {
    question: "Which toolbar provides various options in different master views?",
    options: ["Standard toolbar", "Formatting toolbar", "Drawing toolbar", "Common tasks toolbar"],
    correctAnswer: "Common tasks toolbar"
  },
  {
    question: "We can find any and every command on the:",
    options: ["Menu bar", "Standard toolbar", "Formatting toolbar", "Drawing toolbar"],
    correctAnswer: "Menu bar"
  },
  {
    question: "Which of these features should one use when we want to type in the text box for notes?",
    options: ["Insert", "Slide shows", "Zoom", "Slide master"],
    correctAnswer: "Zoom"
  },
  {
    question: "Which types of templates provide all users with a design concept, colour scheme, and fonts for presentation?",
    options: ["Content", "Format", "Normal", "Design"],
    correctAnswer: "Design"
  },
  {
    question: "The File that consists of readymade styles that we can easily use for our presentation is known as:",
    options: ["Pre formatting", "Template", "Wizard", "AutoStyle"],
    correctAnswer: "Template"
  },
  {
    question: "Which of these PowerPoint features would allow any user to create a given simple presentation quicker?",
    options: ["Animations", "Chart Wizard", "Transition Wizard", "AutoContent Wizard"],
    correctAnswer: "AutoContent Wizard"
  },
  {
    question: "The Handout Master consists of placeholders for all of these except the:",
    options: ["Title", "Slide number", "Header", "Footer"],
    correctAnswer: "Title"
  },
  {
    question: "The default template in Impress Presentation is-",
    options: ["Image only", "Content Only", "Title and Content", "Title Only"],
    correctAnswer: "Title and Content"
  },
  {
    question: "What is the maximum number of slides that can be viewed on a page in slide shortener view in LibreOffice Impress?",
    options: ["10", "15", "12", "14"],
    correctAnswer: "15"
  },
  {
    question: "What is the default font size in Impress?",
    options: ["12", "16", "18", "20"],
    correctAnswer: "18"
  },
  {
    question: "……………. is meant to be online buying and selling of goods.",
    options: ["E-commerce", "Digi Locker", "Digital Payment", "None of these"],
    correctAnswer: "E-commerce"
  },
  {
    question: "Digilocker is connected with?",
    options: ["From Aadhar card", "From PAN card", "A & B both", "None of these"],
    correctAnswer: "From Aadhar card"
  },
  {
    question: "Which is not an advantage of using DigiLocker?",
    options: ["Secure access to Govt. issue documents", "Document Generation", "Easy to carry", "Minimize the use of physical documents"],
    correctAnswer: "Document Generation"
  },
  {
    question: "What is the advantage of DigiLocker?",
    options: ["Issue e-documents to citizen & eliminates physical documents", "Issue physical documents to citizen", "Both A & B", "None of these"],
    correctAnswer: "Issue e-documents to citizen & eliminates physical documents"
  },
  {
    question: "Deleted e-mails are stored in",
    options: ["Draft", "Trash", "Inbox", "Sent mail"],
    correctAnswer: "Trash"
  },
  {
    question: "A block of text automatically added to the end of an outgoing e-mail is called",
    options: ["Attachment", "Signature", "Decryption", "Encryption"],
    correctAnswer: "Signature"
  },
  {
    question: "USSD stands for",
    options: ["User Sale Service Data", "User Supplementary Service Data", "Unstructured Supplementary Service Data", "Unique Supplementary Service Data"],
    correctAnswer: "Unstructured Supplementary Service Data"
  },
  {
    question: "USSD is available in how many languages",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  },
  {
    question: "Prepaid Debit cards are also called",
    options: ["Reloadable debit cards", "Loadable debit cards", "Relational debit cards", "None of these"],
    correctAnswer: "Reloadable debit cards"
  },
  {
    question: "Which digital company payment announced a new feature QR code on its app?",
    options: ["PayU", "PayPal", "Paytm", "Payoneer"],
    correctAnswer: "Paytm"
  },
  {
    question: "POS stands for",
    options: ["Point of Service", "Point of Sale", "Point of Satisfaction", "None of The Above"],
    correctAnswer: "Point of Sale"
  },
  {
    question: "RuPay debit card is similar to",
    options: ["Singapore's NETS", "China's UnionPay", "Both of The Above", "None of The Above"],
    correctAnswer: "Both of The Above"
  },
  {
    question: "The prepaid bank card is also called",
    options: ["Convenience Gift Card", "Bank Gift Card", "Suitable Gift Card", "None of The Above"],
    correctAnswer: "Bank Gift Card"
  },
  {
    question: "QR code often does not contain data for …………… the points to the website or application",
    options: ["Tracker", "Locator", "Person", "Identifier"],
    correctAnswer: "Person"
  },
  {
    question: "NABARD was established on the recommendations of which Committee",
    options: ["B. Sivaramman", "Ram Manohar Lohiya", "Narasimham", "None of these"],
    correctAnswer: "B. Sivaramman"
  },
  {
    question: "Which is considered as a repository of Aadhaar number?",
    options: ["NPCI LOGGER", "NPCI FISHER", "NPCI MAPPER", "NPCI REDUCER"],
    correctAnswer: "NPCI MAPPER"
  },
  {
    question: "Which is not required for online banking?",
    options: ["Bank interface", "Transaction password", "Customer ID", "ATM password"],
    correctAnswer: "ATM password"
  },
  {
    question: "Which of the following is not related to e-banking?",
    options: ["Electronic clearing system", "Demand draft", "ATM", "E-challan"],
    correctAnswer: "Demand draft"
  },
  {
    question: "Which of the following cannot be tracked using POS?",
    options: ["Pricing accuracy", "Gross revenue", "Inventory charges", "Promotions"],
    correctAnswer: "Promotions"
  },
  {
    question: "The eligible criteria for the banks which can participate in UPI is that the Bank should have approval from RBI for mobile banking service and also should be live on….",
    options: ["AEPS", "BBPS", "CT", "IMPS"],
    correctAnswer: "IMPS"
  },
  {
    question: "Which information component is not part of e-wallet?",
    options: ["Encryption of the data", "User name", "Amount to be paid", "User debit card details"],
    correctAnswer: "User debit card details"
  },
  {
    question: "What is the transaction charge for the RTGS amounting between 2 lakh to 5 lakhs?",
    options: ["100", "30", "50", "25"],
    correctAnswer: "25"
  },
  {
    question: "In the context of DigiLocker, what is the role of the issuer?",
    options: ["Issue printed documents to citizens", "Issue e-documents to citizens", "Issue e-document to government", "None of these"],
    correctAnswer: "Issue e-documents to citizens"
  },
  {
    question: "Which is not required for accessing the service of the POS system?",
    options: ["Internet", "PIN", "Debit/Credit card", "Account number"],
    correctAnswer: "Account number"
  },
  {
    question: "Which one is not a finance company.",
    options: ["IRDA", "Loan companies", "Mutual benefits finance companies", "Hire purchase finance company"],
    correctAnswer: "IRDA"
  },
  {
    question: "QR is the trademark for a type of?",
    options: ["Pin", "Scratch code", "Barcode", "Pattern"],
    correctAnswer: "Barcode"
  },
  {
    question: "On smartphones, OTP can never be delivered directly through",
    options: ["Authy", "Duo Mobile", "IM Swap", "Google Authenticator"],
    correctAnswer: "Google Authenticator"
  },
  {
    question: "In UPI, ______ is an Address that uniquely identifies a person’s bank account.",
    options: ["Primary Address", "Unique Address", "Bank Address", "Payment Address"],
    correctAnswer: "Payment Address"
  },
  {
    question: "Which of the following terms is used for sending money in UPI?",
    options: ["PULL", "PUSH", "TRANSFER", "PUT"],
    correctAnswer: "PUSH"
  },
  {
    question: "Which of the following terms is used for receiving money in UPI?",
    options: ["PULL", "PUSH", "TRANSFER", "PUT"],
    correctAnswer: "PULL"
  },
  {
    question: "Hackers cannot do which of the following after compromising your phone?",
    options: ["Shoulder surfing", "Steal your information", "Use your app credentials", "Accessing your voicemail"],
    correctAnswer: "Shoulder surfing"
  },
  {
    question: "Mobile security is also known as __________",
    options: ["Wireless security", "OS Security", "Cloud security", "Database security"],
    correctAnswer: "Wireless security"
  },
  {
    question: "Transmits time and response time measure the ……… of the network.",
    options: ["Performance", "Reliability", "Security", "Longevity"],
    correctAnswer: "Performance"
  },
  {
    question: "Encryption technique improves a network’s",
    options: ["Performance", "Reliability", "Security", "Longevity"],
    correctAnswer: "Security"
  },
  {
    question: "A ………… is illicitly introduced code that damages a network device.",
    options: ["Protocol", "Virus", "Catastrophe", "Medium"],
    correctAnswer: "Virus"
  },
  {
    question: "When a server goes down, this is a network _______ issue.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Reliability"
  },
  {
    question: "When an earthquake severs a fiber-optic cable, this is a network _______ issue.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Performance"
  },
  {
    question: "When a network upgrades to a transmission medium with a data rate that is 100 times faster, this improves the _______ of the network.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Performance"
  },
  {
    question: "A company doubles the number of nodes on its network. The greatest impact will be on the _______ of the network.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Performance"
  },
  {
    question: "A company changes its network configuration so that only one router instead of two can access the Internet. The greatest impact will be on the _______ of the network.",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Security"
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
  {
    question: "Which of the following can improve the performance of an AI agent?",
    options: ["Perceiving", "Learning", "Observing", "All of the mentioned"],
    correctAnswer: "Learning"
  },
  {
    question: "Which of the following is/are the composition for AI agents?",
    options: ["Program only", "Architecture only", "Both Program and Architecture", "None of the mentioned"],
    correctAnswer: "Both Program and Architecture"
  },
  {
    question: "On which of the following approaches is a basic line-following robot based?",
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
    question: "Which of the following environments is strategic?",
    options: ["Rational", "Deterministic", "Partial", "Stochastic"],
    correctAnswer: "Deterministic"
  },
  {
    question: "What is the name of Artificial Intelligence which allows machines to handle vague information with a deftness that mimics human intuition?",
    options: ["Human intelligence", "Boolean logic", "Functional logic", "Fuzzy logic"],
    correctAnswer: "Fuzzy logic"
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
