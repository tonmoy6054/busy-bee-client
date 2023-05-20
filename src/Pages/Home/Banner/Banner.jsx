import img1 from '../../../assets/Banner/img-1.jpg'
import img2 from '../../../assets/Banner/img-2.jpg'
import img3 from '../../../assets/Banner/img-3.jpg'
import img4 from '../../../assets/Banner/img-4.jpg'
import '../Banner/Banner.css'
const Banner = () => {
    return (
        <div className='parent-banner'>
          <div className='flex w-97 m-5'>
          <h2 className='font-bold text-2xl mt-5'><ul><li>1.Department
Toys & Games</li>
<li>2.Baby Musical Toys</li>
3.Sorting & Stacking Toys <br></br>
4.Stuffed Animals & Teddy Bears 
5.Activity Cubes 
6.Learning & Education Toys 
7.Dog Squeak Toys 
8.Baby Products</ul></h2>

          <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-97" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-97 h-97" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
};

export default Banner;