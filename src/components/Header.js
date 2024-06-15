import { APP_LOGO } from "../utils/constants"

export const Header = () => {
    return <div className="header">
        <div className="logo">
            <img src={APP_LOGO}></img>
        </div>
        <div className="navContent">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
}