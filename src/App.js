import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react";
import logo from './logo.svg';
import './App.css';

function App() {

  const addName = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <button onClick={this.addName}>Add Name</button>
      </div>
    </div>
  );
};

class MyStore {
  name = "";
  names = [];
};

makeObservable(MyStore, {
  name: observable,
  names: observable,
})

export default observer(App);
