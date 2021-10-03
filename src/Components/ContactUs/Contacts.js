import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import './ApplicationForm.css';
import Swal from 'sweetalert2';
import logo1 from '../../Gif/Engineer.gif';
import logo2 from '../../Gif/Girl.gif';
import logo3 from'../../Gif/PeopleinCircle.gif';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import ToolBar from '../ToolBars/ToolBar';
import ToolBar2 from '../ToolBars/ToolBar2'
import BottomToolBar from '../ToolBars/BottomToolbar';
  
  const SERVICE_ID = "service_57s4zjo";
  const TEMPLATE_ID = "template_gk430wf";
  const USER_ID = "user_Mnyw2OUs4agzl7qu6H4fa";

  const Applicationform = () => {
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };
  return (
    <div>
<ToolBar />
<ToolBar2 />
    <div className='form1' style={{
      marginTop:'50%'

    }} />
    <div>
   
  
        
    <div className="call"> 
   
    
    <Form onSubmit={handleOnSubmit}>
      <h1>Contact us </h1>
      <div className='address' style={{
      boxShadow: '1px 1px 1px 1px',
      width: '350px',
      backgroundColor: '#b5a3a3',
      height: '80vh',
      marginTop: '-8%',
      position: 'absolute',
      textAlign: 'center'
    
      
    }}>
      <img src='https://res.cloudinary.com/zzulugirl/image/upload/v1632655625/IMG-20210819-WA0012_adobespark_zhdez3.png'style={{
height: '30vh',
width: '60%',
marginTop: '-5%'
      }} />
      <p>CSA Head Office</p>
      <p>Address: no. 102 commisioner street</p>
      <p>+27 11 333 0000</p>
      <p>Email us: csa@csa.com</p>
    </div>
      <Form.Field
      id='form-input-control-CompanyName'
      control={Input}
      label=''
      name='Company_name'
      placeholder= '     '
      required
      icon='house'
      iconPosition='left'
    />
    <Form.Field 
    id='form-input-control-number'
    control={Input}
    label=''
    name='user_number'
    placeholder='Number..'
    required
    icon='phone'
    iconPosition='left'
  />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label=''
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label=''
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <p>Send us a message</p>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
        label=''
          required
          icon='user circle'
          name='user_message'
           required
           placeholder='Message…'
        />
        <Button type='submit' color='black'>Submit</Button>
      </Form>
    </div>
    </div>

    
    <h1 style={{
      marginLeft: '45%',
      marginTop: '60%'

    }}> FAQs </h1>
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
  <div className="containerAbout"> 

  <div className="gifs">
 
  

  </div>
  <div className="about4">
  
  <div style ={{
      marginLeft:'15%',
      marginTop: '2%',
      fontFamily: 'Shadows Into Light, cursive'
    
  
  }}> 

  <h2>Who can join a union?</h2>
  <p>Anybody has the right to join a union </p>
  <p>regardless of whether their employer</p>
  <p> formally recognises trade unions </p>
  <p>or a union organises </p>
  <p>within their workplace. </p>

  </div>
  <div style ={{
      marginLeft:'20%',
      marginTop: '2%',
      fontFamily: 'Shadows Into Light, cursive'
    

  }}>
  <h1>Why should you join a union?</h1>
  <p>Anyone that goes to work and who cares about their pay </p>
  <p>and conditions – holiday entitlement, pension </p>
  <p>and so on – equal rights, safety and </p>
  <p>training needs a trade union.</p> 
<div>
<button>Learn More </button>
</div>
  </div>
  <div style ={{
    width: '600px',
      marginLeft:'-70%',
      marginTop: '25%',
      fontFamily: 'Shadows Into Light, cursive'
    
  }}>
  <h1>Our Company is small</h1>
  <p>We represent members from big and small companies. Even if you are the only employee.</p>
  <p>At commission staff SA. We are a big family that stands together as one to represent everyone that is covered by us.</p>
  <p>CSA means representation and voice on the job every day. You are never alone </p>
  </div>
  </div>
  </div>
  </Fade>
  <div>
    <BottomToolBar />
  </div>
    </div>
  );
}
export default Applicationform;