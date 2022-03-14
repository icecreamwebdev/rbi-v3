import React from 'react';
import TestPlay from './TestomonialSlider';
import getWindowSize from '../../utils/GetWindowSize';
import { useState } from 'react';
import { useEffect } from 'react';

const Testomonials = () => {


    const [width, setWidth] = useState(0)

    useEffect(()=> {

        setWidth(()=> getWindowSize())

    }, [])

    return (
        <>
        <div className='bg-primary w-full flex justify-center p-7 z-10'>
        <div className='max-w-2xl flex flex-col justify-center items-center w-full'>
        
        
        <h1 className='text-2xl flex justify-center font-base uppercase h-min pb-3 pt-5 text-alt '>Testimonials</h1>
        <div className='w-20 flex justfiy-center h-0.5 rounded bg-gray-300 m-auto mt-0 pt-0'></div>

        <p className='text-center text-sm text-gray-100 opacity-80 font-light mt-5'>...stop it, you’re making us blush!</p>



        <div className='bg-primary py-10 w-full pb-10'>
        <TestPlay width={width}/>
        </div>
        </div>

        
       
        
        
        </div>

        </>
    );
};

export default Testomonials;