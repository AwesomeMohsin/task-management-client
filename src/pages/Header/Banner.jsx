import { useNavigate } from "react-router-dom";


const Banner = () => {

    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/dashboard')
    }

  

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/5/main/1SvzKctRCi8bwB0QPdOZkBP0pRhsOqZpl0wjs6y0.png)' }}>
           
            <div className="hero-overlay bg-opacity-20 "></div>
            <div className="hero-content text-center mr-3.5 mx-auto text-white">
            

                <div className="w-11/12 md:w-3/4 space-y-6">
                    <h1 className="mb-5 
                        text-4xl md:text-5xl lg:text-7xl font-fontTitle font-bold ">Empowering Your Digital Journey</h1>
                    
                    <p className="font-fontTitle text-xl md:text-3xl pt-6">Elevate Your Experience!</p>
                    <div>
                        <button onClick={handleExplore} className="btn btn-outline text-white">{`Lets's Explore`}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;