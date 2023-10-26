 

const Services = ({item}) => {
    const {img,title,price}=item;
    return (
        <div className="card mt-8 bg-base-100 shadow-xl">
        <figure><img className="w-full h-[208px] " src={img} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="text-orange-600 text-2xl">Price:${price}</p>
        </div>
        </div>
    );
};

export default Services;