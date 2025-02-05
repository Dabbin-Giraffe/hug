import React from 'react';
import "./Landing.css";
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="landing-wrapper">
                <div className="landing-container">
                    <p>Honey its snowing really badly and i am stuck in the snow</p>
                    <p>I am shivering love, its very cold</p>
                    <p>Please find me asap and give me a hug to warm me up</p>
                    <ul>
                        <p>To find me </p>
                        <li>You need to move your cursor around</li>
                        <li>If the screen gets bluer, you are getting farther. But if the color transitions to more reddish color you are getting close</li>
                        <li>If you cursor changes shape into a pointer, it means you have found me. Please click on it to rescue me</li>
                    </ul>
                    <button onClick={()=>navigate("/search")}>HONEYYY!! I AM COMINGGG</button>
                </div>
            </div>
        </>
    )
}

export default Landing
