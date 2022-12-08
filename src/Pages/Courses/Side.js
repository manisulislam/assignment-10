import { useLoaderData } from "react-router-dom";


const Side = () => {
    const leftSide = useLoaderData()
    const {title, details, image}= leftSide;

    

  
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

          
        </div>
    );
};

export default Side;