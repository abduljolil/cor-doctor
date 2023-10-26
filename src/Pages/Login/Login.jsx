 import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../provaider/AuthProvider';
 

const Login = () => {
  const {singIn}= useContext(AuthContext);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const Password =form.password.value;
        console.log(email, Password );
        singIn(email,Password)
        .then(result=>{
          const user =result.user;
          console.log(user);
        })
        .catch((error) =>console.log(error));
    }
    return (
        <div className="hero h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="w-1/2 mr-12">
      <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center mt-4">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className='btn btn-warning' />
        </div>
      </form>
     <div className="text-center pb-5 text-xl"> <p>Have an account?  <Link to='/sing' className='text-blue-600  text-2xl font-bold'> Sing Up </Link></p></div>
    </div>
  </div>
</div>
    );
};

export default Login;