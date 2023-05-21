

const Card = ({data}) => {
    const {name, picture, rating, price} = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-orange-500">Price :{price}</h2>
    <h2 className="card-title">Rating :{rating}</h2>
    
    <div className="card-actions">
      <button className="btn btn-info font-bold">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Card;