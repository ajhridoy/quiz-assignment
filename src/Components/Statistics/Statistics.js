import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QuizContext } from '../../Layouts/Main';


const Statistics = () => {
    const loadData = useContext(QuizContext)
    console.log(loadData)
    return (
        
        <div>
            <h2 className='text-xl font-bold mt-4'>This graph shows how many quizzes each topic has!!</h2>
                 <div className='w-full md:w-2/4 lg:mx-auto my-10'>
                 <BarChart width={500} height={400} data={loadData}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
                 </div>
  
        </div>
    );
};

export default Statistics;