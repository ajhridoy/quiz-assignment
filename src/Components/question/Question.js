import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Question = ({ques}) => {
    // console.log(ques)
    const {correctAnswer, options, question} = ques;
    const parts1 = question.split('<p>');
    const optionBtn = (option) => {
        if(correctAnswer === option){
            toast.success('Your Ans is Right', {
                position: "top-center",
                autoClose: 1000,
            })
        }
        else{
            toast.warning('Your Ans is Wrong', {
                position: "top-center",
                autoClose: 1000,
            })
        }
    }
    const eyeBtnHandler = () =>{
        toast.info(correctAnswer, {
            position: "top-center",
            autoClose: 3000,
        })
    }
    return (
        <div className='bg-slate-100 w-3/4 mx-auto p-4 my-8 rounded-lg'>
            <div className='flex justify-between mb-4'>
            <h2 className='text-xl font-semibold w-full'>{parts1[1].split('</p>')}</h2>
            <button className='basis-1/12' onClick={eyeBtnHandler} title="See Correct Ans"><EyeIcon className="h-6 w-6 text-gray-500 hover:text-blue-500 ml-4"/></button>
            </div>
            <div>
                {
                    options.map((option, index) => <Option
                        key={index}
                        option={option}
                        optionBtn={optionBtn}
                    ></Option>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;