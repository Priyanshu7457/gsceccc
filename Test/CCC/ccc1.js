const quizData = [
    // Q1
    {
        question: "Which memory is called as a volatile memory?",
        options: ["RAM", "ROM", "BOTH a & b", "none of these"],
        correctAnswer: "RAM"
    },
    // Q2
    {
        question: "Which is not a non-impact printer?",
        options: ["Thermal Printer", "Dot Matrix Printer", "Inkjet Printer", "Laser Printer"],
        correctAnswer: "Dot Matrix Printer"
    },
    // Q3
    {
        question: "Which is not an impact printer?",
        options: ["Dot Matrix Printer", "Drum Printer", "Chain Printer", "Laser Printer"],
        correctAnswer: "Laser Printer"
    },
    // Q4
    {
        question: "The ................. of the computer includes the programs or instructions.",
        options: ["Software", "Icon", "Information", "Hardware"],
        correctAnswer: "Software"
    },
    // Q5
    {
        question: "An analog computer did not score over a digital computer in terms of.",
        options: ["Reliability", "Speed", "Cost", "Accuracy"],
        correctAnswer: "Cost"
    },
    // Q6
    {
        question: "What key is used to start the computer in safe mode?",
        options: ["F11", "F9", "F12", "F8"],
        correctAnswer: "F8"
    },
    // Q7
    {
        question: "Hard disks and diskettes are.",
        options: [
            "Indirect access storage device",
            "Direct access storage device",
            "Not a storage device",
            "Sequential access storage device"
        ],
        correctAnswer: "Direct access storage device"
    },
    // Q8
    {
        question: "A program embedded in a semiconductor chip during their manufacture is called?",
        options: ["Liveware", "Humanware", "Hardware", "Firmware"],
        correctAnswer: "Firmware"
    },
    // Q9
    {
        question: "Full form of EEPROM",
        options: [
            "Electronic erasable program read-only memer",
            "Electrically erasable programmable read-only memory",
            "Both a & b",
            "None of these"
        ],
        correctAnswer: "Electrically erasable programmable read-only memory"
    },
    // Q10
    {
        question: "Which of the following is not an input device?",
        options: [
            "Optical scanners",
            "Voice recognition device",
            "COM (Computer Output to Microfilm)",
            "OCR"
        ],
        correctAnswer: "COM (Computer Output to Microfilm)"
    },
    // Q11
    {
        question: "Multiple desktops can be created using.",
        options: [
            "Taskbar icon",
            "Task view icon",
            "Store icon",
            "Task review icon"
        ],
        correctAnswer: "Task view icon"
    },
    // Q12
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
    // Q14
    {
        question: "1000 gigabytes is equal to?",
        options: ["1 PB", "1 ZB", "1 TB", "1 MB"],
        correctAnswer: "1 TB"
    },
    // Q15
    {
        question: "Apple company used chips from which company for its computer?",
        options: ["Motorola", "Intel", "Both a & b", "None of these"],
        correctAnswer: "Motorola"
    },
    // Q16
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
    {
        question: "What are the main components of the CPU?",
        options: ["Hard Disk, Monitor, Keyboard", "RAM, ROM, Printer", "CD, DVD, Pendrive", "Control Unit, Memory Unit, ALU"],
        correctAnswer: "Control Unit, Memory Unit, ALU"
    },
    // Q22
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
    // Q24
    {
        question: "Which of the following devices can be used to convert characters of printed text into an image?",
        options: ["OCR", "MICR", "OMR", "All of the options"],
        correctAnswer: "OCR"
    },
    // Q25
    {
        question: "What are the input devices?",
        options: ["Printer", "Hard disk", "Keyboard, Mouse", "Monitor"],
        correctAnswer: "Keyboard, Mouse"
    },
    // Q26
    {
        question: "Full form of MICR?",
        options: ["Magnetic Ink Character Recognition", "Mark Ink Character Reader", "Monitor Ink Character Reader", "None of these"],
        correctAnswer: "Magnetic Ink Character Recognition"
    },
    // Q27
    {
        question: "The advantage of binary files over text files is that:",
        options: ["It is more reliable", "It is compact", "Many commands assume that it is a binary file", "It can be accessed faster"],
        correctAnswer: "It can be accessed faster"
    },
    // Q28
    {
        question: "Which memory is called non-volatile memory?",
        options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
        correctAnswer: "ROM"
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
    // Q35
    {
        question: "The fast and expensive storage device is:",
        options: ["Electronic disk", "Magnetic disk", "Register", "Optical disk"],
        correctAnswer: "Register"
    },
    // Q36
    {
        question: "Which memory is called volatile as well as non-volatile?",
        options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
        correctAnswer: "Both RAM and ROM"
    },
    // Q37
    {
        question: "Who is the father of the computer?",
        options: ["Ray Tomilson", "Charles Babbage", "Khen Thomson", "JS Kilby"],
        correctAnswer: "Charles Babbage"
    },
    // Q38
    {
        question: "Full form of ALU is:",
        options: ["Any Long Unit", "Arithmetic Logic Unit", "All Level Unit", "None of these"],
        correctAnswer: "Arithmetic Logic Unit"
    },
    // Q39
    {
        question: "Programs which are easily understandable are known as:",
        options: ["Word processing", "User-friendly", "Information", "Icon"],
        correctAnswer: "User-friendly"
    },
    // Q40
    {
        question: "A device that converts a digital signal to an analog signal is:",
        options: ["DAC", "P2M", "ADC", "PWM"],
        correctAnswer: "DAC"
    },
    // Q41
    {
        question: "In the latest generation computers, instructions are executed:",
        options: ["Sequentially", "Sequentially and parallel", "Parallel only", "In random manner"],
        correctAnswer: "Sequentially and parallel"
    },
    // Q42
    {
        question: "Which language is used in the fifth generation?",
        options: ["Assembly language", "High-level language", "Artificial language", "None of these"],
        correctAnswer: "Artificial language"
    },
    // Q43
    {
        question: "Who invented IC?",
        options: ["Charles Babbage", "JS Kilby and Robert Noyce", "Mark Waugh", "None of these"],
        correctAnswer: "JS Kilby and Robert Noyce"
    },
    // Q44
    {
        question: "Which memory is called the waiting room of the computer?",
        options: ["RAM", "ROM", "Both RAM and ROM", "None of these"],
        correctAnswer: "RAM"
    },
    // Q45
    {
        question: "Starting a computer is known as:",
        options: ["Booting", "Clotting", "Smoothing", "None of these"],
        correctAnswer: "Booting"
    },
    // Q46
    {
        question: "What is slang language?",
        options: ["Standard vocabulary", "Non-standard vocabulary", "Fancy words", "Formal language"],
        correctAnswer: "Non-standard vocabulary"
    },
    // Q47
    {
        question: "What are the two types of memory?",
        options: ["Primary & Secondary", "Low and High", "Both Primary and Secondary", "None of these"],
        correctAnswer: "Primary & Secondary"
    },
    // Q48
    {
        question: "What is restarting a previously started computer called?",
        options: ["Booting", "Clotting", "Warm booting", "Cold booting"],
        correctAnswer: "Warm booting"
    },
    // Q49
    {
        question: "A digital computer did not score over an analog computer in terms of:",
        options: ["Reliability", "Speed", "Cost", "Accuracy"],
        correctAnswer: "Accuracy"
    },
    // Q50
    {
        question: "Which computers operate essentially by counting?",
        options: ["Digital computers", "Analog computers", "Portable computers", "Hybrid computers"],
        correctAnswer: "Digital computers"
    },
    // Q51
    {
        question: "................. represents raw facts, whereas ................... is data made meaningful.",
        options: ["Information, bits", "Information, reporting", "Records, bytes", "Data, information"],
        correctAnswer: "Data, information"
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
