 import img1 from '../../assets/images/about_us/person.jpg';
 import img2 from '../../assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className="lg:w-1/2 relative">
        <img className=' w-3/4' src={img1} alt="" />
        <img className='w-1/2 absolute right-20 -bottom-20 rounded-lg border-8 border-white shadow-2xl ' src={img2} alt="" />
   </div>
    <div className="lg:w-1/2">
        <h1 className='text-orange-600 font-bold text-3xl'>About Us</h1>
      <h2 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h2>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.  </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default AboutUs;