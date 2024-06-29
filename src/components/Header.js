import { useState } from "react"
import { APP_LOGO } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"

export const Header = () => {
    const [loginText, setLoginText] = useState('LogIn')
    const isOnline = useOnline();

    console.log("isOnline", isOnline)

    return <div className="header flex justify-between m-2 p-2 border-2 shadow-sm">
        <div className="logo size-36">
            <img src={APP_LOGO}></img>
        </div>
        <div className="navContent flex items-center">
            <ul className="flex">
                <li className="ml-3 font-semibold"> <Link to="/">Home </Link> </li>
                <li className="ml-3 font-semibold"> <Link to="/about">About </Link> </li>
                <li className="ml-3 font-semibold"> <Link to="/contact">Contact </Link> </li>
                <li className="ml-3 font-semibold"> <Link to="/cards">Cards </Link> </li>
                <button className="loginBtn ml-2 font-semibold" onClick={() => loginText == 'LogIn'?  setLoginText('LogOut'): setLoginText('LogIn')}>{loginText}</button>
            </ul>
        </div>
    </div>
}