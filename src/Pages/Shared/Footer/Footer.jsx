import React from 'react';

const Footer = () => {
    return (

        <footer className="footer p-10 bg-gray-900 text-base-content ">
          
            <div className='ms-5'>
                <span className="footer-title text-white">Recipe Categories</span>
                <a className="link link-hover text-white">Beverages</a>
                <a className="link link-hover text-white">Lunch</a>
                <a className="link link-hover text-white">Dessert</a>
                <a className="link link-hover text-white">Main Dishes</a>
            </div>
           
            <div>
                <span className="footer-title text-white">Legal</span>
                <a className="link link-hover text-white">Terms of use</a>
                <a className="link link-hover text-white">Privacy policy</a>
                <a className="link link-hover text-white">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title text-white">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn bg-orange-500 hover:bg-orange-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
         
        </footer>

    );
};

export default Footer;