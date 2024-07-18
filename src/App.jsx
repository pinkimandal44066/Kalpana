import React from 'react'
import LayOut from './Components/Homefolder/LayOut';
import Homepage from './Components/Homefolder/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Allcompanies from './Components/Homefolder/Allcompanies';
import Aboutus from './Components/Homefolder/Aboutus';
import Kalpanahotel from './Components/Homefolder/Kalpanahotel';
import Kalpanavegvalley from './Components/Kalpanavegvalley';
import Kalpanainn from './Components/Kalpanainn';
import Kalpanagym from './Components/Kalpanagym';
import Kalpanamarble from './Components/Kalpanamarble';
const App = () => {
  return (
    <div>
     {/* <Homepage /> */}


     <Router>
        <Routes>
          <Route path="/" element={<LayOut/>}>
            <Route path="/" element={<Homepage/>} />
            <Route path="/kalpanahotel" element={<Kalpanahotel/>} />
            <Route path="/allcompanies" element={<Allcompanies/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/kalpanavegvalley" element={<Kalpanavegvalley/>} />
            <Route path="/kalpanainn" element={<Kalpanainn/>} />
            <Route path="/kalpanagym" element={<Kalpanagym/>} />
            <Route path="/kalpanamarble" element={<Kalpanamarble/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App




