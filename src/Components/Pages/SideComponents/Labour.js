import React from 'react';
import Contacts from '../../ContactUs/Contacts';


function Labour () {
    return (
        <div className="" style={{
            boxShadow: 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px',
    position: 'absolute',
            width: '450px',
            height: '55.7%',
            marginLeft: '1%',
            textAlign:'center'
            
        }}> 
            <h1 style={{
                color: 'purple'
            }}>Know your rights at work, which are guaranteed by law. </h1>
            <h2>When working people understand their rights and stand together to ensure they’re respected,</h2> 
            <h2>everyone is better off. What do you do when your rights are violated?</h2>
        
            <button class="button-21" role="button" style={{
                marginLeft: '0%',
                marginTop: '-2%',
                height: '10%'
            }}>
            <ul style={{
                listStyleType: 'none'
            }}>
                <li>
                    <a style={{
                        textDecoration: 'none',
                        color: 'black'
                    }} href='/contacts' exact component={Contacts}>Talk 2 us</a>
                </li>
            </ul>
            </button>
        </div>
    )
}
export default Labour;