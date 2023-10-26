import { useEffect, useState } from "react";
import Services from "../../Components/Services";
 

 
const Service = () => {
    const [Service,setService]=useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]) 
    console.log(Service);
    return (
        <div>
            <div className="text-center">
                <h2 className="text-orange-600 font-bold text">Service</h2>
                <h1 className="text-5xl py-5 font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    Service.map((item)=><Services key={item._id} item={item}></Services>)
                }
               
            </div>
            <p className="text-center mt-8"><button className="btn btn-primary bg-orange-600 ">More Services</button></p> 
        </div>
    );
};

export default Service;