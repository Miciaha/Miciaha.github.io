import React from 'react';
import About from './Components/Layouts/About';
import Menu from './Components/Menu';
import Experience from './Components/Layouts/Experience';

class App extends React.Component {
  render(){  
    return (
    <div className="App">
      <Menu />
      <About />
    </div>
  );
}
}

export default App;
