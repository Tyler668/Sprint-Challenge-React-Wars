# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is an open source JavaScript library that allows the creation of reusable UI elements for single page applications. It addresses the issue of having dynamic pages with lots of changing properties, and allows the changing of specific element states without reloading the whole page.

1. What does it mean to think in react?

To think in React is to consider the ramifications of each component that is built. It forces you to consider the efficiency and reusability of each component as it would apply to a larger scale application as well as future ones,  rather than trying to cram everything into a single component.

1. Describe state.

State is an object that determines how a component renders and behaves, dependent on some defined parameters. 

1. Describe props.

Props is short for properties, and is used to pass data to components and trigger state changes among them. Props are the creation parameters for a component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are any thing that happens outside of the scope of the function being executed. If a function can potentially yeild different results when the same data is passed in then it is considered impure and candidate to side effects. To sync effects to some sort of change of state or prop we use useEffect() and execute code upon the change of state of either the loading of the page or a given dependency array. 