const qBank = [
  {
    question: "What are the major advantages of React?",
    answers: [
      "UI Testing",
      "Performance (Virtual DOM)",
      "JSX Readability",
      "All"
    ],
    correct: "All",
    questionId: "1"
  },
  {
    question: "Does React Allow for server side rendering?",
    answers: ["Yes", "No"],
    correct: "Yes",
    questionId: "2"
  },
  {
    question: "What is a React key and it's significance?",
    answers: ["tracks state", "Renders Null", "State", "Errors"],
    correct: "tracks state",
    questionId: "3"
  },
  {
    question: "What is a single source of truth and it's benefits?",
    answers: [
      "State is stored in a Redux store",
      "Track changes",
      "All",
      "Easier to debug"
    ],
    correct: "All",
    questionId: "4"
  },
  {
    question: "What does a stateful component allow?",
    answers: [
      "stores state in memory",
      "changes to state",
      "past, present, future state changes",
      "All"
    ],
    correct: "All",
    questionId: "5"
  },
  {
    question: "Who invented React?",
    answers: ["Google", "Microsoft", "Facebook", "Twitter"],
    correct: "Facebook",
    questionId: "6"
  },
  {
    question:
      "Does a stateful component have knowledge of past, present, and future state changes?",
    answers: ["No", "Yes"],
    correct: "Yes",
    questionId: "7"
  },
  {
    question: "What are refs in React?",
    answers: ["references", "refactors", "refstring", "refs"],
    correct: "references",
    questionId: "8"
  },
  {
    question: "What does the componentWillMount lifecycle accomplish?",
    answers: [
      "executes on client and server",
      "renders after API call",
      "renders after the lifecycle",
      "ajax call"
    ],
    correct: "executes on client and server",
    questionId: "9"
  },
  {
    question: "What is React?",
    answers: [
      "MVC",
      "Front End Framework",
      "Front End Library",
      "How you respond to a punch"
    ],
    correct: "Front End Framework",
    questionId: "10"
  },
  {
    question: "What is the first re-render life cycle?",
    answers: [
      "static getDerivedFromProps",
      "componentDidMount",
      "sayWhat",
      "$(document).ready"
    ],
    correct: "static getDerivedFromProps",
    questionId: "11"
  },
  {
    question:
      "On the re-render the comparing is done on the shouldComponentUpdate?",
    answers: ["True", "False"],
    correct: "True",
    questionId: "12"
  },
  {
    question: "The snapshots lifecycle is called getSnapShotBeforeUpdate?",
    answers: ["Yes", "No", "Depends on React version"],
    correct: "Depends on React version",
    questionId: "13"
  },
  {
    question: "How do you prevent re-rendering in React?",
    answers: [
      "shouldComponentUpdate",
      "componentWillUnmount",
      "componentDidUpdate",
      "render"
    ],
    correct: "shouldComponentUpdate",
    questionId: "14"
  },
  {
    question: "What does a React.PureComponent compare?",
    answers: [
      "props",
      "Shallow compares old and new state",
      "stateless component",
      "render"
    ],
    correct: "Shallow compares old and new state",
    questionId: "15"
  },
  {
    question: "What are Error Boundaries?",
    answers: [
      "Error exceptions",
      "console.log(err.boundaries)",
      "Special components with two life cycles",
      ".each()"
    ],
    correct: "Special components with two life cycles",
    questionId: "16"
  },
  {
    question: "What logs the error that is happening?",
    answers: [
      "componentDidCatch",
      "componentWillUpdate",
      "componentDidMount",
      "conponentErrorThrown"
    ],
    correct: "componentDidCatch",
    questionId: "17"
  },
  {
    question: "What is the best API life cycle?",
    answers: [
      "componentDidUnmount",
      "getDerivedStateFromProps",
      "ComponentUpdate",
      "constructor(props)"
    ],
    correct: "componentDidUnmount",
    questionId: "18"
  },
  {
    question: "What does componentdDidUnmount ensure?",
    answers: [
      "Ensures the DOM is ready",
      "component completely rendered",
      "then an API call can be made",
      "All"
    ],
    correct: "All",
    questionId: "19"
  },
  {
    question: "Is everything in React a component?",
    answers: ["Yes", "No"],
    correct: "Yes",
    questionId: "20"
  },
  {
    question: "What should be considered for implementing React?",
    answers: [
      "All",
      "Project lifecycle",
      "Functional programming of JavaScript",
      "Version in iteration"
    ],
    correct: "All",
    questionId: "21"
  },
  {
    question: "What does CSS-In-JS allow?",
    answers: [
      "pass as CSS literal objects",
      "All",
      "Conditional rendering",
      "Common styles import"
    ],
    correct: "All",
    questionId: "22"
  },
  {
    question: "Why can't you setState directly?",
    answers: [
      "DOM restrictions",
      "setState() always triggers re-rendering",
      "console.log()",
      "Code splitting"
    ],
    correct: "setState() always triggers re-rendering",
    questionId: "23"
  },
  {
    question: "What is allowed by conditional rendering of state?",
    answers: ["if statement", "ternary", "All", "expression"],
    correct: "All",
    questionId: "24"
  },
  {
    question: "What is a Fragment in React used for?",
    answers: [
      "Allow many children to be wrapped",
      "CSS to SCSS manipulation",
      "API calls",
      "creating a redux store"
    ],
    correct: "Allow many children to be wrapped",
    questionId: "25"
  },
  {
    question: "What are the benefits of code splitting?",
    answers: [
      "lazy loading",
      "only taking what is needed",
      "bundle load becomes faster",
      "All"
    ],
    correct: "All",
    questionId: "26"
  },
  {
    question: "Choose the alternatives to using Redux?",
    answers: ["mobX", "RxJs", "All", "Apollo Client with graphQL"],
    correct: "All",
    questionId: "27"
  },
  {
    question:
      "Redux middleware has to be in sync before any action is carried to the store?",
    answers: ["True", "False"],
    correct: "True",
    questionId: "28"
  },
  {
    question:
      "Redux-Thunk action creator sends promises that wait on a yes or no response?",
    answers: ["True", "False"],
    correct: "True",
    questionId: "29"
  },
  {
    question:
      "Redux saga is async that excutes in blocks that can cancel the actions any time?",
    answers: ["True", "False"],
    correct: "True",
    questionId: "30"
  },
  {
    question: "What is JSX?",
    answers: [
      "XML/HTML syntax",
      "CSS library",
      "Redux store",
      "JavaScript library"
    ],
    correct: "XML/HTML syntax",
    questionId: "31"
  },
  {
    question:
      "When optimizing a React project the classes should be used over id's?",
    answers: ["True", "False"],
    correct: "False",
    questionId: "32"
  },
  {
    question: "React resolves dependency issues on it's own?",
    answers: ["True", "False"],
    correct: "False",
    questionId: "33"
  },
  {
    question:
      "Optimization of a React project should consider which of these but not limited too?",
    answers: [
      "Parameters",
      "Application Size",
      "React Version",
      "Stack",
      "All"
    ],
    correct: "All",
    questionId: "34"
  },
  {
    question:
      "To measure a React application for performance these should be considered",
    answers: [
      "Slowness",
      "Crashed based on implementations",
      "Bundle size",
      "All"
    ],
    correct: "All",
    questionId: "35"
  },
  {
    question:
      "When measuring speed performance in a React application these should be addressed?",
    answers: [
      "Plug-ins",
      "Bottle necks",
      "components re-rendering that shouldn't be",
      "Set up of a profiler",
      "All"
    ],
    correct: "All",
    questionId: "36"
  },
  {
    question:
      "Large package size does not determine performance of a React application",
    answers: ["True", "False"],
    correct: "False",
    questionId: "37"
  },
  {
    question:
      "Converting class components to pure functional components will not affect permormance?",
    answers: ["True", "False"],
    correct: "False",
    questionId: "38"
  },
  {
    question: "What command do you use create a react app?",
    answers: [
      "npj create-react-dom",
      "npm create-react-js",
      "npx create-react-app",
      "npx create-reacte-app"
    ],
    correct: "npx create-react-app",
    questionId: "39"
  },
  {
    question: "A JavaScript build toolchain consists of?",
    answers: [
      "package manager (npm or yarn)",
      "bundler (webpack or parcel)",
      "compiler (Babel)",
      "All"
    ],
    correct: "All",
    questionId: "40"
  },
  {
    question: "To create a react application you need to?",
    answers: [
      "npx create-react-app app-name",
      "cd app-name",
      "npm start",
      "make sure you have Node.js installed",
      "All"
    ],
    correct: "All",
    questionId: "41"
  },
  {
    question:
      "The default localhost url created by the create-react-app is set to http://localhost:6000?",
    answers: ["True", "False"],
    correct: "False",
    questionId: "42"
  },
  {
    question:
      "React allows for Multi-Directional data flow (two way data binding)?",
    answers: ["True", "False"],
    correct: "False",
    questionId: "43"
  },
  {
    question: "What are the limitations of React?",
    answers: [
      "Library based (Not MVC)",
      "Learning Curve",
      "Uses inline templating",
      "All"
    ],
    correct: "All",
    questionId: "44"
  },
  {
    question: "What are the benefits of the Virtual DOM?",
    answers: [
      "Updates faster",
      "Updates JSX elements",
      "No DOM manipulation or Memory Wastage",
      "All"
    ],
    correct: "All",
    questionId: "45"
  },
  {
    question: "What is needed for a browser to read JSX?",
    answers: [
      "Compiler (Babel)",
      "RenderJsx lifecycle",
      ".jsx extension",
      "ajax"
    ],
    correct: "Compiler (Babel)",
    questionId: "46"
  },
  {
    question: "What are HOC's?",
    answers: [
      "Pure components",
      "Accept Dynamically provided children",
      "Do modify input component",
      "All"
    ],
    correct: "All",
    questionId: "47"
  },
  {
    question: "What are the three principles Redux follows?",
    answers: [
      "Single source of truth",
      "State is read only",
      "Changes are made by pure functions",
      "ALL"
    ],
    correct: "All",
    questionId: "48"
  },
  {
    question: "What are props in React?",
    answers: [
      "(props) are short for properties",
      "write only",
      "mutable",
      "All"
    ],
    correct: "All",
    questionId: "49"
  },
  {
    question: "What does an arrow function accomplish?",
    answers: ["Allow re-render", "Data binding", "Make API calls", "All"],
    correct: "Data binding",
    questionId: "50"
  },
  {
    question: "What are the main Redux components?",
    answers: ["Reducers", "Actions", "Store ", "View", "All"],
    correct: "All",
    questionId: "50"
  },
  {
    question: "What is React Router?",
    answers: ["Routing Library", "Data Binder", "Compiler", "All"],
    correct: "Routing Library",
    questionId: "50"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
