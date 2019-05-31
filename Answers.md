<!-- 1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? -->

    Array.map()

    Array.filter()

    Array.concar()


<!-- 1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? -->

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

<!-- 1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? -->

Component state vs Redux state. State is nothing but the state of the application at a given point of time. Generally component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components.

<!-- 1.  What is middleware? -->

Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.

<!-- 1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? -->

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

<!-- 1.  Which `react-redux` method links up our `components` with our `redux store`? -->

(Connect) connects a React component with the Redux store.