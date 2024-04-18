import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ImageCarousel = ({ images }) => {
  const handleDragStart = (e) => e.preventDefault();

  const carouselItems = images.map((item, index) => (
    <img
      key={index}
      src={item.src}
      alt={item.alt || "Image description"} // Utilisez une description par défaut si aucune n'est fournie
      onDragStart={handleDragStart}
      role="presentation"
      style={{width: "100%", height: "auto", objectFit: "contain", borderRadius: "20px", maxHeight: "600px"}}
    />
  ));

  return <AliceCarousel mouseTracking items={carouselItems} />;
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })).isRequired,
};

export default ImageCarousel;