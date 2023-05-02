import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Button = () => {
    const [accepted , setAccepted] = useState(false)

    const handleFavoriteDish =()=>{
        setAccepted(true)
        toast("it's my favorite recipe");
    }
    return (
        <div>
          <button disabled={accepted} onClick={handleFavoriteDish} className="btn btn-primary border-none ">Favorite </button>
          <ToastContainer />
        </div>
    );
};
export default Button;