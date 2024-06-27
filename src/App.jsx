import React from 'react'
// import Homepage from './Components/Homefolder/Homepage'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from './Components/Homefolder/LayOut';
import Homepage from './Components/Homefolder/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
     {/* <Homepage /> */}


     <Router>
        <Routes>
          <Route path="/" element={<LayOut/>}>
            <Route path="/" element={<Homepage/>} />
         
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

