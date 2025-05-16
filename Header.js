import { Link } from "react-router-dom"
const Header = () => {
    return (<section className='header'>
        <div className="logo-container">
            <img className="logo" src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"/>
        </div>
        <nav className='nav-container'>
            <ul>
                <li><Link to='Home'>Home</Link></li>
                <li><Link to='About'>About</Link> </li>
                <li><Link to='Contact'>Contact</Link></li>
                <li>Chart</li>
            </ul>
        </nav>

    </section>)
}
export default Header