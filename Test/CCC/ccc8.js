const quizData = [
    {
        question: "Why is one-time password safe?",
        options: ["Easy to generate", "Not sharable", "Different for every access", "Encrypted password"],
        correctAnswer: "Different for every access"
    },
    {
        question: "What does BHIM stand for?",
        options: ["Bharat Interface for Money", "Bharat Interface for Machine", "Bharat Internet for Money", "Bharat Interface to Money"],
        correctAnswer: "Bharat Interface for Money"
    },
    {
        question: "The correct full form for UPI is",
        options: ["Unified Payment Interface", "Intermediate Payment Interface", "Unified Pay Interface", "Unified Peoples Interface"],
        correctAnswer: "Unified Payment Interface"
    },
    {
        question: "Which of the following will be the full form of IRCTC?",
        options: ["Indian Railway Catering and Tourism Corporation", "Indian Railway Corporation and Tourism Catering", "Indian Railway Catering and Travel Corporation", "None of These"],
        correctAnswer: "Indian Railway Catering and Tourism Corporation"
    },
    {
        question: "AADHAR is a unique identity number issued by____?",
        options: ["UBI", "UIAI", "UIDAI", "UBDAI"],
        correctAnswer: "UIDAI"
    },
    {
        question: "E-payments can be done through",
        options: ["Wallets", "Digital Wallets", "Cash", "None of the above"],
        correctAnswer: "Digital Wallets"
    },
    {
        question: "The number of digits printed on ATM Debit card is",
        options: ["10", "16", "11", "13"],
        correctAnswer: "16"
    },
    {
        question: "_____ is the fastest technique to instantly transfer funds electronically between different banks.",
        options: ["NEFT", "RTGS", "SMPS", "IMPS"],
        correctAnswer: "IMPS"
    },
    {
        question: "AEPS stands for:",
        options: ["Aadhaar Enabled Payment source", "Aadhaar Enrolled Payment System", "Aadhaar Enabled Payment system", "None of the above"],
        correctAnswer: "Aadhaar Enabled Payment System"
    },
    {
        question: "In Online Internet Banking, which payment method is used to immediately transfer the money?",
        options: ["RTGS", "UPI", "NEFT", "IMPS"],
        correctAnswer: "IMPS"
    },
    {
        question: "Choose the correct Instant Messaging app",
        options: ["Twitter", "Linkedin", "Telegram", "Instagram"],
        correctAnswer: "Telegram"
    },
    {
        question: "ORS stands for",
        options: ["Open Resource System", "Online Registration System", "Open Reform System", "Open Repair System"],
        correctAnswer: "Online Registration System"
    },
    {
        question: "E-payment can be done through UPI.",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "Who Among The Following Is The Founder Of Credit Cards?",
        options: ["Kevin Duffy", "Reid Halfman", "John Biggins", "None of These"],
        correctAnswer: "John Biggins"
    },
    {
        question: "What Is The Full Form Of MMID?",
        options: ["Mobile Money Identification", "Mobile Money Identifier", "Mobile Money Information", "None of these"],
        correctAnswer: "Mobile Money Identifier"
    },
    {
        question: "Name Of Bhim UPI Is Related To Mahatma Gandhi?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "FALSE"
    },
    {
        question: "Traditional AI techniques still used today include all of the following EXCEPT:",
        options: ["Searching", "Heuristics", "Pattern recognition", "Parallel processing"],
        correctAnswer: "Parallel processing"
    },
    {
        question: "USSD was launched by?",
        options: ["RBI", "SBI", "Bank of Baroda", "Union Bank of India"],
        correctAnswer: "Union Bank of India"
    },

    {
        question: "What is one advantage of the online system for paying bills?",
        options: ["You can pay faster", "You can save money", "You can track transactions in real-time", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which one of the following cloud concepts is related to sharing and pooling the resources?",
        options: ["Polymorphism", "Virtualization", "Abstraction", "None of the mentioned"],
        correctAnswer: "Virtualization"
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
        question: "Which is not required for accessing the service of the POS system?",
        options: ["PIN", "Internet", "Debit/Credit Card", "Account Number"],
        correctAnswer: "Account Number"
    },
    {
        question: "From what date have all banks started to share their ATM cost for the transaction?",
        options: ["September 1, 2009", "January 1, 2009", "April 1, 2009", "July 1, 2009"],
        correctAnswer: "April 1, 2009"
    },
    {
        question: "Utility of e-wallet is not the same as?",
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
        options: [
            "Linking of Aadhaar with Bank account",
            "Duplicate issuance of Aadhaar",
            "Transfer of Aadhaar",
            "None of the above"
        ],
        correctAnswer: "Linking of Aadhaar with Bank account"
    },
    {
        question: "PPF means",
        options: [
            "Pension Planning Funds",
            "Person having Pension Facilities",
            "Public Provident Fund",
            "Permanent Practitioners Forum"
        ],
        correctAnswer: "Public Provident Fund"
    },
    {
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
    },
    {
        question: "What is the full form of IMPS?",
        options: ["Immediate Payment Service", "Immediate Fund Transfer Service", "Interested Payment Service", "A & B both"],
        correctAnswer: "Immediate Payment Service"
    },
    {
        question: "What is the full form of PMSBY?",
        options: ["Pradhan Mantri Secure Bima Yojna", "Pradhan Mantri Security Bima Yojna", "Pradhan Mantri Suraksha Bima Yojna", "None"],
        correctAnswer: "Pradhan Mantri Suraksha Bima Yojna"
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
        question: "PIN stands for",
        options: ["Personal Identification Number", "Permanent Identification Number", "Primary Identification Number", "None of these"],
        correctAnswer: "Personal Identification Number"
    },
    {
        question: "QR Code stands for",
        options: ["Quick Result Code", "Quadratic Response Code", "Quick Response Code", "Quick Relay Code"],
        correctAnswer: "Quick Response Code"
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
        question: "What does IFSC stand for?",
        options: ["Indian Financial System Code", "Indian Fund System Code", "Indian Financial System Core", "None of these"],
        correctAnswer: "Indian Financial System Code"
    },
    {
        question: "How many digits are there in IFSC code?",
        options: ["10", "12", "11", "13"],
        correctAnswer: "11"
    },
    {
        question: "How many characters are there in the bank name in IFSC?",
        options: ["5", "4", "6", "3"],
        correctAnswer: "4"
    },
    {
        question: "Which digit separates the bank name and branch code in IFSC?",
        options: ["0", "1", "3", "2"],
        correctAnswer: "0"
    },
    {
        question: "For which card does one have to make advance payment?",
        options: ["Smart card", "Debit card", "Credit card", "Gold card"],
        correctAnswer: "Debit card"
    },
    {
        question: "Capital adequacy norms declared in the year 1996 is applicable to which type of banks?",
        options: ["Foreign banks", "Co-operative banks", "Private sector banks", "Nationalized banks"],
        correctAnswer: "Nationalized banks"
    },
    {
        question: "NEFT works on the principle of which of the following?",
        options: ["Deferred net settlement", "Different net settlement", "Core banking system", "None of these"],
        correctAnswer: "Deferred net settlement"
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
        question: "What does SWIFT stand for?",
        options: ["The Society for Worldwide Interbank Financial Telecommunications", "The Society for Worldwide International Financial Telecommunications", "The Society for Worldwide Internetwork Financial Telecommunications", "None of these"],
        correctAnswer: "The Society for Worldwide Interbank Financial Telecommunications"
    },
    {
        question: "What is the expiry date format on an ATM card?",
        options: ["yy/mm", "dd/mm", "mm/yy", "None of these"],
        correctAnswer: "mm/yy"
    },
    {
        question: "How many passport offices are there in India?",
        options: ["40", "37", "51", "48"],
        correctAnswer: "37"
    },
    {
        question: "What are the dimensions of a 500 rupee note?",
        options: ["66x150mm²", "70x160mm²", "55x170mm²", "80x180mm²"],
        correctAnswer: "66x150mm²"
    },
    {
        question: "What does USSD stand for?",
        options: ["User Sale Service Data", "User Supplementary Service Data", "Unstructured Supplementary Service Data", "Unique Supplementary Service Data"],
        correctAnswer: "Unstructured Supplementary Service Data"
    },
    {
        question: "USSD is available in how many languages?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "Prepaid Debit cards are also called:",
        options: ["Reloadable debit cards", "Loadable debit cards", "Relational debit cards", "None of these"],
        answer: "Reloadable debit cards"
    },
    {
        question: "Which digital company payment announced a new feature QR code on its app?",
        options: ["Payu", "Paypal", "Paytm", "Payoneer"],
        answer: "Paytm"
    },
    {
        question: "POS stands for:",
        options: ["Point of Service", "Point of Sale", "Point of Satisfaction", "None of The Above"],
        answer: "Point of Sale"
    },
    {
        question: "RuPay debit card is similar to:",
        options: ["Singapore's NETS", "China's UnionPay", "Both of The Above", "None of The Above"],
        answer: "Both of The Above"
    },
    {
        question: "The prepaid bank card is also called:",
        options: ["Convenience Gift Card", "Bank Gift Card", "Suitable Gift Card", "None of The Above"],
        answer: "Bank Gift Card"
    },
    {
        question: "QR code often do not contain data for...",
        options: ["Tracker", "Locator", "Person", "Identifier"],
        answer: "Person"
    },
    {
        question: "NABARD was established on the recommendations of which Committee?",
        options: ["B. Sivaramman", "Ram Manohar Lohiya", "Narasimham", "None of these"],
        answer: "B. Sivaramman"
    },
    {
        question: "Which is considered as a repository of Aadhaar number?",
        options: ["NPCI LOGGER", "NPCI FISHER", "NPCI MAPPER", "NPCI REDUCER"],
        answer: "NPCI MAPPER"
    },
    {
        question: "Which is not required for online banking?",
        options: ["Bank interface", "Transaction password", "Customer ID", "ATM password"],
        answer: "ATM password"
    },
    {
        question: "Which of the following is not related to e-banking?",
        options: ["Electronic clearing system", "Demand draft", "ATM", "E-challan"],
        answer: "Demand draft"
    },
    {
        question: "Which of the following cannot be tracked using POS?",
        options: ["Pricing accuracy", "Gross revenue", "Inventory charges", "Promotions"],
        answer: "Promotions"
    },
    {
        question: "The eligible criteria for banks participating in UPI is approval from RBI for mobile banking service and also being live on...",
        options: ["AEPS", "BBPS", "CT", "IMPS"],
        answer: "IMPS"
    },
    {
        question: "Which information component is not part of an e-wallet?",
        options: ["Encryption of the data", "User name", "Amount to be paid", "User debit card details"],
        answer: "User debit card details"
    },
    {
        question: "What is the transaction charge for RTGS amounts between 2 lakh to 5 lakhs?",
        options: ["100", "30", "50", "25"],
        answer: "25"
    },
    {
        question: "In the context of DigiLocker, what is the role of the issuer?",
        options: ["Issue printed documents to citizen", "Issue e-documents to citizens", "Issue e-document to government", "None of these"],
        answer: "Issue e-documents to citizens"
    },
    {
        question: "Which is not required for accessing the service of POS system?",
        options: ["Internet", "PIN", "Debit/credit card", "Account number"],
        answer: "Account number"
    },
    {
        question: "Which one is not a finance company?",
        options: ["IRDA", "Loan companies", "Mutual benefits finance companies", "Hire purchase finance company"],
        answer: "IRDA"
    },
    {
        question: "QR is the trademark for a type of...",
        options: ["Pin", "Scratch code", "Barcode", "Pattern"],
        answer: "Barcode"
    },
    {
        question: "On smartphones, OTP can never be delivered directly through...",
        options: ["Authy", "Duo Mobile", "IM Swap", "Google Authenticator"],
        answer: "Google Authenticator"
    },
    {
        question: "In UPI, ______ is an Address which uniquely identifies a person’s bank account.",
        options: ["Primary Address", "Unique Address", "Bank Address", "Payment Address"],
        answer: "Payment Address"
    },
    {
        question: "Which of the following terms is used for sending money in UPI?",
        options: ["PULL", "PUSH", "TRANSFER", "PUT"],
        answer: "PUSH"
    },
    {
        question: "Which of the following terms is used for receiving money in UPI?",
        options: ["PULL", "PUSH", "TRANSFER", "PUT"],
        answer: "PULL"
    },
    {
        question: "What does 'S' stand for in PSP with respect to UPI?",
        options: ["Software", "Service", "System", "Synchronized"],
        answer: "Service"
    },
    {
        question: "RTGS stands for...",
        options: ["Real Time Gross Sale", "Real Time Gross Settlement", "Real Time Growth Settlement", "Real Time Group Service"],
        answer: "Real Time Gross Settlement"
    },
    {
        question: "Credit card is also called...",
        options: ["Plastic money", "Debit money", "Postpaid money", "None of these"],
        answer: "Plastic money"
    },
    {
        question: "Which of the following is not a money market security?",
        options: ["Treasury bills", "Certificates of deposits", "Commercial paper", "National saving certificates"],
        answer: "National saving certificates"
    },
    {
        question: "Which of the following services is not available on UMANG app?",
        options: ["ePathshala", "eMigrate safe employment services aboard", "e-Tuition", "EPFO"],
        answer: "e-Tuition"
    },
    {
        question: "OTP is also known as...",
        options: ["Stable password", "Dynamic password", "Static password", "Fixed password"],
        answer: "Dynamic password"
    },
    {
        question: "Which banking facility is not provided by USSD?",
        options: ["Checking account balance", "Mobile pin management", "Checking Aadhaar linked overdraft status", "Requesting internet banking password"],
        answer: "Requesting internet banking password"
    },
    {
        question: "PNR status is available to the user through...",
        options: ["UMANG", "RAIL SAARTHI", "IRCTC", "CRIS"],
        answer: "IRCTC"
    },
    {
        question: "Inputs required during AEPS transaction is...",
        options: ["IIN + Aadhaar number + biometric data", "Account number + bank number + bank IFSC code", "PIN + Aadhaar card + account number", "IIN + Aadhaar card + biometric data"],
        answer: "IIN + Aadhaar number + biometric data"
    },
    {
        question: "Phones that offer advanced features not typically found in cellular phones are...",
        options: ["DSLs", "Notebook", "Smartphones", "Tablets"],
        answer: "Smartphones"
    },
    {
        question: "Credit cards are a convenient substitute for...",
        options: ["Cash", "Cheque", "Both cash & cheque", "None of the options"],
        answer: "Both cash & cheque"
    },
    {
        question: "How many daily settlement batches are there in NEFT during a weekday?",
        options: ["24", "12", "23", "11"],
        answer: "12"
    },
    {
        question: "NEFT operates in how many batches in a day?",
        options: ["Hourly basis", "Half hourly basis", "Two hourly basis", "Quarterly basis"],
        answer: "Half hourly basis"
    },
    {
        question: "What is the code of USSD?",
        options: ["*99#", "*#99", "#*99", "None of these"],
        answer: "*99#"
    },
    {
        question: "Which of the following is not a sub-module of an e-wallet?",
        options: ["Digital cash", "Profile manager", "Transaction manager", "Communication manager"],
        answer: "Digital cash"
    },
    {
        question: "NPCI was launched in which year?",
        options: ["2008", "2010", "2006", "2015"],
        answer: "2008"
    },
    {
        question: "Which one is not a key stakeholder of Digilocker?",
        options: ["Citizens", "Requesters", "Issuers", "Government"],
        answer: "Issuers"
    },
    {
        question: "The correct combination of e-wallet components is...",
        options: ["Software and hardware", "Software and information", "Hardware and internet", "Hardware and information"],
        answer: "Software and information"
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