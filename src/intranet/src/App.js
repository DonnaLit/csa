import React from 'react';
import Library from './Props/Library/Library';
import Schedule from './Props/Calendar/Schedule';
import CompanyDocs from './Components/CompanyDocs';
import Structure from './Components/Structure';
import Sidebar  from './Props/Sidebar';
import CalendarIcon from './Props/Calendar/CalendarIcon';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css'



function intranet () {
  return(
    <div className='App'>   
    <script src="http://localhost:3001/static/js/bundle.js"></script>
    <script src="http://localhost:3001/static/js/1.chunk.js"></script>
    <script src="http://localhost:3001/static/js/main.chunk.js"></script>
    <div className='' style={{
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '30%',
      marginTop: '10%'
    }}>
    <button className='' style={{ backgroundColor: 'steelblue', }}>
    <ul>
    <li>
    <a href='/library'>Reviews</a>
    </li>
    </ul>
      < CalendarIcon />
  
      </button>
    <div>
    <button className='' style={{
      marginLeft: '15px',
      backgroundColor: 'steelblue'
    }}>
    <ul>
    <li>
    <a href='/schedule'>Events</a>
    </li>
    </ul>
      < CalendarIcon />
  
      </button>

    </div>
    <button className='' style={{ 
      marginLeft: '15px',
      backgroundColor: 'steelblue'
    }}>
  <ul>
  <li>
  <a href='/Staff'>Staff</a>
  </li>
  </ul>
  

    </button>
    </div>
 
    <Router>
    <Sidebar />
    <Route path="/schedule" exact component={Schedule} />
    <Route path="/library" exact component={Library} />
    <Route path="/structure" exact component={Structure} />
    </Router>
    </div>
  )
}

export default intranet;