import React, { useEffect, useState } from 'react';
import img from '../../assets/header1.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    console.log(chefs);
    return (
        <div>
            <div className=''>
                <div className='flex flex-col px-10  lg:flex-row my-container lg:justify-between space-y-5 items-center mb-10 '>
                    <div className='space-y-4 text-center lg:text-left'>
                        <h1 className='font-extrabold text-5xl lg:w-1/2'>One Step Closer To Your <span className='text-purple-600'>Dream Job</span></h1>
                        <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        
                    </div>
                    <div className='w-4/5'>
                        <img src={img} className='rounded-lg' alt="" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4  my-container lg:justify-between space-y-5 items-center mb-10 '>

                {
                    chefs?.map(chef=>(<div key={chef?.id} className="card w-96 bg-base-100 shadow-xl ">
                    <figure><img src={chef.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chef?.name}</h2>
                        <p>Year Of experience  : {chef?.years_of_experience}</p>
                        <p>Total Recipe : {chef?.num_recipes}</p>
                        <p>Likes : {chef?.likes}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/recipe/:${chef?.id}`}>
                            <button className="btn btn-primary">View Recipe</button>
                            </Link>
                        </div>
                    </div>
                </div>))
                }

                

            </div>
        </div>
    );
};

export default Home;