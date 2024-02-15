import molecule from '../images/general/Logo.png'
import '../utils/css/footer.css'
import { useNavigate } from 'react-router-dom';
export default function Footer() {
    const navigate = useNavigate();

    const handleNavigate = (where) => {
        navigate(where)
    }


    return (
        <div className='div-footer-container'>
            <div className='div-footer-menuLogo'>
                <div className='div-footer-menu'>
                    <p className='p-footer-navigation'>Navigation</p>
                    <p className='p-footer-menu' onClick={()=>handleNavigate('/')}>HOME</p>
                    {/* <p className='p-footer-menu' onClick={()=>handleNavigate('/')}>TECHNOLOGIE LIPOSOME®</p> */}
                    <p className='p-footer-menu' onClick={()=>handleNavigate('/produits')}>NOS PRODUITS</p>
                </div>
                <div className='div-footer-logo'>
                    <img className='img-footer-logo' src={molecule} alt='logo de la marque Molécules' />
                    <p className='p-footer-logo'>Technologie liposome</p>
                </div>
            </div>
            <p className='p-footer-legal'>Ce site Web contient des informations sur les produits qui s’adressent à un large éventail de publics et pourrait contenir des détails sur les produits ou des informations sur d’autres manières.
                Non accessible ou valide dans votre pays. Veuillez noter que nous n’assumons aucune responsabilité quant à l’accès à ces informations qui pourraient ne pas être conformes à la
                toute procédure légale, réglementation, enregistrement ou utilisation dans votre pays d’origine.</p>
        </div>
    )
}