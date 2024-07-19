# TO-DO WEB APPLICATION
This mini project helps users to list work they are planning to do and also this project helps us understand topics such as local storage and context APIs.
## LOCAL STORAGE
Local storage stores the data locally in the form of the array so whenever you refresh the page, data doesn't get lost. Still, it stays the same In this project we stored the ID of todos in the local storage. To delete an item permanently, you have to delete data in the array.
## CONTEXT-APIs
Managing the state is an essential part of developing applications in React. A common way to manage the state is by passing props. Passing props means sending data from one component to another. It's a good way to make sure that data gets to the right place in a React application.

But it can be annoying to pass props when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with.

Fortunately, React provides a built-in feature known as the context API that helps  “teleport” data to the components that need it without passing props.


### Example use-case of context-API
For example, let’s say you have a shopping app with a component that shows a user’s shopping cart, and another component that shows the user’s order history.

With Context API, you can create a “context” that holds the user’s shopping information, like their cart and order history. Then, you can use that context in both the shopping cart and the order history component, without having to pass the information down through props.



SOURCE:-freecodecamp.org

