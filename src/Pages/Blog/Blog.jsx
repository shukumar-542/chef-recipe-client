import React from 'react';
import Pdf from "react-to-pdf";
import {  ArrowDownTrayIcon } from '@heroicons/react/24/solid'
const ref = React.createRef();


const Blog = () => {
    const options = {
        orientation: 'landscape',
        unit: 'in',
    };
    return (

        <div className='mt-8 w-[90%] mx-auto'>
            

            <div className='flex justify-center items-center gap-5'>
                <h1 className='text-orange-500'>Click Here for download</h1>
                <Pdf  targetRef={ref} filename="blog.pdf" options={options} x={.5} y={.5} scale={0.8} >
                    {({ toPdf }) => <ArrowDownTrayIcon className='h-6 w-6 hover:cursor-pointer hover:text-orange-500' onClick={toPdf}></ArrowDownTrayIcon>}
                </Pdf>
            </div>
            <div className='my-5 py-10' ref={ref}>
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
                        props is a mechanism that passing read only data form parent component to
                        child component. if we don't use the props data correctly then component not
                        behave that we want. to more improving  our component then we need to use props validation.
                        React components used special property PropTypes that help you to catch bugs.

                    </p>
                </div>


                <h1 className='text-2xl'> Q3. Difference between nodejs and express js?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>nodejs : </span>
                        Node.js is an open-source, cross-platform JavaScript runtime environment.It uses the V8
                        JavaScript engine, which is also used by the Google Chrome browser, to execute JavaScript code on the server-side.

                        <span className='font-bold'>express js: </span>

                        Express.js is a popular open-source web application framework for Node.js.Express.js is a powerful and versatile web application framework for Node.js

                    </p>
                </div>

                <h1 className='text-2xl'>Q4. What is a custom hook, and why will you create a custom hook?</h1>
                <div className='my-5 bg-slate-100 p-5 rounded text-xl'>
                    <p>
                        <span className='font-bold'>Custom hook: </span>
                        Custom hook is a special kind of function that allow to share the logic between other component.
                        for using custom hook it can easy to share logic and it's logic is isolated. By creating a custom
                        hook, you can abstract away the implementation details of that logic and expose a simpler, more concise API for other components to use.

                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;