import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvider";
 

 

const CheckOut = () => {
    const {user}=useContext(AuthContext);
    const service =useLoaderData();
    const {_id,price,title,img}=service;
    const handleSubmit = (e)=>{
        e.preventDefault ();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
       
        const booking = {
          customerName:name,
          price:price,
          date,
          email,
          service:_id,
          img,
          service:title
        }
        console.log(booking);
        fetch('http://localhost:5000/checkOut',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(date=>{
          console.log(date);
        })
    }
     

    return (
     
      <div>
        <h1 className="text-center text-4xl font-bold py-10">{title}</h1>
        <form onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-control">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name" className="input input-bordered" required />
        </div>
         
      <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date"  name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Price</span>
          </label>
          <input type="text"   name="price"defaultValue={'$'+price} className="input input-bordered" required />
        </div> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="Your Email" defaultValue={user?.email} name="email" className="input input-bordered" required />
        </div>
        
      </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-block bg-orange-500" value="Order Confirm" />
          
        </div>
      </form>
      </div>
    
    );
};

export default CheckOut;