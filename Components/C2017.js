import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";


export default function C2017(){
    return (
        <>
            <div class="footer">
                <div>
                    <a href="#"><img src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png" alt="logo"/></a>
                </div>
                <div class="logo-task">
                    <ul>
                        <AiOutlineFacebook />
                        <SlSocialTwitter />
            
                        <AiOutlineInstagram />
                        <AiOutlineLinkedin />
                        <BsDribbble />
                        <AiOutlineYoutube />
                    </ul>
                    </div>
               
            <div class="footer-end">
                © 2017. Crucio. All Rights Reserved.
                
            </div>
           </div>
        </>
        );   
}