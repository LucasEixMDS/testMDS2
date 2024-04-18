import "./formationDescription.scss";
import React from 'react';
import PropTypes from 'prop-types';

class FormationDescription extends React.Component {
  handleDownloadClick = () => {
    const { formation } = this.props;
  
    // Créez un élément <a> (lien)
    const downloadLink = document.createElement('a');
  
    // Récupérez le lien du programme à partir de `formation.header.lienProgramme`
    const fileUrl = formation.programme;
  
    // Extrayez le nom de fichier de l'URL
    const fileName = this.getFileNameFromUrl(fileUrl);
  
    // Définissez l'attribut "href" avec l'URL du fichier
    downloadLink.href = fileUrl;
  
    // Définissez l'attribut "download" avec le nom du fichier
    downloadLink.download = fileName;
  
    // Simulez un clic sur le lien pour déclencher le téléchargement
    downloadLink.click();
  };
  
  getFileNameFromUrl = (url) => {
    // Divisez l'URL en segments en utilisant le caractère "/"
    const segments = url.split('/');
  
    // Récupérez le dernier segment qui devrait être le nom du fichier
    const fileName = segments[segments.length - 1];
  
    return fileName;
  };

  render() {
    const { formation } = this.props;

    return (
      <div className="descriptionContainer">
        <div className="h2">Vous pouvez télécharger notre<br/> programme de formation ici :</div>
        <button onClick={this.handleDownloadClick} style={{ backgroundColor: formation.colorFormation }}>
          Télécharger le programme de formation
        </button>
      </div>
    );
  }
}

FormationDescription.propTypes = {
  formation: PropTypes.object.isRequired // Vous indiquez que 'formation' est un objet et est requis
};

export default FormationDescription;