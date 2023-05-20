import './gallary.css'
import Marquee from 'react-fast-marquee';
const GallerySection = () => {
  const imageUrls = [ 
    'https://i.ibb.co/GxRjq6T/3626082a.webp',
    'https://i.ibb.co/T276Wv9/9957406a.webp',
    'https://i.ibb.co/GVgSqRF/07-15-2022-Curlfriends-05-2048x.jpg',
    'https://i.ibb.co/KDCtwk6/girl-gives-gifts.jpg',
    'https://i.ibb.co/PQFN45F/cqo-JDFA-7h-OHlf-Rh-Bn-Ij-EPUBq-S-FTx-R3k01-KEDb-UPvl-Hgig-b2qzvgh-PAlvfxj-TWcbtsp-Bxtr-RM4w-Yr-AKNK.jpg',
    'https://i.ibb.co/J7xHDY9/cuddle-kind-cuddle-kind-hand-knit-doll-little.png',
    'https://i.ibb.co/cJk0nfj/Cuddle-Kind-Zoe-The-Unicorn-5000x.jpg',
    'https://i.ibb.co/BsWVXzz/sharome-montesorri-open-ended-kids-toys-zoe-doll-minikane-blonde-hair-brown-eyes-3.jpg'
    
  ];
  
  return (
    <div className='marquee'>
        <h2 className='font-bold text-4xl'>Gallary Section</h2>
        <Marquee>
  
  <div className="gallery-section">
        
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
</Marquee>

    </div>
  );
};

export default GallerySection;
