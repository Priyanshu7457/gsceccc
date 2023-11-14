const quizData = [
  // Q1
  {
    question: "What is the internet?",
    options: ["NETWORK OF NETWORKS.", "WIRELESS NETWORK.", "HYPERTEXT DOCUMENTS.", "VIRTUAL NETWORK."],
    correctAnswer: "NETWORK OF NETWORKS."
  },
  //   Q2
  {
    question: "What is ARPANET?",
    options: ["ADVANCE RESEARCH PRIVATE AGENCY NETWORK", "ADVANCE RESEARCH PROJECT AGENCY NETWORK", "ADVANCED RESEARCH PUBLIC AGENCY NETWORK", "NONE OF THESE"],
    correctAnswer: "ADVANCE RESEARCH PROJECT AGENCY NETWORK"
  },
  //   Q3
  {
    question: "What is HTTP?",
    options: ["HYPER TEXT TRANSMISSION PROTOCOL.", "HIGH TEXT TRANSMISSION PROTOCOL.", "HYPER TEXT TRANSFER PROTOCOL.", "NONE OF THESE"],
    correctAnswer: "HYPER TEXT TRANSFER PROTOCOL."
  },
  {
    question: "What is www & who invented www?",
    options: ["WORLD WIDE WEB – TIM BERNERS LEE", "WORD WIDE WEB – KEN THOMSON", "WORD WIDE WIRE – KEVIN ASHTON", "NONE OF THESE"],
    correctAnswer: "WORLD WIDE WEB – TIM BERNERS LEE"
  },
  {
    question: "Full form of wwww",
    options: ["WORLD WIDE WEB WORM", "WORLD WIDE WIDE WORM", "WORD WIDE WORM WEB", "NONE OF THESE"],
    correctAnswer: "WORLD WIDE WEB WORM"
  },
  {
    question: "What is protocol?",
    options: ["SET OF RULES FOR COMMUNICATION", "SET OF COMMAND FOR COMMUNICATION", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "SET OF RULES FOR COMMUNICATION"
  },
  {
    question: "What is the port number of HTTP?",
    options: ["70", "80", "90", "100"],
    correctAnswer: "80"
  },
  {
    question: "Full form of DNS",
    options: ["DOMAIN NAME SYSTEM", "DOMAIN NAME SERVER", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "DOMAIN NAME SYSTEM"
  },
  {
    question: "Full form of MIME",
    options: ["MULTIPURPOSE INTERNET MAIL EXTENSION", "MULTIPLY INTERNET MAIL EXTENSION", "MANUFACTURE INTERNET MAIL EXTENSION", "NONE OF THESE"],
    correctAnswer: "MULTIPURPOSE INTERNET MAIL EXTENSION"
  },
  {
    question: "Which is the first graphical web browser?",
    options: ["OPERA", "MOZILLA", "MOSAIC", "NONE OF THESE"],
    correctAnswer: "MOSAIC"
  },
  {
    question: "Full form of SEO?",
    options: ["SEARCH ENGINE OPTIMIZATION", "SERVER ENGINE OPTIMAL", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "SEARCH ENGINE OPTIMIZATION"
  },
  {
    question: "Full form of IMEI?",
    options: ["INTERNATIONAL MOBILE EQUIPMENT IDENTITY", "INTERNATIONAL MOBILE ENABLE IDENTITY", "INTERNETWORK MOBILE EQUIPMENT IDENTITY", "NONE OF THESE"],
    correctAnswer: "INTERNATIONAL MOBILE EQUIPMENT IDENTITY"
  },
  {
    question: "Full form of FTP?",
    options: ["FILE TEXT PROTOCOL", "FILE TRANSFER PROTOCOL", "FILE TRIBAL PROTOCOL", "NONE OF THESE"],
    correctAnswer: "FILE TRANSFER PROTOCOL"
  },
  {
    question: "Full form of HTML?",
    options: ["HYPERTEXT MARKUP LANGUAGE", "HYPERTEXT MAKER LANGUAGE", "HYPERTEXT MARGIN LANGUAGE", "NONE OF THESE"],
    correctAnswer: "HYPERTEXT MARKUP LANGUAGE"
  },
  {
    question: "Web search engine stores information about many web pages by a?",
    options: ["WEB CRAWLER", "WEB ORGANIZER", "WEB ROUTER", "WEB INDEXER"],
    correctAnswer: "WEB CRAWLER"
  },
  {
    question: "Network topology for a large network is?",
    options: ["STAR", "TREE", "BUS", "IRREGULAR"],
    correctAnswer: "STAR"
  },
  {
    question: "What is the format of IP address?",
    options: ["34 bit", "48 bit", "32 bit", "64 bit"],
    correctAnswer: "32 bit"
  },
  {
    question: "What is a web crawler also called as?",
    options: ["Link Directory", "Web Spider", "Search Optimizer", "Web Manager"],
    correctAnswer: "Web Spider"
  },
  {
    question: "Which of the following software can be used to build a website?",
    options: ["Power Point", "Excel", "ERP", "Dream Weaver"],
    correctAnswer: "Dream Weaver"
  },
  {
    question: "WI-FI alliance certificate products are based on which IEEE standard?",
    options: ["IEEE 802.5", "IEEE 802.9", "IEEE 802.3", "IEEE 802.11"],
    correctAnswer: "IEEE 802.5"
  },
  {
    question: "For getting an internet connection, we need to consult?",
    options: ["Laboratory", "Organizer", "ISP", "None of the options"],
    correctAnswer: "ISP"
  },
  {
    question: "If a crawler visits a webpage without any outbound links, it is called?",
    options: ["Doorway Page", "Absolute Page", "Dead End Page", "Home Page"],
    correctAnswer: "Dead End Page"
  },
  {
    question: "For secure EDI (Electronic Data Interchange) transmission on the internet, which is used?",
    options: ["PGP", "S/MIME", "TCP/IP", "MIME"],
    correctAnswer: "S/MIME"
  },
  {
    question: "What are additional plugins in Google Chrome named as?",
    options: ["Chrome-Plugins", "Addons", "Extensions", "Plugware"],
    correctAnswer: "Extensions"
  },
  {
    question: "Which of the following topologies cannot be used for a local area network?",
    options: ["Bus", "Star", "None of the options", "Ring"],
    correctAnswer: "None of the options"
  },
  {
    question: "What is the physical or logical arrangement of a network referred to as?",
    options: ["Topology", "Networking", "Routing", "Switching"],
    correctAnswer: "Topology"
  },
  {
    question: "In which topology are switches and hubs used as center nodes?",
    options: ["Ring", "Bus", "Star", "None of these"],
    correctAnswer: "Star"
  },
  {
    question: "A data communication system spanning states, countries, or the whole world is called?",
    options: ["LAN", "WAN", "MAN", "PAN"],
    correctAnswer: "WAN"
  },
  {
    question: "Data communication system within a building or campus is",
    options: ["LAN", "WAN", "MAN", "PAN"],
    correctAnswer: "LAN"
  },
  {
    question: "Which topology combines two or more topologies?",
    options: ["Ring", "Bus", "Hybrid", "All of the above"],
    correctAnswer: "Hybrid"
  },
  {
    question: "In a network, participating computers are referred to as?",
    options: ["Nodes", "Client", "Server", "All of the above"],
    correctAnswer: "Nodes"
  },
  {
    question: "In a network with 25 computers, which topology would be required?",
    options: ["Bus", "Mesh", "Ring", "Hybrid"],
    correctAnswer: "Mesh"
  },
  {
    question: "Which key is used for full screen in Google Chrome?",
    options: ["F11", "F5", "F8", "F12"],
    correctAnswer: "F11"
  },
  {
    question: "To open a new tab in Google Chrome, which key combination is used?",
    options: ["CTRL + R", "CTRL + N", "CTRL + T", "CTRL + M"],
    correctAnswer: "CTRL + T"
  },
  {
    question: "To open downloads in Google Chrome, which key combination is used?",
    options: ["CTRL + R", "CTRL + Z", "CTRL + T", "CTRL + M"],
    correctAnswer: "CTRL + J"
  },
  {
    question: "What does modem stand for?",
    options: ["Modulator-Demodulator", "Modify-Demodify", "Manipulator-Demanipulator", "None of these"],
    correctAnswer: "Modulator-Demodulator"
  },
  {
    question: "What does OSI stand for?",
    options: ["Open System Interconnection", "Open Source Initiative", "Open Source Interconnection", "None of these"],
    correctAnswer: "Open System Interconnection"
  },

  {
    question: "How many layers in OSI reference model?",
    options: ["7", "6", "9", "8"],
    correctAnswer: "7"
  },
  {
    question: "Size of IPV6 address?",
    options: ["32 BIT", "128 BIT", "255 BIT", "130 BIT"],
    correctAnswer: "128 BIT"
  },
  {
    question: "MAC stands for?",
    options: ["MEDIA ACCESS CONTROL", "MAIN ACCESS CONTROL", "BOTH A AND B", "NONE OF THESE"],
    correctAnswer: "MEDIA ACCESS CONTROL"
  },
  {
    question: "Size of MAC address?",
    options: ["64 bit", "48 bit", "128 bit", "32 bit"],
    correctAnswer: "48 bit"
  },
  {
    question: "Which is the first search engine?",
    options: ["ARCHI", "BING", "ALTA VISTA", "CHA-CHA.COM"],
    correctAnswer: "ARCHI"
  },
  {
    question: "Which is the first web browser?",
    options: ["WWW – (1990)", "INTERNET EXPLORER", "NETSCAPE NAVIGATOR", "SAFARI"],
    correctAnswer: "WWW – (1990)"
  },
  {
    question: "Internet started in which year in India?",
    options: ["1990", "1995", "1996", "1999"],
    correctAnswer: "1995"
  },
  {
    question: "What is the code used for IMEI number?",
    options: ["*#06#", "*##06", "*06#*", "None of these"],
    correctAnswer: "*#06#"
  },
  {
    question: "Watching live video on the internet is called?",
    options: ["STREAMING", "BROWSING", "BUFFERING", "NONE OF THESE"],
    correctAnswer: "STREAMING"
  },
  {
    question: "How many layers in TCP/IP?",
    options: ["5", "4", "7", "9"],
    correctAnswer: "4"
  },
  {
    question: "DHCP stands for?",
    options: ["DYNAMIC HOST CONFIGURATION PROTOCOL", "DYNAMIC HIGH CONTROL PROTOCOL", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "DYNAMIC HOST CONFIGURATION PROTOCOL"
  },
  {
    question: "Which guided media provides the highest mode of speed?",
    options: ["COAXIAL CABLE", "FIBER OPTIC CABLE", "UNSHIELDED TWISTED PAIR", "NONE OF THESE"],
    correctAnswer: "FIBER OPTIC CABLE"
  },
  {
    question: "ISP exchanges internet traffic between their networks by?",
    options: ["INTERNET EXCHANGE POINT", "ISP END POINT", "BOTH A & B", "NONE OF THESE"],
    correctAnswer: "INTERNET EXCHANGE POINT"
  },
  {
    question: "What is the loopback IP address?",
    options: ["127.0.0.1", "127.0.0.0", "127.1.1.0", "NONE OF THESE"],
    correctAnswer: "127.0.0.1"
  },

  {
    question: "The size of packet is larger than the size of frame?",
    options: ["true", "false"],
    correctAnswer: "false"
  },
  {
    question: "WLAN stands for ",
    options: ["Wireless Local Area Network", "Wired Local Area Network", "Wireless Local Ambiguity Network", "Wired Latent Area Network"],
    correctAnswer: "Wireless Local Area Network"
  },

  {
    question: "Netiquette is a rule related to",
    options: ["Food habits", "Cyber habits", "Retailing habits", "Banking habits"],
    correctAnswer: "Cyber habits"
  },

  {
    question: "Which of the following items is not used in Local Area Networks (LANS)?",
    options: ["Computer", "Modem", "Printer", "Cable"],
    correctAnswer: "Modem"
  },

  {
    question: "Which device are commonly shared between computers",
    options: ["Mouse", "Speakers", "Printers", "Keyboard"],
    correctAnswer: "Printers"
  },

  {
    question: "What will happen when CTRL+W pressed",
    options: ["Open the tab on a browser", "Close a tab on a browser", "Close the Browser", "Open the Browser"],
    correctAnswer: "Close a tab on a browser"
  },

  {
    question: ".Com Is Stands for Communication",
    options: ["true", "false"],
    correctAnswer: "false"
  },

  {
    question: "Which of the following is not a networking device?",
    options: ["Gateway", "Router", "Switch", "Linux"],
    correctAnswer: "Linux"
  },

  {
    question: "In which of the following topologies is the hub used?",
    options: ["Ring", "Bus", "Star", "Mesh"],
    correctAnswer: "Star"
  },
  {
    question: "How many values in one byte?",
    options: ["256", "255", "258", "260"],
    correctAnswer: "256"
  },
  {
    question: "BHIM app launched in which year?",
    options: ["2014", "2015", "2016", "2017"],
    correctAnswer: "2016"
  },
  {
    question: "Among the following NICS clients, which finds & stores information about an NIS server?",
    options: ["Ypbind", "Ypcat", "Ypwhich", "Yppoll"],
    correctAnswer: "Ypbind"
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
