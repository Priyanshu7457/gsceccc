const quizData = [
    // Q1
    {
        question: "Default font size in LibreOffice Calc?",
        options: ["12", "11", "10", "13"],
        correctAnswer: "10"
    },
    // Q2
    {
        question: "Default font name in LibreOffice Calc?",
        options: ["Liberation Sans", "Liberation Serif", "Times New Roman", "Calibri"],
        correctAnswer: "Liberation Sans"
    },
    // Q3
    {
        question: "Maximum zoom in LibreOffice Calc?",
        options: ["600%", "300%", "100%", "400%"],
        correctAnswer: "400%"
    },
    {
        question: "Minimum zoom in LibreOffice Calc?",
        options: ["10%", "20%", "30%", "5%"],
        correctAnswer: "20%"
    },
    {
        question: "Shortcut key for edit in LibreOffice Calc?",
        options: ["F2", "F1", "F4", "F7"],
        correctAnswer: "F2"
    },
    {
        question: "Split window option is found in which menu in LibreOffice Calc?",
        options: ["Edit", "Insert", "View", "Tools"],
        correctAnswer: "View"
    },
    {
        question: "How many chart types are there in LibreOffice Calc?",
        options: ["10", "11", "20", "12"],
        correctAnswer: "10"
    },
    {
        question: "By default, legend shows on which side in a chart?",
        options: ["Left", "Center", "Top", "Right"],
        correctAnswer: "Right"
    },
    {
        question: "Which of the following is a type of chart?",
        options: ["Circle", "Bubble", "Square", "Right"],
        correctAnswer: "Bubble"
    },
    {
        question: "Which of the following is not a type of chart?",
        options: ["Pie", "Bubble", "Column", "Square"],
        correctAnswer: "Square"
    },
    {
        question: "Shortcut key to insert function wizard in LibreOffice Calc?",
        options: ["Ctrl+F2", "Ctrl+F7", "Ctrl+F1", "Ctrl+F11"],
        correctAnswer: "Ctrl+F2"
    },
    {
        question: "Shortcut key for format cells in LibreOffice Calc?",
        options: ["Ctrl+2", "Ctrl+1", "Ctrl+5", "Ctrl+3"],
        correctAnswer: "Ctrl+1"
    },
    {
        question: "Shortcut key to insert cells in LibreOffice Calc?",
        options: ["Ctrl++", "Ctrl+-", "Ctrl+=", "Ctrl+0"],
        correctAnswer: "Ctrl++"
    },
    {
        question: "Maximum number of rows in LibreOffice Calc?",
        options: ["1048576", "1048580", "1084562", "1048575"],
        correctAnswer: "1048576"
    },
    {
        question: "Maximum number of columns in LibreOffice Calc?",
        options: ["1030", "1024", "1058", "1000"],
        correctAnswer: "1024"
    },
    {
        question: "Last column address in LibreOffice Calc?",
        options: ["AMI", "AMO", "AMJ", "AMU"],
        correctAnswer: "AMJ"
    },
    {
        question: "By default, how many sheets in LibreOffice Calc?",
        options: ["2", "1", "4", "6"],
        correctAnswer: "1"
    },
    {
        question: "Maximum number of sheet limit in LibreOffice Calc?",
        options: ["10000", "36000", "32000", "20000"],
        correctAnswer: "32000"
    },
    {
        question: "Shortcut key to increase column width in LibreOffice Calc?",
        options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
        correctAnswer: "Alt+Right Arrow"
    },
    {
        question: "Shortcut key to decrease column width in LibreOffice Calc?",
        options: ["Alt+Right Arrow", "Alt+Up Arrow", "Alt+Left Arrow", "Alt+Down Arrow"],
        correctAnswer: "Alt+Left Arrow"
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
        question: "In LibreOffice, which format cannot be added?",
        options: ["XML", "BIP", "HTML", "EXML"],
        correctAnswer: "EXML"
    },
    {
        question: "Which one of the following is not an option available in the drop-down menu of line type while inserting a line chart in LibreOffice Calc?",
        options: ["Stepped", "Smooth", "Straight", "Curved"],
        correctAnswer: "Stepped"
    },
    {
        question: "Which one of the following is not a valid operator type in LibreOffice Calc?",
        options: ["Arithmetic", "Comparative", "Text", "Referential"],
        correctAnswer: "Referential"
    },
    {
        question: "What is the default height of a cell in LibreOffice Calc?",
        options: ["4.4 inch", "0.45 inch", "4.5 cm", "0.45 cm"],
        correctAnswer: "0.45 cm"
    },
    {
        question: "If a variable is missing from the formula, then the error message displayed is?",
        options: ["510", "511", "576", "566"],
        correctAnswer: "510"
    },
    {
        question: "What is the result of the formula '=PRODUCT(2,SUM(5,7))' in LibreOffice Calc?",
        options: ["14", "24", "12", "17"],
        correctAnswer: "24"
    },
    {
        question: "ceiling (97,7) display the result in libre office calc",
        options: ["98", "99", "97", "#num"],
        correctAnswer: "98"
    },
    {
        question: "product (5, 2) display the result in libre office calc",
        options: ["11", "10", "12", "7"],
        correctAnswer: "10"
    },
    {
        question: "quotient (5, 2) display the result in libre office calc",
        options: ["1", "2", "10", "7"],
        correctAnswer: "2"
    },
    {
        question: "count (5, 0, 0, 0, 0) display the result in libre office calc",
        options: ["1", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "round (1780,-2) display the result in libre office calc",
        options: ["1700", "1780", "1800", "none of these"],
        correctAnswer: "1800"
    },
    {
        question: "round (18964,-5) display the result in libre office calc",
        options: ["0", "1", "2", "5"],
        correctAnswer: "0"
    },
    {
        question: "quotient (509.8, 7) display the result in libre office calc",
        options: ["72", "73", "74", "75"],
        correctAnswer: "72"
    },
    {
        question: "power (5, 2) display the result in libre office calc",
        options: ["25", "10", "7", "none of these"],
        correctAnswer: "25"
    },
    {
        question: "short cut key for date in libre office calc",
        options: ["crtl+shift+;", "ctrl+;", "crtl++", "ctrl+shift+:"],
        correctAnswer: "ctrl+;"
    },
    {
        question: "short cut key for time in libre office calc",
        options: ["crtl+shift+;", "ctrl+;", "crtl++", "ctrl+shift+:"],
        correctAnswer: "crtl+shift+;"
    },
    {
        question: "which is not maximum zoom size in libre office calc",
        options: ["200", "300", "400", "500"],
        correctAnswer: "500"
    },
    {
        question: "floor (123, 11) display the result in libre office calc",
        options: ["121", "120", "135", "125"],
        correctAnswer: "121"
    },
    {
        question: "which formula result shows that 16% of A1 in libre office calc",
        options: ["A1*16%", "A1%16", "A1#16%", "A1%*16"],
        correctAnswer: "A1*16%"
    },
    {
        question: "short cut key for reach first column cell in libre office calc",
        options: ["crtl+home", "home", "alt + home", "none of these"],
        correctAnswer: "crtl+home"
    },
    {
        question: "if cell width is not enough in libre office calc display the result",
        options: ["***", "$$$", "###", "@@@"],
        correctAnswer: "###"
    },
    {
        question: "The active cell is G7. If you press the HOME key, then you will reach at:",
        options: ["G1", "A7", "G7", "none of these"],
        correctAnswer: "A7"
    },
    {
        question: "The active cell is G7. If you press the CTRL + HOME key, then you will reach at:",
        options: ["G1", "A7", "A1", "none of these"],
        correctAnswer: "A1"
    },
    {
        question: "sum (5,2) display the result in libre office calc",
        options: ["7", "10", "3", "25"],
        correctAnswer: "7"
    },
    {
        question: "Which of the following function is used to display current date and time in LibreOffice Calc?",
        options: ["Date( )", "Date( )", "Now( )", "Time( )"],
        correctAnswer: "Now( )"
    },
    {
        question: "count (4, 2, 3, 8)/count (a, b, c, d) display the result in libre office calc",
        options: ["#DIV/0!", "#num!", "divided by zero error", "none of these"],
        correctAnswer: "#DIV/0!"
    },
    {
        question: "if you select column D4 and D5 and press ctrl+- what result display in libre office calc.",
        options: ["new column insert after D5", "new column insert before D4", "column D4 & D5 will be deleted", "none of these"],
        correctAnswer: "column D4 & D5 will be deleted"
    },
    {
        question: "average(4,2,6,4) display the result in libre office calc",
        options: ["4", "6", "8", "2"],
        correctAnswer: "4"
    },
    {
        question: "which is not correct function in libre office calc",
        options: ["=max()", "=sum()", "=count()", "=avg()"],
        correctAnswer: "=avg()"
    },
    {
        question: "counta(4,a,p,5,0,h) display the result in libre office calc",
        options: ["3", "6", "5", "2"],
        correctAnswer: "3"
    },
    {
        question: "Is a Border Induced by the Active Cell on a LibreOffice Spreadsheet?",
        options: ["Blinking Border", "Dotted Border", "Dark Wide Border", "Italic Text"],
        correctAnswer: "Dark Wide Border"
    },
    {
        question: "Is Sum tool available in LibreOffice Calc?",
        options: ["Formatting Toolbar", "Standard Toolbar", "Formula Toolbar", "Both A and B"],
        correctAnswer: "Standard Toolbar"
    },
    {
        question: "Are Alphabet Right and Numbers Left Aligned in LibreOffice Calc?",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Is there use of filter in libreOffice calc?",
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
        options: ["arithmetic", "comparative", "referential", "text"],
        correctAnswer: "referential"
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
        options: ["the formula is wrong", "cell width is not proper enough to show the data", "calculations can be corrected", "None"],
        correctAnswer: "cell width is not proper enough to show the data"
    },
    {
        question: "Which of the following is the shortcut key to insert cells from Calc?",
        options: ["Ctrl+2", "Shift+ +", "Ctrl+ +", "None of these"],
        correctAnswer: "Ctrl+ +"
    },
    {
        question: "In LibreOffice Calc, the shortcut key of going at the last of left of the cell is?",
        options: ["Alt + Tab", "Tab", "Alt", "Shift + Tab"],
        correctAnswer: "Shift + Tab"
    },
    {
        question: "What is the combination of row and column in LibreOffice Calc?",
        options: ["Cell", "Table", "Position", "Data"],
        correctAnswer: "Cell"
    },
    {
        question: "In LibreOffice Calc, cos, sin, fact, exp are a category of?",
        options: ["Data", "Math/Tring", "Mathematical", "String"],
        correctAnswer: "Mathematical"
    },
    {
        question: "What is the shortcut key for formatting of the cell in LibreOffice Calc?",
        options: ["Ctrl + 1", "Ctrl + F2", "Ctrl + 2", "Ctrl + M"],
        correctAnswer: "Ctrl + 1"
    },
    {
        question: "In which menu, the merge cells command is found?",
        options: ["Format", "Style", "Sheet", "Edit"],
        correctAnswer: "Format"
    },
    {
        question: "What is the shortcut key to reach the last cell of a spreadsheet in LibreOffice Calc?",
        options: ["Ctrl + Home", "Ctrl + End", "Ctrl + Shift + Home", "None of above"],
        correctAnswer: "Ctrl + End"
    },
    {
        question: "What is the value of =round (175, -2)?",
        options: ["100", "173", "200", "None of Above"],
        correctAnswer: "200"
    },
    {
        question: "LibreOffice Calc file by default saves with which name?",
        options: ["Untitled1", "Calc1", "Spreadsheet1", "None"],
        correctAnswer: "Untitled1"
    },
    {
        question: "In LibreOffice Calc, where is the address of a cell displayed?",
        options: ["Formula Bar", "Address Book", "Name box", "None"],
        correctAnswer: "Name box"
    }
];

console.log(quizData.length);
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
