 import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import MyFooter from './Components/MyFooter';
import APi from './Components/APi';
// import MyCard from './Components/MyCard';

function App() {
  return (
    <div className="App">
      {/* <h1>HElllo</h1> */}
    <MyNavbar/>
  <APi/>
    {/* <MyCard/> */}
    <MyFooter/>
    </div>
  );
}

export default App;
