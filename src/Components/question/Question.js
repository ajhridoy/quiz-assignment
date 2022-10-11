import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ques}) => {
    console.log(ques)
    const {correctAnswer, options, question} = ques;
    const optionBtn = (option) => {
        console.log(option)
        if(correctAnswer === option){
            alert('Right Ans')
        }
        else{
            alert('wrong ans')
        }
    }
    const eyeBtnHandler = () =>{
        alert(correctAnswer)
    }
    return (
        <div className='bg-slate-100 w-3/4 mx-auto p-4 my-8 rounded-lg'>
            <div className='flex justify-evenly'>
            <h2 className='text-xl font-semibold text-center'>{question}</h2>
            <button onClick={eyeBtnHandler} title="See Correct Ans"><EyeIcon className="h-6 w-6 text-gray-500 hover:text-blue-500"/></button>
            </div>
            <div>
                {
                    options.map(option => <Option
                        option={option}
                        optionBtn={optionBtn}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;