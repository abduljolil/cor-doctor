import AboutUs from "./AboutUs";
import Bannar from "./Bannar";
import Service from "./Service";

 

const Home = () => {
    return (
        <div className="space-y-7">
           <Bannar></Bannar>
           <AboutUs></AboutUs>
           <Service></Service>
        </div>
    );
};

export default Home;