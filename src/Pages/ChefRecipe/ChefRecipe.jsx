import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

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
                        <div key={recipe.id} className='flex flex-col px-10  lg:flex-row my-container lg:justify-between space-y-5 items-center mb-10 '>
                            <div className='space-y-4 text-center lg:text-left'>
                                <h2>{recipe?.name}</h2>
                                <p> {recipe?.description}</p>
                                <p>Likes : {recipe?.likes}</p>
                                <p>Experience : {recipe?.years_of_experience}</p>

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
                        return <div key={recipe.id} className='grid grid-cols-3 gap-4  my-container lg:justify-between space-y-5 items-center mb-10 '>
                            {
                                recipe?.recipes?.map((rece, index) => {
                                    return <div className="card w-96 bg-base-100 shadow-xl " key={index}>

                                      
                                            <div className="card-body">
                                                <h2 className="card-title">{rece.name}</h2>
                                                <p>{rece.cooking_method}</p>
                                                <p>1. {rece.ingredients[0]}</p>
                                                <p>2. {rece.ingredients[1]}</p>
                                                <p>3. {rece.ingredients[2]}</p>
                                                <p>4. {rece.ingredients[3]}</p>
                                                <p>5. {rece.ingredients[4]}</p>
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