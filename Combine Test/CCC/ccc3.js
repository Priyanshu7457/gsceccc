const quizData = [
  {
    question: "What are the main components of the CPU?",
    options: ["Hard Disk, Monitor, Keyboard", "RAM, ROM, Printer", "CD, DVD, Pendrive", "Control Unit, Memory Unit, ALU"],
    correctAnswer: "Control Unit, Memory Unit, ALU"
  },
  {
    question: "One nibble is equal to?",
    options: ["Half a byte", "One byte", "Both a & b", "None of these"],
    correctAnswer: "Half a byte"
  },
  {
    question: "What is the full form of UNIVAC?",
    options: ["Universal Automatic Computer", "Uniary All Communication", "Both a & b", "None of these"],
    correctAnswer: "Universal Automatic Computer"
  },
  {
    question: "Which of the following devices can be used to convert characters of printed text into an image?",
    options: ["OCR", "MICR", "OMR", "All of the options"],
    correctAnswer: "OCR"
  },
  {
    question: "What are the input devices?",
    options: ["Printer", "Hard disk", "Keyboard, Mouse", "Monitor"],
    correctAnswer: "Keyboard, Mouse"
  },
  {
    question: "Full form of MICR?",
    options: ["Magnetic Ink Character Recognition", "Mark Ink Character Reader", "Monitor Ink Character Reader", "None of these"],
    correctAnswer: "Magnetic Ink Character Recognition"
  },
  {
    question: "The advantage of binary files over text files is that:",
    options: ["It is more reliable", "It is compact", "Many commands assume that it is a binary file", "It can be accessed faster"],
    correctAnswer: "It can be accessed faster"
  },
  {
    question: "Which memory is called non-volatile memory?",
    options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
    correctAnswer: "ROM"
  },
  {
    question: "In which year did CDs come into the market?",
    options: ["1999", "1982", "1985", "1991"],
    correctAnswer: "1982"
  },
  {
    question: "How many bits and characters are there in ASCII?",
    options: ["7 bits & 128 characters", "9 bits & 120 characters", "8 bits & 256 characters", "None of these"],
    correctAnswer: "7 bits & 128 characters"
  },
  {
    question: "Which of the following is not available in font spacing?",
    options: ["Condensed", "Expanded", "Loosely", "Normal"],
    correctAnswer: "Loosely"
  },
  {
    question: "Ctrl+Shift+Backspace is a shortcut key to delete text to the beginning of the sentence in LibreOffice.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "While customizing the font color, which one of the following is not the available color coding scheme in LibreOffice Writer?",
    options: ["WXY", "HSB", "RGB", "CMYK"],
    correctAnswer: "WXY"
  },
  {
    question: "What is the correct sequence of steps required to insert the footer in LibreOffice Writer document?",
    options: ["Insert > Footer > Default Style", "Insert > Footer", "Insert > Header & Footer > Footer > Default Style", "Header & Footer > Footer"],
    correctAnswer: "Insert > Header & Footer > Footer > Default Style"
  },
  {
    question: "Which feature in LibreOffice Writer removes extra spaces between pages?",
    options: ["Edit -> Hide White space", "View -> Hide White space", "File -> Hide White space", "Tools -> Hide White space"],
    correctAnswer: "View -> Hide White space"
  },
  {
    question: "3D object command found in the status bar.",
    options: ["False", "True"],
    correctAnswer: "True"
  },
  {
    question: "There are six rows in an inserted table in a document of LibreOffice Writer. The height of the third row and the fourth row are 1 cm and 2 cm. If you choose the option 'Distribute Rows Evenly' of size submenu.",
    options: ["Height of both rows will be 2 cm", "Height of both rows will be 1.5 cm", "Height of both rows will be 1 cm", "Height of both rows will be 3 cm"],
    correctAnswer: "Height of both rows will be 1.5 cm"
  },
  {
    question: "Which one of the following is not an option in the drop-down menu of the header in LibreOffice Writer.",
    options: ["Insert Page Number", "Delete Header", "Format Header", "Create Header"],
    correctAnswer: "Create Header"
  },
  {
    question: "Bar used to access the command and tools.",
    options: ["Menu", "Bar", "Tools", "Status"],
    correctAnswer: "Tools"
  },
  {
    question: "Which is on the left side of the status bar?",
    options: ["Zoom Slider", "Digital Signature", "Information Area", "Cursor Position"],
    correctAnswer: "Information Area"
  },
  {
    question: "Which of the following is an Open Source Software?",
    options: ["Photoshop", "MS Word", "Skype", "LibreOffice"],
    correctAnswer: "LibreOffice"
  },
  {
    question: "Features of the Linux operating system",
    options: ["It is a multi-user operating system", "It is a highly secure operating system", "It is a multitasking operating system", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which command is used for removing files in the Linux operating system?",
    options: ["delete", "rm", "dm", "erase"],
    correctAnswer: "rm"
  },
  {
    question: "Which of the following directories contains the configuration files?",
    options: ["/bin", "/root", "/dev", "etc/"],
    correctAnswer: "etc/"
  },
  {
    question: "The core of Linux operating system is:",
    options: ["Kernel", "Terminal", "Shell", "Command"],
    correctAnswer: "Kernel"
  },
  {
    question: "Which function key is used to change the name of any file through the keyboard?",
    options: ["F1", "F2", "F3", "F4"],
    correctAnswer: "F2"
  },
  {
    question: "Which of the following file extensions indicate files created in Paint?",
    options: ["BMP", "DOC", "STK", "PPT"],
    correctAnswer: "BMP"
  },
  {
    question: "What is the process id of the init process?",
    options: ["2", "4", "1", "6"],
    correctAnswer: "1"
  },
  {
    question: "Which Of The Following Is The Name Of A Linux Kernel File?",
    options: ["Vmlinux", "Vmlinuz", "Lynx", "Linux"],
    correctAnswer: "Vmlinuz"
  },
  {
    question: "Which Of The Following Directories Does Not Contain Binary Files?",
    options: ["/boot", "/etc", "/bin", "/sbin"],
    correctAnswer: "/etc"
  },
  {
    question: "In which menu is the master slide function available?",
    options: ["Slide Show", "Slide", "View", "Tools"],
    correctAnswer: "View"
  },
  {
    question: "The default name of the Impress presentation is ................",
    options: ["Calc", "Slide 1", "Writer", "Untitled 1"],
    correctAnswer: "Untitled 1"
  },
  {
    question: "What is the maximum zoom percentage in LibreOffice Impress?",
    options: ["300%", "450%", "500%", "3000%"],
    correctAnswer: "3000%"
  },
  {
    question: "We can create a new presentation by using all of the following except.",
    options: ["Ctrl+N", "Ctrl+O", "Click On New Icon", "File Menu"],
    correctAnswer: "Ctrl+N"
  },
  {
    question: "Function key F7 is not used for spellcheck.",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "Can we set a custom slide show in LibreOffice Impress?",
    options: ["Yes", "No"],
    correctAnswer: "Yes"
  },
  {
    question: "Shortcut key Ctrl+Shift+S is used to save the Impress presentation on another location or make a copy.",
    options: ["False", "True"],
    correctAnswer: "True"
  },
  {
    question: "Arrow left is used to move the cursor to the left.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "Which of the following keys is used to insert a new slide in LibreOffice Impress?",
    options: ["Ctrl+M", "Ctrl+A", "Ctrl+B", "Ctrl+C"],
    correctAnswer: "Ctrl+M"
  },
  {
    question: "Help key shortcut used in LibreOffice is ..............",
    options: ["F1", "F2", "F3", "F5"],
    correctAnswer: "F1"
  },
  {
    question: "Which function counts only numeric data in LibreOffice Calc?",
    options: ["COUNT()", "COUNTA()", "Both A & B", "None of these"],
    correctAnswer: "COUNT()"
  },
  {
    question: "Which function is used to show the current date in a cell in LibreOffice Calc?",
    options: ["TODAY()", "MAX()", "SUM()", "NOW()"],
    correctAnswer: "TODAY()"
  },
  {
    question: "In LibreOffice Calc, is 'ABC' a valid address for a cell?",
    options: ["False", "True"],
    correctAnswer: "False"
  },
  {
    question: "In LibreOffice Calc, which is not a valid cell address?",
    options: ["B6", "6B", "A1", "G7"],
    correctAnswer: "6B"
  },
  {
    question: "Shortcut key to apply currency format with two decimal places in LibreOffice Calc?",
    options: ["Ctrl+Shift+$", "Ctrl+Shift+%", "Ctrl+Shift+&", "Ctrl+Shift+~"],
    correctAnswer: "Ctrl+Shift+$"
  },
  {
    question: "What happens if you press Ctrl++ after selecting the second row in LibreOffice Calc spreadsheet?",
    options: ["Second row will be deleted", "A new row will be inserted below the selected second row", "Second row will hide", "A new row will be inserted above the selected row"],
    correctAnswer: "A new row will be inserted below the selected second row"
  },
  {
    question: "Summation is one of the functions in LibreOffice Calc to perform the summation of all the arguments passed in this function?",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "Shortcut key for duplicating shapes in LibreOffice?",
    options: ["Shift+F2", "Shift+F3", "Shift+F4", "Shift+F1"],
    correctAnswer: "Shift+F3"
  },
  {
    question: "In normal view, the cursor changes from the arrow to?",
    options: ["I-beam", "U-beam", "Shift+F4", "L-beam"],
    correctAnswer: "I-beam"
  },
  {
    question: "Which one of the following in LibreOffice Calc is not a valid option in Paste Special submenu of Edit menu?",
    options: ["Paste Only Numbers", "Paste Only Formula", "Paste Only Text", "Paste Only Alphabets"],
    correctAnswer: "Paste Only Alphabets"
  },
  {
    question: "Can we send an email without a subject?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "How many photos can be uploaded to Facebook simultaneously?",
    options: ["10", "15", "25", "30"],
    correctAnswer: "30"
  },
  {
    question: "What is the maximum time limit of video that can be uploaded to Twitter?",
    options: ["30 Seconds", "1 Minute", "2 Minutes", "2 Minutes 20 Seconds"],
    correctAnswer: "2 Minutes 20 Seconds"
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
    options: ["Facebook", "Twitter", "Instagram", "Google"],
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
    options: ["Tim Berners-Lee", "Ken Thomson", "Vint Cerf", "Ray Tomlinson"],
    correctAnswer: "Ray Tomlinson"
  },
  {
    question: "For getting an internet connection, we need to consult?",
    options: ["LABORATORY", "ORGANIZER", "ISP", "NONE OF THE OPTIONS"],
    correctAnswer: "ISP"
  },
  {
    question: "Suppose a crawler the website then a page is not having a link is called as?",
    options: ["DOORWAY PAGE", "ABSOLUTE PAGE", "DEAD END PAGE", "HOME PAGE"],
    correctAnswer: "DEAD END PAGE"
  },
  {
    question: "For secure EDI (Electronic Data Interchange) transmission on the internet?",
    options: ["PGP IS USED", "S/MIME IS USED", "TCP/IP IS USED", "MIME IS USED"],
    correctAnswer: "S/MIME IS USED"
  },
  {
    question: "In Google Chrome additional plugins are named as?",
    options: ["CHROME - PLUGINS", "ADDONS", "EXTENSIONS", "PLUGWARE"],
    correctAnswer: "EXTENSIONS"
  },
  {
    question: "Which of the following topologies cannot be used for a local area network?",
    options: ["BUS", "STAR", "NONE OF THE OPTIONS", "RING"],
    correctAnswer: "NONE OF THE OPTIONS"
  },
  {
    question: "Physical or logical arrangement of a network is.",
    options: ["TOPOLOGY", "NETWORKING", "ROUTING", "SWITCHING"],
    correctAnswer: "TOPOLOGY"
  },
  {
    question: "In which topology switch and hub used as a center node.",
    options: ["RING", "BUS", "STAR", "NONE OF"],
    correctAnswer: "STAR"
  },
  {
    question: "Data communication system spanning states, countries, or the whole world is?",
    options: ["LAN", "WAN", "MAN", "PAN"],
    correctAnswer: "WAN"
  },
  {
    question: "Data communication system within a building or campus is__?",
    options: ["LAN", "WAN", "MAN", "PAN"],
    correctAnswer: "LAN"
  },
  {
    question: "Which topology combines two or more than two topologies?",
    options: ["RING", "BUS", "HYBRID", "ALL OF THE ABOVE"],
    correctAnswer: "HYBRID"
  },
  {
    question: "...... provides virtual machines, virtual storage, virtual infrastructure, and other hardware assets?",
    options: ["IaaS", "SaaS", "PaaS", "All of the mentioned"],
    correctAnswer: "IaaS"
  },
  {
    question: "How many types of service models are mainly present in the cloud?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3"
  },
  {
    question: "Which of these is not a major type of cloud computing usage?",
    options: ["Hardware as a service", "Platform as a service", "Software as a service", "Infrastructure as a service"],
    correctAnswer: "Hardware as a service"
  },
  {
    question: "What are the two main types of Virtual Reality?",
    options: ["Fully immersive and non-immersive", "VR and AR", "Reality and Unreality", "Oculus Rift and HTC Vive"],
    correctAnswer: "Fully immersive and non-immersive"
  },
  {
    question: "What is the term used for describing the judgmental or commonsense part of problem-solving?",
    options: ["Heuristic", "Critical", "Value based", "Analytical"],
    correctAnswer: "Heuristic"
  },
  {
    question: "The characteristics of the computer system capable of thinking, reasoning, and learning is known as?",
    options: ["Machine intelligence", "Human intelligence", "Artificial intelligence", "Virtual intelligence"],
    correctAnswer: "Artificial intelligence"
  },
  {
    question: "The field that investigates the mechanics of human intelligence is?",
    options: ["History", "Cognitive science", "Psychology", "Sociology"],
    correctAnswer: "Cognitive science"
  },
  {
    question: "What is the name of the computer program that simulates the thought processes of human beings?",
    options: ["Human logic", "Expert reason", "Expert system", "Personal information"],
    correctAnswer: "Expert system"
  },
  {
    question: "Who is considered to be the 'father' of artificial intelligence?",
    options: ["Fisher Ada", "John McCarthy", "Allen Newell", "Alan Turing"],
    correctAnswer: "John McCarthy"
  },
  {
    question: "DARPA, the agency that has funded a great deal of American AI research, is part of the Department of _______?",
    options: ["Defense", "Energy", "Education", "Justice"],
    correctAnswer: "Defense"
  },
  {
    question: "Out of IMAP and POP3, which one is more reliable?",
    options: ["IMAP & POP3 both", "IMAP", "Both are unreliable", "POP3"],
    correctAnswer: "POP3"
  },
  {
    question: "Which of the following is not a type of POS?",
    options: ["Restaurant POS", "ATM POS", "Tablet-based POS", "Reception Desk POS"],
    correctAnswer: "Restaurant POS"
  },
  {
    question: "When a hacker penetrates a network, this is a network _______ issue",
    options: ["Performance", "Reliability", "Security", "None of the above"],
    correctAnswer: "Security"
  },
  {
    question: "Where was the 22nd National e-Governance Conference held in 2019?",
    options: ["Shillong", "Arunachal", "Uttar Pradesh", "None of these"],
    correctAnswer: "Shillong"
  },
  {
    question: "From which shortcut do we upload a document directly on Google Drive?",
    options: ["Ctrl+U", "Ctrl+I", "Shift+U", "Shift+I"],
    correctAnswer: "Shift+U"
  },
  {
    question: "What is CRM?",
    options: ["Company Relationship Management", "Customer Response Management", "Customer Relationship Management", "Company Response Management"],
    correctAnswer: "Customer Relationship Management"
  },
  {
    question: "Which of the following DDoS in mobile systems wait for the owner to trigger the cyber attack?",
    options: ["botnets", "programs", "virus", "worms"],
    correctAnswer: "botnets"
  },
  {
    question: "Which of the following is the least strong security encryption standard?",
    options: ["WPA3", "WPA2", "WPA", "WEP"],
    correctAnswer: "WEP"
  },
  {
    question: "Which of the following can diminish the chance of data leakage?",
    options: ["Steganography", "Chorography", "Cryptography", "Authentication"],
    correctAnswer: "Steganography"
  },
  {
    question: "What is the full form of NUUP?",
    options: ["National Unified USSD Platform", "National Unifier USSD Platform", "National Universal USSD Platform", "None"],
    correctAnswer: "National Unified USSD Platform"
  },
  {
    question: "The full name of CVV is Card Verification Value?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "DigiLocker cannot be used to?",
    options: ["Share documents", "Store documents", "Verify documents", "Buy documents"],
    correctAnswer: "Buy documents"
  },
  {
    question: "Which is not required for accessing the service of POS system?",
    options: ["PIN", "Internet", "Debit/Credit Card", "Account Number"],
    correctAnswer: "Account Number"
  },
  {
    question: "From what date did all banks start to share their ATM cost for the transaction?",
    options: ["September 1, 2009", "January 1, 2009", "April 1, 2009", "July 1, 2009"],
    correctAnswer: "April 1, 2009"
  },
  {
    question: "Utility of e-wallet is not the same as to?",
    options: ["RuPay Card", "Debit Card", "Credit Card", "Cash Card"],
    correctAnswer: "Credit Card"
  },
  {
    question: "Who started the ATM card first?",
    options: ["SBI", "HSBC", "HDFC", "ICICI"],
    correctAnswer: "HSBC"
  },
  {
    question: "How many digits are there in CVV of ATM and Credit Card?",
    options: ["6 digits", "4 digits", "3 digits", "5 digits"],
    correctAnswer: "3 digits"
  },
  {
    question: "What is meant by Aadhaar seeding?",
    options: ["Linking of Aadhaar with Bank account", "Duplicate issuance of Aadhaar", "Transfer of Aadhaar", "None of above"],
    correctAnswer: "Linking of Aadhaar with Bank account"
  },
  {
    question: "PPF means",
    options: ["Pension Planning Funds", "Person having Pension Facilities", "Public Provident Fund", "Permanent Practitioners Forum"],
    correctAnswer: "Public Provident Fund"
  },
  {
    question: "What is the timing of NEFT?",
    options: ["8:00 am to .6:00 pm", "8:00 am to 7:00 pm", "6:30 am to 5:30 pm", "None"],
    correctAnswer: "8:00 am to 7:00 pm"
  },
  {
    question: "Which language is not there?",
    options: ["Low level language", "Medium level language", "High level language", "None"],
    correctAnswer: "Medium level language"
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
