import { useEffect, useState } from 'react';
import ListProduct from '../composants/ListProduct';
import '../utils/css/home.css';
import imgArticulation from '../images/home/molecules-articulation.png';
import imgSommeil from '../images/home/molecules-sommeil.png';
import imgRespiratoires from '../images/home/molecules-voies-respiratoires.png';
import imgStress from '../images/home/molecules-anti-stress.png';
import imgIntro from '../images/home/intro-img.png';
import imgExpert from '../images/home/expert-img.png';
import imgAvantages from '../images/home/avantage-img.png';
import imgAvantages2 from '../images/home/avantage-img2.png';
import imgPhopholipide from '../images/home/phospholipide-img.png';
import imgPhopholipide2 from '../images/home/phospholipide-img2.png';
import imgPhopholipide3 from '../images/home/eff-max.png'
import videoMolecule from '../videos/vod.mp4'
import NotificationBar from '../composants/NotificationBar'
import ChatBot from '../composants/ChatBot'
import { Link } from 'react-router-dom';

export default function Home() {
    const [showChat, setShowChat] = useState(false);
    const [hasNotification, setHasNotification] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [notificationBarStyle, setNotificationBarStyle] = useState({});

  useEffect(() => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight,})
    if (windowSize.height < 700) {
      setNotificationBarStyle({
        bottom: showChat ? '560px' : '20px',
        cursor: showChat ? 'default' : 'pointer',
      });
    } else {
      setNotificationBarStyle({
        bottom: showChat ? '722px' : '20px',
        cursor: showChat ? 'default' : 'pointer',
      });
    }
  }, [windowSize.height, showChat]);


    const handleNotificationClick = () => {
        setShowChat(true);
    };

    const handleCloseChat = () => {
        setShowChat(false);
        setHasNotification(false)
    };

    const handleNewMessage = () => {
        setHasNotification(true);
    };

    const jsonProduct = [
        { name: "ARTICULATION", description: "Santé des articulations et mobilité", url: imgArticulation },
        { name: "SOMMEIL", description: "Relaxation", url: imgSommeil },
        { name: "VOIES RESPIRATOIRES", description: "Respiration & système immunitaire", url: imgRespiratoires },
        { name: "ANTI-STRESS", description: "Résistance physique & mentale", url: imgStress }
    ];

    return (
        <div className='container-home'>
            <div className='container-intro-home'>
                <img src={imgIntro} alt='femme' className='img-intro-home' />
                <div className='container-intro-title-text'>
                    <h1 className='title-intro-home'>la technologie <br />liposomale</h1>
                    <p className='text-intro-home'>La révolution dans <br />le domaine de la nutraceutique</p>
                    <div className='rectangle'></div>
                </div>
            </div>
            <div className='container-text-intro-background'>
                <p className='text-intro-background'>Molecules est une marque exclusive créée par un pharmacien d’officine et un laboratoire R&D.</p>
                <p className='title-intro-background'>« Proposer des produits innovants avec une biodisponibilité maximisée pour une efficacité ciblée et profonde assurée »</p>
            </div>
            <div className='container-content-global-home'>
                <div className='container-expert-content'>
                    <div className='container-text-expert-content'>
                        <h2 className='title-expert-content'>L'expert du liposome</h2>
                        <p className='text-expert-content'>Notre technologie liposomale dernière génération représente une avancée majeure dans le domaine de la nutraceutique faisant l’objet de nombreuses études scientifiques. Cette
                            technique innovante permet une action plus efficace, ciblée et profonde des principes actifs
                            dans l’organisme, en les encapsulant dans des liposomes.

                            Molecules développe ses formules grâce à cette nouvelle technologie exclusive pour
                            encapsuler 100% de ses actifs. Ce procédé garantit une assimilation optimale des nutriments
                            par l’organisme et la stabilité des actifs pour une action rapide.
                            Nos formules sont idéales dans un programme en phase d’attaque afin d’agir rapidement et
                            en profondeur dans les cellules.</p>
                        <Link to='/produits' className='button-expert-content'>
                            Découvrir nos produits
                        </Link>
                    </div>
                    <img className='img-expert' alt='expert' src={imgExpert} />
                </div>
                <div className='container-liposome-advantage'>
                    <img className='img-liposome-advantag' alt='avantages' src={imgAvantages} />
                    <div className='container-content-liposome-advantag'>
                        <h2 className='title-liposome-advantag'>les avantages du liposome</h2>
                        <p className='text-liposome-advantage'>L’un des principaux avantages des liposomes est leur capacité à améliorer la biodisponibilité
                            des principes actifs.
                            L’actif est encapsulé dans un liposome d’origine végétale, ce qui améliore considérablement
                            son absorption au niveau cellulaire, leur transport ciblé dans l’organisme et renforce donc
                            ses effets bénéfiques. Cette méthode de micro-encapsulation le protège également contre la
                            dégradation précoce par les sucs gastriques, augmentant ainsi sa biodisponibilité et sa
                            concentration dans le plasma sanguin.</p>
                        <img className='img-schema-avantage' alt='avantages2' src={imgAvantages2} />
                    </div>
                </div>
                <div className='container-shema-Vtab'>
                    <img className='img-schema-avantage-mobile' alt='avantages2' src={imgAvantages2} />
                </div>
                <div className='container-video'>
                    <video autoPlay loop muted playsInline>
                        <source src={videoMolecule} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
                <div className='container-process'>
                    <div className='container-liposome-content'>
                        <h2 className='title-liposome-content'>Qu’est-ce qu’un liposome ?</h2>
                        <p className='text-liposome-content'>Le liposome, créé à partir de phospholipides, est une minuscule particule composée de
                            bicouches lipidiques, une partie polaire hydrophile et d’une partie hydrophobe, permettant
                            d’encapsuler efficacement l’actif et ressemblant à la membrane cellulaire.
                            <br /><br />
                            Il est capable d’encapsuler des substances hydrophiles dans son centre aqueux et des
                            substances hydrophobes dans sa bicouche lipidique, les protégeant ainsi de la dégradation
                            digestive permettant aux nutriments d’atteindre directement les cellules, maximisant leur
                            efficacité et leur absorption.
                            <br /><br />
                            Les liposomes sont utilisés pour transporter des ingrédients actifs directement dans les
                            couches profondes de la peau. Ils améliorent l’absorption des nutriments essentiels tels que
                            les vitamines, les minéraux et les acides gras oméga.
                            <br /><br />
                            Les recherches sur les liposomes se poursuivent pour développer des systèmes
                            d’assimilation encore plus efficaces et ciblés.</p>
                    </div>
                    <img className='img-liposome-content' alt='liposome content' src={imgPhopholipide} />
                </div>
                <div className='container-phospholipide'>
                    <img className='img-phospholipide' alt='phospholipide' src={imgPhopholipide2} />
                    {/* <img className='img-eff-max' src={imgPhopholipide3}/> */}
                    <div className='container-text-phospholipide'>
                        <h2 className='title-phospholipide'>Qu’est-ce que les phospholipides ?</h2>
                        <p className='text-phospholipide'>Les phospholipides, un groupe de lipides essentiels, jouent un rôle crucial dans le maintien
                            de la santé cellulaire et la fonctionnalité des membranes biologiques.
                            <br /><br />
                            Ce sont les principaux constituants des membranes cellulaires, offrant flexibilité et intégrité
                            à la cellule. Ils participent à la régulation du passage des substances entre l’intérieur et l’extérieur de la cellule.
                            <br /><br />
                            Les phospholipides tels que la lécithine jouent un rôle important dans la biodisponibilité et
                            l’absorption des nutriments.</p>
                    </div>
                </div>
                <div className='container-engagment'>
                    <p className='text-engagment'>Notre équipe s'engage pour l'excellence scientifique</p>
                </div>
                <ListProduct json={jsonProduct} />
                <div className='button-view-product '>
                    <Link to='/produits' className='button-expert-content-bis'>
                        Voir nos produits
                    </Link>
                </div>
            </div>
            <div className="app">
                <div>
                    <NotificationBar hisOpen={showChat} hasNotification={hasNotification} onClose={handleCloseChat} onClick={handleNotificationClick} style={notificationBarStyle} />
                    {showChat && <ChatBot hisOpen={showChat} onNewMessage={handleNewMessage} />}
                </div>
            </div>
        </div>
    )
}