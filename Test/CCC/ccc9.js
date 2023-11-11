const quizData = [
    {
        question: "What does the term 'Malware' stand for?",
        options: ["Malfunctioning Software", "Malicious Firmware", "Malfunctioning Hardware", "Malicious Software"],
        correctAnswer: "Malicious Software"
    },
    {
        question: "In computer security, what means that the information in a computer system can only be accessible by authorized parties?",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        correctAnswer: "Confidentiality"
    },
    {
        question: "Which of the following is an independent malicious program that needs no host program?",
        options: ["Trap doors", "Trojan horse", "Virus", "Worm"],
        correctAnswer: "Worm"
    },
    {
        question: "__________ programs can be used to accomplish functions indirectly that an unauthorized user could not accomplish directly.",
        options: ["Zombie", "Worm", "Trojan Horses", "Logic Bomb"],
        correctAnswer: "Trojan Horses"
    },
    {
        question: "Which of the following malicious programs do not replicate automatically?",
        options: ["Trojan Horse", "Virus", "Worm", "Zombie"],
        correctAnswer: "Trojan Horse"
    },
    {
        question: "The …………….. is a code embedded in some legitimate program that is set to 'explode' when certain conditions are met.",
        options: ["Trap doors", "Trojan horse", "Logic Bomb", "Virus"],
        correctAnswer: "Logic Bomb"
    },
    {
        question: "The ……….. is code that recognizes some special sequence of input or is triggered by being run from a certain user ID or by unlikely a sequence of events.",
        options: ["Trap doors", "Trojan horse", "Logic Bomb", "Virus"],
        correctAnswer: "Trap doors"
    },
    {
        question: "In computer security, what means that computer system assets can be modified only by authorized parties?",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        correctAnswer: "Integrity"
    },
    {
        question: "…………. means that the sender must not be able to deny sending a message that he sent.",
        options: ["Non-repudiation", "Integrity", "Authentication", "None of the above"],
        correctAnswer: "Non-repudiation"
    },
    {
        question: "………. refers to the situation in which services or data become unavailable, unusable, and destroyed.",
        options: ["Interruption", "Integrity", "Authentication", "All of these"],
        correctAnswer: "Interruption"
    },
    {
        question: "For secure electronic data interchange (EDI) transmission on the internet, …… is used.",
        options: ["TCP/IP", "MIME", "S/MIME", "None of the above"],
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
        question: "NOSQL stands for......?",
        options: ["Negative SQL", "None Opend SQL", "Not only SQL", "None of these"],
        correctAnswer: "Not only SQL"
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
        options: ["Cryptomessaging", "Cryptocurrency", "Random Messaging", "Cryptography"],
        correctAnswer: "Cryptomessaging"
    },
    {
        question: "The process of identifying objects and shapes in a photograph, drawing, video, or other visual images.",
        options: ["Pattern Recognition", "Image Analysis", "OCR", "Fuzzy Logic"],
        correctAnswer: "Image Analysis"
    },
    {
        question: "The ability to recover and read deleted or damaged files from a criminal's computer is an example of a law enforcement specialty called:",
        options: ["Robotics", "Simulation", "Computer forensics", "Animation"],
        correctAnswer: "Computer forensics"
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
        question: "When a hacker penetrates a network, this is a network _______ issue.",
        options: ["Performance", "Reliability", "Security", "None of the above"],
        correctAnswer: "Security"
    },
    {
        question: "Where was the 22nd National e-Governance Conference held in 2019?",
        options: ["Shillong", "Arunachal", "Uttar Pradesh", "None of these"],
        correctAnswer: "Shillong"
    },
    {
        question: "From which shortcut can we upload a document directly on Google Drive?",
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
        options: [" National Unified USSD Platform", "National Unifier USSD Platform", "National Universal USSD Platform", "None"],
        correctAnswer: " National Unified USSD Platform"
    },
    {
        question: "How many digits are in IMEI?",
        options: [" 15", "17", "12", "13"],
        correctAnswer: " 15"
    },
    {
        question: "Full form of IMEI?",
        options: [" International mobile equipment identify", "Internet mobile equipment identify", "International mobile equipment identity", "None"],
        correctAnswer: "International mobile equipment identity"
    },
    {
        question: "Full form of MMID?",
        options: [" Mobile Money Identifier", "Mobile making identifier", "Money mobile identifier", "Mobile money immediate"],
        correctAnswer: " Mobile Money Identifier"
    },
    {
        question: "How many digits is the MMID number?",
        options: [" 7", "5", "12", "11"],
        correctAnswer: " 7"
    },
    {
        question: "What is the full form of IVR?",
        options: [" Inter voice response", "interactive voice response", "interactive violet response", "interactive voice respect"],
        correctAnswer: "interactive voice response"
    },
    {
        question: "Data encryption is used for",
        options: [" Security", "Performance", "Storage", "All of above - ऊपर के सभी"],
        correctAnswer: " Security"
    },
    {
        question: "Which one is least Secure?",
        options: [" Password", "Keycard", "Retina", "Fingerprint"],
        correctAnswer: " Keycard"
    },
    {
        question: "Computer viruses are man made",
        options: [" TRUE", "FALSE"],
        correctAnswer: " TRUE"
    },
    {
        question: "A firewall is a security device deployed at the boundary of corporate intranet to protect it from unauthorized access",
        options: [" TRUE", "FALSE"],
        correctAnswer: " TRUE"
    },
    {
        question: "Which of the following option is not best described about industry 4.0",
        options: [" Smart factory", "Speed", "Analytics", "None of above"],
        correctAnswer: "Speed"
    },
    {
        question: "The objective for industry 4.0 is",
        options: [" Increase efficiency", "Reduced complexity", "Enabled self controlling", "All of above"],
        correctAnswer: "All of above"
    },
    {
        question: "This is not a benefit of Big Data analytics",
        options: [" Faster, better decision making", "Cost Reduction", "Manage of Data", "None of the above"],
        correctAnswer: "Manage of Data"
    },
    {
        question: "Unsolicited Bulk E-mails (UBI) are called __________",
        options: ["SMS", "MMS", "Spam emails", "malicious emails"],
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
        options: ["phishing", "soliciting", "Dos attacks", "stalking"],
        correctAnswer: "Dos attacks"
    },
    {
        question: "Which of the following is not an external threat to a computer or a computer network.",
        options: [" Ignorance", "Trojan horse", "Adware", "Crackers"],
        correctAnswer: " Ignorance"
    },
    {
        question: "When a person is harassed repeatedly by being followed, called, or written to, he or she is the target of",
        options: [" bullying", "stalking", "identity theft", "phishing"],
        correctAnswer: "stalking"
    },
    {
        question: "Viruses are",
        options: [" man made", "naturally occur", "machine made", "all of these"],
        correctAnswer: " man made"
    },
    {
        question: "Monitors user activity on the internet and transmits that information in the background to someone else",
        options: [" malware", "spyware", "adware", "none of these"],
        correctAnswer: "spyware"
    },
    {
        question: "It allows a visited website to store its own information about a user on the user’s computer",
        options: [" spam", "cookies", "malware", "adware"],
        correctAnswer: "cookies"
    },
    {
        question: "Who is the father of Computer Security or Cyber Security?",
        options: ["Robert", "Charles", "Bob Thomas", "August Kerckhoffs"],
        correctAnswer: "August Kerckhoffs"
    },
    {
        question: "__________ is a violent act done using the Internet, which either threatens any technology user or leads to loss of life or otherwise harms anyone in order to accomplish political gain.",
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
        question: "Hackers cannot do which of the following after compromising your phone?",
        options: ["Shoulder surfing", "Steal your information", "Use your app credentials", "Accessing your voice mail"],
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
        question: "When an earthquake severs a fiber-optic cable, this is a network _______ issue",
        options: ["Performance", "Reliability", "Security", "None of the above"],
        correctAnswer: "Performance"
    },

    {
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
        question: "EDI (Electronic Data Interchange) over the internet uses",
        options: ["MIME to attach EDI forms to e-mail messages", "FTP to send business forms", "HTTP to send business forms", "SGML to send business forms"],
        correctAnswer: "MIME to attach EDI forms to e-mail messages"
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
        question: "DES stands for…",
        options: ["data encryption standard", "data elimination standard", "data encapsulation standard", "none of these"],
        correctAnswer: "data encryption standard"
    },
    {
        question: "How many keys are required if two parties communicate using Symmetric Cryptography?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "One"
    },
    {
        question: "What is S/MIME?",
        options: ["Secure Multipurpose Intranet Mail Extensions", "Secure Multipurpose Internet Mail Extensions", "Secure Multipurpose Internet Message Extensions", "Secure Multipurpose Intranet Message Extensions"],
        correctAnswer: "Secure Multipurpose Internet Mail Extensions"
    },
    {
        question: "Is it safe to click on links in promotional emails, open attachments and to share personal information?",
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
        question: "In symmetric key cryptography, the key used by the sender and receiver is...",
        options: ["different", "never shared", "Two keys are used", "shared"],
        correctAnswer: "shared"
    },
    {
        question: "Protecting information from being disclosed to unauthorized parties is known as...",
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
        question: "The certificate authority signs the digital certificate with...",
        options: ["user’s private key", "it’s own public key", "it’s own private key", "user’s public key"],
        correctAnswer: "it’s own public key"
    },
    {
        question: "Which of the following is not a typical characteristic of an ethical hacker?",
        options: ["Excellent knowledge of Windows", "Understands the process of exploiting network vulnerabilities", "Patience, persistence, and perseverance", "Has the highest level of security for the organization"],
        correctAnswer: "Has the highest level of security for the organization"
    },
    {
        question: "Which of these are fairly secure online payment services?",
        options: ["ePostMe and Post me later", "eBillMe and Bill me later", "epayMe and pay me later", "all of the above"],
        correctAnswer: "eBillMe and Bill me later"
    },
    {
        question: "The ________ is the message after transformation.",
        options: ["Plaintext", "Secret-text", "Ciphertext", "None of the above"],
        correctAnswer: "Ciphertext"
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
        question: "The ________ is the original message before transmission.",
        options: ["Ciphertext", "Plaintext", "Secret-text", "None of the above"],
        correctAnswer: "Plaintext"
    },
    {
        question: "ECB stands for",
        options: ["electronic code book", "electronic cipher book", "C electronic clear book", "none of these"],
        correctAnswer: "electronic code book"
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
