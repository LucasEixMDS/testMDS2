import { useRef, useState, useEffect } from 'react';
import "./caroussel_formateur.scss";
import rawData from "../../../../json/CarousselFormateur.json";
import { useLocation } from 'react-router-dom';

function CarrouselFormation() {
    const sliderRef = useRef(null);
    const progressBarRef = useRef(null);
    const [sliderGrabbed, setSliderGrabbed] = useState(false);
    const location = useLocation();
    
    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    useEffect(() => {
        // Le calcul de currentPathSlug est maintenant à l'intérieur de useEffect
        const currentPathSlug = location.pathname.split("/").pop();
        const filteredItems = rawData.filter(item => item.idElement.includes(currentPathSlug));
        setItemsToDisplay(filteredItems);
    }, [location.pathname]); // location.pathname est la véritable dépendance

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
            if (sliderGrabbed) {
                slider.parentElement.scrollLeft -= e.movementX;
            }
        };

        const handleWheel = (e) => {
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
            slider.removeEventListener('wheel', handleWheel);
        };
    }, [sliderGrabbed]);

    return (
        <div className="slider-formateur">
            <div className="slider-formateur-outer">
                <div className="slider-formateur-inner" ref={sliderRef}>
                {itemsToDisplay.map(item => (
                    <div key={item.idElement}>
                        <div className="background"  style={{ backgroundImage: `url(${item.photo})` }}>
                        <div className="items">
    
                            <div className="midContainer">
                                <span className='h2'><strong>{item.title} </strong></span>
                                <span className='h3'>{item.text} </span>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="progress-bar-formateur-outer">
                <div className="prog-bar-formateur-inner" ref={progressBarRef}></div>
            </div>
        </div>
    );
}



export default CarrouselFormation;
