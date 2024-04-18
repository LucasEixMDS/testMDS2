import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import "./Accordion.scss";


const Accordion = ({ block, formation, isAdditional = false }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const accordionRef = useRef(null); // Ajout d'une référence à l'accordion

  const toggleAccordion = () => {
    setOpen(!open);
  };

  const colorStyle = {
    color: formation.colorFormation,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accordionRef.current && !accordionRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (open && contentRef.current) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.height = '0px';
    }
  }, [open]);

  // Retour anticipé si `block.title` est absent
  if (!block.title) {
    return null;
  }

  // Déterminer la balise du titre basée sur isAdditional
  const TitleTag = isAdditional ? 'h3' : 'span';

  return (
    <div ref={accordionRef} className={`accordion ${isAdditional ? 'accordion-additional' : ''}`}>
      <button className={`accordion_header ${open ? 'accordion_header_open' : ''}`} onClick={toggleAccordion}>
        <div className="accordion-text">
          <TitleTag className='accordion-titre'>{block.title}</TitleTag>
          <div className="details">
            <span style={colorStyle} className='accordion-hours'>{block.hours}</span>
            <span className='accordion-modalities'>{block.modalities}</span>
          </div>
        </div>
        <div className="arrow-container">
          <FontAwesomeIcon icon={faChevronDown} style={colorStyle} className={`accordion_arrow ${open ? 'accordion_arrow_open' : ''}`} />
        </div>
      </button>
      <div ref={contentRef} className={`accordion_collapse ${open ? 'accordion_collapse_open' : ''}`}>
        <div>
          <ul>
            {block.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  block: PropTypes.object.isRequired,
  formation: PropTypes.object.isRequired,
  isAdditional: PropTypes.bool,
};

export default Accordion;