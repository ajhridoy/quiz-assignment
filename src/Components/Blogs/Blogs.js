import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-orange-300 m-10 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold mb-4'>What is the Purpose of React Router?</h2>
                <p className='text-lg'>React Router allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience.</p>
            </div>
        </div>
    );
};

export default Blogs;