import React, { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QuizContext } from '../../Layouts/Main';


const Statistics = () => {
    const loadData = useContext(QuizContext)
    console.log(loadData)
    return (
        
        <div>
            <h2 className='text-xl font-bold mt-4'>This graph shows how many quizzes each topic has!!</h2>
                 <div className='w-full md:w-3/4 mx-auto my-10'>
                <ResponsiveContainer  width="70%" height={500}>
                <BarChart width={400} height={400} data={loadData}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
                </ResponsiveContainer>
                 
                 </div>
  
        </div>
    );
};

export default Statistics;