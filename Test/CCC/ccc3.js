const quizData = [
  // Q1
  {
    question: "what is default font size in libre office writer?",
    options: ["15", "13", "11", "12"],
    correctAnswer: "12",
  },
  //   Q2
  {
    question: "How many menu available in libre office writer?",
    options: ["15", "16", "11", "13"],
    correctAnswer: "11",
  },
  //   Q3
  {
    question: "what is default font name in libre office writer?",
    options: [
      "liberation sans",
      "liberation serief",
      "times in new roman",
      "callibarry",
    ],
    correctAnswer: "liberation serief",
  },
  //   Q4
  {
    question: "what is minimum zoom  in libre office writer?",
    options: ["10%", "20%", "5%", "15%"],
    correctAnswer: "20%",
  },
  //   Q5
  {
    question: "Document name is appear on which bar in libre office writer?",
    options: ["status bar", "title bar", "standard tool bar", "task bar"],
    correctAnswer: "title bar",
  },
  //   Q6
  {
    question: "correct sequence of bar in libre office writer?",
    options: [
      "status bar,title bar,standard tool bar,menu bar",
      "menu bar,title bar,status bar, standard tool bar",
      "title bar,menu bar,standard tool bar, status bar",
      "none of these",
    ],
    correctAnswer: "title bar,menu bar,standard tool bar, status bar",
  },
  //   Q7

  {
    question: "what is by default user interface in libre office writer?",
    options: ["standard toolbar", "tabbed", "single toolbar", " none of these"],
    correctAnswer: "standard toolbar",
  },
  //   Q8
  {
    question: "How many user interface in libre office writer?",
    options: ["7", "6", "5", "10"],
    correctAnswer: "5",
  },
  //   Q9
  {
    question: "what is minimum & maximum font size in libre office writer?",
    options: [" 8,98", " 6,97", "10,100", "6,96"],
    correctAnswer: "6,96",
  },
  //   Q10
  {
    question: "which font size is available in list in libre office writer?",
    options: ["28", "35", "41", "30"],
    correctAnswer: "28",
  },
  //   Q11
  {
    question: "what is default font color in libre office writer?",
    options: ["yellow", "green", "red", "blue"],
    correctAnswer: "red",
  },
  //   Q12
  {
    question: "what is default highlight  color  in libre office writer?",
    options: ["green", "blue", "yellow", "red"],
    correctAnswer: "yellow",
  },
  //   Q13
  {
    question: "What is the extension of libre office writer?",
    options: [".ods", ".odp", ".odt", "none of these"],
    correctAnswer: ".odt",
  },
  //   Q14
  {
    question: "Wizard option available  in which menu in  libre office writer?",
    options: ["file", "insert", "edit", "view"],
    correctAnswer: "file",
  },
  //   Q15
  {
    question: "How may selection mode are available  in  libre office writer?",
    options: ["3", "4", "5", "9"],
    correctAnswer: "5",
  },
  //   Q16
  {
    question:
      "The short cut key ctrl+[ in libre office writer is used to decrease the font size.By default ,size of the font is decreased by how much if we press the short cut key ctrl+[",
    options: ["4", "2", "3", "1"],
    correctAnswer: "1",
  },
  // Q17
  {
    question: "How can we set page border in libre office writer.",
    options: [
      "insert->page border",
      "view->page border",
      "format->page border",
      "1edit->page border",
    ],
    correctAnswer: "format->page border",
  },
  //   Q18
  {
    question:
      "In libre office writer, which of the following options shows the available choices in hyperlink.",
    options: [
      "internet ,mail, document, new document",
      "place in the document, new document",
      "place in this document, mail, document, new document",
      "internet, mail",
    ],
    correctAnswer: "internet ,mail, document, new document",
  },
  //   Q19
  {
    question:
      "While formatting the shadow style of a table in libre office writer, which one of the following is not the available position.",
    options: [
      "cast shadow to top left",
      "cast shadow to top bottom",
      "cast shadow to bottom right",
      "cast shadow to top right",
    ],
    correctAnswer: "cast shadow to top bottom",
  },
  //   Q20
  {
    question: "Which of the following is not available in font spacing?",
    options: ["condensed", "expanded", "loosely", "normal"],
    correctAnswer: "loosely",
  },
  //   Q21
  {
    question:
      "ctrl+ shift + backspace is shortcut key to delete text to beginning of sentence in libre office.",
    options: ["false", "true"],
    correctAnswer: "true",
  },
  //   Q22
  {
    question:
      "While customizing the font color, which one of the following is not the available color coding scheme in libre office writer ?",
    options: ["WXY", "HSB", "RGB", "CMYK"],
    correctAnswer: "WXY",
  },
  //   Q23
  {
    question:
      "What is the correct sequence of steps required to insert the footer in libre office writer document.",
    options: [
      "insert > footer >default style",
      "insert > footer",
      "insert > header & footer > footer >default style",
      "header & footer > footer",
    ],
    correctAnswer: "insert > header & footer > footer >default style",
  },
  //   Q24
  {
    question:
      "Which feature in libre office write remove extra spaces between pages.",
    options: [
      "Edit -> Hide White space",
      "view -> Hide White space",
      "file -> Hide White space",
      "tools -> Hide White space",
    ],
    correctAnswer: "view -> Hide White space",
  },
  //   Q25
  {
    question: "3d object command found in the status bar",
    options: ["false", "true"],
    correctAnswer: "true",
  },
  //   Q26
  {
    question:
      "There are six rows in an inserted table in a document of libre office writer.Height of the third row and fourth row are 1 cm and 2 cm if the updated heights of both rows if you choose the option distribute rows evenly of size subme.",
    options: [
      "height of both rows will be 2 cm",
      "height of both rows will be 1.5 cm",
      "height of both rows will be 1 cm",
      "height of both rows will be 3 cm",
    ],
    correctAnswer: "height of both rows will be 1.5 cm",
  },
  //   Q27
  {
    question:
      "Which one of the following is not an option in the drop down menu of header in libre office writer.",
    options: [
      "insert page number",
      "delete header",
      "format header",
      "create header",
    ],
    correctAnswer: "create header",
  },
  //   Q28
  {
    question: "Which bar is used to access the command and tools",
    options: ["menu", "bar", "tools", "status"],
    correctAnswer: "tools",
  },
  //   Q29
  {
    question: "Which is on the left side of the status bar?",
    options: [
      "zoom slider",
      "digital signature",
      "information area",
      "cursor position",
    ],
    correctAnswer: "information area",
  },
  //   Q30
  {
    question:
      "Which of the following options is not an option in the print dialog box?",
    options: [
      "print the selected pages",
      "set the paper orientation",
      "collate copies",
      "print selected text",
    ],
    correctAnswer: "print selected text",
  },
  //   Q31
  {
    question: "In which menu option find and replace in libre office writer",
    options: ["file", "format", "edit", "start"],
    correctAnswer: "edit",
  },
  //   Q32
  {
    question: "In which menu option wizard in libre office writer",
    options: ["file", "format", "edit", "insert"],
    correctAnswer: "file",
  },
  //   Q33
  {
    question: "In which menu option mail merge in libre office writer",
    options: ["file", "format", "edit", "tools"],
    correctAnswer: "tools",
  },
  //   Q34
  {
    question: "In which menu option word count in libre office writer",
    options: ["format", "file", "tools", "edit"],
    correctAnswer: "tools",
  },
  //   Q35
  {
    question: "In which menu option macros in libre office writer",
    options: ["file", "format", "tools", "edit"],
    correctAnswer: "tools",
  },
  //   Q36
  {
    question: "In which menu option new window in libre office writer",
    options: ["file", "format", "window", "edit"],
    correctAnswer: "window",
  },
  //   Q37
  {
    question:
      "In which menu option donate to libre office in libre office writer",
    options: ["file", "help", "window", "edit"],
    correctAnswer: "help",
  },
  //   Q38
  {
    question:
      "In which menu option restart in safe mode in libre office writer",
    options: ["file", "help", "window", "tools"],
    correctAnswer: "help",
  },
  //   Q39
  {
    question: "In which menu option push button in libre office writer",
    options: ["form", "help", "window", "tools"],
    correctAnswer: "form",
  },
  //   Q40
  {
    question: "In which menu option emphasis in libre office writer",
    options: ["form", "help", "style", "tools"],
    correctAnswer: "style",
  },
  //   Q41
  {
    question: "In which menu option watermark in libre office writer",
    options: ["form", "format", "style", "tools"],
    correctAnswer: "format",
  },
  //   Q42
  {
    question:
      "If you want save your document in remote location in libre office writer, click on",
    options: ["save as", "save remote", "save", "open remote"],
    correctAnswer: "save remote",
  },
  //   Q43
  {
    question: "In which menu option digital signature in libre office writer",
    options: ["file", "edit", "insert", "help"],
    correctAnswer: "file",
  },
  //   Q44
  {
    question: "In which menu option export as pdf in libre office write",
    options: ["file", "format", "tools", "edit"],
    correctAnswer: "file",
  },
  //   Q45
  {
    question: "Shortcut key of open new document in libre office writer",
    options: ["crtl+z", "ctrl+m", "crtl+n", "ctrl+y"],
    correctAnswer: "crtl+n",
  },
  //   Q46
  {
    question: "Shortcut key of save as in libre office writer",
    options: ["crtl+shift+s", "ctrl+s", "crtl+n", "ctrl+y"],
    correctAnswer: "crtl+shift+s",
  },
  //   Q47
  {
    question: "Shortcut key of save in libre office writer",
    options: ["crtl+shift+s", "ctrl+s", "crtl+n", "ctrl+y"],
    correctAnswer: "ctrl+s",
  },
  //   Q48
  {
    question: "Shortcut key of print in libre office writer",
    options: ["crtl+shift+s", "ctrl+s", "crtl+p", "ctrl+y"],
    correctAnswer: "crtl+p",
  },
  //   Q49
  {
    question: "Shortcut key of print preview in libre office writer",
    options: ["crtl+shift+s", "ctrl+s", "crtl+p", "ctrl+shift+o"],
    correctAnswer: "ctrl+shift+o",
  },
  //   Q50
  {
    question: "Shortcut key of exit libre office in libre office writer",
    options: ["ctrl+q", "crtl+shift+s", "ctrl+shift+o", "crtl+p"],
    correctAnswer: "ctrl+q",
  },
  //   Q51
  {
    question: "Shortcut key of repeat in libre office writer",
    options: ["ctrl+shift+o", "ctrl+q", "crtl+shift+y", "crtl+p"],
    correctAnswer: "crtl+shift+y",
  },
  //   Q52
  {
    question: "Shortcut key of redo in libre office writer",
    options: ["crtl+shift+y", "ctrl+y", "crtl+p", "ctrl+q"],
    correctAnswer: "ctrl+y",
  },
  //   Q53
  {
    question: "Shortcut key of paste special in libre office writer",
    options: ["crtl+shift+y", "ctrl+shift+v", "crtl+p", "ctrl+y"],
    correctAnswer: "ctrl+shift+v",
  },
  //   Q54
  {
    question: "Shortcut key of find & replace in libre office writer",
    options: ["crtl+shift+y", "ctrl+shift+v", "crtl+h", "ctrl+y"],
    correctAnswer: "crtl+h",
  },
  //   Q55
  {
    question: "Shortcut key of go to page in libre office writer",
    options: ["crtl+shift+y", "ctrl+shift+v", "crtl+h", "ctrl+g"],
    correctAnswer: "ctrl+g",
  },
  //   Q56
  {
    question: "Shortcut key of track changes or record in libre office writer",
    options: ["crtl+shift+y", "ctrl+shift+c", "crtl+h", "ctrl+g"],
    correctAnswer: "ctrl+shift+c",
  },
  //   Q57
  {
    question: "Shortcut key for ruler in LibreOffice Writer:",
    options: ["crtl+shift+r", "ctrl+shift+c", "crtl+h", "ctrl+g"],
    correctAnswer: "crtl+shift+r",
  },
  //   Q58
  {
    question: "Shortcut key for formatting marks in LibreOffice Writer:",
    options: ["crtl+shift+r", "ctrl+shift+c", "crtl+f10", "ctrl+f11"],
    correctAnswer: "crtl+f10",
  },
  //   Q59
  {
    question: "Shortcut key for the sidebar in LibreOffice Writer:",
    options: ["crtl+shift+r", "ctrl+shift+c", "crtl+f5", "ctrl+f11"],
    correctAnswer: "crtl+f5",
  },
  //   Q60
  {
    question: "Shortcut key for styles or manage styles in LibreOffice Writer:",
    options: ["crtl+shift+f11", "shift+f11", "f11", "f12"],
    correctAnswer: "f11",
  },
  // Q61
  {
    question: "Shortcut key for navigator in LibreOffice Writer:",
    options: ["crtl+shift+f11", "shift+f11", "f11", "f5"],
    correctAnswer: "f5",
  },
  // Q62
  {
    question: "Shortcut key for full screen in LibreOffice Writer:",
    options: ["crtl+shift+j", "shift+f11", "f11", "f5"],
    correctAnswer: "shift+f11",
  },
  // Q63
  {
    question: "Shortcut key for formula bar in LibreOffice Writer:",
    options: ["crtl+shift+j", "shift+f11", "f2", "f5"],
    correctAnswer: "f2",
  },
  // Q64
  {
    question: "Shortcut key for comment in LibreOffice Writer:",
    options: ["crtl+alt+c", "shift+f11", "f2", "f5"],
    correctAnswer: "crtl+alt+c",
  },
  // Q65
  {
    question: "Shortcut key for hyperlink in LibreOffice Writer:",
    options: ["crtl+alt+c", "shift+f11", "ctrl+k", "f5"],
    correctAnswer: "ctrl+k",
  },
  // Q66
  {
    question: "Shortcut key of clear direct formatting in LibreOffice Writer:",
    options: ["crtl+m", "shift+f11", "ctrl+k", "f5"],
    correctAnswer: "crtl+m",
  },
  // Q67
  {
    question: "Shortcut key of bullet list in LibreOffice Writer:",
    options: ["crtl+m", "shift+f12", "ctrl+k", "f5"],
    correctAnswer: "shift+f12",
  },
  // Q68
  {
    question: "Shortcut key of number list in LibreOffice Writer:",
    options: ["crtl+m", "shift+f12", "ctrl+k", "f12"],
    correctAnswer: "f12",
  },
  // Q69
  {
    question: "Shortcut key of double underline in LibreOffice Writer:",
    options: ["crtl+m", "shift+f12", "ctrl+d", "f12"],
    correctAnswer: "ctrl+d",
  },
  // Q70
  {
    question: "Shortcut key of subscript in LibreOffice Writer:",
    options: ["crtl+shift+B", "shift+f12", "ctrl+d", "f12"],
    correctAnswer: "crtl+shift+B",
  },
  // Q71
  {
    question: "Shortcut key of superscript in LibreOffice Writer:",
    options: ["crtl+shift+B", "shift+f12", "ctrl+shift+P", "f12"],
    correctAnswer: "ctrl+shift+P",
  },
  // Q72
  {
    question: "Shortcut key of increase font size in LibreOffice Writer:",
    options: ["crtl+]", "ctrl+[", "ctrl++", "ctrl+1"],
    correctAnswer: "ctrl+]",
  },
  // Q73
  {
    question: "Shortcut key of decrease font size in LibreOffice Writer:",
    options: ["crtl+]", "ctrl+[", "ctrl++", "ctrl+1"],
    correctAnswer: "ctrl+[",
  },
  // Q74
  {
    question: "Shortcut key of cycle case in LibreOffice Writer:",
    options: ["shift+f2", "shift+f6", "shift+f4", "shift+f3"],
    correctAnswer: "shift+f3",
  },
  // Q75
  {
    question: "Shortcut key of center alignment in LibreOffice Writer:",
    options: ["ctrl+C", "ctrl+E", "CTRL+J", "CTRL+R"],
    correctAnswer: "CTRL+J",
  },
  // Q76
  {
    question: "Shortcut key of heading 2 in LibreOffice Writer:",
    options: ["ctrl+C", "ctrl+E", "CTRL+2", "CTRL+1"],
    correctAnswer: "CTRL+2",
  },
  // Q77
  {
    question: "Shortcut key of text body in LibreOffice Writer:",
    options: ["ctrl+C", "ctrl+E", "CTRL+2", "CTRL+0"],
    correctAnswer: "CTRL+0",
  },
  // Q78
  {
    question: "Shortcut key of new style in LibreOffice Writer:",
    options: ["ctrl+C", "shift+12", "CTRL+f7", "shift+f11"],
    correctAnswer: "shift+f11",
  },
  // Q79
  {
    question: "Shortcut key of update new style in LibreOffice Writer:",
    options: ["ctrl+C", "ctrl+shift+f11", "CTRL+f7", "shift+f11"],
    correctAnswer: "ctrl+shift+f11",
  },
  // Q80
  {
    question: "Shortcut key of insert table in LibreOffice Writer:",
    options: ["ctrl+f12", "ctrl+shift+f11", "CTRL+f7", "shift+f11"],
    correctAnswer: "ctrl+f12",
  },
  // Q81
  {
    question: "Shortcut key of spelling check in LibreOffice Writer:",
    options: ["f1", "f11", "f8", "f7"],
    correctAnswer: "f7",
  },
  // Q82
  {
    question: "Shortcut key of automatic spelling check in LibreOffice Writer:",
    options: ["shift+f3", "shift+f7", "f8", "shift+f11"],
    correctAnswer: "shift+f11",
  },
  // Q83
  {
    question: "Shortcut key of thesaurus in LibreOffice Writer:",
    options: ["shift+f3", "shift+f7", "ctrl+f7", "shift+f11"],
    correctAnswer: "ctrl+f7",
  },
  // Q84
  {
    question: "Shortcut key of auto text in LibreOffice Writer:",
    options: ["shift+f3", "ctrl+f3", "ctrl+f7", "shift+f11"],
    correctAnswer: "shift+f11",
  },
  // Q85
  {
    question: "Shortcut key of close current window in LibreOffice Writer:",
    options: ["shift+f3", "ctrl+f3", "ctrl+q", "ctrl+w"],
    correctAnswer: "ctrl+w",
  },
  // Q86
  {
    question: "Shortcut key of help in LibreOffice Writer:",
    options: ["f1", "f2", "f12", "f11"],
    correctAnswer: "f1",
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
