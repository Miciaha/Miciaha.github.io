import React from 'react';
import About from './Components/Layouts/About';
import Menu from './Components/Menu';
import Experience from './Components/Layouts/Experience';
import AccentMenu from './Components/AccentMenu';

class App extends React.Component {
  render(){  
    return (
    <div className="App">
      <Menu />
      <AccentMenu />
      <About />
      <Experience />
    </div>
  );
}
}

export default App;
