import React from 'react'
import "./Popup.css";
import { useNavigate } from 'react-router-dom';
import mocha from "../../assets/mocha.gif";

const Popup = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="pop-overlay"></div>
            <div className="pop-container">
                <p>Thank you so much honey you saved my life. Your cozy warm hug is increasing my body temp and making my heart beat so fast gosh you are so pretty up close</p>
                <img src={mocha} alt="" />
                <button onClick={() => navigate("/final")}>Goshh honeyyy stawppp naa</button>
            </div>
        </>
    )
}

export default Popup
