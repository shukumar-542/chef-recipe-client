import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ChefRecipe = () => {
    const { id } = useParams()
    // const chefRecipes = useLoaderData();
    const[chefRecipes, setChefRecipes] = useState([])
    const [spinner, setSpinner] = useState(true)
    // const navigation = useNavigation()
    // if(navigation.state === 'loading'){
    //     console.log('inside loading');
    // }

    useEffect(()=>{
        fetch(`http://localhost:3000/recipe/${id}`)
        .then(res => res.json())
        .then(data => setChefRecipes(data))
        setSpinner(false)
    },[])

    if(spinner){
        return <Loading></Loading>
    }
    return (
        <div>

            <div className=''>
                {
                    chefRecipes?.map(recipe => (
                        <div key={recipe.id} className='flex flex-col px-10 gap-5 lg:flex-row my-container lg:justify-between space-y-5 items-center mb-10 '>
                            <div className='space-y-4 text-center lg:text-left'>
                                <h2 className='text-3xl font-bold text-orange-500'>Name : {recipe?.name}</h2>
                                <p className='text-orange-500'> {recipe?.description}</p>
                                <p>Experience : {recipe?.years_of_experience} Year</p>
                                <p>Likes : {recipe?.likes}</p>

                            </div>
                            <div className='w-4/5'>
                                <img src={recipe.picture} className='rounded-lg' alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* display recipe in card  */}


                {
                    chefRecipes?.map(recipe => {
                        return <div key={recipe.id} className='grid grid-cols-3 gap-4  my-container lg:justify-between  items-center mb-10 '>
                            {
                                recipe?.recipes?.map((cock, index) => {
                                    return <div className="card w-96 h-full bg-base-100 shadow-xl " key={index}>

                                      
                                            <div className="card-body">
                                                <h2 className="card-title text-2xl text-orange-500 my-4">{cock.name}</h2>
                                                <h2 className='text-xl font-bold'>Ingredient</h2>
                                                <p>1. {cock.ingredients[0]}</p>
                                                <p>2. {cock.ingredients[1]}</p>
                                                <p>3. {cock.ingredients[2]}</p>
                                                <p>4. {cock.ingredients[3]}</p>
                                                <p>5. {cock.ingredients[4]}</p>
                                                <h2 className='text-xl font-bold'>cooking method</h2>
                                                <p>{cock.cooking_method}</p>
                                                <p className='flex'>Rating : 
                                                <Rating style={{ maxWidth: 100 }} value={cock.rating} readOnly  /></p>

                                                <div className="card-actions justify-end">
                                                    <Button></Button>
                                                </div>
                                            </div>
                                      
                                    </div>
                                })
                            }
                        </div>
                    })
                }



            </div>
    );
};

export default ChefRecipe;