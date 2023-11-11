const quizData = [
    // Q1
    {
        question: "Default font size in LibreOffice Calc?",
        options: ["12", "11", "10", "13"],
        correctAnswer: "12"
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
        correctAnswer: "600%"
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
        correctAnswer: "3"
    },
    {
        question: "Maximum number of sheet limit in LibreOffice Calc?",
        options: ["10000", "36000", "32000", "Option 4"],
        correctAnswer: "10000"
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
        correctAnswer: "BIP"
    },
    {
        question: "Which one of the following is not an option available in the drop-down menu of line type while inserting a line chart in LibreOffice Calc?",
        options: ["Stepped", "Smooth", "Straight", "Curved"],
        correctAnswer: "Curved"
    },
    {
        question: "Which one of the following is not a valid operator type in LibreOffice Calc?",
        options: ["Arithmetic", "Comparative", "Text", "Referential"],
        correctAnswer: "Comparative"
    },
    {
        question: "What is the default height of a cell in LibreOffice Calc?",
        options: ["4.4 inch", "0.45 inch", "4.5 cm", "0.45 cm"],
        correctAnswer: "0.45 cm"
    },
    {
        question: "If a variable is missing from the formula, then the error message displayed is?",
        options: ["510", "511", "576", "566"],
        correctAnswer: "511"
    },
    {
        question: "What is the result of the formula '=PRODUCT(2,SUM(5,7))' in LibreOffice Calc?",
        options: ["14", "24", "12", "17"],
        correctAnswer: "14"
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