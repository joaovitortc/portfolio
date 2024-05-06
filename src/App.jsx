import React from 'react';
import GridPattern from './components/GridPattern';
//import './index.css'

function App() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern/>
      <h1>Hello </h1>
      <div className="bg-red-800 text-white p-4">
    This is a test div with Tailwind CSS styles applied.
    </div>

    </div>
  );
}

export default App;
