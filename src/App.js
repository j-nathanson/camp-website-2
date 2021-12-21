import React, {
  Component
} from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//State tends to stay the same for each 
class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App" >
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;