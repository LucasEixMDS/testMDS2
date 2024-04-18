export const data = {
  "Nos formations": {
    imageUrl: "/header1.webp",
    items: [
      {
        label: "Ongles",
        details: ["Prothésie ongulaire", "Prothésie ongulaire à distance"],
      },
      {
        label: "Corps",
        details: ["Réflexologie", "Réflexologie à distance", "Masseur professionnel", "Massage du monde"],
      },
      {
        label: "Toutes les formations",
        details: ["Les formations en ligne", "Les VAE et VAP", "Toutes nos formations"],
      },
    ],
  },
  "Orientation": {
    imageUrl: "/orientation2.webp",
    items: [
      {
        label: "inscription & Devis",
        details: ["inscription & Devis", "Comment s'inscrire en formation ?", "La VAE et la VAP"],
      },
      {
        label: "Financements",
        details: ["Comment utiliser votre CPF ?", "Les différents financements", "Paiement en plusieurs mensualités"],
      },
    ],
  },
  "Accompagnement": {
    imageUrl: "/header3.webp",
    items: [
      {
        label: "Suivis & accompagnement",
        details: ["Accompagnement Global", "Suivi post-formation", "Nos formations"],
      },
      {
        label: "Information sur l'école",
        details: ["La direction pédagogique", "Les valeurs MDS"],
      },
    ],
  },
  "Chez MDS": {
    imageUrl: "/header4.webp",
    items: [
      {
        label: "MDS FORMATIONS",
        details: ["Accessibilités & handicap", "Rejoindre MDS", "Notre équipe pédagogique"],
      },
      {
        label: "Info Pratique",
        details: ["Hébergement", "Formation à distance",  "Devenir modèle"],
      },
    ],
  },
};

export const getMenuData = (title) => {
  return data[title] || null;
};
