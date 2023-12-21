/* eslint-disable react/no-unescaped-entities */
import Banner from "../Header/Banner";


const Home = () => {

  

    // const [brands, setBrands] = useState([]);

    // useEffect(() => {
    //     fetch('brands.json')
    //         .then(res => res.json())
    //         .then(data => setBrands(data))

    // }, [])



    return (
        <div>
            
            <Banner></Banner>


            {/* task Section */}
            <div id="brands" className="md:container mx-auto py-32">


                {/* task section */}
                <h2 className="text-center text-6xl font-semibold font-fontTitle pb-4">Who Benefits Most?</h2>
                <hr className="mx-auto w-2/5" />
                <hr className="mx-auto w-2/5 pb-20" />


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-6 w-11/12 xl:w-auto">

                <button className="btn btn-outline btn-accent">Developers 👨‍💻</button>
                <button className="btn btn-outline btn-accent">Corporate Professionals 🏢</button>
                <button className="btn btn-outline btn-accent">Bankers and Financial Experts 💼</button>
                <button className="btn btn-outline btn-accent">Entrepreneurs and Small Business Owners 🚀</button>
                <button className="btn btn-outline btn-accent">Students and Educators 📚</button>
                <button className="btn btn-outline btn-accent">Freelancers 💻</button>
                <button className="btn btn-outline btn-accent">Healthcare Professionals 🏥</button>
                <button className="btn btn-outline btn-accent">Event Planners 🎉</button>
                <button className="btn btn-outline btn-accent">Researchers and Academics 🎓</button>
                <button className="btn btn-outline btn-accent">Remote Workers 🌐</button>

                </div>







            </div>
            
        </div>
    );
};

export default Home;