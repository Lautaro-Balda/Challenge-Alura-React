import './Header.css'
import Button from '../Button'
import logo from "../../assets/images/logo.png"

const Header = () =>{

    return (
        <header className='header'>
            <img src={logo} alt="LOGO" />
            <Button texto="Nuevo video"/>
        </header>
    )
}


export default Header