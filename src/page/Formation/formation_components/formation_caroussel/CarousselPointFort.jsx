import './carousselPointFort.scss';
import { useRef, useState, useEffect } from 'react';
import rawData from "../../../../json/CarousselPointFort.json";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function CarrouselFinancement({ filterValues = [], formation }) {
    const sliderRef = useRef(null);
    const progressBarRef = useRef(null);
    const [sliderGrabbed, setSliderGrabbed] = useState(false);
    

    const itemsToDisplay = filterValues.length > 0 
    ? rawData.filter(item => item.idElement.some(id => filterValues.includes(id)))
    : rawData;

    useEffect(() => {
        const slider = sliderRef.current;
        const progressBar = progressBarRef.current;

        const handleScroll = () => {
            progressBar.style.width = `${getScrollPercentage()}%`;
        };

        const handleMouseDown = () => {
            setSliderGrabbed(true);
            slider.style.cursor = 'grabbing';
        };

        const handleMouseUp = () => {
            setSliderGrabbed(false);
            slider.style.cursor = 'grab';
        };

        const handleMouseLeave = () => {
            setSliderGrabbed(false);
        };

        const handleMouseMove = (e) => {
            if (window.innerWidth > 1024) return; // Ne rien faire pour les écrans larges
            if (sliderGrabbed) {
                slider.parentElement.scrollLeft -= e.movementX;
            }
        };
        
        const handleWheel = (e) => {
            if (window.innerWidth > 1024) return; // Ne rien faire pour les écrans larges
            e.preventDefault();
            slider.parentElement.scrollLeft += e.deltaY;
        };

        function getScrollPercentage() {
            return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100);
        }

        slider.parentElement.addEventListener('scroll', handleScroll, { passive: true });
        slider.addEventListener('mousedown', handleMouseDown, { passive: true });
        slider.addEventListener('mouseup', handleMouseUp, { passive: true });
        slider.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        slider.addEventListener('mousemove', handleMouseMove, { passive: true });
        slider.addEventListener('wheel', handleWheel, { passive: true });

        return () => {
            slider.parentElement.removeEventListener('scroll', handleScroll, { passive: true });
            slider.removeEventListener('mousedown', handleMouseDown, { passive: true });
            slider.removeEventListener('mouseup', handleMouseUp, { passive: true });
            slider.removeEventListener('mouseleave', handleMouseLeave, { passive: true });
            slider.removeEventListener('mousemove', handleMouseMove, { passive: true });
            slider.removeEventListener('wheel', handleWheel, { passive: true });
        };
    }, [sliderGrabbed]);

    return (
        <div className="slider-inscription">
            <div className="slider-inscription-outer">
                <div className="slider-inscription-inne" ref={sliderRef}>
                {itemsToDisplay.map(item => (
                <Link to={item.articleLink} key={item.id}>
                    <div className="items">
                        <div className="topContainer">
                            <div className="icon">
                                <span className='h2'>{item.titre} </span>
                                <span className='date'>{item.text} </span>
                            </div>
                        </div>
                        
                        <div className="bottomContainer">
                            <div className="buttons" id="financementDesktop">
                                <button style={{ background: formation.colorFormation}}>En savoir +</button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
                </div>
            </div>
            <div className="progress-bar-inscription-outer" >
                <div className="prog-bar-inscription-inner" ref={progressBarRef} style={{ backgroundColor: formation.colorFormation}}></div>
            </div>
        </div>
    );
}

CarrouselFinancement.propTypes = {
    filterValues: PropTypes.arrayOf(PropTypes.string),
    formation: PropTypes.object
};

export default CarrouselFinancement;
