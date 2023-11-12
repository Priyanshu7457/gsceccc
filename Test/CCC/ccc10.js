const quizData = [
    {
        question: "What is the Full Form of ‘IIOT’?",
        options: ["INFORMATION IOT", "INDUSTRIAL IOT", "INTELLIGENT IOT", "INNOVATIVE IOT"],
        correctAnswer: "INDUSTRIAL IOT"
    },
    {
        question: "In which of the following years was the blockchain invented?",
        options: ["2012", "2005", "2008", "2010"],
        correctAnswer: "2008"
    },
    {
        question: "A type of VR environment in which subjects are visually isolated from the real environment.",
        options: ["Immersive", "Semi immersive", "Non immersive", "Augmented"],
        correctAnswer: "Immersive"
    },
    {
        question: "Students Where Applications And Services That Use Virtualization Resources What Is The Distribution Network Called?",
        options: ["Soft Computing", "Distributing Computing", "Hybrid Computing", "Cloud Computing"],
        correctAnswer: "Cloud Computing"
    },
    {
        question: "Mixed Reality Experience Combines Elements From Virtual Reality And Augmented Reality?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "The Full Name Of CMS Is Content Management System?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "A Robot is a...............?",
        options: ["Multi-functional manipulator", "Programmable", "Both (Programmable) and (Multi-functional manipulator)", "None of the options"],
        correctAnswer: "Both (Programmable) and (Multi-functional manipulator)"
    },
    {
        question: "The full name of NASSCOM is National Association of Software and Service Companies?",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "What is the full form of RPA?",
        options: ["Real Time Process Automation", "Robotic Process Automation", "Robotic Program Automation", "Robotic Process Application"],
        correctAnswer: "Robotic Process Automation"
    },
    {
        question: "Which day is celebrated as World Computer Literacy Day?",
        options: ["December 2", "November 2", "December 12", "November 12"],
        correctAnswer: "December 2"
    },
    {
        question: "Robotics is also a major field related to Artificial Intelligence.",
        options: ["TRUE", "FALSE"],
        correctAnswer: "TRUE"
    },
    {
        question: "Which of the following options is not best described about Industry 4.0?",
        options: ["Smart factory", "Speed", "Analytics", "None of above"],
        correctAnswer: "Speed"
    },
    {
        question: "IOT stands for",
        options: ["Intranet of things", "Industry of things", "Internet of things", "None of above"],
        correctAnswer: "Internet of things"
    },
    {
        question: "The objective for Industry 4.0 is",
        options: ["Increase efficiency", "Reduced complexity", "Enabled self-controlling", "All of above"],
        correctAnswer: "All of above"
    },
    {
        question: "The huge number of devices connected to the Internet of Things has to communicate automatically, not via humans. What is this called?",
        options: ["Bot to Bot (B2B)", "Machine to Machine (M2M)", "InterCloud", "Skynet"],
        correctAnswer: "Machine to Machine (M2M)"
    },
    {
        question: "What was the name of the first recognized IoT device?",
        options: ["Smart Watch", "ATM", "Radio", "Video Game"],
        correctAnswer: "ATM"
    },
    {
        question: ".......... is being used by the Internet of Things?",
        options: ["Radio identification technology", "Satellite", "Cable", "Broadband"],
        correctAnswer: "Radio identification technology"
    },
    {
        question: "When was the term IoT first coined?",
        options: ["1998", "1999", "2000", "2001"],
        correctAnswer: "1999"
    },
    {
        question: "The science of examining raw data with the purpose of drawing conclusions about that information?",
        options: ["Data Analytics", "Descriptive Analytics", "In-memory Analytics", "Predictive Analytics"],
        correctAnswer: "Data Analytics"
    },


    {
        question: "The ......... cloud infrastructure is operated for the exclusive use of an organization?",
        options: ["Public", "Private", "Community", "All of the mentioned"],
        correctAnswer: "Private"
    },
    {
        question: "...... provides virtual machines, virtual storage, virtual infrastructure, and other hardware assets?",
        options: ["IaaS", "SaaS", "PaaS", "All of the mentioned"],
        correctAnswer: "IaaS"
    },
    {
        question: "How many types of service models are mainly present in the cloud?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },
    {
        question: "Which of these is not a major type of cloud computing usage?",
        options: ["Hardware as a service", "Platform as a service", "Software as a service", "Infrastructure as a service"],
        correctAnswer: "Hardware as a service"
    },
    {
        question: "What are the two main types of Virtual Reality?",
        options: ["Fully immersive and non-immersive", "VR and AR", "Reality and Unreality", "Oculus Rift and HTC Vive"],
        correctAnswer: "Fully immersive and non-immersive"
    },
    {
        question: "What is the term used for describing the judgmental or commonsense part of problem solving?",
        options: ["Heuristic", "Critical", "Value-based", "Analytical"],
        correctAnswer: "Heuristic"
    },
    {
        question: "The characteristics of the computer system capable of thinking, reasoning, and learning is known as?",
        options: ["Machine intelligence", "Human intelligence", "Artificial intelligence", "Virtual intelligence"],
        correctAnswer: "Artificial intelligence"
    },
    {
        question: "The field that investigates the mechanics of human intelligence is?",
        options: ["History", "Cognitive science", "Psychology", "Sociology"],
        correctAnswer: "Cognitive science"
    },
    {
        question: "What is the name of the computer program that simulates the thought processes of human beings?",
        options: ["Human logic", "Expert reason", "Expert system", "Personal information"],
        correctAnswer: "Expert system"
    },
    {
        question: "Who is considered to be the 'father' of artificial intelligence?",
        options: ["Fisher Ada", "John McCarthy", "Allen Newell", "Alan Turing"],
        correctAnswer: "John McCarthy"
    },
    {
        question: "DARPA, the agency that has funded a great deal of American AI research, is part of the Department of _______?",
        options: ["Defense", "Energy", "Education", "Justice"],
        correctAnswer: "Defense"
    },
    {
        question: "The conference that launched the AI revolution in 1956 was held at?",
        options: ["Dartmouth", "Harvard", "New York", "Stanford"],
        correctAnswer: "Dartmouth"
    },
    {
        question: "Bitcoin is based on ............ blockchain?",
        options: ["Private", "Public", "Public permissioned", "Permissioned"],
        correctAnswer: "Public"
    },
    {
        question: "In blockchain, blocks are linked........ ?",
        options: ["Backward to the previous block", "Forward to the next block", "Not linked with each other", "Both directions"],
        correctAnswer: "Backward to the previous block"
    },
    {
        question: "Where do you store your cryptocurrency?",
        options: ["Bank account", "Floppy disk", "Crypto Wallet", "In your pocket"],
        correctAnswer: "Crypto Wallet"
    },
    {
        question: "What is Meghdoot?",
        options: ["Mobile Seva", "Govt. Cloud Service", "Online Seva", "Cloud center service"],
        correctAnswer: "Govt. Cloud Service"
    },
    {
        question: "Atulya App is related to?",
        options: ["Tourism", "Business", "Naukari", "Nota"],
        correctAnswer: "Tourism"
    },
    {
        question: "Start-up is started for whom?",
        options: ["Doctors", "Entrepreneurs", "Students", "Youngsters"],
        correctAnswer: "Entrepreneurs"
    },
    {
        question: "Who invented the term Internet of Things?",
        options: ["Bill Gates", "Kevin Ashton", "Steve Jobs", "McDonald"],
        correctAnswer: "Kevin Ashton"
    },
    {
        question: "Cloud in cloud computing means ....?",
        options: ["Wireless", "Hard-drive", "People", "Internet"],
        correctAnswer: "Internet"
    },
    {
        question: "What are the two main sections of the Cloud Computing System?",
        options: ["Terminal and Nodes", "Front and Back", "Network and Server", "None of these"],
        correctAnswer: "Front and Back"
    },
    {
        question: "Which of the following devices is used in Artificial Intelligence?",
        options: ["Art", "Design", "Input", "Neural Network"],
        correctAnswer: "Neural Network"
    },
    {
        question: "Total elements in the Open IoT Architecture is __",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "Which of the following is not a fundamental component of an IoT system?",
        options: ["Sensors", "Connectivity and data processing", "User interface", "Transformer"],
        correctAnswer: "Transformer"
    },
    {
        question: "Which of the following is used to capture data from the physical world in IoT devices?",
        options: ["Sensors", "Actuators", "Microprocessors", "Microcontrollers"],
        correctAnswer: "Sensors"
    },
    {
        question: "Which of the following protocol is used to link all the devices in the IoT?",
        options: ["HTTP", "UDP", "Network", "TCP/IP"],
        correctAnswer: "TCP/IP"
    },
    {
        question: "Which wireless communication protocol is commonly used in IoT devices?",
        options: ["Wi-Fi", "Bluetooth", "NFC", "Infrared"],
        correctAnswer: "Bluetooth"
    },
    {
        question: "Which of the following is not a main element of IoT?",
        options: ["People", "Process", "Security", "Things"],
        correctAnswer: "People"
    },
    {
        question: "What is the benefits of HTTP over MQTT.",
        options: ["More Secure", "Lightweight", "Both A and B", "None"],
        correctAnswer: "Lightweight"
    },
    {
        question: "Mostly used protocols in IoT are?",
        options: ["ZigBee", "MQTT", "XMPP", "All of above"],
        correctAnswer: "All of above"
    },
    {
        question: "What is the full form of 'AI'?",
        options: ["Artificially Intelligent", "Artificial Intelligence", "Artificially Intelligence", "Advanced Intelligence"],
        correctAnswer: "Artificial Intelligence"
    },
    {
        question: "Which of the following is the branch of Artificial Intelligence?",
        options: ["Machine Learning", "Cyber forensics", "Full-Stack Developer", "Network Design"],
        correctAnswer: "Machine Learning"
    },
    {
        question: "In how many categories is the process of Artificial Intelligence categorized?",
        options: ["Categorized into 5 categories", "Processes are categorized based on the input provided", "Categorized into 3 categories", "Process is not categorized"],
        correctAnswer: "Categorized into 3 categories"
    },
    {
        question: "Based on which of the following parameters is Artificial Intelligence categorized?",
        options: ["Based on functionally only", "Based on capabilities only", "Based on capabilities and functionality", "It is not categorized"],
        correctAnswer: "Based on capabilities and functionality"
    },
    {
        question: "Which of the following is a component of Artificial Intelligence?",
        options: ["Learning", "Training", "Designing", "Puzzling"],
        correctAnswer: "Learning"
    },
    {
        question: "What is the function of an Artificial Intelligence 'Agent'?",
        options: ["Mapping of goal sequence to an action", "Work without the direct interference of the people", "Mapping of percept sequence to an action", "Mapping of environment sequence to an action"],
        correctAnswer: "Mapping of percept sequence to an action"
    },
    {
        question: "Which of the following is not a type of Artificial Intelligence agent?",
        options: ["Learning AI agent", "Goal-based AI agent", "Simple reflex AI agent", "Unity-based AI agent"],
        correctAnswer: "Unity-based AI agent"
    },
    {
        question: "Which of the following is not commonly used programming language for Artificial Intelligence?",
        options: ["Perl", "Java", "PROLOG", "LISP"],
        correctAnswer: "Perl"
    },
    {
        question: "Which of the following is not an application of artificial intelligence?",
        options: ["Face recognition system", "Chatbots", "LIDAR", "DBMS"],
        correctAnswer: "DBMS"
    },
    {
        question: "Which of the following machine requires input from the humans but can interpret the outputs themselves?",
        options: ["Actuators", "Sensor", "Agents", "AI system"],
        correctAnswer: "AI system"
    },
    {
        question: "Which of the following are the approaches to Artificial Intelligence?",
        options: ["Applied approach", "Strong approach", "Weak approach", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "Face Recognition system is based on which type of approach?",
        options: ["Weak AI approach", "Applied AI approach", "Cognitive AI approach", "Strong AI approach"],
        correctAnswer: "Applied AI approach"
    },
    {
        question: "Which of the following is an advantage of artificial intelligence?",
        options: ["Reduces the time taken to solve the problem", "Helps in providing security", "Has the ability to think hence makes the work easier", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which of the following can improve the performance of an AI agent?",
        options: ["Perceiving", "Learning", "Observing", "All of the mentioned"],
        correctAnswer: "Learning"
    },
    {
        question: "Which of the following is/are the composition for AI agents?",
        options: ["Program only", "Architecture only", "Both Program and Architecture", "None of the mentioned"],
        correctAnswer: "Both Program and Architecture"
    },
    {
        question: "On which of the following approach is a basic line-following robot based?",
        options: ["Applied approach", "Weak approach", "Strong approach", "Cognitive approach"],
        correctAnswer: "Weak approach"
    },
    {
        question: "Artificial Intelligence has evolved extremely in all fields except for _________",
        options: ["Web mining", "Construction of plans in real-time dynamic systems", "Understanding natural language robustly", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "Which of the following is an example of artificial intelligent agent/agents?",
        options: ["Autonomous Spacecraft", "Human", "Robot", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "Which of the following is an expansion of Artificial Intelligence application?",
        options: ["Game Playing", "Planning and Scheduling", "Diagnosis", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "Which of the following environments is strategic?",
        options: ["Rational", "Deterministic", "Partial", "Stochastic"],
        correctAnswer: "Deterministic"
    },
    {
        question: "What is the name of Artificial Intelligence which allows machines to handle vague information with a deftness that mimics human intuition?",
        options: ["Human intelligence", "Boolean logic", "Functional logic", "Fuzzy logic"],
        correctAnswer: "Fuzzy logic"
    },

    {
        question: "Which of the following are the 5 big ideas of AI?",
        options: ["Perception", "Human-AI Interaction", "Societal Impact", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What are the main goals of AI?",
        options: ["To Create Expert Systems", "To Implement Human Intelligence in Machines", "Both A and B", "None of the Above"],
        correctAnswer: "Both A and B"
    },
    {
        question: "Which of the following is an application of AI?",
        options: ["Gaming", "Expert Systems", "Vision Systems", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "In which year did John McCarthy coin the term Artificial Intelligence?",
        options: ["1950", "1953", "1956", "1959"],
        correctAnswer: "1956"
    },
    {
        question: "What is Artificial Intelligence?",
        options: ["Putting your intelligence into Computer", "Programming with your own intelligence", "Making a Machine intelligent", "Playing a Game"],
        correctAnswer: "Making a Machine intelligent"
    },
    {
        question: "A process that is repeated, evaluated, and refined is called __________",
        options: ["Diagnostic", "Descriptive", "Interpretive", "Iterative"],
        correctAnswer: "Iterative"
    },
    {
        question: "If a robot is able to change its own trajectory as per the external conditions, then the robot is considered as the__",
        options: ["Mobile", "Non-Servo", "Open Loop", "Intelligent"],
        correctAnswer: "Intelligent"
    },
    {
        question: "A technique that was developed to determine whether a machine could or could not demonstrate the artificial intelligence known as the___",
        options: ["Boolean Algebra", "Turing Test", "Logarithm", "Algorithm"],
        correctAnswer: "Turing Test"
    },
    {
        question: "The component of an Expert system is_________.",
        options: ["Knowledge Base", "Inference Engine", "User Interface", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "An AI agent perceives and acts upon the environment using__.",
        options: ["Sensors", "Perceiver", "Actuators", "Both a and c"],
        correctAnswer: "Both a and c"
    },
    {
        question: "Which AI technique enables the computers to understand the associations and relationships between objects and events?",
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
        question: "Ways to achieve AI in real life are_________.",
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
        options: ["Noise", "Propagation", "Latency", "All of the mentioned"],
        correctAnswer: "Latency"
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
