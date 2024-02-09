import '../utils/css/ficheProduit.css'

import gelule from '../images/general/gelule.svg'
import calendrier from '../images/general/calendrier.png'
import partage from '../images/general/partage.png'

import pharmacie from '../images/general/pharmacie.svg'
import france from '../images/general/france.svg'
import geluleplante from '../images/general/geluleplante.svg'
import liposome from '../images/general/liposome.svg'
import liposome3d from '../images/general/liposome3d.png'
import ListeIngredients from '../composants/ListeIngredients'
import MenuInfos from '../composants/MenuInfos'

export default function FicheProduit({ data }) {
    return (
        <div>
            <div className='div-fp-container1'>
                <img className='img-fp-boite' src={data.image} alt={"image du produit " + data.nom} />
                <div>
                    <h2 className='h2-fp-nom'>{data.nom}</h2>
                    <p className='p-fp-motcle'>{data.motCle}</p>
                    <div className='div-fp-twothings'>
                        <div className='div-fp-geluleCalendrier'>
                            <img className='img-fp-gelule' src={gelule} alt="Icone d'une géllule" />
                            <p className='p-fp-infos1 bold'>{data.nbGelule[0]}</p>
                            <p className='p-fp-infos1'>{data.nbGelule[1]}</p>
                            <img className='img-fp-calendrier' src={calendrier} alt="Icone d'un calendrier" />
                            <p className='p-fp-infos1 bold'>{data.nbJour[0]}</p>
                            <p className='p-fp-infos1'>{data.nbJour[1]}</p>
                            <p className='p-fp-infos1 bold'>{data.nbJour[2]}</p>
                            <p className='p-fp-infos1'>{data.nbJour[3]}</p>
                        </div>
                        <img className='img-fp-partage' src={partage} alt='Icone de partage' />
                    </div>
                    <p className='p-fp-description'>{data.description}</p>
                    <div className='div-fp-allbienfait'>
                        {data.listeBienfait.map((bienfait, index) => (
                            <div className='div-fp-bienfait'>
                                <p className='p-fp-checkmark'>✓</p>
                                <p className='p-fp-bienfait'>{bienfait}</p>
                                <sup className='sup-fp-exposantbienfait' onClick={() => window.location.href = '#actifs'}>{data.listeBienfaitNum[index]}</sup>
                            </div>
                        ))}
                        <p className='p-fp-ensavoirplus'><a className='a-fp-ensavoirplus' href='#actifs'>...En savoir plus</a></p>
                    </div>
                </div>
            </div>
            <div className='div-fp-container2'>
                <div className='div-fp-probienfait'>
                    <div className='div-fp-div3icon'>
                        <img className='img-fp-icones' src={pharmacie} alt="Icone d'une croix de pharmacie" />
                        <h2 className='h2-fp-probienfait'>PROPRIETÉS ET BIENFAITS</h2>
                    </div>
                    <div className='div-fp-div3icon'>
                        <div className='div-fp-iconep'>
                            <img className='img-fp-icones' src={france} alt='Icone de la France (bleu/blanc/rouge)' />
                            <p className='p-fp-textIcone'>MADE IN FRANCE</p>
                        </div>
                        <div className='div-fp-iconep'>
                            <img className='img-fp-icones' src={geluleplante} alt="Icone d'une gelule et d'une plante" />
                            <p className='p-fp-textIcone'>COMPLÉMENTS ALIMENTAIRE</p>
                        </div>
                        <div className='div-fp-iconep'>
                            <img className='img-fp-icones' src={liposome} alt="Icone d'un liposome" />
                            <div className='div-fp-3p'>
                                <div className='div-fp-2p'>
                                    <p className='p-fp-textIcone blue'>100 % </p>
                                    <p className='p-fp-textIcone'>ACTIFS </p>
                                </div>
                                <p className='p-fp-textIcone'>LIPOSOMÉ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div-fp-explicationLiposome'>
                    <div className='div-fp-listeLiposome'>
                        <div>
                            <h3 className='h3-fp-listeLiposome'>FORMULE LIPOSOMÉ UNIQUE PREMIUM</h3>
                            <p className='p-fp-listeLiposome'>✓ Haute concentration & assimilation</p>
                            <p className='p-fp-listeLiposome'>✓ Efficacité rapide</p>
                        </div>
                        <div>
                            <h3 className='h3-fp-listeLiposome'>100% PURE & CLEAN</h3>
                            <p className='p-fp-listeLiposome'>✓ SANS : allergènes • gluten • OGM • excipients • nanoparticules</p>
                            <p className='p-fp-listeLiposome'>✓ Non testé sur les animaux • Non irradié</p>
                        </div>
                    </div>
                    <div className='div-fp-technologieLiposome'>
                        <h3 className='h3-fp-technologieLiposome'>TECHNOLOGIE LIPOSOMALE®</h3>
                        <p className='p-fp-technologieLiposome'>Molecules développe ses formules grâce à la nouvelle technologie exclusive de liposomes pour encapsuler 100% de ses actifs. Ce procédé innovant garantit une assimilation optimale des nutriments par l’organisme et la stabilité des actifs pour une action rapide.</p>
                        <div className='div-fp-moreLiposome'>
                            <h3 id='actifs' className='h3-fp-moreLiposome' ><a className='a-fp-moreLiposome'  href='#composition'>DÉCOUVREZ LA COMPOSITION COMPLÈTE</a></h3>
                            <div className='line-fp-moreLiposome'></div>
                        </div>
                    </div>
                </div>
                <div  className='div-fp-listeactif'>
                    <ListeIngredients  ingredients={data.listeActif} num={data.listeActifNum} description={data.listeActifDescription} />
                    <img className='img-fp-liposome3d' src={liposome3d} alt="un liposome" />
                </div>
                <div className='div-fp-schema'>
                    <h2 className='h2-fp-schema'>SON ACTION</h2>
                    <img id='composition' className='img-fp-schema' alt='schema' src={data.schema}/>
                </div>
                <MenuInfos data={data}/>
            </div>
        </div>
    )
}