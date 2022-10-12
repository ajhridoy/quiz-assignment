import React, { useContext, useState } from 'react';
import { QuizContext } from '../../Layouts/Main';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useContext(QuizContext)
    // console.log(quizes);
    return (
        <div>
            <div>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-2">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://img.freepik.com/premium-vector/flat-thinking-concept_23-2148163823.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Answer The Questions
            <br className="hidden md:block" />
            <span className="inline-block text-deep-purple-accent-400">
                to Judge YourSelf
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          <span className='text-orange-600 font-medium'>BlissQuiz</span> is a platform where you can judge yourself by taking some quizzes in a fun way. So, to check yourself, select any of the topics below and take the quiz now..!!
          </p>
        </div>
      </div>
    </div>
        </div>
        <h2 className='text-3xl font-bold mt-8'>Quiz Topics</h2>
        <div className="grid gap-5 lg:grid-cols-2 sm:max-w-full sm:mx-auto lg:max-w-full">
            {
                quizes.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
        </div>
    );
};

export default Home;