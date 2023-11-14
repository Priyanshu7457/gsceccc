const quizData = [
  {
    question: "How many menus in Libre office impress?",
    options: ["12", "13", "10", "11"],
    correctAnswer: "10"
  },
  {
    question: "Duplicate shape key in Libre office impress.",
    options: ["shift+f3", "ctrl+f2", "shift+f1", "ctrl+f3"],
    correctAnswer: "shift+f3"
  },
  {
    question: "Navigator key in Libre office impress.",
    options: ["ctrl+shift+f3", "ctrl+shift+f4", "ctrl+shift+f7", "ctrl+shift+f5"],
    correctAnswer: "ctrl+shift+f5"
  },
  {
    question: "By default what is layout of slide in Libre office impress?",
    options: ["Landscape", "portrait", "both a & b", "none of these"],
    correctAnswer: "Landscape",
  },
  {
    question: "What is notes view in Libre office impress?",
    options: ["notes view", "outline view", "both a & b", "none of these"],
    correctAnswer: "outline view",
  },
  {
    question: "What is the shortcut key for slide show in Libre office impress?",
    options: ["f5", "f7", "f8", "f1"],
    correctAnswer: "f5",
  },
  {
    question: "Which of the following allow you to select more than one slide in Libre office impress?",
    options: ["drag each slide", "shift+click on each slide", "ctrl+click on each slide", "click on each slide"],
    correctAnswer: "ctrl+click on each slide",
  },
  {
    question: "First slide known as in Libre office impress?",
    options: ["home slide", "title slide", "main slide", "none of these"],
    correctAnswer: "title slide",
  },
  {
    question: "What is the shortcut key for jump to last edited slide in Libre office impress?",
    options: ["ctrl+shift+f3", "alt+shift+f4", "ctrl+shift+f7", "alt+shift+f5"],
    correctAnswer: "alt+shift+f5",
  },
  {
    question: "which of the following is not one of libreoffice impress views.",
    options: ["outline view", "impress view", "slide shorter view", "slide view"],
    correctAnswer: "impress view",
  },
  {
    question: "an electronic page in presentation is called as….",
    options: ["page", "e- page", "slide", "e-slide"],
    correctAnswer: "slide",
  },
  {
    question: "Libre office impress is called….",
    options: ["word processor", "writer", "calc", "presentation"],
    correctAnswer: "presentation",
  },
  {
    question: "a set of pre-designed formats of text or color scheme is called…..",
    options: ["template", "slide", "schema", "presentation scheme"],
    correctAnswer: "template",
  },
  {
    question: "which one of the following is presentation graphics software.",
    options: ["word processor", "writer", "calc", "impress"],
    correctAnswer: "impress",
  },
  {
    question: "The maximum number of slide can be printed on A4 Size page in LibreOffice Impress is ...............",
    options: ["1", "4", "5", "9"],
    correctAnswer: "9",
  },
  {
    question: "Which Menu of LibreOffice Impress found slide transition command available?",
    options: ["File", "view", "Format", "Edit"],
    correctAnswer: "view",
  },
  {
    question: "In LibreOffice Impress in order to see all the slides on one screen use ..............",
    options: ["View, Slide", "View, Master", "View, Slide sorter", "View, Slide show"],
    correctAnswer: "View, Slide sorter",
  },
  {
    question: "Which menu command is used to create a text box on a slide?",
    options: ["Tool/Text box", "View/Text box", "Insert/Text box", "Format/Text box"],
    correctAnswer: "Insert/Text box",
  },
  {
    question: "............ Shortcut key is used for slide show from current slide.",
    options: ["F5", "Shift+F5", "Ctrl+F5", "None of the Above"],
    correctAnswer: "Shift+F5",
  },
  {
    question: "We use ............... in our slides to hold text, clip art and charts.",
    options: ["Text box", "Drawing box", "Placeholders", "Window"],
    correctAnswer: "Placeholders",
  },
  {
    question: "In which menu master slide function available?",
    options: ["Slide Show", "Slide", "view", "Tools"],
    correctAnswer: "view",
  },
  {
    question: "The default name of the Impress presentation is ................",
    options: ["Calc", "Slide 1", "Writer", "Untitled 1"],
    correctAnswer: "Untitled 1",
  },
  {
    question: "What is the maximum zoom percentage in LibreOffice Impress?",
    options: ["300%", "450%", "500%", "3000%"],
    correctAnswer: "3000%",
  },
  {
    question: "We can create a new presentation by using all of the following except.",
    options: ["Ctrl+N", "Ctrl+O", "Click On New Icon", "File Menu"],
    correctAnswer: "Ctrl+N",
  },
  {
    question: "Function key F7 is not used for spellcheck.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "Can we set custom slide show in LibreOffice Impress?",
    options: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    question: "Shortcut key Ctrl+Shift+S is used to save the impress presentation on another location or make a copy.",
    options: ["False", "True"],
    correctAnswer: "True",
  },
  {
    question: "Arrow left is used to move cursor to left.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "Which of the following key is used to insert new slide in LibreOffice Impress?",
    options: ["Ctrl+M", "Ctrl+A", "Ctrl+B", "Ctrl+C"],
    correctAnswer: "Ctrl+M",
  },
  {
    question: "Help key shortcut used in LibreOffice is ..............",
    options: ["F1", "F2", "F3", "F5"],
    correctAnswer: "F1",
  },
  {
    question: "Template is readymade styles that you can use for your LibreOffice Impress presentations.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "Is Ctrl+5 is used for slide show?",
    options: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    question: "We can set custom slide show in LibreOffice Impress.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "The shortcut key for move first slide of a presentation is ..................",
    options: ["Ctrl+Home", "Ctrl+End", "Ctrl+Enter", "None of the above"],
    correctAnswer: "Ctrl+Home",
  },
  {
    question: "How many menus are found in LibreOffice Impress?",
    options: ["3", "5", "8", "10"],
    correctAnswer: "10",
  },
  {
    question: "The ................ keyboard combination can be used to open a presentation file.",
    options: ["Ctrl+Q", "Ctrl+O", "Ctrl+P", "Ctrl+S"],
    correctAnswer: "Ctrl+O",
  },
  {
    question: "................ is used to go to the previous slide in LibreOffice Impress.",
    options: ["Ctrl+Page Up", "Ctrl+Page Dowm", "Ctrl+Page Left", "Ctrl+Page Right"],
    correctAnswer: "Ctrl+Page Up",
  },
  {
    question: "........... is used to move cursor with selection to the left.",
    options: ["Shift+Arrow Left", "Shift+Arrow Right", "Shift+Arrow Up", "Shift+Arrow Down"],
    correctAnswer: "Shift+Arrow Left",
  },
  {
    question: "In impress presentation for animation we select slide object and click Format menu > animation.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "What is the file extension of LibreOffice Impress?",
    options: [".odt", ".ods", ".odp", ".pptx"],
    correctAnswer: ".odp",
  },
  {
    question: "Which key is used to print a document in LibreOffice Impress?",
    options: ["Ctrl+A", "Ctrl+C", "Ctrl+P", "Ctrl+D"],
    correctAnswer: "Ctrl+P",
  },
  {
    question: "Which of the following shortcut key is used to end the presentation in LibreOffice Impress?",
    options: ["End", "Esc", "Home", "None of the above"],
    correctAnswer: "Esc",
  },
  {
    question: "Which of the following key is used to select the objects in the order in which they were created?",
    options: ["Tab Key", "Esc Key", "Function Key", "None of the above"],
    correctAnswer: "Tab Key",
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
    question: "How to start a new presentation in impress in using",
    options: ["New presentation", "Create presentation", "Open presentation", "Presentation wizard"],
    correctAnswer: "New presentation",
  },
  {
    question: "How many sections in the sidebar of impress",
    options: ["9", "5", "3", "7"],
    correctAnswer: "7",
  },
  {
    question: "Rehearse time will start counting in units.",
    options: ["Mini seconds", "Hours", "Minutes", "Seconds"],
    correctAnswer: "Seconds",
  },

  {
    question: "Which of these terms do we use when an image in a clip art changes the direction that it was originally facing?",
    options: ["Mirror", "Rotate", "Flip", "Group"],
    correctAnswer: "Rotate",
  },
  {
    question: "Shortcut key for position and size in libreoffice impress",
    options: ["F1", "F3", "F2", "F4"],
    correctAnswer: "F4",
  },
  {
    question: "What is optimal zoom percentage in libreoffice impress",
    options: ["95%", "125%", "100%", "91%"],
    correctAnswer: "95%",
  },
  {
    question: "What are slide transition variant options.",
    options: ["Inside and common slide", "Most slide and least slide", "Outside and most side", "Outside and inside"],
    correctAnswer: "Outside and inside",
  },
  {
    question: "in open office, impress comes under whivh menu.",
    options: ["Tools", "Project", "Application", "office"],
    correctAnswer: "Tools",
  },
  {
    question: "which option is not available during print handouts",
    options: ["per page six slide", "per page two slide", "per page three slide", "per page five slide"],
    correctAnswer: "per page five slide",
  },
  {
    question: "Shortcut key insert textbox in libreoffice impress.",
    options: ["F5", "F2", "F3", "F4"],
    correctAnswer: "F2",
  },
  {
    question: "What is minimum zoom percentage in libreoffice impress",
    options: ["20%", "5%", "2%", "10%"],
    correctAnswer: "5%",
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
    question: "Which types of templates provide all the users with a design concept, colour scheme, and fonts for presentation?",
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
    options: ["title", "slide number", "header", "footer"],
    correctAnswer: "title"
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
    question: "What is the by default font size in Impress?",
    options: ["12", "16", "18", "20"],
    correctAnswer: "18"
  },
  {
    question: "Impress Slides can be controlled remotely by……….?",
    options: ["WIFI", "Ethernet", "Bluetooth", "NFC"],
    correctAnswer: "Bluetooth"
  },
  {
    question: "LibreOffice Impress is Also known as the presentation module of Libre Open-source Software.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "What is the handout in LibreOffice impress?",
    options: ["Soft copy slide", "all slides in LibreOffice impress", "printed hard copy of the slide", "the first slide in LibreOffice impress"],
    correctAnswer: "printed hard copy of the slide"
  },
  {
    question: "With which command we can go to the first slide of the presentation?",
    options: ["Page Up", "Page Down", "Ctrl + Home", "Ctrl + End"],
    correctAnswer: "Ctrl + Home"
  },
  {
    question: "In LibreOffice Portrait and Landscape are.",
    options: ["Page Size", "Page Orientation", "Text Effect", "Page Layout"],
    correctAnswer: "Page Orientation"
  },
  {
    question: "Which of the following should you use if you want all the slides in the presentation to have the same “look”?",
    options: ["the slide layout option", "add a slide option", "outline view", "a presentation design template"],
    correctAnswer: "a presentation design template"
  },
  {
    question: "What kind of program is LibreOffice impress?",
    options: ["Spreadsheet", "Word processing", "Presentation", "None of these"],
    correctAnswer: "Presentation"
  },
  {
    question: "LibreOffice cannot format which of the following files in Impress?",
    options: ["Html", "Jpeg", "Gif", "WAV"],
    correctAnswer: "Html"
  },
  {
    question: "You can create a new presentation in impress by using except",
    options: ["Ctrl + N", "Click on New Icon", "File Menu > New Presentation", "Ctrl + O"],
    correctAnswer: "Ctrl + O"
  },
  {
    question: "Special effects used to introduce slides in a presentation are called.",
    options: ["present animations", "effects", "custom animations", "transitions"],
    correctAnswer: "transitions"
  },
  {
    question: "In terms of animation, what is a trigger?",
    options: ["An action button that advances to the next slide", "An item on the slide that performs an action when clicked", "The name of a motion path", "All of the above"],
    correctAnswer: "An item on the slide that performs an action when clicked"
  },
  {
    question: "Which alignment is not there in LibreOffice Impress?",
    options: ["Central Alignment", "Left Alignment", "Right Alignment", "Justification"],
    correctAnswer: "Justification"
  },
  {
    question: "Which shortcut keys are useful for Past Unformatted Text in Impress?",
    options: ["Ctrl + Shift + v", "Ctrl + Alt + Shift + v", "Ctrl + Alt + v", "None"],
    correctAnswer: "Ctrl + Alt + Shift + v"
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
