
import "./formation_metier.scss";
import PropTypes from 'prop-types';

function Formation_metier({ formation, svgColor }) { // svgColor est passé en tant que prop
  const objectivesList = formation.objectives && formation.objectives.list 
      ? formation.objectives.list 
      : [];

      const parts = formation.objectives.title.split("::color::");

  return (
    <div className="formation_metier">
      <h2>
      {parts.map((part, index) => {
        if (index === 1) {
            return <span key={index} style={{ color: formation.colorFormation }}>{part}</span>;
        } else {
            return <span key={index}>{part}</span>;
        }
        })}
      </h2>
      
      <ul>
    {objectivesList.map((objective, index) => (
        <li key={index}>
          <div className="containerMobileMetier">
            <svg width="20" height="21" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group">
                          <path id="Vector" d="M9.96094 20.5164C15.4102 20.5164 19.9219 16.0107 19.9219 10.5902C19.9219 5.16003 15.4004 0.664062 9.95117 0.664062C4.51172 0.664062 0 5.16003 0 10.5902C0 16.0107 4.52148 20.5164 9.96094 20.5164Z" fill={svgColor} /> {/* La couleur peut être modifiée ici */}
                          <path id="Vector_2" d="M8.86719 15.3489C8.53516 15.3489 8.26172 15.2127 8.00781 14.8721L5.55664 11.8748C5.41016 11.6802 5.32227 11.466 5.32227 11.2422C5.32227 10.8043 5.66406 10.4442 6.10352 10.4442C6.38672 10.4442 6.60156 10.5318 6.8457 10.853L8.82812 13.4026L12.998 6.7268C13.1836 6.43486 13.4375 6.27916 13.6914 6.27916C14.1211 6.27916 14.5215 6.5711 14.5215 7.02848C14.5215 7.24257 14.3945 7.4664 14.2773 7.67076L9.6875 14.8721C9.48242 15.1933 9.19922 15.3489 8.86719 15.3489Z" fill="white"/>
                      </g>
                  </svg>
            <p>{objective.main}</p>
            </div>
            <div className="containerDesktopMetier">
            <ul>
                {objective.subList.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                ))}
            </ul>
            </div>
        </li>
    ))}
</ul>
    </div>
  );
}

Formation_metier.propTypes = {
  formation: PropTypes.object.isRequired,
  svgColor: PropTypes.string // Ajout du propType pour svgColor
};

export default Formation_metier;