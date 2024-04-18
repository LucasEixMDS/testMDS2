import PropTypes from 'prop-types';
import "./formation_plannings.scss";

const Formation_plannings = ({ formation }) => {
    const handleDownloadClick = (pdfLink) => {
        window.open(pdfLink, '_blank');
    };

    const plannings = formation?.plannings;

    if (!plannings) {
        return null;
    }

    const colorStyle = {
        color: formation.colorFormation, 
    };
    const backgroundStyle = {
        backgroundColor: formation.colorFormation
    };

    return (
        <div className="plannings-container">
            <div className="planningsContainer">
                <span className='h2' style={colorStyle}>Plannings <span>Cliquez sur la ville pour télécharger le planning</span></span>
                <div className="planningContainerDesktopContainer">
                    {/* Vérifiez si list1 existe et a des éléments avant de l'afficher */}
                    {plannings.list1 && plannings.list1.length > 0 && (
                        <div className="planningContainerDesktop">
                            <p>Cursus du <span style={colorStyle}>{plannings.dateFirst}</span></p>
                            <div className="plannings-list">
                                {plannings.list1.map((planning, index) => (
                                    <button 
                                        style={backgroundStyle}
                                        key={index} 
                                        className="planning-download-button"
                                        onClick={() => handleDownloadClick(planning.pdfLink)}
                                    >
                                        {planning.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Faites de même pour list2 et ainsi de suite pour les autres listes si elles existent */}
                    {plannings.list2 && plannings.list2.length > 0 && (
                        <div className="planningContainerDesktop">
                            <p>Cursus du <span style={colorStyle}>{plannings.dateSecond}</span></p>
                            <div className="plannings-list">
                                {plannings.list2.map((planning, index) => (
                                    <button 
                                        style={backgroundStyle}
                                        key={index} 
                                        className="planning-download-button"
                                        onClick={() => handleDownloadClick(planning.pdfLink)}
                                    >
                                        {planning.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Formation_plannings.propTypes = {
    formation: PropTypes.object.isRequired
};

export default Formation_plannings;