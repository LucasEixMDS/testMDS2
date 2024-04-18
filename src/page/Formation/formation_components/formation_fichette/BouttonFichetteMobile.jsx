import { useState, useEffect } from 'react';
import "./Fichette.scss";
import fichette from "../../../../../public/info4.svg";
import Fichette from './Fichette';
import fermer from "../../../../../public/fermer.svg"
import PropTypes from 'prop-types';

const BouttonFichetteMobile = ({ formation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalOpen]); // Ceci écoutera les changements de modalOpen

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="fichette">
      <button className="buttonFichette" onClick={openModal}>
        <img src={fichette} alt="Image d'un i dans un rond pour information" className="icon"/>
        <span className="label">Fiche Formation</span>
      </button>
      {modalOpen && (
        <div className="modalOverlay">
          <div className="modalContent" style={{ height: '100%', overflow: 'auto' }}>
            <button className="closeButton" onClick={closeModal}>
              <img src={fermer} alt="icon fermer" />
            </button>
            <Fichette formation={formation} />
          </div>
        </div>
      )}
    </div>
  );
};

BouttonFichetteMobile.propTypes = {
  formation: PropTypes.object.isRequired,
};

export default BouttonFichetteMobile;