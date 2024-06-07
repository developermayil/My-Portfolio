import React from "react";
import Me from "../images/2.jpeg"
import { Stack } from "@mui/material";



export default function About(){
    return(
   
            <Stack  
            direction="row"  justifyContent="space-around"
            alignItems="center"
            spacing={2}
            padding={10}
            style={{backgroundColor: 'black',color: 'white',marginTop: '-8px'}}
            >
                <div>
                    <h2 style={{fontSize:'33px',borderBottom: '1px solid blue',width:'165px'}}>About Me</h2>
                    <p style={{fontSize:'15px'}}>Hello! I'm Mayil, a passionate MERN stack developer with a strong background in creating dynamic and responsive web applications. With several years of experience in full-stack development, I specialize in building robust and scalable applications using the MERN stack - MongoDB, Express.js, React, and Node.js</p>

                    <h3 style={{fontSize:'33px',borderBottom: '1px solid blue',width:'210px'}}>My Journey</h3>
                    <p style={{fontSize:'15px'}}>My journey into the world of web development began 3 months when I discovered my passion for coding. Since then, I have dedicated myself to mastering the art of full-stack development. I enjoy the challenges of transforming complex problems into simple, elegant solutions.</p>

                </div>
                <div>
                <img src={Me} alt="my"  style={{borderRadius: '100%'}} />
                </div>
      

            </Stack>


        
    )
}