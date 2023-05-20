import person from '../../../assets/images/About_us/person.jpg'
import child from '../../../assets/images/About_us/child.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className='lg:w-1/2 relative'> 
         <img src={person} className="w-2/4 rounded-lg shadow-2xl mx-3" />
         <img src={child} className="w-1/2 absolute right-8 top-1/4 border-8 rounded-lg shadow-2xl" />
         </div>
          <div className='lg:w-1/2'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
            <h3 className="text-2xl font-bold">Experience the joy of baby toys</h3>
            <p className="py-6">The best selection of baby toys in Bangladesh at our store! We offer a wide range of safe, educational and fun toys for babies of all ages. Our toys are designed to promote developmental skills, encourage imaginative play and provide endless hours of enjoyment for your little one. Made from high-quality materials, our toys are both durable and affordable. Whether you’re looking for a cute stuffed animal, interactive toy or educational puzzle, we have it all. Order now and bring a smile to your baby’s face with our top-rated baby toys in Bangladesh!</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;