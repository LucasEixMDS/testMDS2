export const menus = {
    "Nos formations ": ["ongles", /*"visages"*/ "corps", /*"tertiaire"*/"Toutes les formations"/* "Trouvez votre formations idéal !"*/],
    "Orientation ": [ /*"Quelle formation est faite pour vous ?"*/ /*"besoin d'être accompagné ?"*/ "inscription & Devis", "Comment s'inscrire en formation ?", "Paiement en plusieurs mensualités", "Les différents financements","Comment utiliser votre CPF ?", /*"réorientation professionnelle"*/ "La VAE et la VAP"],
    /*"Articles ": ["interviews", "bien-être", "beauté", "esthétique", "Carrière", "Formation professionnel", "<strong>Tous nos articles</strong>" ], */
    "Accompagnement" : [ "Nos formations", "Accompagnement Global",/* "Charte qualité", */"Suivi post-formation", "La direction pédagogique", "Les valeurs MDS" ]  ,
    "Chez MDS ": [ "Notre équipe pédagogique", "Hébergement", "Formation à distance", "Accessibilités & handicap", "Devenir modèle", "Rejoindre MDS"]
  };
  
  export const subMenus = {
    "ongles": ["Prothésie ongulaire", "Prothésie ongulaire à distance"],
    "visages": ["maquillage permanent", "extension de cils"],
    "corps": ["Réflexologie", "Réflexologie à distance", "Masseur professionnel", "Massage du monde"],
    "tertiaire": ["SST", "FPA", "FO"],
    "Toutes les formations" : [/*"👩‍🎓 Les formations diplômantes"*/ "Les formations en ligne", "Les VAE et VAP", "Toutes nos formations"],
    /*"Devis & inscription" : ["inscription & Devis", "Comment s'inscrire en formation ?", "Paiement en plusieurs mensualités"],*/
    /*"Financement" : ["Les différents financements","Comment utiliser votre CPF ?" ]*/
  }; 
  
  export const submenuTags = {
    "prothesie ongulaire à distance": ["EN LIGNE"],
    "Trouvez votre formations idéal !": ["INTERACTIF"],
    "Quelle formation est faite pour vous ?":["INTERACTIF"],
    "Réflexologie à distance": ["EN LIGNE"],
    "SST": ["BIENTÖT DISPONIBLE"]
  };
  
  export const finalUrls = {
    "Prothésie ongulaire": "/prothesie-ongulaire-en-centre",
    "Prothésie ongulaire à distance": "/prothesie-ongulaire-en-ligne",
    "Réflexologie" : "/page-reflexologue",
    "Réflexologie à distance": "/reflexologue-a-distance",
    "Masseur professionnel" : "/masseur-professionnel",
    "Massage du monde" : "/massage-du-monde",
    "Hébergement": "/hebergement",
    "Devenir modèle": "/devenir-modele",
    "La VAE et la VAP": "/vae-vap",
    "Rejoindre MDS": "/rejoindre-MDS",
    "Toutes les formations": "/toutes-nos-formations",
    "Toutes nos formations": "/toutes-nos-formations",
    "Les VAE et VAP":"/formations-vae-vap",
    "Les différents financements": "/different-financement",
    "Les formations en ligne": "/formations-distanciel",
    "Notre équipe pédagogique": "/notre-equipe-pedagogique",
    "inscription & Devis" : "/inscription",
    "Comment s'inscrire en formation ?": "/comment-s-inscrire-en-formation",
    "Paiement en plusieurs mensualités": "/paiement-mensualites",
    "Comment utiliser votre CPF ?": "/utiliser-son-cpf",
    "Accessibilités & handicap": "/handicap",
    "Formation à distance": "/formations-distanciel",
    "Accompagnement Global": "/accompagnement-global",
    "Suivi post-formation": "/suivis-post-formation",
    "Les valeurs MDS": "/valeurs-de-mdsformations",
    "La direction pédagogique":"/la-direction-pedagogique",
    "Nos formations": "/toutes-nos-formations"
  };
  
  export const sanitize = (str) => {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
  }
  
  export const slugify = (str) => {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')  // Aucun besoin d'échapper le tiret ici
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
  }
  