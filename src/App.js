import "./App.css";
import { useState } from "react";
var dob = "";
var luckyNumber = "";
function App() {
  const [message, setmessage] = useState("");
  function dobHandler(event) {
    dob = event.target.value;
    dob = dob.replaceAll("-", "");
    // console.log(dob);
  }
  function luckyNumberHandler(event) {
    luckyNumber = event.target.value;
    // console.log(luckyNumber);
  }
  function checkLucky(event) {
    if (dob && luckyNumber) {
      if (sumOf(dob) % Number(luckyNumber) === 0) {
        setmessage("Your Birthday is Lucky👌");
      } else {
        setmessage("Your Birthday is Not Lucky😞");
      }
    } else {
      setmessage("You must enter both the fields!");
    }
  }
  function sumOf(item) {
    if (item.length > 0) {
      var sum = 0;
      for (let i = 0; i < item.length; i++) {
        sum += Number(item.charAt(i));
      }
      return sum;
    } else {
      return 0;
    }
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Is your birthday Lucky?</h1>
      </header>
      <div className="container">
        <label for="dob">Date of Birth </label>
        <input id="dob" onChange={dobHandler} type="date"></input>
        <label for="lucky-number">Lucky Number </label>
        <input
          id="lucky-number"
          onChange={luckyNumberHandler}
          type="number"></input>
        <button id="check-lucky" onClick={checkLucky}>
          Check
        </button>
        <span className="message">{message}</span>
      </div>
      <footer>
        <div className="socials">My Socials</div>
        <ul className="list">
          <li>
            <a href="https://github.com/RakshithBhat03" className="link">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/RakshithBhat1" className="link">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rakshithbhat/"
              className="link">
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://rakshithbhat.netlify.app/"
              target="_blank"
              class="link">
              Portfolio
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
