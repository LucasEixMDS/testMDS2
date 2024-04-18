import "./carouselHomeImage.scss"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ImageCarousel = () => {
  const handleDragStart = (e) => e.preventDefault();

  const images = [
    { url: '/hebergement2.webp', alt: 'La cours extérieur du centre Mélodie des sens' },
    { url: '/2error404.webp', alt: 'une peinture du logo MDS sur la plage' },
    { url: '/devanture.jpeg', alt: 'Devanture du centre de formation MDS' },
    { url: '/ecoleMassage.webp', alt: 'une peinture du logo MDS sur la plage' },
  ];

  const carouselItems = images.map((image, index) => (
    <img key={index} src={image.url} alt={image.alt} onDragStart={handleDragStart} role="presentation" style={{width: "100%", height: "auto", objectFit: "contain", borderRadius: "20px", maxHeight:"600px" }} />
  ));

  return <AliceCarousel mouseTracking items={carouselItems} />;
};

export default ImageCarousel;
