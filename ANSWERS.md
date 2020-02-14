- [ ] Why would you use class component over function components (removing hooks from the question)?

You would use class components over function components if you wanted to use the lifecycle methods from React's component class. In addition, class component state is very organized by comparison.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() is a method that runs once after a component first mounts, and is typically used to fetch data via an async function.
componentDidUpdate() runs every time a component is updated, and a dev may wish to update localStorage here, esp. for changes in user preferences like theme.
componentWillUnmount() runs when a component is removed from the DOM and is typically used to run clean up functions that remove data that is no longer needed.

- [ ] What is the purpose of a custom hook?

A custom hook is a way of handling stateful logic in it's own component that allows a developer to write DRYer code. For instance, you can write the logic to handle forms in it's own custom hook and reuse it for all forms across your application.

- [ ] Why is it important to test our apps?

It is important to test our apps because it allows us to find bugs faster, it allows us to trust the code, it forces us to think about the code and write it more cleanly, and it acts as a form of documentation for the code.