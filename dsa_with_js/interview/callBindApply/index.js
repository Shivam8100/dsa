function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = { name: "Shivam" };
  
  // call: arguments passed one by one
  greet.call(person, "Hello", "!");
  // Output: Hello, Shivam!
  
  const person1 = { name: "Ranjan" };
  
  // apply: arguments passed as array
  greet.apply(person1, ["Hi", "!!"]);
  // Output: Hi, Ranjan!!



const person2 = { name: "Ranjan" };

// bind: creates a new function
const greetMangesh = greet.bind(person2, "Hey");

greetMangesh("?");
// Output: Hey, Ranjan?


// ✅ Key Differences

// call → calls immediately, args individually.

// apply → calls immediately, args as array.

// bind → returns a new function (can be called later).
// call / apply → borrow & run immediately.

// bind → borrow & save for later.



//Application in Real World

// In React (class components), this often breaks inside callbacks.
class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = { clicks: 0 };
  
      // bind ensures correct "this"
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({ clicks: this.state.clicks + 1 });
    }
  
    render() {
      return <button onClick={this.handleClick}>Clicked {this.state.clicks}</button>;
    }
  }
  //👉 bind ensures this always refers to the component instance.