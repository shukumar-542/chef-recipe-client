import React from 'react';
import food4 from '../../assets/food4.jpg'
import food2 from '../../assets/food2.jpg'
import food3 from '../../assets/food3.jpg'

const Food = () => {
    return (
        <div>
            <h1 className='text-center text-4xl my-10 '>What's <span className='text-orange-500'>Hot</span></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4  my-container lg:justify-between items-center mb-10 '>

                <div className="card w-auto bg-base-100 shadow-xl mb-4 ">
                    <figure><img src={food4} className='h-52 w-full' alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-500 font-bold text-xl">Pimento Cheese Potato Skins</h2>
                        <p className=' '>Preheat oven to 400°. Pierce each potato a few times with the tines of a fork. Lightly brush each potato with melted butter and sprinkle lightly with salt</p>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl mb-4 ">
                    <figure><img src={food2} className='h-52 w-full' alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-500 font-bold text-xl">Spice Chicken</h2>
                        <p className=' '>In a mortar and pestle or small food processor combine the ginger, shallot, garlic and sugar and smash to form a paste.Freshly ground black pepper</p>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl mb-4 ">
                    <figure><img src={food3} className='h-52 w-full' alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-500 font-bold text-xl">Goat Cheese and Chorizo Rolls</h2>
                        <p className=' '>Lay a sheet of phyllo on a clean, dry work surface and brush it with melted butter. Top with two more sheets, lightly buttering each as you go. Cut the </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;