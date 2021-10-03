import React from 'react';
import About from '../Pages/About';
import Contacts from './../ContactUs/Contacts';
import Services from '../Pages/Services';
import Fade from  'react-reveal/Fade';
import ApplicationForm from '../ContactUs/Contacts';
import Structure from '../Pages/Structure';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Toolbar () {
    return (
        <div>

        <div className='toolbarWrapper'>
        
        </div>
    
        <div className='items' style={{
            height:'10vh',
            width:'100%',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'row-reverse',
                      

            
        
        }}>
             <ul style={{
                 listStyleType: 'none'
             }}>
                <li>
                    <a style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} href='/contacts' exact component={Contacts}>Contacts</a>
                </li>
            </ul>
            
            <ul style={{
                 listStyleType: 'none'
             }} >
                <li>
                    <a style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} href='/structure' exact component={Structure}>Leadership</a>
                </li>
            </ul>
            <ul style={{
                 listStyleType: 'none'
             }}>
                <li>
                    <a style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}  href='/services'exact component={ Services}>Services</a>
                </li>
            </ul>
            <ul style={{
                 listStyleType: 'none'
             }} >
                <li>
                    <a style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} href='https://sacoronavirus.co.za/'>Covid Update</a>
                </li>
            </ul>
            <ul style={{
                 listStyleType: 'none'
             }} >
                <li>
                    <a style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} href='/about' exact component={About}> About </a>
                </li>
            </ul>
            
        </div>
        </div>
    )
}

export default Toolbar;