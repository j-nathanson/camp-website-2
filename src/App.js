import React, {
  Component
} from 'react';
import Main from './components/MainComponent';
import './App.css';

//State tends to stay the same for each 
class App extends Component {

  render() {

    return (
      <div className="App" >
        <Main />
      </div>
    );
  }
}

export default App;