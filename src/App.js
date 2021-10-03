import React from 'react';
import Start from './Components/Pages/Start';
import About from './Components/Pages/About';
import ToolBar from './Components/ToolBars/ToolBar';
import Services from './Components/Pages/Services';
import Structure from './Components/Pages/Structure';
import Contacts from './Components/ContactUs/Contacts';
import BottomToolBar from './Components/ToolBars/BottomToolbar';
import LabourLaw from './Components/Pages/LabourLaw';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function app () {
  return (
    <div>
      

      <div>
      <Router>
      <div>
        <div className='wrapper'>

      <Switch>
       <Route path='/' exact component={Start} /> 
      
      <Route path="/services" exact component={Services} />
      <Route path='/about' exact component={About} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/structure" exact component={Structure} />
      <Route path="/Labourlaw" exact component={LabourLaw} />
      
       <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>

</Switch>

      
  
        </div>
      </div> 
     
      </Router>
      </div>
      
    </div>
  )
}

export default app;


