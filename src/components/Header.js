import { useState } from "react"
import { APP_LOGO } from "../utils/constants"

export const Header = () => {
    const [loginText, setLoginText] = useState('LogIn')
    return <div className="header">
        <div className="logo">
            <img src={APP_LOGO}></img>
        </div>
        <div className="navContent">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button className="loginBtn" onClick={() => loginText == 'LogIn'?  setLoginText('LogOut'): setLoginText('LogIn')}>{loginText}</button>
            </ul>
        </div>
    </div>
}