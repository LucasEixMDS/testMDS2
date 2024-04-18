
import PropTypes from 'prop-types';
import Accordion from './Accordion';

const AccordionWrapper = ({ formation, section, isAdditional }) => {
  const blocksToDisplay = formation[section].blocks;


  return (
    <div >
        
        {blocksToDisplay.map((block, index) => (
            <Accordion key={index} block={block} formation={formation} isAdditional={isAdditional} />
        ))}
    </div>
  );
}

AccordionWrapper.propTypes = {
  formation: PropTypes.shape({
    colorFormation: PropTypes.string.isRequired,
    program: PropTypes.shape({
      blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    // Supposons que vous pourriez aussi avoir d'autres sections similaires à `program`
    // Vous pourriez avoir besoin d'ajouter des validations similaires pour ces sections
  }).isRequired,
  section: PropTypes.string.isRequired, // Validation ajoutée pour 'section'
  isAdditional: PropTypes.bool
}


export default AccordionWrapper;