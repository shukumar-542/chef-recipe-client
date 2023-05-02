import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 w-[90%] mx-auto'>
        <div className='my-5'>
            <h1 className='text-2xl'>Q1. Differences between uncontrolled and controlled components?</h1>
            <div className=' my-5 bg-slate-100 p-5 rounded text-xl space-y-5'>
                <p>
                    <span className='font-bold'>uncontrolled and controlled : </span>
                     
                    Control component does not maintain it's internal state.and data controlled 
                    by the parent component. controlled component accept by the current value
                    as a props.and control component has better control over the form elements and data.
                    but Uncontrolled component maintains by it's internal component and data is
                     controlled by the DOM. uses a ref for their current values.It has limited control
                      over the form elements and data 
                </p>
               

            </div>
            <h1 className='text-2xl'>Q2. How to validate React props using PropTypes?</h1>
            <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                <p>
                    <span className='font-bold'>validate React props : </span>
                    
                </p>
            </div>


            <h1 className='text-2xl'> Q3. Difference between nodejs and express js?</h1>
            <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                <p>
                    <span className='font-bold'>nodejs and express js: </span>
                    Node.js is an open-source, cross-platform JavaScript runtime environment.
                   
                </p>
            </div>

            <h1 className='text-2xl'>Q4. What is a custom hook, and why will you create a custom hook?</h1>
            <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                <p>
                    <span className='font-bold'>useMemo: </span>
                   useMemo  is a built-in hook in React that allows you to optimize
                    the performance of your components by memoizing the result of a function call.
                </p>
            </div>

        </div>
    </div>
    );
};

export default Blog;