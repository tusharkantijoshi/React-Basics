<!--
* Traditionally in websites, our request was sent to a server and a new HTML page was sent back to the browser where it then could be displayed and therefore it could feel a bit clunky, we might have that latency where we wait for this new HTML page to load and so on.

* It's this request and response cycle, which we can break up with JS because JS is a programming language that allows us to run logic in the browser and is able to manipulate DOM and allows us to change what the users sees without fetching a new HTML page.

! What is React ?
* React.js is a client-side JS library. It helps us with building modern reactive user interfaces for websites and it does so, by giving us a higher level syntax (JSX), where we write code in a lean, declarative and component focused way.

! What is JSX ?
* JSX stands for JS XML and it is a syntax extension to JS. JSX allows us to write HTML elements in JS and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements.

! History of React
* React's first prototype was developed by Jordan Walke, a software engineer at Facebook. In 2013, Facebook made it open-source and in 2017, Facebook moved React under the MIT license which allows the React library to be used for commercial purposes. React is used in Instagram, Uber, Twitter, Pinterest, Paypal and Wix.

! Advantages of React
* React follows the concept of Virtual DOM, which makes DOM manipulation super fast and easy.
* React is used to control the entire front end of a web application, It does by SAP approach (Single Page Application).

! SAP (Single Page Application)
* In SAP we never request a second HTML page. Hence we only request a single HTML page from the server where after the initial request, React takes over and controls the complete UI.

! What Are Components ?
* React makes building complex interactive and react user interfaces simpler

* Components are building blocks and are a combination of HTML for structure, CSS for styling and JavaScript for logic. Components can reusable multiple times.

* Instead of having one large file which holds all the code and logic for the entire user interface, we have small separated units/ components, where every component has one specific task it focuses on. And if we split that code across multiple files then we'll have small pieces of code which are easy to manage and maintain.

! Declarative Approach
* React uses a declarative approach for building these components. It means that you don't write concrete DOM updating instructions on your own as you would be doing it with just JavaScript, Instead with React you will always define the desired end state and the target state/ different target states depending on different conditions and it's then React's job to figure out which elements on the actual webpage might need to be added or removed or updated.

! Naming Convention
* default HTML component starts with lower case
* custom HTML component starts with upper case

! Sharing data Parent to Child (props)
* Parent component will share data by html attributes to child component and Child component will accept the data by props (parameter to child component's function)

* In regular JavaScript, we use parameters for passing data into functions and it's kind of similar for React. We get only one parameter in every component and React will ensure that it will be an object.

! Adding event listener
* In React, we add an event listener by going to the JSX element, and there we add a special prop but it's not a prop which sets some value but instead it's a prop which starts with (on). Because React exposes all these default events as props which start with on.
* for example, onClick, onChange

! syntax:
clickHandler = () => {
      ...
}

<button onClick={clickHandler}>Click Button</button>

! State
* Reacting to events is an important first step, how can we now change what shows up on the screen?

* The component is just a regular function, the only special thing about that function, is that it returns JSX. Now since it's a function someone has to call it and in React just by using our components in JSX code, we make React aware of our component functions to be called, which is all the evaluated, up until there's no more JSX code to be evaluated and then it translates that into DOM instructions which then renders something on the screen. That's how react works. All this process starts by the index.js file, where we initially point at the App component.

* The only problem with that is, that react never repeats that. React goes through all of that when the application is initially rendered. However in modern applications, you sometimes want to update the DOM, So we need a way of telling react that a certain component should be re-evaluated/ re render and that's where react introduces a special concept called state.

* we need to import state from the React library, a function which is called useState and we have to use this useState inside of the function. And useState is a so-called React hook and all these React hooks can be recognized by the fact that they start with the word "use" in their name, and all these hooks must only be called directly inside such component functions.

!syntax:
const [first, setFirst] = useState(initial value)

* useState actually returns an array, where the first element is the current state value and the second element is a function for updating that current state value. We can use array destructuring to store both elements in separate variables or constants

! Total Syntax

reactComponent = () => {

   ? useState
   const [first, setFirst] = useState(initial value)

   clickHandler = () => {
      ? setFirst function
      setFirst('updated'); ! we have to use the updating function
   }

   return(
      ? onClick event listener
      <button onClick={clickHandler}>Click Button</button>
   )

}

* The component function in which you initialized your state with useState will be executed again.

* That's how React state works. If you have data, which might change, and where changes to that data should be reflected on the DOM, then you need state because a regular variables will not be useful.
* With state, you can set and change values. And when they do change only that component will be re rendered in which the state was registered, not any other components.

* Each component have their own State.

! Lifting The State Up
* We have no direct connection and  we can only communicate from parent to child and from child to parent. That's why in such cases we utilize the closest parent component which has direct or indirect access to both involved components. We can store our state in that parent component which has access to both involved components by lifting our state up.

! Controlled and uncontrolled component
* A component is a controlled component when bcz both the value, as well as changes to the value are not handled in the component itself
* A component is a uncontrolled component when bcz both the value, as well as changes to the value are not handled in the component itself but in a parent component.

! Stateless component
* A state less component also called presentational or dumb component because it doesn't have any internal state it's just there to output some data. In most react applications, you will have more presentational and dumb components than smart or stateful components.

-->
