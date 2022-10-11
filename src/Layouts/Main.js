import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';

export const QuizContext = createContext([]);
const Main = () => {
    const quizes = useLoaderData().data
    return (
        <div>
            <QuizContext.Provider value={quizes}>
            <Header></Header>
            <Outlet></Outlet>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;