# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method super()?

  Your answer: The super() method is used in child classes and calls the information made in parent classes so that the child class is able to access all of its properties. 

  Researched answer: The super keyword refers to the parent class and is used by a child class to call the constructor of the parent class and be able to access all of the parent class properties and methods. It allows new objects to be created by calling the constructor method of the parent class.

  https://www.w3schools.com/jsref/jsref_class_super.asp



2. What is a virtual DOM?

  Your answer: DOM stands for document ordered model and a virtual DOM is a document that lives in between the website and the actual code used to create a website. The job of the virtual DOM is to look for changes the user has made, isolate those changes, and only update those changes on the page, leaving everything else in tact. This allows the page to continue to update without a refreshing of the page.

  Researched answer: The VDOM is a concept that explains the process of there being an updated change to the actual DOM. When there is a change in the user interface, that change (or VDOM) is stored in memory and then synced with the actual DOM using a library such as ReactDom (this process is called reconciliation). The VDOM is thought of as more of a pattern than a technology; it absorbs the changes on an app and updates the DOM seamlessly.   

https://reactjs.org/docs/faq-internals.html



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: In order to display anything in the browser, we need to use HTML-like openning and closing tags. For example, "<h1>Hello World</h1>"

  Researched answer: The necessary elements we need are script tags and some html-like JSX tags wrapped around the desired message to be displayed in the browser. 

  // to add on to this (during review with everyone), it needs a class that extends a React Component that containst a render and a return, and needs a React Fragment that will encase the elements. 

  https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb



4. What is JSX?

  Your answer: JSX looks alot like HTML and is the language being used inside of script tags in React. The script tags allow us to write JavaScript code and the HTML-looking code we end up writing inside of that is actually JSX. 

  Researched answer: JSX stands for JavaScript XML and is the language that allows us to write HTML in React. It converts HTML tags into react elements. You are not required to use JSX in React but it does make it easier to write React applications because otherwise, you'd have to use methods to create actual HTML elements in React. 

  https://www.w3schools.com/react/react_jsx.asp#:~:text=JSX%20stands%20for%20JavaScript%20XML.&text=JSX%20makes%20it%20easier%20to%20write%20and%20add%20HTML%20in%20React.



5. What is state in React?

  Your answer: state is a built-in object for React :) (: 

  Researched answer: the state is where you store the property values that belong to the component. You can manage the properties of the component within the component like you would variables in a function.   

    // to add on, state holds the state of an object, it holds information for App.js to use at a later time. Its where you store property values that belongs to component. When the state object changes, the component renders.

  https://reactjs.org/docs/faq-state.html



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I completely wouldn't have had an answer for this one. I only remember it mentioned during testing with jest. 

  Researched answer: Hoisting is a behavior that moves declarations from the bottom to the top of the current script. Meaning you can declare a variable after you have already used it. The variable is considered to be recognized but still in a "dead zone" at the start of the script until it is declared. 

  https://www.w3schools.com/js/js_hoisting.asp



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - lifecycle methods are the methods that process the lifecycle of a component. Every component has a lifecycle that goes through specific phases. The phases are: 

Mounting : an instance of a componenet is being created and inserted into the DOM
  - contructor()
  - getDerivedStateFromProps (static method)
  - render()
  - componentDidMount()

Updating : when a componenet is being re-rendered as a result of changes to either its props (properties) or state
  - getDerivedStateFromProps() (static method)
  - shouldComponentUpdate
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

Unmounting : when a component is being removed from the DOM 
  - componentWillUnmount

Error handling : when there is an error during rendering, in a lifecycle method, or in the constructer of any child component
  - getDerivedStateFromError() (static method)
  - componentDidCatch()

https://reactjs.org/docs/react-component.html 
https://www.w3schools.com/react/react_lifecycle.asp



- React props - props stands for properties and is a keyword that pass parent class variables (or properties) into the child component of the class. It's a one way road from parent to child. 

// to add on, how dad is passed between different components

https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0



- event.preventDefault() - this method is used for preventing the default behavior of a certain event from happening.

https://reactjs.org/docs/handling-events.html



- DOM events - are events that belong to event handlers, and allow JavaScript to register different actions on certain DOM elements.

// to add one, onClick... the actual click is an event

https://www.w3schools.com/jsref/dom_obj_event.asp



- MVC - stands for model view controller and is a pattern of separating an application into three main components. Each of these components are built to handle specific development aspects of an application. 

  - Model : (data) corresponds to all data-related logic that the user works with. 

  - View : (user interface) used for all the user intferface logic of the application

  - Controller : (processes that handle input) acts as an interface between the Model and View components. It  processes all the model information, so it processes all the data-related logic, manipulates the data depending on the model updates, and interacts with the view information to render a final output. 

  https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm