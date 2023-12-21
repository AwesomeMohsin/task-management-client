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


            {/* Brand Section */}
            <div id="brands" className="md:container mx-auto py-32">


                {/* brands section */}
                <h2 className="text-center text-6xl font-semibold font-fontTitle pb-4">Tasks</h2>
                <hr className="mx-auto w-2/5" />
                <hr className="mx-auto w-2/5 pb-20" />

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
                    {
                        brands.map(brand => <BrandCard
                            key={brand.id}
                            brand={brand}
                        ></BrandCard>)
                    }
                </div> */}







            </div>
            
        </div>
    );
};

export default Home;