const quizData = [
  {
    question: "Allows user to send a file with email.",
    options: ["Draft", "Messenger", "Sent", "Attachments"],
    correctAnswer: "Attachments"
  },
  {
    question: "Which is not type of e-commerce?",
    options: ["Business to Business (B2B)", "Business to Customer (B2C)", "Alpha-commerce (A2A)", "Consumer-to-business (C2B)"],
    correctAnswer: "Alpha-commerce (A2A)"
  },
  {
    question: "E-mail stands for",
    options: ["Electronic man", "Electromagnetic mail", "Electronic mail", "Engine Mail"],
    correctAnswer: "Electronic mail"
  },
  {
    question: "OSI Reference Layer responsible for routing",
    options: ["Physical", "Network", "Data link", "Transport"],
    correctAnswer: "Network"
  },
  {
    question: "LinkedIn can be used to",
    options: ["Build connections", "Stay in touch with colleagues", "Search jobs", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "CEO and founder of Facebook is",
    options: ["Mark Zuckerberg", "Mark Saverin and Andrew McCollum", "Dustin Biden and Chris Hughes", "None of the above"],
    correctAnswer: "Mark Zuckerberg"
  },

  {
    question: "______ is used to send an email to some other person in addition to the main subject receiver without disclosing details to all.",
    options: ["Carbon Copy", "Blind Carbon Copy", "Double carbon copy", "Xerox Copy"],
    correctAnswer: "Blind Carbon Copy"
  },
  {
    question: "Choose the correct format for Gmail address",
    options: ["abc@gmail.com", "abc@gmail-com", "abcgmail@com", "None of the above"],
    correctAnswer: "abc@gmail.com"
  },
  {
    question: "What is the max size of attachment in Gmail?",
    options: ["25 MB", "25 TB", "25 GB", "25 KB"],
    correctAnswer: "25 MB"
  },
  {
    question: "What is blog?",
    options: ["web browser", "Website OR weblog", "search engine", "none of the mentioned"],
    correctAnswer: "Website OR weblog"
  },
  {
    question: "Usually signature appears at which place in email?",
    options: ["At the end", "In beginning", "In middle", "None of the above"],
    correctAnswer: "At the end"
  },
  {
    question: "What is the minimum age to join Facebook?",
    options: ["18 years", "15 years", "13 years", "10 years"],
    correctAnswer: "13 years"
  },
  {
    question: "Email is elegant mail.",
    options: ["TRUE", "FALSE"],
    correctAnswer: "FALSE"
  },
  {
    question: "Twitter is an example of",
    options: ["E-mail System", "System application", "Social Networking", "Web URL"],
    correctAnswer: "Social Networking"
  },
  {
    question: "Twitter is also known as",
    options: ["microblogging", "System application", "browser", "Web URL"],
    correctAnswer: "microblogging"
  },
  {
    question: "CC in email stands for",
    options: ["Carbon catch", "Carbon copy", "Consider copy", "Carbon coupon"],
    correctAnswer: "Carbon copy"
  },
  {
    question: "Instagram is a",
    options: ["educational website", "search engine", "social networking website", "shopping website"],
    correctAnswer: "social networking website"
  },
  {
    question: "The Place Where All Types Of Email Messages Are Organized Is Called What?",
    options: ["Inbox", "Mailbox", "Outbox", "None Of These"],
    correctAnswer: "Mailbox"
  },
  {
    question: "Which Of The Following Contains The Body Of The Email Message?",
    options: ["Image", "Both Image And Text", "Only Image", "Only Text"],
    correctAnswer: "Both Image And Text"
  },
  {
    question: "Email addresses separate the user name from the ISP using the symbol",
    options: ["&", "@", "$", "%"],
    correctAnswer: "@"
  },
  {
    question: "Can we send email without subject?",
    options: ["TRUE", "FALSE"],
    correctAnswer: "TRUE"
  },
  {
    question: "How many photos can be uploaded to Facebook simultaneously?",
    options: ["10", "15", "25", "30"],
    correctAnswer: "30"
  },
  {
    question: "What is the maximum time limit of video that can be uploaded to twitter?",
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
    correctAnswer: "Change host name"
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
    question: "To create a new email, click on which button?",
    options: ["Inbox", "Sent box", "Compose", "New mail"],
    correctAnswer: "Compose"
  },
  {
    question: "Unwanted E-mail is called as",
    options: ["Trash", "Spam", "Both A & B", "None of these"],
    correctAnswer: "Spam"
  },

  {
    question: "What is the maximum limit of characters in a tweet on Twitter?",
    options: ["280", "140", "560", "110"],
    correctAnswer: "280"
  },
  {
    question: "What was the old name of Twitter?",
    options: ["Twter", "Twttr", "Twiter", "None of these"],
    correctAnswer: "Twttr"
  },
  {
    question: "Which of the following is not an example of instant messaging?",
    options: ["WhatsApp", "Facebook Messenger", "Telegram", "E-mail"],
    correctAnswer: "E-mail"
  },
  {
    question: "Who is the father of Telegram?",
    options: ["Jack Dorsey", "Elon Musk", "Mark Zuckerberg", "Pavel Durov & Nikolai"],
    correctAnswer: "Pavel Durov & Nikolai"
  },
  {
    question: "A person who writes a blog or weblog is known as:",
    options: ["Webmaster", "Communicator", "Blogger", "None of these"],
    correctAnswer: "Blogger"
  },
  {
    question: "If you are buying a product from Flipkart, Amazon, and Snapdeal, this type of business model is called:",
    options: ["B2B", "C2C", "B2C", "G2G"],
    correctAnswer: "B2C"
  },
  {
    question: "Quikr and OLX are examples of C2C business model. (True/False)",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "If Maruti company purchases a tire from MRF company, this business is called as:",
    options: ["B2B", "C2C", "B2C", "G2G"],
    correctAnswer: "B2B"
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
    question: "Where are deleted e-mails stored?",
    options: ["Draft", "Trash", "Inbox", "Sent Mail"],
    correctAnswer: "Trash"
  },
  {
    question: "A block of text automatically added to the end of an outgoing e-mail is called:",
    options: ["Attachment", "Signature", "Decryption", "Encryption"],
    correctAnswer: "Signature"
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
