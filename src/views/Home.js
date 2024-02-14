import { useEffect } from 'react';
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
import { Link } from 'react-router-dom';

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const jsonProduct = [
        { name: "ARTICULATION", description: "Santé des articulations et mobilité", url: imgArticulation },
        { name: "SOMMEIL", description: "Relaxation", url: imgSommeil },
        { name: "VOIES RESPIRATOIRES", description: "Respiration & système immunitaire", url: imgRespiratoires },
        { name: "ANTI-STRESS", description: "Résistance physique & mentale", url: imgStress }
    ];

    return (
        <div className='container-home'>
            <div className='container-intro-home'>
                <img src={imgIntro} className='img-intro-home' />
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
                        <p className='text-expert-content'>Nos nutraceutiques liposomaux haut de gamme sont garantis par les qualifications académiques de notre équipe et son engagement envers l'excellence scientifique. Notre technologie liposome offre de nombreux avantages pour les compléments alimentaires producteurs, le secteur alimentaire et les consommateurs. Les vitamines liposomales et autres nutraceutiques que nous proposons sont disponibles sous forme de matières premières, gélules, sérum, et autres nombreuses autres solutions sur mesure.</p>
                        <Link to='/produits' className='button-expert-content'>
                            Découvrir nos produits
                        </Link>
                    </div>
                    <img className='img-expert' src={imgExpert} />
                </div>
                <div className='container-liposome-advantage'>
                    <img className='img-liposome-advantag' src={imgAvantages} />
                    <div className='container-content-liposome-advantag'>
                        <h2 className='title-liposome-advantag'>les avantages du liposome</h2>
                        <p className='text-liposome-advantage'>Les suppléments liposomaux et les ingrédients alimentaires peuvent avoir un plus grand impact que les suppléments non liposomaux. Les liposomes peuvent être considérés comme des véhicules porteurs qui contiennent et protègent les substances actives. Lorsqu'il est administré oralement, les liposomes peuvent délivrer sélectivement les principes actifs au site intestinal d'absorption conduisant à une meilleure biodisponibilité. L'administration orale liposomale peut aussi indirectement améliorer la distribution corporelle après absorption intestinale. Cela soulève la probabilité qu'une substance active administrée par voie orale puisse mieux atteindre partie du corps où il doit agir.</p>
                        <img className='img-schema-avantage' src={imgAvantages2} />
                    </div>
                </div>
                <div className='container-shema-Vtab'>
                    <img className='img-schema-avantage-mobile' src={imgAvantages2} />
                </div>
                {/* VIDEO */}
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
                    <img className='img-liposome-content' src={imgPhopholipide} />
                </div>
                <div className='container-phospholipide'>
                    <img className='img-phospholipide' src={imgPhopholipide2} />
                    <div className='container-text-phospholipide'>
                        <h2 className='title-phospholipide'>Qu’est-ce que les phospholipides ?</h2>
                        <p className='text-phospholipide'>Le liposome, créé à partir de phospholipides, est une minuscule particule composée de
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
                </div>
                <div className='container-engagment'>
                    <p className='text-engagment'>Notre équipe s'engage pour l'excellence scientifique</p>
                </div>
                <ListProduct json={jsonProduct}/>
                <div className='button-view-product '>
                    <Link to='/produits' className='button-expert-content-bis'>
                        Voir nos produits
                    </Link>
                </div>
            </div>
        </div>
    )
}