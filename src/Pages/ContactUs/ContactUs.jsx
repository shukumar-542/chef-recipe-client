import React from 'react';
import food from '../../assets/food5.jpg'
import food2 from '../../assets/food6.jpg'
import food3 from '../../assets/food4.jpg'
import food4 from '../../assets/food2.jpg'

 
const ContactUs = () => {
    return (
        <div className='grid lg:grid-cols-2 my-container items-center'>
            <div>
                <h1 className='text-center my-4 text-orange-500 text-4xl font-bold'>Best Recipe Week</h1>
                <div className='grid grid-cols-2 my-4 gap-2'>
                    <img src={food} className='h-full w-full' alt="" />
                    <img src={food2} className='h-full w-full' alt="" />
                    <img src={food3} className='h-full w-full' alt="" />
                    <img src={food4} className='h-full w-full' alt="" />
                </div>

            </div>
            <div>
            <h1 className='text-center my-4 text-orange-500 text-4xl font-bold'>Contact Us</h1>
            <div className='space-y-4 my-10 flex flex-col justify-center items-center px-10'>
                <div className="form-control w-full ">
                    <input type="name" name='name' placeholder="Enter Name" className="input input-bordered " />
                </div>
                <div className="form-control w-full ">
                    <input type="email" name='email' placeholder="Enter Email" className="input input-bordered " />
                </div>
                <div className="form-control w-full ">
                <textarea className="textarea input-bordered" placeholder="Message" ></textarea>
                </div>
                <button className='btn btn-primary border-none w-full'>Send</button>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;