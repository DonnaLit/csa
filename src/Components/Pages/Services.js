import React from 'react';
import About from './About';
import Fade from 'react-reveal';
import Gallery from '../../Props/Gallery';
import Csamandate from './SideComponents/Csamandate';
import Labour from './SideComponents/Labour';
import ToolBar from './../ToolBars/ToolBar';
import ToolBar2 from './../ToolBars/ToolBar2';
import ConatctUs from './../ContactUs/ContactUs'
import BottomToolBar from '../ToolBars/BottomToolbar';

function services () {
    return (
        <div>
            <div >
                <ToolBar />
                <ToolBar2 />
                <div styleName="" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '-18%',
                    

                }}>
                <div className="" style={{
boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
width: '600px',
marginLeft: '0%',
marginTop: '20%',
height: '50vh'
        }}>
        <h1 style={{
            marginLeft: '25%'
        }}>What we do </h1>
        <p>CSA membership means representation and a voice on the job every day. We deal with your workplace issues including handling grievances.</p>
        <p> Members are further supported by CSA ground force, work­place health and safety, benefits, unfair dismissal and forced vaccinations. </p>
        <button style={{
            height: '-30vh',
            marginLeft: '69%'
        }}> 
        <ul style={{
        listStyleType: 'none'
        }}>
        <li>
        <a  style={{
            textDecoration: 'none',
            color: 'black',
            marginLeft: '-50%'
            }} href='/about' exact comopnent={About}>Learn more</a>
        </li>
        </ul>
        </button>
        </div>
        <div className='' style={{
boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          
          width: '750px',
marginLeft: '45%',
position: 'absolute',
marginTop: '20%',
height: '50%'

        }}>
        <h1 style={{
            marginLeft:'15%'
        }}> How we can assist you</h1>
        <p>Unions train and organise workplace representatives who help union members with the problems they face at work.

        Reps provide support and advice and campaign for better conditions and pay.
        
        Unions have brought significant changes to society, including:
        
        a national minimum wage;
        the abolition of child labour;
        improved worker safety;
        improving living standards by reducing the number of hours in the working week and encouraging a healthy work/life balance;
        improved parental leave;
        equality legislation;
        better protection of migrant workers and a reduction in exploitation;
        minimum holiday and sickness entitlements.
        Unions have also made thousands of local agreements on issues affecting individual workplaces following consultation, negotiation and bargaining.</p>
        
        </div>

                </div> 

                <div className="" style={{
                    
                    width: '450px',
                    position: 'absolute',
                    marginTop: '10%',
                    marginLeft: '35%'
                }}>
                <Gallery />
                </div>

                <div>
                <Fade left style={{
      width: 200,
      marginLeft: '35%',
      height: 200,
      opacity: '1',
      transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s',
animationName: 'fadeInOpacity',
animationIterationCount: '1',
animationTimingFunction: 'ease-in',
animationDuration: '50s',
direction:"left"
    }}
    direction="left"
>
                <div className='' style={{
boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
width: '1000px',
  marginLeft: '15%',
  marginTop: '60%',
  height: '50vh'
  
  
        }}>
            
<h1 style={{
    marginTop: '-25%',
    marginLeft: '30%',
    color: 'steelblue'
}}>What you need to know </h1>
        how do we work in practice?
        When you’re a member of the CSA, you’re part of a family that will always stand up for you. We have highly trained staff and activists who understand exactly what rights you have and what employers are allowed to do.
        
        We train our people in employment law, health and safety and how to represent people in disciplinary processes so that whenever there is a problem, someone has your back. Those activists are commonly referred to as ‘Reps’ or ‘workplace organsiers’.
        
        On every workplace issue, from individuals facing disciplinaries, to bullying at work, to making sure you get proper maternity or paternity rights or simply making sure that your workplace is a safe place to be – CSA is here for our members.
        When working people speak together, our voice is so much stronger than when we do it alone. With over a large number of members across South Africa and tens of thousands of trained reps and hundreds of staff, together we have the power to make a real difference.

        CSA does that every day – negotiating with employers on behalf of our members and campaigning for better jobs, better rights and better workplace policies.
        </div>
        </Fade>
                </div>
<div className="" style={{
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%'
}}>
    <Csamandate />
    <Labour />
    <ConatctUs />
</div>
                
            </div>
            <div style={{
    marginTop: '35%',
    webkitTransform: 'translateZ(0)'
}}> 
                <BottomToolBar />
            </div>

        </div>
    )
}
export default services;