import { useLoaderData } from "react-router-dom";

const Details = () => {
    const CaDetails = useLoaderData('');
    const {name, image, price, rating, about} = CaDetails;
    return (
        <div>
            <div className="card w-full items-center lg:py-20 md:py-20 p-6 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">
                        {name}
                    </h2>
                    <p>{about.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{rating}</div>
                        <div className="badge badge-outline">{price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;