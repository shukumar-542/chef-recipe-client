import React, { useEffect, useState } from 'react';
import img from '../../assets/header1.jpg'
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { LazyLoadImage } from "react-lazy-load-image-component"
import ContactUs from '../ContactUs/ContactUs';
import Food from '../Food/Food';

const Home = () => {

    const [chefs, setChefs] = useState([])
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        fetch('https://food-mart-server-shukumar-542.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
        setSpinner(false)
    }, [])


    if (spinner) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className=''>
                <div className='flex flex-col px-10  lg:flex-row my-container lg:justify-between space-y-5 items-center mb-10 '>
                    <div className='space-y-4 text-center lg:text-left'>
                        <h1 className='font-extrabold text-5xl lg:w-1/2 text-orange-500'>Enjoy Cooking</h1>
                        <p className='text-gray-500 text-5xl font-bold'>Browse Thought Over 500 Recipes</p>

                    </div>
                    <div className='sm:w-96 lg:w-1/2'>
                        <LazyLoadImage src={img} className='rounded-lg' alt="" />
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4  my-container lg:justify-between sm:mx-2 mb-10 '>

                {
                    chefs?.map(chef => (<div key={chef?.id} className="card w-auto bg-base-100 shadow-xl mb-4 ">
                        <figure><LazyLoadImage src={chef.picture} alt="img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-orange-500 font-bold text-2xl">{chef?.name}</h2>
                            <p className='text-xl '>Year Of experience  : {chef?.years_of_experience}</p>
                            <div className='flex my-2'>
                                <p className='font-bold'>Total Recipe : {chef?.num_recipes}</p>
                                <p className='font-bold'>Likes : {chef?.likes}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/recipe/${chef?.id}`}>
                                    <button className="btn btn-primary border-none">View Recipe</button>
                                </Link>
                            </div>
                        </div>
                    </div>))
                }



            </div>

            <Food></Food>

            {/* Contact us Section  */}
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;