import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-orange-300 m-10 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold mb-4'>What is the Purpose of React Router?</h2>
                <p className='text-lg'>React Router allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience.</p>
            </div>
            <div className='bg-orange-300 m-10 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold mb-4'>How Does Context API Works?</h2>
                <p className='text-lg'>The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling. The Context API makes it easier to have our global and app-wide data available to all components therefore, making it easier and more accessible. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
            </div>
        </div>
    );
};

export default Blogs;