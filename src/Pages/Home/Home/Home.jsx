import About from "../About/About";
import Banner from "../Banner/Banner";
import GallerySection from "../Gallary/Gallary";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <GallerySection></GallerySection> 
          <ShopByCategory></ShopByCategory>
          <About></About>
        </div>
    );
};

export default Home;