import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css';
export default function Home(props) {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const handleNext = () => {
            navigate('/next', { replace: true, state: { name, tam: 'mg' } });
            
        
    };
    return(
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ color: 'red', margin: 0 }}>C</h1>
                <h2 style={{ margin: 0 }}>odesync</h2>
            </div>
        </div>
        <div className="background">
            
            <center>
                <h1 style={{paddingTop:"70px"}}>The fastest way to save notes anywhere</h1>
            <div className="home">
            <h3 style={{paddingTop:"20px"}}>Enter a new or used code now to open, encrypt and save notes with.</h3>
            <input className="input" type='text' placeholder="enter code..." autoComplete='off' onChange={(e)=>setName(e.target.value)}></input>
            <div>
            <button className="btn" onClick={handleNext}>Next</button>
            </div></div>
            </center>
            </div>
        </div>
    );

 }