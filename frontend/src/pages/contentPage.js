import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import './contentPage.css';

export default function Next() {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.state.name;
    const [content, setCon] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:3000/', { name });
                setCon(response.data.content);
            } catch (error) {
                console.error("There was an error fetching data!", error);
            }
        };

        fetchData();
    }, [name]);

    const saveContent = async () => {
        try {
            await axios.post('http://localhost:3000/savee', {
                name,
                content
            });
            alert("Data saved successfully");
            navigate('/home');
        } catch (error) {
            console.error("There was an error saving the data!", error);
        }
    };

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div className='ground'>
            <button onClick={goToHome} className="home-btn">{'<- Home'}</button>
            <center>
            <div className='container'>
                <h1>After saving, use the same code to open your notes again.</h1>
                <center>
                    <textarea
                        rows={5}
                        placeholder="Type something here..."
                        value={content}
                        onChange={(e) => setCon(e.target.value)}
                    ></textarea>
                    <button onClick={saveContent}>Save</button>
                    
                </center>
            </div>
            </center>
        </div>
    );
}
