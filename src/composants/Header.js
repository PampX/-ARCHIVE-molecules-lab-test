import '../utils/css/header.css'
import phone from '../images/header/phone.png'
import logo from '../images/header/logo.png'
import { Link } from 'react-router-dom';

export default function Header(){

    return (
        <div className='header-div-container'>
            <div className='header-div-phone'>
                <img className='header-img-phone' src={phone} alt='icone de téléphone'/>
                <p className='header-p-phone'>+33 (0)4 99 78 08 11</p>
            </div>
            <div className='header-div-menu'>
                <Link to='/' className='header-p-menu'>HOME</Link>
                <Link to='/'>
                    <img className='header-img-menu' alt='logo' src={logo}/>
                </Link>
                <Link to='/produits' className='header-p-menu quandMeme'>NOS PRODUITS</Link>
            </div>
        </div>
    );
}