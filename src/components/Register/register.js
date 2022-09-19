import React from "react";
import upperCircle from "./images/Ellipse-31.png";
import lowerCircle from "./images/Ellipse-32.png";
import dots from "./images/Group-695.png";
import "./register.css"

const RegisterPage = () => {
    return (
        <>
            <div className="container">
                <img className="upperCornerCircle" src={upperCircle} alt="" />
                <div className="main">
                    <div className="leftContainer">
                        <img src={dots} alt="" />
                    </div>
                    <div className="middleContainer">
                        <h1 className="logo">Logo</h1>
                        <p className="para">Enter your credentials to access your account</p>
                        <form className="loginForm" action="">
                            <input type="text" name="" id="" className="user-id" placeholder="Mail ID" />
                            <br />
                            <input type="password" className="password" placeholder="Password" />
                            <br />
                            <input type="password" className="password" placeholder="Confirm Password" />
                            <br />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="rightContainer">
                        <img src={dots} alt="" />
                    </div>
                </div>
                <img className="lowerCornerCircle" src={lowerCircle} alt="" />
            </div>
        </>
    )
}

export default RegisterPage;