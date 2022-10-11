import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Quiz = ({quiz}) => {
    const {id, logo, name, total} = quiz;
    const nevigate = useNavigate();
    const quizBtnHandler = () =>{
        nevigate(`/quiz/${id}`)
    }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="overflow-hidden transition-shadow duration-300 bg-slate-700 text-white rounded-lg shadow-sm">
          <img
            src={logo}
            className="object-cover w-50 mx-auto h-50 p-4"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <h2 className='text-2xl font-bold'>{name}</h2>
            <div className='flex justify-around items-center mt-3'>
                <p className='text-xl font-semibold'>Total Quiz: {total}</p>
                <button onClick={quizBtnHandler} className='p-3 font-bold tracking-wide rounded-md bg-violet-400 text-gray-900 hover:bg-violet-200 flex'><span>Start Quiz</span> <span><ArrowRightIcon className="h-6 w-6 text-black-500 ml-2"/></span></button>
            </div>
          </div>
        </div>
    </div>
    );
};

export default Quiz;