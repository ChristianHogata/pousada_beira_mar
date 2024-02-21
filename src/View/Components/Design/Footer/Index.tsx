import React from 'react';
import './Footer.css';

const Footer: React.FC<{}> = (props)=>{
    return (
        <div>
            <footer className="text-center text-lg-start fixed-bottom">
           
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)", color:"rgb(255, 255, 255)"}}>
                © 2024 Copyright: MokuTech
            </div>
           
            </footer>
        </div>
    );
}

export default Footer;