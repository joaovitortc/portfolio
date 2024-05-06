import React from 'react';
import GridPattern from './components/GridPattern.tsx';
import NavBar from './components/NavBar.tsx'
import Welcome from './components/Welcome.tsx'
import './index.css'

function App() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <NavBar/>
      <GridPattern/>
      <Welcome/>
    
    </div>
  );
}

export default App;
