import React from 'react';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Media from '../Pages/Media';
import Structure from '../../Components/Pages/Structure';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../ToolBars/BottomToolBar.css'


function BottomToolBar () {
    return (
       <div className='header'>
       <div>
           <img src='https://res.cloudinary.com/zzulugirl/image/upload/v1632655625/IMG-20210819-WA0012_adobespark_zhdez3.png' style={{
               width:'300px',
               height: '200px',
               position: 'absolute'
           }}/>
       <Router>
       <div className='b-toolbar-contents' >
       <div className='b-shade'>
       <div className='' style={{
           marginTop: '40%',
        marginLeft: '350%',
        
        
       }}>
       <ul style={{
           listStyleType: 'none'
       }}>
        <li>
        <a href='./'>Home</a>
        </li>
        </ul>
        <ul style={{
            listStyleType: 'none'
        }}>
        <li>
        <a href='./about'>About</a>
        </li>
        </ul>
        <ul style={{
            listStyleType: 'none'
        }}> 
        <li>
        <a href='./contacts'>Contacts</a>
        </li>
        </ul>
        </div>
        </div>
        <div className='' style={{
            marginLeft: '40%',
            marginTop: '2%',
            position: 'absolute',
        
        }}>
       <ul style={{
           listStyleType: 'none'
       }}>
        <li>
        <a href='./services'>Services</a>
        </li>
        </ul>
        <ul style={{
            listStyleType: 'none'
        }}> 
        <li>
        <a href='./Structure'>structure</a>
        </li>
        </ul>
        <ul style={{
            listStyleType: 'none'
        }}>
        <li>
        <a href='./contacts'>Covid update</a>
        </li>
        </ul>
        </div>
    
        </div>
       </Router>
       </div>
       <div style={{
           marginLeft: '60%',
           marginTop: '-11%'
       }}>
       <h1>CSA Head Office</h1>
    Address: no. 102 commisioner street
      <p>+27 11 333 0000</p>
      Email us: csa@csa.com
       </div>
       </div>
    )
}

export default BottomToolBar;