import React, { useEffect, useState } from "react";
import "./Search.css";
import cough from "../../assets/cough.png";
import Popup from "../Popup/Popup";

const getRandomPosition = () => ({
    top: `${Math.random() * 70}vh`,
    left: `${Math.random() * 70}vw`
});

const Search = () => {
    const [click, setClick] = useState(false);
    const [bgColor, setBgColor] = useState("rgb(0, 0, 50)"); // Default cold color
    const [position, setPosition] = useState({ top: "50vh", left: "50vw" });
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        setPosition(getRandomPosition());
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const image = document.querySelector(".search-image");
            if (!image) return;

            const rect = image.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
                Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2)
            );

            // Define warmer/colder color ranges
            let newColor;
            if (distance < 200) {
                newColor = "rgb(180, 0, 0)"; // HOT (red)
            } else if (distance < 600) {
                newColor = "rgb(255, 70, 70)"; // Warm (orange)
            } else if (distance < 900) {
                newColor = "rgb(255, 165, 0)"; // Neutral (yellow)
            } else if (distance < 1000) {
                newColor = "rgb(255, 255, 100)";
            } else if (distance < 1300) {
                newColor = "rgb(0, 180, 180)";
            } else if (distance < 1600) {
                newColor = "rgb(0, 120, 200)";
            }
            else {
                newColor = "rgb(0, 0, 50)"; // Cold (deep blue)
            }

            setBgColor(newColor);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const imgClicked = () => {
        setClick(true);
        setTimeout(() => {

            setPopup(true);
        }, 3700)
    }

    return (
        <>
            <div className="search-wrapper" style={{ backgroundColor: bgColor, transition: "background 0.3s ease-in-out" }}>
                <img
                    onClick={imgClicked}
                    className={`search-image ${click ? "clicked" : ""}`}
                    style={{ position: "absolute", ...position }}
                    src={cough}
                    alt=""
                />
            </div>
            {popup && <Popup />}
        </>
    );
};

export default Search;
