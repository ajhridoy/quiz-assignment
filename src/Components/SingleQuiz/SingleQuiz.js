import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../question/Question';

const SingleQuiz = () => {
    const singleQuiz = useLoaderData().data
    console.log(singleQuiz)
    return (
        <div>
            <h2 className='text-xl font-bold my-5'>Quiz of {singleQuiz.name}</h2>
            <div>
                {
                  singleQuiz.questions.map(question => <Question
                    key={question.id}
                    ques={question}
                  ></Question>)  
                }
            </div>
        </div>
    );
};

export default SingleQuiz;