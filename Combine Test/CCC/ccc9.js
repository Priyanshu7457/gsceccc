const quizData = [
    {
        question: "Proc filesystem provides the information about",
        options: ["processes", "processor", "proxy server", "none of the mentioned"],
        correctAnswer: "processes"
    },
    {
        question: "The /proc directory contains",
        options: ["numerical sub-directory for each running process", "sub-directories for installed buses", "a text listing of filesystems which are supported by the kernel", "all of the mentioned"],
        correctAnswer: "all of the mentioned"
    },
    {
        question: "The directory /srv contains",
        options: ["site-specific data which is served by the system", "all the system files", "all the service files provided by the specific user", "none of the mentioned"],
        correctAnswer: "site-specific data which is served by the system"
    },
    {
        question: "Proc files are",
        options: ["read-only files", "read-write files", "both read-write and read-only files", "none of the mentioned"],
        correctAnswer: "both read-write and read-only files"
    },
    {
        question: "The command “echo www.sanfoundry.com > /proc/sys/kernel/hostname” will",
        options: ["change the hostname", "print “www.sanfoundry.com”", "do nothing", "none of the mentioned"],
        correctAnswer: "change the hostname"
    },
    {
        question: "Which command is used to bring the background process to foreground?",
        options: ["bg", "fg", "background", "foreground"],
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
        question: "We can change the priority of a running process using",
        options: ["nice", "renice", "priority cannot be changed for a running process", "only superuser can change the priority"],
        correctAnswer: "renice"
    },
    {
        question: "User’s Primary Group id is listed in which file, at the time of the creation of the user (On a standard Unix system)",
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
        options: ["An invalid user id", "The id of the root user", "The id of a user when the user’s account is deleted", "None of the mentioned"],
        correctAnswer: "The id of the root user"
    },
    {
        question: "Which of the following command can be used to change the user password?",
        options: ["user can’t change the password", "passwd", "passd", "pwd"],
        correctAnswer: "passwd"
    },
    {
        question: "What does the following command do ? who | wc –l",
        options: ["List the number of users logged in", "List the users", "List the number of users in the system", "Display the content of who command"],
        correctAnswer: "List the number of users logged in"
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
        question: "Which command executes ‘command’ in place of the current process instead of creating a new process?",
        options: ["exec", "command", "trap", "none of the mentioned"],
        correctAnswer: "exec"
    },
    {
        question: "Identify the command which is used to create Linux File systems.",
        options: ["fsck", "mkfs", "fdisk", "mount"],
        correctAnswer: "mkfs"
    },
    {
        question: "Short cut key of insert table in LibreOffice Writer",
        options: ["Ctrl+F12", "Ctrl+F5", "Ctrl+F10", "Ctrl+F11"],
        correctAnswer: "Ctrl+F12"
    },
    {
        question: "Short cut key of spelling check in LibreOffice Writer",
        options: ["F12", "F5", "F7", "F11"],
        correctAnswer: "F7"
    },
    {
        question: "Short cut key of automatic spelling check in LibreOffice Writer",
        options: ["Shift+F12", "Shift+F7", "Shift+F3", "Shift+F4"],
        correctAnswer: "Shift+F7"
    },
    {
        question: "Short cut key of thesaurus in LibreOffice Writer",
        options: ["Ctrl+F12", "Ctrl+F5", "Ctrl+F7", "Ctrl+F11"],
        correctAnswer: "Ctrl+F7"
    },
    {
        question: "Short cut key of auto text in LibreOffice Writer",
        options: ["Ctrl+F12", "Ctrl+F3", "Ctrl+F7", "Ctrl+F11"],
        correctAnswer: "Ctrl+F3"
    },
    {
        question: "Short cut key of close the current window in LibreOffice Writer",
        options: ["Ctrl+H", "Ctrl+W", "Ctrl+Q", "Ctrl+J"],
        correctAnswer: "Ctrl+W"
    },
    {
        question: "Short cut key of help in LibreOffice Writer",
        options: ["F12", "F1", "F7", "F11"],
        correctAnswer: "F1"
    },
    {
        question: "How many scroll bars will appear when zooming the document to 300%?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },
    {
        question: "Which alignment is not there in LibreOffice Impress?",
        options: ["Central Alignment", "Left Alignment", "Right Alignment", "Justification"],
        correctAnswer: "Justification"
    },
    {
        question: "Which shortcut keys are useful for Paste Unformatted Text in Impress?",
        options: ["Ctrl + Shift + v", "Ctrl + Alt + Shift + v", "Ctrl + Alt + v", "None"],
        correctAnswer: "Ctrl + Shift + v"
    },
    {
        question: "NPCI launched in which year",
        options: ["2008", "2010", "2006", "2015"],
        correctAnswer: "2008"
    },
    {
        question: "Which one is not a key stakeholder of Digilocker?",
        options: ["citizens", "requesters", "issuers", "government"],
        correctAnswer: "issuers"
    },
    {
        question: "The correct combination of e-wallet components is",
        options: ["Software and hardware", "Software and information", "Hardware and internet", "Hardware and information"],
        correctAnswer: "Software and information"
    },
    {
        question: "What is S/MIME?",
        options: ["Secure Multipurpose Intranet Mail Extensions", "Secure Multipurpose Internet Mail Extensions", "Secure Multipurpose Internet Message Extensions", "Secure Multipurpose Intranet Message Extensions"],
        correctAnswer: "Secure Multipurpose Internet Mail Extensions"
    },
    {
        question: "Is it safe to click on links in promotional emails, open attachments, and share personal information?",
        options: ["false", "true"],
        correctAnswer: "false"
    },
    {
        question: "To protect against phishing, what is the recommendation for changing your finance password?",
        options: ["no need to change", "every 2 months", "every 6 months", "every 12 months"],
        correctAnswer: "every 6 months"
    },
    {
        question: "Which of the following is a strong password?",
        options: ["123456", "P@ssw0rd", "ILoveYou123", "All of the above"],
        correctAnswer: "P@ssw0rd"
    },
    {
        question: "In symmetric key cryptography, the key used by the sender and receiver is",
        options: ["different", "never shared", "Two keys are used", "shared"],
        correctAnswer: "shared"
    },
    {
        question: "Protecting information from being disclosed to unauthorized parties is",
        options: ["information technology", "confidentiality", "availability", "integrity"],
        correctAnswer: "confidentiality"
    },
    {
        question: "What idea did American Express come up with in 2000 to combat identity theft?",
        options: ["none of the options", "a disposable transaction number", "a no-hack website", "an online-fraud detective service"],
        correctAnswer: "an online-fraud detective service"
    },
    {
        question: "Which of the following protocols is recommended to be turned off because it transmits usernames and passwords in plaintext?",
        options: ["TELECOMMUNICATION NETWORK (TELNET)", "HTTPS (HYPER TEXT TRANSFER PROTOCOL SECURED)", "SSL (SECURE SOCKET LAYER)", "TFTP (TRIVIAL FILE TRANSFER PROTOCOL)"],
        correctAnswer: "TELECOMMUNICATION NETWORK (TELNET)"
    },
    {
        question: "The certificate authority signs the digital certificate with",
        options: ["user’s private key", "it’s own public key", "it’s own private key", "user’s public key"],
        correctAnswer: "it’s own public key"
    },
    {
        question: "Which of the following is not a typical characteristic of an ethical hacker",
        options: ["Excellent knowledge of Windows", "Understands the process of exploiting network vulnerabilities", "Patience, persistence, and perseverance", "Has the highest level of security for the organization"],
        correctAnswer: "Has the highest level of security for the organization"
    },
    {
        question: "Which of these are fairly secure online payment services",
        options: ["ePostMe and Post me later", "eBillMe and Bill me later", "epayMe and pay me later", "all of the above"],
        correctAnswer: "eBillMe and Bill me later"
    },
    {
        question: "The ________ is the message after transformation",
        options: ["Plaintext", "Secret-text", "Ciphertext", "None of the above"],
        correctAnswer: "Ciphertext"
    },
    {
        question: "A/an ________ algorithm transforms ciphertext to plaintext",
        options: ["Encryption", "Decryption", "Both (A) and (B)", "None of the above"],
        correctAnswer: "Decryption"
    },
    {
        question: "A/an ________ algorithm transforms plaintext to ciphertext",
        options: ["Encryption", "Decryption", "Both (A) and (B)", "None of the above"],
        correctAnswer: "Encryption"
    },
    {
        question: "The ________ is the original message before transmission",
        options: ["ciphertext", "plaintext", "secret-text", "none of the above"],
        correctAnswer: "plaintext"
    },
    {
        question: "ECB stands for",
        options: ["electronic code book", "electronic cipher book", "C electronic clear book", "none of these"],
        correctAnswer: "electronic code book"
    },
    {
        question: "Which AI technique enables computers to understand the associations and relationships between objects and events?",
        options: ["Heuristic Processing", "Cognitive Science", "Relative Symbolism", "Pattern Matching"],
        correctAnswer: "Pattern Matching"
    },
    {
        question: "The PEAS in the task environment is about____________.",
        options: ["Peer, Environment, Actuators, Sense", "Performance, Environment, Actuators, Sensors", "Perceiving, Environment, Actuators, Sensors", "None of the above"],
        correctAnswer: "Performance, Environment, Actuators, Sensors"
    },
    {
        question: "Web Crawler is an example of______.",
        options: ["Intelligent Agent", "Problem-solving agent", "Simple reflex agent", "Model-based agent"],
        correctAnswer: "Intelligent Agent"
    },
    {
        question: "In artificial Intelligence, knowledge can be represented as_______.",
        options: ["Predicate Logic", "Propositional Logic", "Compound Logic", "Both A & B"],
        correctAnswer: "Both A & B"
    },
    {
        question: "Ways to achieve AI in real-life are_________.",
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
        question: "Which of the following terms IS NOT one of the five basic parts of a robot?",
        options: ["Peripheral tools", "End effectors", "Controller", "Drive"],
        correctAnswer: "Peripheral tools"
    },
    {
        question: "Which of the following places would be LEAST likely to include operational robots?",
        options: ["Warehouse", "Factory", "Hospitals", "Private homes"],
        correctAnswer: "Private homes"
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
        question: "All cloud computing applications suffer from the inherent _______ that is intrinsic in their WAN connectivity.",
        options: ["noise", "propagation", "latency", "all of the mentioned"],
        correctAnswer: "latency"
    },
    {
        question: "Which of the following is the Cloud Platform provided by Amazon?",
        options: ["AWS", "Cloudera", "Azure", "All of the mentioned"],
        correctAnswer: "AWS"
    },
    {
        question: "It detects moving objects with a predefined area of interest.",
        options: ["Motion tracker", "SMD", "HMD", "Motion analyzer"],
        correctAnswer: "HMD"
    },
    {
        question: "Which of these schools was not among the early leaders in artificial intelligence research?",
        options: ["Dartmouth University", "Stanford University", "Massachusetts Institute of Technology", "Harvard University"],
        correctAnswer: "Harvard University"
    },
    {
        question: "Each computer connected to the internet is mandated to have .......?",
        options: ["A pentium processor", "An anti-virus", "A password", "A unique IP address"],
        correctAnswer: "A unique IP address"
    },
    {
        question: "BIOS Stands for Basic Integrated Operating System",
        options: ["true", "false"],
        correctAnswer: "false"
    },
    {
        question: "Different cells in LibreOffice Calc within a row can have different heights.",
        options: ["true", "false"],
        correctAnswer: "false"
    },
    {
        question: "Co-axial cable is used in the cable TV network.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The full name of MPEG is Moving Picture Experts Group.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Landscape is?",
        options: ["Paper Size", "A font style", "Page Orientation", "Page Layout"],
        correctAnswer: "Page Orientation"
    },
    {
        question: "The utility which is used to increase the speed of programs is called?",
        options: ["Disk defragmenter", "Disk cleanup", "Disk formatter", "None of these"],
        correctAnswer: "Disk defragmenter"
    },
    {
        question: "Which of the following cannot be tracked using POS?",
        options: ["Inventory changes", "Gross revenue", "Promotions", "Pricing accrual"],
        correctAnswer: "Promotions"
    },
    {
        question: "In AEPS which of the following input determines the bank of the customer?",
        options: ["PIN", "IIN", "SWIFT", "CVV"],
        correctAnswer: "IIN"
    },
    {
        question: "What is cVIGIL app related to?",
        options: ["Custom", "Police", "Vigilance", "Election"],
        correctAnswer: "Election"
    },
    {
        question: "Can a printer be added by selecting the option to set up a _______ device in Windows 10?",
        options: ["Printer & Scanners", "Printer", "Scanners", "Bluetooth And Other Device"],
        correctAnswer: "Printer & Scanners"
    },
    {
        question: "COMPUTER NAME” is found by typing the following command in the command prompt?",
        options: ["Machine name", "Computer name", "Hostname", "Name"],
        correctAnswer: "Hostname"
    },
    {
        question: "Where is Microprocessor Used?",
        options: ["Mobile", "Computer", "Laptop", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "A Digital Banking OTP consists of?",
        options: ["Alphabets", "Special Symbols", "Digits", "Combination of ALL"],
        correctAnswer: "Digits"
    },
    {
        question: "Transaction ID and reference number are the same?",
        options: ["true", "false"],
        correctAnswer: "false"
    },
    {
        question: "Which Printer Is Commonly Used For Desktop Publishing?",
        options: ["Daisy Wheel Printer", "Dot-matrix Printer", "Laser Printer", "Ink-jet Printer"],
        correctAnswer: "Laser Printer"
    },
    {
        question: "Who can edit sent mail?",
        options: ["Sender", "Receiver", "None", "Both A & B"],
        correctAnswer: "None"
    },
    {
        question: "Which operation is not performed by a computer?",
        options: ["Inputting", "Processing", "Controlling", "Understanding"],
        correctAnswer: "Understanding"
    },
    {
        question: "Line spacing refers to.",
        options: ["The space between the lines of text.", "The height of lines.", "The length of lines.", "Both (a) and (c)"],
        correctAnswer: "The space between the lines of text."
    },
    {
        question: "LibreOffice Calc is a powerful.",
        options: ["Word processing software", "Spreadsheet package", "DBMS package", "Communication package"],
        correctAnswer: "Spreadsheet package"
    },
    {
        question: "A dedicated computer.",
        options: ["Is used by one person only.", "Is assigned one and only one task.", "Uses only one kind of software.", "Is meant for application software"],
        correctAnswer: "Is assigned one and only one task."
    },
    {
        question: "MAC address is a ……… byte address.",
        options: ["6", "4", "8", "2"],
        correctAnswer: "6"
    },
    {
        question: "The term bit is short for.",
        options: ["Megabyte", "Binary language", "Binary digit", "Binary number"],
        correctAnswer: "Binary digit"
    },
    {
        question: "The keystrokes Ctrl+ I is used to.",
        options: ["Increase font size", "Insert a line break", "Indicate the text show should be bold", "Applies italic format to the selected text"],
        correctAnswer: "Applies italic format to the selected text"
    },
    {
        question: "Lynx is a browser.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Safari is a web browser.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Altavista is a search engine.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "How many values does a nibble have?",
        options: ["15", "16", "20", "24"],
        correctAnswer: "16"
    },
    {
        question: "If the umask value is 0002, what will be the permissions of the new directory?",
        options: ["777", "775", "774", "664"],
        correctAnswer: "775"
    },
    {
        question: "Which bank launched the first Rupay ATM & Micro ATM card with the Aadhaar number?",
        options: ["SBI", "HDFC", "BOI", "ICICI"],
        correctAnswer: "BOI"
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
