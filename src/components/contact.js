import { Stack, TextField } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Con from '../images/contact.webp'

import Swal from 'sweetalert2'



export default function Contact() {


    const contactForm = async (event) => {
      event.preventDefault();
      const InputName = document.getElementById('inputName').value;
      const InputNumber = document.getElementById('inputNumber').value;
      const InputText = document.getElementById('inputText').value;
    
      if (InputName === '') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Enter your name!",
        });
        return;
      }
      if (InputNumber === '') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Enter your number!",
        });
        return;
      }
      if (InputText === '') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Enter your message!",
        });
        return;
      }
    
      const contactData = {
        name: InputName,
        number: InputNumber,
        message: InputText,
      };
    
      console.log(contactData)
      try {
        const response = await fetch('http://localhost:3000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        });
    
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Thanks For Submitting!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Failed to submit",
          });
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to submit",
        });
      }
    };
    







  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{ backgroundColor: 'black', padding: "20px", paddingBottom: '40px' }}
    >
      <Stack spacing={4} sx={{ backgroundColor: 'white', padding: '40px', opacity: '0.8',width:'500px' }}  >
        <h2>Let`s Start Converstation</h2>
        <form onSubmit={contactForm} style={{display:'flex',flexDirection:'column',gap:'20px' }}>
          <TextField id="inputName" label="Enter Your Name" variant="filled" />
          <TextField id="inputNumber" label="Your Contact Number" variant="filled" />
          <Textarea aria-label="minimum height" id="inputText" minRows={3} style={{width:'100%',height:'30px'}} placeholder="Write Your Feedback" />
          <Button type="submit">Submit</Button>
        </form>

      </Stack>
      <Stack sx={{ backgroundColor: 'white', opacity: '0.8' }}>
        <img src={Con} alt="contact" style={{ marginTop: '0px' }} />
      </Stack>
    </Stack>
  )
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const Button = styled(BaseButton)(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${blue[500]};
    box-shadow: 0 2px 1px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${blue[700]};
      box-shadow: none;
      transform: scale(0.99);
    }
  
    &.${buttonClasses.focusVisible} {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }

  `,
);