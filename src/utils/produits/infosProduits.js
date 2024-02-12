// anti-stress
import antiStress from '../../images/general/molecules-anti-stress.png'
import stressSchema from '../../images/schema/stress-schema.png'
import stressSchemaPhone from '../../images/schemaPhone/stress-schema-phone.png'

// articulation
import articulation from '../../images/general/molecules-articulation.png'
import articulationSchema from '../../images/schema/articulation-schema.png'
import articulationSchemaPhone from '../../images/schemaPhone/articulation-schema-phone.png'

// capillaire
import capillaire from '../../images/general/molecules-capillaire.png'
import capillaireSchema from '../../images/schema/capillaire-schema.png'
import capillaireSchemaPhone from '../../images/schemaPhone/capillaire-schema-phone.png'

// detox
import detox from '../../images/general/molecules-detox.png'
import detoxSchema from '../../images/schema/detox-schema.png'
import detoxSchemaPhone from '../../images/schemaPhone/detox-schema-phone.png'

// energie
import energie from '../../images/general/molecules-energie.png'
import energieSchema from '../../images/schema/energie-schema.png'
import energieSchemaPhone from '../../images/schemaPhone/energie-schema-phone.png'

// minceur
import minceur from '../../images/general/molecules-minceur.png'
import minceurSchema from '../../images/schema/minceur-schema.png'
import minceurSchemaPhone from '../../images/schemaPhone/minceur-schema-phone.png'

// jet-lag
import jetLag from '../../images/general/molecules-jet-lag.png'
import jetLagSchema from '../../images/schema/jetlag-schema.png'
import jetLagSchemaPhone from '../../images/schemaPhone/jetlag-schema-phone.png'

// multivitamines
import multivitamines from '../../images/general/molecules-multivit-mineraux.png'
import multivitaminesSchema from '../../images/schema/multivitamines-schema.png'
import multivitaminesSchemaPhone from '../../images/schemaPhone/multivitamines-schema-phone.png'

// immunite
import immunite from '../../images/general/molecules-immunite.png'
import immuniteSchema from '../../images/schema/immunite-schema.png'
import immuniteSchemaPhone from '../../images/schemaPhone/immunite-schema-phone.png'

// circulation
import circulation from '../../images/general/molecules-circulation.png'
import circulationSchema from '../../images/schema/circulation-schema.png'
import circulationSchemaPhone from '../../images/schemaPhone/circulation-schema-phone.png'


// voies-respiratoires
import voiesRespiratoires from '../../images/general/molecules-voies-respiratoires.png'
import voiesRespiratoiresSchema from '../../images/schema/voies-respiratoires-schema.png'
import voiesRespiratoiresSchemaPhone from '../../images/schemaPhone/voies-respiratoires-schema-phone.png'

// sommeil
import sommeil from '../../images/general/molecules-sommeil.png'
import sommeilSchema from '../../images/schema/sommeil-schema.png'
import sommeilSchemaPhone from '../../images/schemaPhone/sommeil-schema-phone.png'

const composition = {
    "anti-stress": [
        { nom: "Extrait d’Ashwagandha", quantite: "100 mg" },
        { nom: "dont withanolides", quantite: "5 mg" },
        { nom: "Extrait de Rhodiola rosea", quantite: "100 mg" },
        { nom: "Dont rhodiolosides", quantite: "3 mg" },
        { nom: "GABA (Acide Gamma-aminobutyrique)", quantite: "100 mg" },
        { nom: "Vitamine B1 (Thiamine)", quantite: "0,55 mg", AR: "50" },
        { nom: "Vitamine B2 (Riboflavine)", quantite: "0,7 mg", AR: "50" },
        { nom: "Vitamine B3 (Niacine)", quantite: "8 mg", AR: "50" },
        { nom: "Vitamine B5 (Pantothénate de calcium)", quantite: "3 mg", AR: "50" },
        { nom: "Vitamine B6 (Pyridoxine HCl)", quantite: "0,7 mg", AR: "50" },
        { nom: "Vitamine B8 (Biotine)", quantite: "25 μg", AR: "50" },
        { nom: "Vitamine B9 (Acide Folique)", quantite: "100 μg", AR: "50" },
        { nom: "Vitamine B12 (Méthylcobalamine)", quantite: "1,25 μg", AR: "50" }
    ],
    "circulation": [
        { nom: "Diosmine", quantite: "75 mg" },
        { nom: "Rutine", quantite: "75 mg" },
        { nom: "Quercétine", quantite: "75 mg" },
        { nom: "Resvératrol", quantite: "25 mg" },
        { nom: "Coenzyme Q10", quantite: "10 mg" },
        { nom: "Extrait de Pépins de raisins", quantite: "50 mg" },
        { nom: "dont OPC (Oligo-proanthocyanidines)", quantite: "47,5 mg" },
        { nom: "Extrait de Vigne rouge", quantite: "50 mg" },
        { nom: "dont polyphénols", quantite: "12,5 mg" }
    ],
    "immunite": [
        { nom: "Zinc (Picolinate)", quantite: "15 mg", AR: "150" },
        { nom: "Cuivre (Bisglycinate)", quantite: "0,5 mg", AR: "50" },
        { nom: "Sélénium (L-Sélénomethionine)", quantite: "50 μg", AR: "91" },
        { nom: "Vitamine C (Acide L-ascorbique)", quantite: "120 mg", AR: "150" },
        { nom: "Vitamine D3 (Cholécalciférol)", quantite: "25 μg", AR: "500" },
        { nom: "Glutathion", quantite: "75 mg" },
    ],
    "voies-respiratoires": [
        { nom: "Quercétine", quantite: "150 mg" },
        { nom: "Extrait sec de Curcuma", quantite: "50 mg" },
        { nom: "dont curcuminoïdes", quantite: "47,5 mg" },
        { nom: "Glutathion", quantite: "25 mg" },
        { nom: "Vitamine C (Acide L-ascorbique)", quantite: "40 mg", AR: "50" },
        { nom: "Vitamine D3 (Cholécalciférol)", quantite: "5 μg", AR: "100" },
        { nom: "Sélénium (L-Sélénomethionine)", quantite: "27,5 μg", AR: "50" },
        { nom: "Zinc (Picolinate)", quantite: "10 mg", AR: "100" }
    ],
    "capillaire": [
        { nom: "Kératine", quantite: "150 mg" },
        { nom: "Extrait de Prêle", quantite: "45 mg" },
        { nom: "dont silice", quantite: "3,5 mg" },
        { nom: "Zinc (Picolinate)", quantite: "10 mg", AR: "100" },
        { nom: "Cuivre (Bisglycinate)", quantite: "0,5 mg", AR: "50" },
        { nom: "Vitamine B3", quantite: "4 mg", AR: "25" },
        { nom: "Vitamine B6", quantite: "1,4 mg", AR: "100" },
        { nom: "Vitamine B8", quantite: "0,5 mg", AR: "1000" }
    ], 
    "multivitamines-mineraux": [
        { nom: "Vitamine B1", quantite: "1,1 mg", AR: "100" },
        { nom: "Vitamine B2", quantite: "1,4 mg", AR: "100" },
        { nom: "Vitamine B3", quantite: "16 mg", AR: "100" },
        { nom: "Vitamine B5", quantite: "6 mg", AR: "100" },
        { nom: "Vitamine B6", quantite: "1,4 μg", AR: "100" },
        { nom: "Vitamine B8", quantite: "50 μg", AR: "100" },
        { nom: "Vitamine B9", quantite: "200 μg", AR: "100" },
        { nom: "Vitamine B12", quantite: "2,5 μg", AR: "100" },
        { nom: "Vitamine C", quantite: "80 mg", AR: "100" },
        { nom: "Vitamine D3", quantite: "5 μg", AR: "100" },
        { nom: "Vitamine E", quantite: "12 mg", AR: "100" },
        { nom: "Chrome", quantite: "40 μg", AR: "100" },
        { nom: "Cuivre", quantite: "500 μg", AR: "50" },
        { nom: "Fer", quantite: "7 mg", AR: "50" },
        { nom: "Magnésium", quantite: "56,25 μg", AR: "15" },
        { nom: "Sélénium", quantite: "50 μg", AR: "91" },
        { nom: "Zinc", quantite: "10 mg", AR: "100" }
    ],
    "sommeil": [
        { nom: "Extrait de camomille", quantite: "100 mg" },
        { nom: "dont apigénine", quantite: "1 mg" },
        { nom: "GABA (acide gamma-aminobutyrique)", quantite: "100 mg" },
        { nom: "PEA (Palmitoyléthanolamide)", quantite: "100 mg" },
        { nom: "Mélatonine", quantite: "1,9 mg" }
    ],
    "energie": [
        { nom: "Caféine", quantite: "100 mg" },
        { nom: "NADH", quantite: "10 mg", AR: "100" },
        { nom: "Extrait de Thé vert", quantite: "50 mg", AR: "25" },
        { nom: "Dont EGCG", quantite: "20 mg", AR: "25" },
        { nom: "Vitamine C", quantite: "80 mg", AR: "100" },
        { nom: "Vitamine B1", quantite: "0,275 mg", AR: "25" },
        { nom: "Vitamine B2", quantite: "0,35 mg", AR: "25" },
        { nom: "Vitamine B3", quantite: "4 mg", AR: "25" },
        { nom: "Vitamine B5", quantite: "1,5 mg", AR: "25" },
        { nom: "Vitamine B6", quantite: "0,35 mg", AR: "25" },
        { nom: "Vitamine B8", quantite: "12,5 μg", AR: "25" },
        { nom: "Vitamine B9", quantite: "50 μg", AR: "25" },
        { nom: "Vitamine B12", quantite: "0,61 mg", AR: "25" },
        { nom: "Fer", quantite: "3,5 mg", AR: "25" },
        { nom: "Magnésium", quantite: "56,25 mg", AR: "15" }
    ], 
    "articulation": [
        { nom: "Extrait de Curcuma", quantite: "100 mg" },
        { nom: "Dont curcuminoïdes", quantite: "95 mg" },
        { nom: "Extrait de Boswellia serrata", quantite: "100 mg" },
        { nom: "Dont AKBA", quantite: "30 mg" },
        { nom: "Extrait de Scutellaire", quantite: "75 mg" },
        { nom: "Dont baïcaline", quantite: "65 mg" },
        { nom: "PEA (Palmitoyléthanolamide)", quantite: "75 mg" },
        { nom: "Resvératrol", quantite: "25 mg" },
        { nom: "Vitamine C", quantite: "80 mg", AR: "100" }
    ], 
    "detox" : [
        { nom: "Extrait de Chardon marie", quantite: "150 mg" },
        { nom: "Dont silymarine", quantite: "112,5 mg" },
        { nom: "Glutathion", quantite: "150 mg" }
    ],
    "jet-lag": [
        { nom: "Gélule JOUR", quantite: '' },
        { nom: "NADH", quantite: '40 mg' },
        { nom: "Gélule NUIT", quantite: '' },
        { nom: "Mélatonine", quantite: '1,9 mg' }
    ],
    "minceur": [
        { nom: "Extrait de Berbéris aristata", quantite: "160 mg"},
        { nom: "dont berbérine", quantite: "50 mg"},
        { nom: "Extrait de chardon marie", quantite: "150 mg"},
        { nom: "dont silymarine", quantite: "112,5 mg"},
        { nom: "Extrait de thé vert liposomé", quantite: "100 mg"},
        { nom: "dont EGCG(Epigallocatéchine gallate)", quantite: "40 mg"},
        { nom: "Chrome (Picolinate) liposomé", quantite: "40 μg", AR: "100" }
    ]

}

const faq = {
    "anti-stress": [
        {
            "question": "ANTI-STRESS est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ],
    "circulation": [
        {
            "question": "CIRCULATION est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "immunite": [
        {
            "question": "IMMUNITE est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "voies-respiratoires": [
        {
            "question": "VOIES RESPIRATOIRES est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "capillaire": [
        {
            "question": "CAPILLAIRE est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "multivitamines-mineraux": [
        {
            "question": "MULTIVITAMINES & MINÉRAUX est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "sommeil": [
        {
            "question": "SOMMEIL est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "energie": [
        {
            "question": "ENERGIE est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "articulation": [
        {
            "question": "ARTICULATION est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "detox" : [
        {
            "question": "DETOX est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "jet-lag": [
        {
            "question": "JET LAG est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
    "minceur": [
        {
            "question": "MINCEUR est-il compatible avec la grossesse / allaitement ?",
            "reponse": "Cette formule est déconseillée aux femmes enceintes et allaitantes, nous vous invitons à consulter votre médecin traitant ou gynécologue avant de commencer le programme."
        },
        {
            "question": "Est-il compatible avec d’autres compléments d’une autre marque ou un traitement médical ?",
            "reponse": "Il est essentiel de consulter un professionnel de santé avant de commencer un nouveau complément alimentaire, surtout si vous prenez déjà d'autres compléments ou suivez un traitement médical. Cela permet d'éviter les risques de surdosage ou d'interactions négatives entre les différents produits. Le détail des ingrédients est disponible sur la fiche produit."
        },
        {
            "question": "Peut-on ouvrir les gélules pour en ingérer le contenu ?",
            "reponse": "Si vous éprouvez des difficultés à avaler des gélules, nos gélules offrent une solution flexible. Vous pouvez ouvrir ces gélules et mélanger leur contenu dans de l'eau, une compote, du yaourt ou d'autres aliments de votre choix. Toutefois, soyez conscient que certains composants peuvent avoir une saveur prononcée."
        },
        {
            "question": "A quel moment de la journée dois-je prendre mon programme ?",
            "reponse": "Chaque moment de prise est indiqué dans la fiche produit dans la rubrique Conseils d’utilisation ainsi que sur les packagings."
        },
        {
            "question": "Où puis-je trouver les contre-indications avant mon achat ?",
            "reponse": "Les contre-indications sont indiquées dans la partie Précautions d’emploi."
        }
    ]
    ,
}

const infosActifs = {
    "Ashwagandha": {
        description: `L'Ashwagandha, connue scientifiquement sous le nom de Withania somnifera, est une
    plante adaptogène puissante originaire d'Inde. Utilisée depuis des millénaires en médecine
    ayurvédique, elle est réputée pour ses nombreux bienfaits sur la santé physique et mentale.
    Elle aide le corps à gérer le stress efficacement. Elle agit en modulant les réponses du
    système nerveux, contribuant ainsi à réduire l'anxiété et à améliorer la résistance au stress.
    Elle aide à améliorer la concentration, réduit les symptômes de dépression et d'anxiété, et
    favorise un meilleur sommeil, contribuant ainsi à une meilleure qualité de vie.`,
        bienfait: [
            { titre: 'Anti-stress & Equilibre', description: ["Prise en charge dans les périodes de tension mentale, nerveuse et d'anxiété.", "Contribue à l'équilibre émotionnel, le bien-être physique, mental et à une détente optimale.", "Aide l'organisme à faire face au stress et à récupérer des événements stressants."] },
            { titre: 'Energie & Performance', description: ["Contribue à maintenir les capacités physiques et mentales dans les cas de faiblesse, d'épuisement, de fatigue et de perte de concentration.", "Aide à vous faire sentir plus énergique et à maintenir une endurance optimale.", "Aide à prendre du poids et de la masse musculaire."] },
            { titre: 'Antioxydant', description: ["Aide à protéger les tissus des blessures.", "Aide à un effet rajeunissant général et à protéger la santé générale."] }
        ]
    },
    "Rhodiola Rosea": {
        description: `La Rhodiola rosea , souvent appelée « racine d’or », est une plante adaptogène prisée pour
        sa capacité à aider le corps à s'adapter au stress physique et mental. Originaire des régions
        froides de l'Europe et de l'Asie, elle est utilisée depuis des siècles dans les médecines
        traditionnelles pour renforcer la résistance globale de l'organisme. Elle agit en équilibrant les
        niveaux de neurotransmetteurs et de cortisol, offrant ainsi un soutien naturel en périodes de
        tension et de fatigue. Cette plante est particulièrement appréciée pour son impact positif sur
        la santé mentale. Elle aide à combattre la fatigue, améliore la concentration et peut avoir un
        effet bénéfique sur l'humeur, aidant ainsi à réduire les symptômes de l'anxiété et de la
        dépression.`,
        bienfait: [
            { titre: "Anti-stress & antioxydant", description: [
                "Aide l'organisme à s'adapter au stress émotionnel.", 
                "Aide à réduire l'impact négatif du stress sur le corps.", 
                "Favorise la résistance physique et mentale."], 
                // after: "Les antioxydants inhibent les processus d'oxydation nocifs dans le corps, protégeant ainsi le fonctionnement normal des cellules." 
            },
            {
                titre: "Tonique & Performance", description: [
                    "Aide à soutenir la puissance, l’endurance et protège pendant le stress physique.",
                    "A un effet bénéfique sur le système cardiovasculaire car il aide à protéger contre le stress et l'hypertension.",
                    "Aide à stimuler le système nerveux. Il a un effet bénéfique sur la fatigue et les maux de tête induits par le stress, sur les troubles du sommeil, le manque d'appétit, la baisse des performances au travail.",
                    "Contribue à la circulation sanguine normale, qui est associée à la performance du cerveau et la réactivité."
                ]
            }
        ]
    },
    "GABA": {
        description: `Le GABA (acide gamma-aminobutyrique) est un neurotransmetteur naturellement
            présent dans le cerveau, jouant un rôle crucial dans la régulation de l'activité neuronale
            de la relaxation et du calme.`,
    },
    "Vitamines": {
        bienfait: [
            {titre : "Métabolisme & énergie", description: [
                "Les vitamines B1, B3 et B12 contribuent à des fonctions psychologiques normales et à un métabolisme énergétique normal.",
                "Les vitamines B6, B9 et B5 contribuent à réduire la fatigue."
            ]},
            {titre : "Anti-stress &amp; antioxydant", description: [
                "Les vitamines B8 et B2 3 contribuent à protéger les cellules contre le stress oxydatif et au bon fonctionnement normal du système nerveux.",
            ]
            }
            
        ]
    },
    "Vigne Rouge, Resvératrol & Flavonoïdes": {
        description: `La vigne rouge 1 , riche en composés bénéfiques tels que le resvératrol et les flavonoïdes, est
        une plante médicinale prisée pour ses effets positifs sur la santé. Ces composants naturels offrent une gamme de bienfaits, de la protection cardiovasculaire à l'amélioration de la
        santé de la peau.`,
        bienfait: [
            { titre: "Circulation & Antioxydant", description: [
                "Contribuent à une bonne circulation sanguine dans les jambes et à réduire la sensation de jambes lourdes et fatiguées.",
                "Aident à protéger vos cellules et tissus de l'oxydation."
            ]},
            { titre: "Système cardiovasculaire", description: [
                "Contribuent à un effet bénéfique sur la pression artérielle et aident à maintenir une fonction cardiaque normale.", 
                "Aident à maintenir la santé cardiovasculaire et vasculaire pour la bonne circulation du sang dans les micro-vaisseaux et à améliorer l'oxygénation du sang."] }
        ]
    },
    "Pépins de raisins": {
        description: `Les pépins de raisins 2 sont particulièrement riches en antioxydants, notamment en
        proanthocyanidines, qui sont connues pour leur capacité à renforcer les parois des vaisseaux
        sanguins et à améliorer la circulation. Ces composés aident à protéger les vaisseaux contre
        les dommages causés par les radicaux libres, réduisant ainsi le risque de maladies
        cardiovasculaires.`,
        bienfait: [
            {
                titre: "Système cardiovasculaire & Sanguin", 
                // before: "L'Extrait de pépins de raisin est une excellente source de Oligoremic Proanthocyanidines (OPC), antioxydants naturels qui ont été associés :",
                description: ["À la réduction du stress oxydatif.", "Le renforcement du cœur et des vaisseaux pour la santé du système circulatoire.", "A un effet de renforcement sur le tissu conjonctif."]
            },
        ]
    },
    "Coenzyme Q10": {
        description: `Le Co-Q10 est présent dans chaque cellule de notre corps, il joue un rôle majeur dans la
        production d'énergie au niveau des mitochondries.`
    },
    "Vitamines & Minéraux": {
        bienfait: [
            {
                titre: "Antioxydant", description: [`Le zinc, le cuivre, le sélénium, la vitamine C contribuent à protéger les cellules contre le
            stress oxydatif.`]},
            { titre: "Fonctions cognitives", description: [`Le zinc contribue à une fonction cognitive normale.`] },
            {
                titre: "Métabolisme", description: [`Le zinc, le cuivre et la vitamine C contribuent au métabolisme normal des macronutriments.`,
                `Le zinc contribue à un métabolisme acidobasique normal.`,
                `La vitamine D contribue à l'absorption et à l'utilisation normale du calcium et du phosphore.`]},
            {
                titre: "Système immunitaire, ossature & tissus", description: [
                    `Le zinc, le cuivre, le sélénium, la vitamine C et la vitamine D contribuent au fonctionnement normal du système immunitaire.`,
            `Le cuivre et la vitamine C contribuent au fonctionnement normal du système nerveux.`,
            `Le sélénium contribue à une fonction thyroïdienne normale.`,
            `La vitamine C contribue à la formation normale de collagène pour assurer le fonctionnement normal des vaisseaux sanguins, des os et des cartilages.`,
            `La vitamine D contribue à une calcémie normale et au maintien d'une fonction musculaire normale.`
        ]},
            { titre: "Vitalité", description: [`La vitamine C contribue à réduire la fatigue.`] },
        ]
    },
    "Glutathion": {
        description: `Cette molécule, naturellement produite par le corps, est composée de trois acides aminés :
        la cystéine, la glutamine et la glycine. C’est un composé crucial pour l’organisme car il
        participe à de nombreuses réactions métaboliques permettant le bon fonctionnement du
        système immunitaire et la lutte contre le stress oxydatif causé par les radicaux libres.`,
    },
    "Curcuma": {
        description: `Le curcuma, connu scientifiquement sous le nom de Curcuma longa, est une épice
        renommée pour ses propriétés antioxydantes. L';ingrédient actif du curcuma, la curcumine,
        possède des propriétés qui peuvent aider à protéger les voies respiratoires.`,
        bienfait: [
            { titre: "Voies respiratoires", description: ["Aide à maintenir la santé des poumons et des voies respiratoires supérieures."] },
            { titre: "Système immunitaire", description: ["Aide à maintenir l'efficacité du système immunitaire."] },
        ],
    },
    "Vitamines & Minéraux 2": {
        bienfait: [
            {
                titre: "Antioxydant", description: [`Le zinc, le sélénium et la vitamine C contribuent à protéger les cellules contre le stress
            oxydatif.`] },
            {
                titre: "Système immunitaire", description: [`Le zinc, le sélénium, la vitamine C et la vitamine D contribuent au fonctionnement normal du
            système immunitaire.`,
            `Le cuivre et la vitamine C contribuent au fonctionnement normal du système nerveux.`] },
            { titre: "Vitalité", description: [`La vitamine C contribue à réduire la fatigue.`] },
        ]
    },
    "Quercétine": {
        description: `
        La quercétine, un flavonoïde naturellement présent dans de nombreux fruits et légumes.
        Cette substance, riche en propriétés antioxydantes, est considérée comme un allié précieux
        pour le bien-être général.
        `
    },
    "Kératine": {
        description: `La kératine, une protéine fibreuse naturelle, composant principal des cheveux et des ongles
        qui est connue pour ses propriétés fortifiantes. Elle est essentielle pour la vitalité des
        cheveux, de la peau et des ongles. Elle est reconnue pour agir comme un élément
        structurant donnant force et élasticité ce qui se traduit par des cheveux plus lisses, plus
        brillants et moins susceptibles de frisottis.`
    },
    "Prèle": {
        description: `La prêle des champs, connue scientifiquement sous le nom d&#39;Equisetum arvense, est une
        plante pour ses nombreuses vertus pour la santé capillaire.
        Cette plante est une source naturelle de silice, un minéral vital pour la force et la vitalité des
        cheveux. La silice aide à renforcer les follicules capillaires, à améliorer la texture des cheveux
        et leur croissance.`,
        bienfait: [
            { titre: "Santé de la peau & des ongles", description: ["Bénéfique pour la santé de la peau.","Améliore l'état de la peau, des cheveux et des ongles."] },
            { titre: "Croissance & Force", description: ["Favorise la croissance des cheveux et le renforcement."] },
        ],
    },
    "Vitamines & Minéraux 3": {
        bienfait: [
            {titre : "Santé de la peau & des ongles" ,description: ["La vitamine B3, la biotine et le zinc contribuent au maintien des cheveux et d’une peau normale."]},
            {titre : "Pigmentation" ,description: ["Le cuivre contribue à la pigmentation normale des cheveux."]}, ],
    },
    "Vitamines 2": {
        bienfait: [
            { titre: "Energie", description: ["Les vitamines C, B2, B5, B6, B9 et B12 contribuent à réduire la fatigue."] },
            {
                titre: "Antioxydant et système immunitaire", description: [`La vitamine C contribue au fonctionnement normal du système immunitaire pendant et
            après un exercice physique intense.
            Les vitamines B9 et B12 contribuent au fonctionnement normal du système immunitaire.
            La vitamine E contribue à protéger les cellules contre le stress oxydatif.`]
            },
            {
                titre: "Métabolisme et équilibre hormonal", description: [`Les vitamines B1, B3, B5, B6 et B12 contribuent à un métabolisme énergétique normal.
            Les vitamines B3, B6 et B12 contribuent à des fonctions psychologiques normales.
            La vitamine B2 contribue au métabolisme normal du fer.
            La vitamine D contribue au maintien d'une fonction musculaire et à une calcémie, une
            dentition et une ossature normales.
            La vitamine B6 contribue à réguler l'activité hormonale.`]
            },
            {
                titre: "Equilibre nerveux et mental", description: [`Les vitamines B3 et B9 contribuent au fonctionnement normal du système nerveux.
            Les vitamines B1, B6, B9 et B12 contribuent à des fonctions psychologiques normales.`]
            },
        ]
    },
    "Minéraux": {
        bienfait: [
            { titre: "Energie", description: [`Le fer et le magnésium 2 contribuent à réduire la fatigue.`] },
            {
                titre: "Antioxydant & système immunitaire", description: [`Le zinc et le cuivre contribuent à protéger les cellules contre le stress oxydatif.
            Le sélénium contribue à la protection de l'ADN, des protéines et des lipides des dommages
            oxydatifs.
            Le sélénium 1 contribue au fonctionnement normal du système immunitaire.`]
            },
            {
                titre: "Métabolisme", description: [`Le magnésium contribue à un métabolisme énergétique normal.
            Le zinc contribue à un métabolisme acidobasique normal.
            Le chrome maintient une glycémie normale et un métabolisme normal des
            macronutriments.`]
            },
            { titre: "Equilibre nerveux et mental", description: [`Le magnésium et le cuivre contribuent au fonctionnement normal du système nerveux.`] },
        ]
    },
    "Camomille": {
        description: `La camomille est une plante médicinale appréciée depuis des siècles pour ses propriétés
        apaisantes et relaxantes en particulier sur le système nerveux. Connue scientifiquement sous
        les noms de Matricaria recutita, cette herbe douce est utilisée pour aider à gérer le stress,
        l'anxiété et favoriser un sommeil réparateur.`,
        bienfait: [
            { titre: "", description: [`Contribue à une relaxation optimale.`] },
            { titre: "", description: [`Contribue à maintenir un sommeil sain et apaisant.`] },
            { titre: "", description: [`Favorise le bien-être physique et mental.`] },
            { titre: "", description: [`A un effet calmant et décontractant sur le système nerveux.`] },
        ]
    },
    "Mélatonine": {
        description: `La mélatonine 1 , souvent surnommée l’« hormone du sommeil », joue un rôle crucial dans la
        régulation des cycles veille-sommeil de notre corps. Produite naturellement par la glande
        pinéale, elle est essentielle pour maintenir notre horloge biologique interne en harmonie
        avec les rythmes naturels jour-nuit.`,
        bienfait: [
            { titre: "", description: [`Contribue à réduire le temps d'endormissement.`] },
            { titre: "", description: [`Contribue à atténuer les effets du décalage horaire.`] },
        ]
    },
    "GABA 2": {
        description: `Le GABA (acide gamma-aminobutyrique) est un neurotransmetteur naturellement présent
        dans le cerveau, jouant un rôle crucial dans la régulation de l'activité neuronale.`,
    },
    "PEA": {
        description: `Le palmitoylethanolamide, communément appelé PEA, est un composé organique
        naturellement présent dans le corps humain, ainsi que dans certains aliments.
        `,
    },
    "Thé vert": {
        description: `Le thé vert est riche en antioxydants, vitamines et minéraux, il offre une multitude de
        bienfaits pour la santé, allant de l'amélioration de la fonction cérébrale au contrôle du poids.
        Les bienfaits du thé vert sont principalement dus aux principes actifs, les polyphénols et en
        particulier la catéchine appelé épigallocatéchine gallate (EGCG), un antioxydant puissant.`,
        bienfait: [
            { titre: "Stimulant & Tonique", description: ["Aide à améliorer les capacités mentales et physiques.", "Aide à trouver plus d'énergie, à renforcer le corps et à se sentir plus énergique."] },
            { titre: "Système Immunitaire", description: ["Contribue à renforcer les défenses antioxydantes du corps.", "Aide à protéger notre corps en renforçant les défenses naturelles du corps contre les effets nocifs des radicaux libres.", "Diminue le vieillissement cellulaire en raison des dommages oxydatifs."] },
        ]
    },
    "Caféine": {
        description: `La caféine est un alcaloïde appartenant à la classe des xanthines. Elle agit principalement
        comme un stimulant du système nerveux central, réduisant la fatigue et améliorant la
        concentration.`,
        bienfait: [
            { titre: "Performance mentale", description: ["Contribue à la performance mentale et aide à vous sentir plus énergique et stimulé.", "Aide à améliorer la vigilance et la concentration."] },
            { titre: "Performance sportive", description: ["La caféine aide à prolonger le temps d'exercice vous permettant de vous entraîner plus longtemps. Elle peut améliorer les performances d'endurance et diminuer l'effort perçu."] }
        ]
    },
    "NADH": {
        description: `
        Le NADH (nicotinamide adénine dinucléotide hydraté) est une coenzyme dérivée de la
        vitamine B3 (niacine) et joue un rôle essentiel dans les processus métaboliques de
        production d'énergie au sein de chaque cellule de notre corps.
        `,
    },
    "Vitamines & Minéraux 4": {
        bienfait: [
            { titre: "Energie", description: ["Les vitamines B2, B3, B5, B6, B9 et B12 2 contribuent à réduire la fatigue."] },
            { titre: "Système immunitaire", description: [`La vitamine C contribue au fonctionnement normal du système immunitaire pendant et après un exercice physique intense. Les vitamines B9 et B12 contribuent au fonctionnement normal du système immunitaire.`] },
            { titre: "Métabolisme et équilibre hormonal", description: [`Les vitamines B1, B3, B5, B6 et B12 et la magnésium contribuent à un métabolisme énergétique normal. Les vitamines B3, B6 et B12 contribuent à des fonctions psychologiques normales. La vitamine B2 contribue au métabolisme normal du fer.`] },
            { titre: "Equilibre nerveux et mental", description: [`Le magnésium et les vitamines B3 et B9 contribuent au fonctionnement normal du système nerveux. Les vitamines B1, B6, B9 et B12 contribuent à des fonctions psychologiques normales.`] },
        ]
    },
    "Curcuma 2": {
        description: `Le curcuma, connu scientifiquement sous le nom de Curcuma longa, est une épice célèbre
        dans le monde entier, non seulement pour sa saveur unique mais aussi pour ses nombreux
        bienfaits pour la santé. Originaire d'Asie du Sud, la racine de curcuma est riche en
        curcumine, un puissant antioxydant, l’actif responsable de la plupart de ses effets
        bénéfiques. En plus de la curcumine, le curcuma contient de nombreux autres nutriments, y
        compris des vitamines (comme la vitamine C et E) et des minéraux.`,
        bienfait: [
            { titre: "Antioxydant", description: ["Aide à réduire le stress oxydatif."] },
            { titre: "Système immunitaire", description: ["Aide à maintenir l'efficacité du système immunitaire."] },
            { titre: "Articulations", description: ["Aide à maintenir ma santé des articulations et des os"] },
        ]
    },
    "Boswellia Serrata": {
        description: `Le Boswellia , également connu sous le nom d'Encens Oliban, est une résine aromatique
        tirée de la famille des arbres Boswellia utilisée depuis des siècles dans diverses traditions
        médicinales, notamment l'Ayurveda.`,
        bienfait: [
            { titre: "Confort", description: ["Aide à maintenir le confort articulaire."] },
        ]
    },
    "Scutellaire": {
        description: `Appartenant à la famille des Lamiacées, le Scutellaire, ou Scutellaria baicalensis, est une
        plante médicinale reconnue pour son action bénéfique sur les articulations. Utilisée depuis
        longtemps en médecine traditionnelle, elle est aujourd'hui prisée pour la gestion des
        douleurs articulaires.`,
        bienfait: [
            { titre: "Antioxydant", description: [
                "Agit comme un antioxydant naturel.", 
                "Réduit les dommages du stress oxydatif."
            ]},
            { titre: "Flexibilité & mobilité", description: [
                "Maintient la flexibilité des articulations, améliore la mobilité et protège les tendons.", 
                "Contribue au bon fonctionnement des muscles squelettiques lors d'une activité physique normale, d'un exercice physique ou d'une activité sportive."] }
        ]
    },
    "PEA 2": {
        description: `
        Le palmitoylethanolamide, appelé PEA, est un composé organique naturellement présent
dans le corps humain, ainsi que dans certains aliments. Il a un rôle important dans la régulation du système
endocannabinoïde.
        `,
    },
    "Resvératrol": {
        description: `Le resvératrol, un puissant polyphénol trouvé naturellement dans le vin rouge, les baies, les
        arachides et d'autres plantes. Il est de plus en plus recherché pour ses nombreux bénéfices
        potentiels sur la santé, notamment dans la préservation de la santé cardiovasculaire.`,
    },
    "Vitamine C": {
        description: `
        La vitamine C contribue à la formation normale de collagène pour assurer la fonction
normale des os et du cartilage.
        `,
    },
    "Chardon Marie": {
        description: `
        Le chardon marie, scientifiquement connu sous le nom de Silybum marianum, est une
        plante médicinale célèbre pour ses vertus protectrices et régénératrices sur le foie.
        `,
        bienfait: [
            { titre: "Purification & digestion", description: [
                "Contribue au potentiel détoxifiant, à la santé et à la protection du foie.",
                "Favorise la digestion et la purification de l’organisme.",
            ] },
        ]
    },
    "NADH 2": {
        description: `
        Le Nicotinamide Adénine Dinucléotide (NADH), connu sous le nom de coenzyme
        Q1, est un composant vital présent dans toutes les cellules et indispensable à notre corps. Il
        joue un rôle clé dans le fonctionnement optimal de plus de 300 enzymes appartenant à la
        catégorie des oxydoréductases. En tant qu'élément central de la production d'énergie
        cellulaire, à l'instar de la coenzyme Q10 (Ubiquinol), le NADH contribue significativement à la
        respiration cellulaire et, par conséquent, à la génération d'énergie au sein des
        mitochondries. De plus, il exerce une fonction cruciale dans le cerveau, où il favorise la
        biosynthèse de nombreux neurotransmetteurs.
        `,
    },
    "Berbéris Aristata": {
        description: `La berbérine est un alcaloïde extrait de diverses plantes utilisées dans la médecine
        traditionnelle chinoise et ayurvédique. Ces dernières années, elle a gagné en popularité en
        Occident grâce à ses nombreux bienfaits pour la santé et la protection du foie.`,
        bienfait: [
            { titre: "Foie & Métabolisme", description: [
                "Soutient la santé du foie.",
            ] },
        ]
    },
    "Thé vert 2": {
        description: `Le thé vert est riche en antioxydants, vitamines et minéraux, il offre une multitude de
        bienfaits pour la santé, allant de l'amélioration de la fonction cérébrale au contrôle du poids.
        Les bienfaits du thé vert sont principalement dus aux principes actifs, les polyphénols et en
        particulier la catéchine appelé épigallocatéchine gallate (EGCG), un antioxydant puissant.`
        ,
        bienfait: [
            { titre: "Métabolisme & brûle graisses", description: [
                "Augmente le métabolisme en améliorant la dépense énergétique.",
                "Stimule l'oxydation des graisses pour réduire la graisse corporelle.",
                "Contribue à maintenir un taux de cholestérol normal et contribue à la santé vasculaire."
            ] },
            { titre: "Glycémie", description: [
                "Aide pour maintenir les niveaux de glucose sanguin normal.",
                "Aide à protéger les glandes productrices d’insuline."] },
        ]
    },
    "Chrome": {
        description: `Le chrome 2 , un oligo-élément essentiel, est reconnu pour son rôle crucial dans le
        métabolisme du glucose et la gestion de l'insuline.`,
        bienfait: [
            { titre: "Glycémie", description: ["Maintient une glycémie normale et un métabolisme normal des macronutriments"] }
        ]
    }




}


const infosProduits = {
    "anti-stress": {
        'nom': 'ANTI-STRESS',
        'image': antiStress,
        'motCle': 'Sérénité · Détente · Energie · Performance',
        'nbGelule': ['30', 'GÉLULES'],
        'nbJour': ['15', 'à', '30', 'JOURS'],
        'description': `Anti-Stress de Molecules est une formule concentrée en Ashwagandha et en Rhodiola Rosea, des plantes adaptogènes, 
        ainsi que du GABA et des vitamines pour d’aider l’organisme à s’adapter et à améliorer sa résistance face au stress. 
        Il va favoriser énergie et sérénité afin de faire face au stress quotidien et de renforcer votre performance physique et mentale.`,
        'listeBienfait': [
            'Protection et stimulation du système nerveux',
            'Performance physique & mentale',
            'Amélioration de l’état d’esprit et du sommeil',
            'Renforcement de l’endurance & de l’énergie',
            'Antioxydant',
            'Réduction de l’impact négatif du stress'],
        'listeBienfaitNum': [1, 2, 2, 2, 1, 3],
        'listeActif': [
            'Ashwagandha',
            'Rhodiola Rosea',
            'GABA',
            'Vitamines'],
        'listeActifNum': [1, 2, 0, 3],
        'listeActifDescription': [
            infosActifs['Ashwagandha'],
            infosActifs['Rhodiola Rosea'], 
            infosActifs['GABA'], 
            infosActifs['Vitamines']
        ],
        'schema': stressSchema,
        'schemaPhone': stressSchemaPhone,
        'composition': composition["anti-stress"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes, de vitamines et de GABA. 
            Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. 
            Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée. 
            `, "Tenir hors de portée des enfants.",
            "Déconseillé aux femmes enceintes ou qui allaitent, et aux enfants de moins de 12 ans.",
            "À conserver à l'abri de la chaleur, de la lumière et de l’humidité.",
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
        Hydroxypropylméthylcellullose • Extrait d’Ashwagandha (Withania somnifera) liposomée •
        Extrait de Rhodiola rosea liposomée • GABA (Acide gamma-aminobutyrique) liposomé •
        Stabilisant : Phospholipides • Anti-agglomérant : Talc ; Vitamine B3 (Niacine) liposomée •
        Vitamine B5 (Pantothénate de calcium) liposomée • Vitamine B2 (Riboflavine) liposomée •
        Vitamine B6 (Pyridoxine HCl) liposomée • Vitamine B1 (Thiamine) liposomée • Vitamine B9
        (Acide folique) liposomée • Vitamine B8 (Biotine) liposomée • Vitamine B12
        (Méthylcobalamine) liposomée.`,
        'faq' : faq["anti-stress"]

    },
    "circulation": {
        "nom": "CIRCULATION",
        "schema": circulationSchema,
        "schemaPhone": circulationSchemaPhone,
        "image": circulation,
        'nbGelule': ['30', 'GÉLULES'],
        'nbJour': ['15', 'à', '30', 'JOURS'],
        "motCle": "Circulation veineuse · Lymphatique · Antioxydant · Vasoprotecteur",
        "description": `CIRCULATION de Molecules est une formule concentrée riche en flavonoïdes et en polyphénols, développée afin 
        d’améliorer la circulation sanguine et lymphatique avec son action veinotonique renforcée. Elle va favoriser le bon fonctionnement du système 
        cardiovasculaire, agir sur la pression artérielle.`,
        "listeBienfait": [
            "Circulation sanguine dynamisée",
            "Protection du système veineux",
            "Soulagement les jambes lourdes",
            "Maintien du système cardiovasculaire",
        ],
        "listeBienfaitNum": [1, 1, 1, 2],
        "listeActif": [
            "Vigne Rouge, Resvératrol & Flavonoïdes",
            "Pépins de raisins",
            "Coenzyme Q10",
        ],
        "listeActifNum": [1, 2, 0],
        'listeActifDescription': [
            infosActifs['Vigne Rouge, Resvératrol & Flavonoïdes'],
            infosActifs['Pépins de raisins'], 
            infosActifs['Coenzyme Q10'], 
        ],
        'composition': composition["circulation"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de flavonoïdes, de plantes, de resvératrol et de coenzyme Q10. Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.`,
            `Tenir hors de portée des enfants.`,
            `Déconseillé aux femmes enceintes ou qui allaitent et aux enfants de moins de 12 ans.`, 
            `Demandez conseil à votre pharmacien avant de consommer ce produit.`,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia ; Gélule d’origine végétale :
        Hydroxypropylméthylcellulose • Diosmine liposomée • Rutine liposomée • Quercétine
        liposomée • Extrait de Pépins de raisins (Vitis vinifera) liposomés • Extrait de Vigne rouge
        (Vitis vinifera) liposomée • Stabilisant : Phospholipides • Anti-agglomérant : Talc •
        Resvératrol liposomé • Coenzyme Q10 (Ubiquinone) liposomée.`,
        'faq' : faq["circulation"]
    },
    "immunite": {
        "nom": "IMMUNITÉ",
        "schema": immuniteSchema,
        "schemaPhone": immuniteSchemaPhone,
        "image": immunite,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'à', '30', 'JOURS'],
        "motCle": "Système immunitaire · Protection stress oxydatif · Métabolisme · Vitalité",
        "description": `
        IMMUNITE de Molecules est une formule concentrée en vitamines, minéraux et en glutathion, un antioxydant reconnu, qui a été développée 
        afin de renforcer le système immunitaire et le métabolisme en le protégeant des 
        radicaux libres qui peuvent créer des dommages sur l’organisme. Elle va permettre de booster les fonctions musculaires et la vitalité.`,
        "listeBienfait": [
            "Renforcement du système immunitaire",
            "Protection contre le stress oxydatif",
            "Réduction de la fatigue",
            "Soutien des fonctions musculaires",
        ],
        "listeBienfaitNum": [1, 2, 3, 4],
        "listeActif": [
            "Vitamines & Minéraux",
            "Glutathion",
        ],
        'listeActifDescription': [
            infosActifs["Vitamines & Minéraux"],
            infosActifs["Glutathion"],
        ],
        "listeActifNum": ["1-2-3-4", 0],
        'composition': composition["immunite"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes, de vitamines, de minéraux et de substances. Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée. 
            `,
            `Tenir hors de portée des enfants. `,
            `Déconseillé aux femmes enceintes ou qui allaitent, aux enfants de moins de 12 ans et aux personnes sous traitement anticoagulant. `,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': `Agent de charge : Gomme d';acacia • Gélule d';origine végétale :
        Hydroxypropylméthylcellulose • Vitamine C (Acide L-asccorbique) liposomée • Stabilisant :
        Phospholipides • Glutathion liposomé • Anti-agglomérant : Talc • Zinc (Picolinate) liposomé
        • Cuivre (Bisglycinate) liposomé • Sélénium (L-sélénomethionine) liposomé • Vitamine D3
        (Cholécalciférol) liposomée.`,
        'faq': faq["immunite"]
    },
    "voies-respiratoires": {
        "nom": "VOIES RESPIRATOIRES",
        "schema": voiesRespiratoiresSchema,
        "schemaPhone": voiesRespiratoiresSchemaPhone,
        "image": voiesRespiratoires,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'à', '30', 'JOURS'],
        "motCle": "Système immunitaire & respiratoire · Vitalité",
        "description": `VOIES RESPIRATOIRES de Molecules est une formule concentrée en extraits de plantes,
        vitamines, minéraux et en glutathion, un antioxydant reconnu. Elle a été développée afin de
        renforcer le système immunitaire et les voies respiratoires. Elle va permettre de booster la
        vitalité.`,
        "listeBienfait": [
            "Respiration facilitée",
            "Renforcement du système immunitaire",
            "Protection des poumons et voies respiratoires",
            "Réduction de la fatigue",
        ],
        "listeBienfaitNum": [1, 1, 1, 2],
        "listeActif": [
            "Curcuma",
            "Vitamines & Minéraux",
            "Quercétine",
            "Glutathion",
        ],
        "listeActifNum": [1, 2, 0, 0],
        'listeActifDescription': [
            infosActifs['Curcuma'],
            infosActifs['Vitamines & Minéraux 2'], 
            infosActifs['Quercétine'], 
            infosActifs['Glutathion'], 
        ],
        'composition': composition["voies-respiratoires"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes, de vitamines, de minéraux et de substances. Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée. `,
            `Tenir hors de portée des enfants. `,
            `Déconseillé aux femmes enceintes ou qui allaitent, aux enfants de moins de 12 ans et aux personnes sous traitement anticoagulant. `,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
        Hydroxypropylméthylcellullose • Quercétine liposomée • Extrait de Curcuma longa liposomé
        • Stabilisant : Phospholipides • Vitamine C (Acide L-ascorbique) liposomée • Glutathion
        liposomé • Anti-agglomérant : Talc • Zinc (Picolinate) liposomé • Sélénium (L-
        sélénomethionine) liposomé • Vitamine D3 (Cholécalciférol) liposomée.`,
        'faq': faq["voies-respiratoires"]
    },
    "capillaire": {
        "nom": "CAPILLAIRE",
        "schema": capillaireSchema,
        "schemaPhone": capillaireSchemaPhone,
        "image": capillaire,
        "nbGelule": ['105', 'GÉLULES'],
        "nbJour": ['90', 'JOURS'],
        "motCle": "Beauté & croissance des cheveux · Anti-chute · Pigmentation",
        "description": "CAPILLAIRE de Molecules est une formule concentrée en kératine, extraits de plantes, vitamines, minéraux, développée afin de renforcer la structure des cheveux et du cuir chevelu pour améliorer la brillance, la croissance et la pigmentation des cheveux. Elle va permettre d'augmenter la densité capillaire.",
        "listeBienfait": [
            "Croissance & Force des cheveux et des ongles",
            "Diminution de la chute",
            "Amélioration de la brillance & Pigmentation"
        ],
        "listeBienfaitNum": [1, 1, 2],
        "listeActif": [
            "Kératine",
            "Prèle",
            "Vitamines & Minéraux",
        ],
        "listeActifNum": [0, 1, 2],
        'listeActifDescription': [
            infosActifs["Kératine"],
            infosActifs["Prèle"], 
            infosActifs["Vitamines & Minéraux 3"], 
        ],
        'composition': composition["capillaire"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 2 gélules par jour pendant 15 jours, puis 1 gélule par jour pendant 75 jours avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de kératine, de plantes, de vitamines et de minéraux. Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.`,
            `Tenir hors de portée des enfants. `,
            `Déconseillé aux femmes enceintes ou qui allaitent et aux enfants de moins de 12 ans. `,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
        Hydroxypropylméthylcellulose • Kératine liposomée • Stabilisant : Phospholipides • Extrait
        de Prêle (Equisetum arvense) liposomée • Antiagglomérant : Talc • Zinc (Picolinate) liposomé
        • Vitamine B3 (Niacine) liposomée • Vitamine B6 (Pyridoxine HCl) liposomée • Vitamine B8
        (Biotine) liposomée • Cuivre (Bisglycinate) liposomé.`,
        'faq': faq["capillaire"]
    },
    "multivitamines-mineraux": {
        "nom": "MULTIVITAMINES & MINÉRAUX",
        "schema": multivitaminesSchema,
        "schemaPhone": multivitaminesSchemaPhone,
        "image": multivitamines,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'à', '30', 'JOURS'],
        "motCle": "Système immunitaire · Equilibre hormonal & nerveux · Performance",
        "description": "MULTIVITAMINES & MINÉRAUX de Molecules est une formule concentrée en vitamines et en minéraux développée afin de renforcer le système immunitaire, réguler l’activité hormonale et protéger contre le stress oxydatif. Elle va permettre de renforcer le système nerveux, l’équilibre psychologique et la performance intellectuelle.",
        "listeBienfait": [
            "Renforcement du système immunitaire",
            "Réduction de la fatigue",
            "Equilibre métabolisme et hormonal",
        ],
        "listeBienfaitNum": [1, 2, 3],
        "listeActif": [
            "Vitamines",
            "Minéraux",
        ],
        "listeActifNum": ["2-3", "1-2"],
        'listeActifDescription': [
            infosActifs["Vitamines 2"],
            infosActifs["Minéraux"], 
        ],
        'composition': composition["multivitamines-mineraux"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de vitamines, de minéraux. Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié.`,
            `Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.
            `,
            `Tenir hors de portée des enfants.`,
            `Déconseillé aux femmes enceintes ou qui allaitent et aux enfants de moins de 12 ans.`,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité. `,
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
        Hydroxypropylméthylcellulose • Vitamine C (Acide L-ascorbique) liposomée • Magnésium
        (Oxyde) liposomé ; Stabilisant : Phospholipides • Anti-agglomérant : Talc • Vitamine B3
        (Niacine) liposomée • Vitamine E (D-alpha tocophérol) liposomée • Zinc (Picolinate)
        liposomé • Fer (Bisglycinate) liposomé • Vitamine B5 (Pentothénate de calcium) liposomée •
        Vitamine B2 (Riboflavine) liposomée • Vitamine B6 (Pyridoxine HCl) liposomée • Vitamine
        B12 (Thiamine) liposomée • Cuivre (Bisglycinate) liposomé • Vitamine B9 (Acide folique)
        liposomée • Vitamine B8 (Biotine) liposomée • Sélénium (L-sélénométhionine) liposomé •
        Chrome (Picolinate) liposomé • Vitamine D3 (Cholécalciférol) liposomée • Vitamine B12
        (Méthylcobalamine) liposomée.`,
        'faq': faq["multivitamines-mineraux"]

    },
    "sommeil": {
        "nom": "SOMMEIL",
        "schema": sommeilSchema,
        "schemaPhone": sommeilSchemaPhone,
        "image": sommeil,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'à', '30', 'JOURS'],
        "motCle": "Sommeil réparateur · Relaxation · Endormissement",
        "description": "Sommeil de Molecules est une formule concentrée développée afin de favoriser un sommeil réparateur en renforçant le bien-être physique et mental et en calmant le système nerveux.",
        "listeBienfait": [
            "Réduction du temps d’endormissement",
            "Détente et bien-être physique & mental",
            "Décontractant pour le système nerveux",
            "Sommeil réparateur",
        ],
        "listeBienfaitNum": [1, 2, 2, 2],
        "listeActif": [
            "Camomille",
            "Mélatonine",
            "GABA",
            "PEA",
        ],
        "listeActifNum": [2, 1, 0, 0],
        'listeActifDescription': [
            infosActifs["Camomille"],
            infosActifs["Mélatonine"], 
            infosActifs["GABA 2"], 
            infosActifs["PEA"], 
        ],
        'composition': composition["sommeil"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules le soir, 1h avant de se coucher.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes et de substances.
            `,
            `Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.
            `,
            `Tenir hors de portée des enfants. `,
            `Déconseillé aux femmes enceintes ou qui allaitent, aux adolescents de moins de 18 ans et aux personnes souffrant de maladie auto-immune ou inflammatoire. `,
            `Demandez conseil à votre médecin si vous souffrez d’épilepsie, d’asthme, ou de troubles du comportement. Ne pas consommer ce produit avant une activité nécessitant une vigilance soutenue. `,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
        Hydroxypropylméthylcellullose • Extrait de Camomille (Matricaria recutita) liposomé • GABA
        (Acide gamma-aminobutyrique) liposomé • PEA (Palmitoyléthanolamide) liposomé •
        Stabilisant : Phospholipides • Antiagglomérant : Talc • Mélatonine liposomée.`,
        'faq': faq["sommeil"]

    },
    "energie": {
        "nom": "ÉNERGIE",
        "schema": energieSchema,
        "schemaPhone": energieSchemaPhone,
        "image": energie,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'à', '30', 'JOURS'],
        "motCle": "Dynamisant · Equilibre énergétique · Système nerveux",
        "description": "Energie de Molecules est une formule concentrée en caféine, vitamines, minéraux et en extrait de plante développée afin d’apporter de l’énergie à l’organisme. Elle va permettre d’améliorer l’équilibre nerveux et psychologique, augmenter vos performances et agir comme stimulant.",
        "listeBienfait": [
            "Réduction de la fatigue et du stress oxydatif",
            "Renforcement des fonctions cérébrales et physiques",
            "Réduction de la fatigue",
            "Amélioration de la concentration",
        ],
        "listeBienfaitNum": [1, 2, 3, 2],
        "listeActif": [
            "Thé vert",
            "Caféine",
            "NADH",
            "Vitamines & Minéraux",
        ],
        "listeActifNum": [1, 2, 0, 3],
        'listeActifDescription': [
            infosActifs["Thé vert"],
            infosActifs["Caféine"], 
            infosActifs["NADH"], 
            infosActifs["Vitamines & Minéraux 4"], 
        ],
        'composition': composition["energie"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour avec un grand verre d’eau, pendant un repas.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes, de vitamines, de minéraux et de substances. Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.
            Contient de la caféine (100 mg/jour). 
            `,
            `Tenir hors de portée des enfants.
            `,
            `Déconseillé aux femmes enceintes ou qui allaitent et aux adolescents de moins de 18 ans. Ne doit pas être consommer si vous prenez d’autres produits contenant du thé vert le même jour.`,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.
            `,
        ],
        'listeIngredient': `
            Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
            Hydroxypropylméthylcellullose • Caféine liposomée • Vitamine C (Acide L-ascorbique)
            liposomée • Magnésium (Oxyde) liposomé • Extrait de Thé vert (Camellia sinensis) liposomé
            • Stabilisant : Phospholipides • Anti-agglomérant : Talc • NADH (Nicotinamide adénine
            dinucléotide) • Vitamine B3 (Niacine) liposomée • Fer (Bisglycinate) liposomé • Vitamine B5
            (Pentothénate de calcium) liposomée • Vitamine B2 (Riboflavine) liposomée • Vitamine B6
            (Pyridoxine HCl) liposomée • Vitamine B1 (Thiamine) liposomée • Vitamine B9 (Acide folique)
            liposomée • Vitamine B8 (Biotine) liposomée • Vitamine B12 (Méthylcobalamine) liposomée.
        `,
        'faq': faq["energie"]
    },
    "articulation": {
        "nom": "ARTICULATION",
        "schema": articulationSchema,
        "schemaPhone": articulationSchemaPhone,
        "image": articulation,
        "nbGelule": ['90', 'GÉLULES'],
        "nbJour": ['30', 'JOURS'],
        "motCle": "Confort articulaire · Flexibilité",
        "description": "ARTICULATION de Molecules est une formule concentrée développée afin de protéger les os, cartilage, les articulations, les tendons, maintenir leur flexibilité et leur souplesse et réduire l’inflammation. Elle va permettre de booster la production de collagène et réduire les dommages causés par le stress oxydatif.",
        "listeBienfait": [
            "Protection des articulations, tendons, cartilage, os",
            "Maintien de la souplesse et de la mobilité",
            "Préservation du collagène",
        ],
        "listeBienfaitNum": [1,1,3],
        "listeActif": [
            "Curcuma",
            "Boswellia Serrata",
            "Scutellaire",
            "PEA",
            "Resvératrol",
            "Vitamine C",
        ],
        "listeActifNum": [2, 1, 0, 0, 0, 3],
        'listeActifDescription': [
            infosActifs["Curcuma 2"],
            infosActifs["Boswellia Serrata"], 
            infosActifs["Scutellaire"], 
            infosActifs["PEA 2"], 
            infosActifs["Resvératrol"], 
            infosActifs["Vitamine C"], 
        ],
        'composition': composition["articulation"],
        'compositionGelule': "3",
        'conseilUtilisation': "Prendre 3 gélules par jour avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes, de vitamine C, de PEA et de resvératrol.`,
            `Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié.`,
            `Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée. Tenir hors de portée des enfants.`,
            `Déconseillé aux femmes enceintes ou qui allaitent et aux enfants de moins de 12 ans.`,
            `Demandez conseil à votre pharmacien avant de consommer ce produit.`,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': `Gélule d’origine végétale : Hydroxypropylméthylcellulose • Agent de charge : Gomme
        d’acacia • Extrait de Boswelllia serrata liposomé • Extrait de Curcuma longa liposomé •
        Vitamine C liposomée • PEA liposomé (Palmitoyléthanolamide) • Extrait de Scutellaria
        baicalensis liposomée • Stabilisant : Phospholipides • Resvératrol liposomé • Anti-
        agglomérant : Talc.`,
        'faq': faq["articulation"]
    },
    "detox": {
        "nom": "DÉTOX",
        "schema": detoxSchema,
        "schemaPhone": detoxSchemaPhone,
        "image": detox,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'à', '30', 'JOURS'],
        "motCle": "Détox du foie · Digestion · Purification",
        "description": "Détox de Molecules est une formule concentrée développée pour détoxifier le foie et protéger les cellules des dommages oxydatifs. Elle va permettre de favoriser la digestion et la purification de l’organisme.",
        "listeBienfait": [
            "Détox et protection du foie",
            "Amélioration de la digestion",
            "Purification du corps",
        ],
        "listeBienfaitNum": [1, 1, 1],
        "listeActif": [
            "Chardon Marie",
            "Glutathion",
        ],
        "listeActifNum": [1, 0],
        'listeActifDescription': [
            infosActifs["Chardon Marie"],
            infosActifs["Glutathion"], 
        ],
        'composition': composition["detox"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes et de glutathion.`,
            `Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié.`,
            `Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.`,
            `Tenir hors de portée des enfants.`,
            `Déconseillé aux femmes enceinte ou qui allaitent, aux adolescents de moins de 18 ans et en cas d’allergie aux astéracées.`,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
        Hydroxypropylméthylcellulose • Extrait de fruits de Chardon marie (Silybum marianum)
        liposomé • Glutathion liposomé ; Stabilisant : Phospholipides • Anti-agglomérant : Talc.`,
        'faq': faq["detox"]
    },
    "jet-lag": {
        "nom": "JET LAG",
        "schema": jetLagSchema,
        "schemaPhone": jetLagSchemaPhone,
        "image": jetLag,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'JOURS'],
        "motCle": "Décalage horaire · Rapidité endormissement · Régulation du cycle circadien",
        "description": "Jet Lag de Molecules est une formule concentrée développée afin d’atténuer les effets du décalage horaire et réduire le temps d’endormissement. Elle va permettre de réguler le cycle circadien.",
        "listeBienfait": [
            "Diminution des effets du décalage horaire",
            "Réduction du temps d’endormissement",
        ],
        "listeBienfaitNum": [1, 1],
        "listeActif": [
            "NADH",
            "Mélatonine",
        ],
        "listeActifNum": [0, 1],
        'listeActifDescription': [
            infosActifs["NADH 2"],
            infosActifs["Mélatonine"], 
        ],
        'composition': composition["jet-lag"],
        'compositionGelule': "1",
        'conseilUtilisation': ["Prendre 1 gélule JOUR au réveil avec un grand verre d’eau.","Prendre 1 gélule NUIT le soir, 30 min avant le coucher avec un grand verre d’eau."],
        'precaution': [
            `Ce produit est un complément alimentaire à base de NADH et de mélatonine.`,
            `Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié. Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.`,
            `Déconseillé aux femmes enceintes ou qui allaitent, aux adolescents de moins de 18 ans et aux personnes souffrant de maladie auto-immune ou inflammatoire.`,
            `Demandez conseil à votre médecin si vous souffrez d’épilepsie, d’asthme, ou de troubles du comportement.`,
            `Ne pas consommer de gélule NUIT avant une activité nécessitant une vigilance soutenue.`,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': [
            `POUR 1 GÉLULE JOUR :`,
            `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
            Hydroxypropylméthylcellulose • NADH (Nicotinamide adénine dinucléotide) liposomé •
            Stabilisant : Phospholipides • Anti-agglomérant : Talc.`,
            `POUR 1 GÉLULE NUIT :`,
            `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
            Hydroxypropylméthylcellulose • Anti-agglomérant : Talc • Stabilisant : Phospholipides •
            Mélatonine liposomée.`
        ],
        'faq': faq["jet-lag"]
    },
    "minceur": {
        "nom": "MINCEUR",
        "schema": minceurSchema,
        "schemaPhone": minceurSchemaPhone,
        "image": minceur,
        "nbGelule": ['30', 'GÉLULES'],
        "nbJour": ['15', 'à', '30', 'JOURS'],
        "motCle": "Brûle-graisses · Perte de poids · Digestion",
        "description": "MINCEUR de Molecules est une formule concentrée en extraits de plantes et en minéraux développée afin de booster la perte de poids avec son action brûle-graisses. Elle va permettre de stimuler le métabolisme, de réguler la glycémie et le cholestérol, et faciliter la digestion.",
        "listeBienfait": [
            "Métabolisme et oxydation des graisses",
            "Contrôle du poids",
            "Equilibre glycémie & fringales",
            "Purification de l’organisme",
        ],
        "listeBienfaitNum": [1, 1, 2, 3],
        "listeActif": [
            "Berbéris Aristata",
            "Chardon Marie",
            "Thé vert",
            "Chrome",
        ],
        "listeActifNum": [0, 3, 1, 2],
        'listeActifDescription': [
            infosActifs["Berbéris Aristata"],
            infosActifs["Chardon Marie"], 
            infosActifs["Thé vert 2"], 
            infosActifs["Chrome"], 
        ],
        'composition': composition["minceur"],
        'compositionGelule': "2",
        'conseilUtilisation': "Prendre 1 à 2 gélules par jour pendant un repas avec un grand verre d’eau.",
        'precaution': [
            `Ce produit est un complément alimentaire à base de plantes et de chrome. Les compléments alimentaires doivent être utilisés dans le cadre d'un mode de vie sain et ne pas être utilisés comme substituts d'un régime équilibré et varié.`,
            `Se conformer aux conseils d'utilisation, ne pas dépasser la dose journalière recommandée.`,
            `Contient de la caféine (1,2 mg/jour).`,
            `Tenir hors de portée des enfants. `,
            `Déconseillé aux femmes enceintes ou qui allaitent, aux adolescents de moins de 18 ans, aux diabétiques ou aux personnes ayant des problèmes cardiaques ou hépatiques.`,
            `Ne doit pas être consommer si vous prenez d’autres produits contenant du thé vert le même jour.`,
            `À conserver à l'abri de la chaleur, de la lumière et de l’humidité.`,
        ],
        'listeIngredient': `Agent de charge : Gomme d’acacia • Gélule d’origine végétale :
        Hydroxypropylméthylcellulose • Extrait de Berberis aristata liposomé • Extrait de Chardon
        marie (Silybum marianum) liposomé • Extrait de Thé vert (Camellia sinensis) liposomé •
        Stabilisant : Phospholipides ; Anti-agglomérant : Talc • Chrome (Picolinate) liposomé.`,
        'faq': faq["minceur"]

    },
    
    
    
}




export function getInfosProduit() {
    return infosProduits;
}

export function getInfosActifs() {
    return infosActifs;
}

