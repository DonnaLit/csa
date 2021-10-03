import React from 'react';
import { Form, Input, TextArea, Button, FormTextArea } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
  
  const SERVICE_ID = "service_57s4zjo";
  const TEMPLATE_ID = "template_gk430wf";
  const USER_ID = "user_Mnyw2OUs4agzl7qu6H4fa";

  const contacts = () => {
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
        
    <div className="call1"> 
    
      <Form onSubmit={handleOnSubmit} style={{

boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
borderRadius: '1px',
padding: '10px',
opacity: '0.5',
height: '9cm',
width: '32%',
marginLeft: '65%',
marginTop: '0%'


      }}>
      <h1>Contact us</h1>
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
          id='form-input-control-email'
          control={ FormTextArea }
          label=''
          name='message'
          placeholder='message'
          required
          icon='pen'
          iconPosition='top'
        />
        
        
        <Button type='submit' color='black'>Submit</Button>
      </Form>

      </div>
      </div>
  )}
      
      
export default contacts;