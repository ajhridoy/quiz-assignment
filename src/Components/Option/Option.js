import React from 'react';

const Option = ({option, optionBtn}) => {
    // console.log(option)
    return (
        <div>
            <div className='border border-2 border-indigo-600 w-full hover:bg-slate-400 hover:font-bold md:w-2/4 mx-auto my-2 rounded-lg p-3'>
                <button onClick={() => optionBtn(option)}>{option}</button>
            </div>
        </div>
    );
};

export default Option;