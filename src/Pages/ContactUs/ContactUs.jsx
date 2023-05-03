import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-center my-4 text-orange-500 text-4xl font-bold'>Contact Us</h1>
            <div className='space-y-4 my-10 flex flex-col justify-center items-center '>
                <div className="form-control w-1/2 ">
                    <input type="name" name='name' placeholder="Enter Name" className="input input-bordered " />
                </div>
                <div className="form-control w-1/2 ">
                    <input type="email" name='email' placeholder="Enter Email" className="input input-bordered " />
                </div>
                <div className="form-control w-1/2 ">
                <textarea className="textarea input-bordered" placeholder="Message" ></textarea>
                </div>
                <button className='btn btn-primary border-none w-1/2'>Send</button>
            </div>
        </div>
    );
};

export default ContactUs;