import formationData from "../../json/formation.json";
import "./formation.scss";
import "../Error404/Error404.scss";
import FormationHeader from './formation_components/formation_header/formation_header';
import FormationDescription from "./formation_components/formation_description_metier/FormationDescription";
import Formation_metier from "./formation_components/formation_description_metier/Formation_metier";
import Fichette from "./formation_components/formation_fichette/BouttonFichetteMobile";
import FichetteDesktop from "./formation_components/formation_fichette/FichetteDesktop";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SeoBreadcrumb from "SEOBreadcrumb";
import { Helmet } from 'react-helmet-async';


function FormationPage() {
  const { formationLink } = useParams();
  const navigate = useNavigate();
  const formation = formationData.find(f => f.formationLink.endsWith(formationLink));


  useEffect(() => {
    if (!formation) {
      navigate('/404'); // Assurez-vous que cette route existe dans votre système de routage
    } else {
      // Ajoutez des données structurées à la page
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': formation.title,
        'description': formation.metaDescription,
        'price': formation.pricing.financementPerso, // Ajoutez le prix ici
        'aggregateRating': { // Ajoutez la note ici
          '@type': 'AggregateRating',
          'ratingValue': formation.ratingValue,
          'reviewCount': formation.reviewCount
        }
      });
      document.head.appendChild(script);
    }
  }, [formationLink, navigate, formation]);

  if (!formation) {
    // Ou retournez null, un spinner, ou tout autre élément en attendant la redirection
    return null; 
  }

  // Utilisez "formation" pour accéder aux détails de la formation
  return (
    <div className="page_formation">  
        <SeoBreadcrumb 
          pageType="formation"
          pageDetails={{
            name: formation?.title || "Titre Formation", // Utilisez un titre par défaut si nécessaire
            formationLink: formation?.formationLink || 'default-link', // Utilisez un lien par défaut si nécessaire
          }}
          
        />
            <Helmet>
              <title>{formation.title}</title>
              <link rel="canonical" href={`/${formation.formationLink}`} />
              <meta name="description" content={formation.metaDescription} />
              <meta name="keywords" content={formation.keywords} />
              <meta property="og:description" content={formation.propretyDescription} />
          </Helmet>


      <FormationHeader formation={formation} />

      <Fichette formation={formation}/>
      <FichetteDesktop formation={formation} />
      <div className="formation_container1">
      <FormationDescription formation={formation}/>
      
      </div>
      <div className="formation_metier">
      <Formation_metier formation={formation} svgColor={formation.colorFormation} /> 
      </div>
      
    </div>
  );
          }

export default FormationPage;
