import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
   console.error(error);
    return (
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>{error.status}
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, an unexpected error has occurred.</p>
			<p className='my-5 text-bold text-xl'>
        <i>{error.statusText || error.message}</i>
      </p>
			<Link rel="noopener noreferrer" to='/home' className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
		</div>
	</div>
    );
};

export default Error;