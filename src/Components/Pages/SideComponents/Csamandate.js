import React from 'react';
import './../Button.css'


function Csamandate () {
    return (
        <div className="" style={{
            boxShadow: 'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',
            width: '400px',
            height: '56.5%',
            alignItems: 'center',
            position: 'absolute',
            marginLeft: '35%',

        }}> 
        <img src='https://res.cloudinary.com/zzulugirl/image/upload/v1631352202/emmanuel-ikwuegbu-qNY4I-pep-k-unsplash_-_Copy_vndjgb.jpg' style={{
            position:'absolute',
            opacity: '0.1',
            width: '100%',
            height: '55vh'
        }} />
        <div style={{
            textAlign: 'center'
        }}>
            <h1 style={{
                color: 'purple'
            }}>Our Commitment to you</h1>
    
            <h1>Educating you about your basic rights and contracts </h1>
            <h2>Addressing equality, racism and discrimination.</h2>
            <h3>Healthy, safety and wellbeing</h3>
            </div>
            <button class="button-21" role="button" style={{
                marginLeft: '25%',
                marginTop: '0%',
                height: '10%'
            }}>
            <ul style={{
               listStyleType: 'none'
           }}>
            
                <li>
                    <a style={{
                        textDecoration: 'none',
                        color: 'black',
                        
                    }} href='./structure'>Learn more</a>
                </li>
            </ul>
            </button>
    
            </div>
    )
}
export default Csamandate;