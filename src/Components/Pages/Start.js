import React from 'react';
import logo from './../../Masc/name1.gif';
import About from './About';
import { Fade } from  'react-reveal';
import ToolBar from '../ToolBars/ToolBar';
import './Button.css'




function start () {
    return (
     <div className='' >
    <ToolBar />
     
       <div className='' style={{
         marginTop: '0%'
       }}>
        
     <img src={logo} alt=""  style={{
        marginTop: '0%',
        marginLeft: '35%',
        width: '500px',
        position: 'absolute'
              }}/>
               <Fade up style={{
            width: 650,
            marginLeft: '20%',
            height: 200,
            opacity: '1',
            transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s',
	animationName: 'fadeInOpacity',
	animationIterationCount: '1',
	animationTimingFunction: 'ease-in',
	animationDuration: '100000s',
    direction:"left" }}>
        <img src='https://res.cloudinary.com/zzulugirl/image/upload/v1632652941/ehimetalor-akhere-unuabona-XOIUkffgp3U-unsplash_-_Copy_adobespark_dlyiic.png'  style={{
        marginTop: '5%',
        marginLeft: '10%',
        width: '300px',
        position: 'absolute'
              }}/>

              </Fade >
              <Fade up style={{
            width: 650,
            marginLeft: '20%',
            height: 200,
            opacity: '1',
            transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s',
	animationName: 'fadeInOpacity',
	animationIterationCount: '1',
	animationTimingFunction: 'ease-in',
	animationDuration: '10000s',
    direction:"right" }}>
              <div className='' style={{
              
                marginTop: '17%',
                width: '500px',
                position: 'absolute',
                marginLeft: '35%',
                color: 'black'
              }}>
                <h1></h1>
                Whether you want to join a union, take action in campaigns, learn more about unions, CSA is the place to go for information and resources.
              </div >
              </Fade>
              <div className='' style={{
                marginTop: '24%',
                width: '700px',
                position: 'absolute',
                marginLeft: '35%',
                
                
                color: 'black'
              }} > Get help at work, know your rights, Visit our website and learn more
            </div>

             <div style={{
               marginTop: '33%',
               marginLeft: '35%',
               position: 'absolute'
             }}>
              
             <button class="button-73" role="button">
              <ul style={{
                listStyleType: 'none'}}>
              
                <li className='' style={{
                  textDecorationLine: 'none'
                }}>
                  <a style={{
                    textDecoration: 'none',
                    color: 'black'
                  
                  }} href='/about' exact component={About} 
        
                  >Website</a>
                 
                </li>
              
              </ul>
              </button>
              </div>
              <div style={{
                marginTop: '33%',
                marginLeft: '60%',
                position: 'absolute'
              }}>
              <button class="button-73" role="button">
              <ul style={{
                listStyleType: 'none'
              
              
              }}>
                
              <li>
              <a style={{
                textDecoration: 'none',
                color: 'black'
              }}
               href='http://localhost:3001/App' 
                  >Intranet </a>
                </li>
              </ul>
              </button>
              </div>
            
              </div>
              </div>
              
            
            
            
              )
              }

              export default start;