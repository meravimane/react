import { useState } from "react"
import { APP_LOGO } from "../utils/constants"
import { Link } from "react-router-dom"

export const Header = () => {
    const [loginText, setLoginText] = useState('LogIn')
    return <div className="header">
        <div className="logo">
            <img src={APP_LOGO}></img>
        </div>
        <div className="navContent">
            <ul>
                <li> <Link to="/">Home </Link> </li>
                <li> <Link to="/about">About </Link> </li>
                <li> <Link to="/contact">Contact </Link> </li>
                <li> <Link to="/cards">Cards </Link> </li>
                <button className="loginBtn" onClick={() => loginText == 'LogIn'?  setLoginText('LogOut'): setLoginText('LogIn')}>{loginText}</button>
            </ul>
        </div>
    </div>
}