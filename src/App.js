import React from 'react';
import About from './Components/Layouts/About';
import Menu from './Components/Menu';
import Experience from './Components/Layouts/Experience';
import './App.css';

class App extends React.Component {
  render(){  
    return (
    <div className="App">
      <Menu />
      <About />
      <Experience />
    </div>
  );
}
}

export default App;
