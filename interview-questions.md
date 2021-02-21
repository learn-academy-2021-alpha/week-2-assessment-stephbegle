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

  Researched answer: The necessary elements we need are script tags and html or JSX tags. 

  https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb



4. What is JSX?

  Your answer: JSX looks alot like HTML and is the language being used inside of script tags in React. The script tags allow us to write JavaScript code and the HTML-looking code we end up writing inside of that is actually JSX. 

  Researched answer: JSX stands for JavaScript XML and is the language that allows us to write HTML in React. It converts HTML tags into react elements. You are not required to use JSX in React but it does make it easier to write React applications because otherwise, you'd have to use methods to create actual HTML elements in React. 

  https://www.w3schools.com/react/react_jsx.asp#:~:text=JSX%20stands%20for%20JavaScript%20XML.&text=JSX%20makes%20it%20easier%20to%20write%20and%20add%20HTML%20in%20React.



5. What is state in React?

  Your answer: state is a built-in object for React :) (: 

  Researched answer: the state is where you store the property values that belong to the component. You can manage the properties of the component within the component like you would variables defined in a function.   

  https://reactjs.org/docs/faq-state.html



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I completely wouldn't have had an answer for this one. I only remember it mentioned during testing with jest. 

  Researched answer: Hoisting is a behavior that moves declarations from the bottom to the top of the current script. Meaning you can declare a variable after you have already used it. The variable is considered to be recognized but still in a "dead zone" at the start of the script until it is declared. 

  https://www.w3schools.com/js/js_hoisting.asp



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - 
https://reactjs.org/docs/react-component.html 
- React props
- event.preventDefault()
- DOM events
- MVC
