import '../utils/css/header.css'
import phone from '../images/header/phone.png'
import molecule from '../images/general/Logo.png'
import { useNavigate } from 'react-router-dom';
export default function Header(){
    const navigate = useNavigate();
    const handleNavigate = (where) => {
        navigate(where)
    }

    return (
        <div className='header-div-container'>
            <div className='header-div-phone'>
                <img className='header-img-phone' src={phone} alt='icone de téléphone'/>
                <p className='header-p-phone'>+33 (0)XX XX XX XX</p>
            </div>
            <div className='header-div-menu'>
                <p className='header-p-menu' onClick={()=>handleNavigate('/')}>HOME</p>
                <img className='header-img-menu' src={molecule} alt='logo de la marque molécules'/>
                <p className='header-p-menu' onClick={()=>handleNavigate('/produits')}>NOS PRODUITS</p>
            </div>
        </div>
    )
}