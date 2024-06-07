import React from "react";
import '../App.css';
import { Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Footer(){
    return(
        <div className="footer" >
            <div className="address">
            <Typography textAlign={'center'} variant="P" component="h2">
                Developer Mayil
            </Typography>
            <Typography textAlign={'center'} variant="P" component="h2">
               1 ,62 P.K,Street 
               Alangulam
               Tirunelveli
            </Typography>
            <Typography textAlign={'center'} variant="P" component="h2">
               Alangulam, Tirunelveli
            </Typography>
            <Typography textAlign={'center'} variant="P" component="h2">
              Tamil Nadu - India
            </Typography>
            <div className="icons">
            <LinkedInIcon />
            <GitHubIcon/>
            <WhatsAppIcon/>
            </div>
            </div>

            

        </div>
    )
}