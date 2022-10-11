import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="px-4 py-5 mx-auto shadow-md sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 bg-gray-200">
      <div className="relative md:flex items-center justify-between">
        <NavLink
          to="/home"
          aria-label="BlissQuiz"
          title="BlissQuiz"
          className="inline-flex items-center"
        >
          <svg
            className="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            BlissQuiz
          </span>
        </NavLink>
        <ul className="md:flex items-center">
          <li>
            <NavLink
              to="/home"
              aria-label="Home"
              title="Home"
              className={({isActive})=> isActive ? 'font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 text-orange-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 hover:text-slate-400'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              aria-label="Statistics"
              title="Statistics"
              className={({isActive})=> isActive ? 'font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 text-orange-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 hover:text-slate-400'}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              aria-label="Blogs"
              title="Blogs"
              className={({isActive})=> isActive ? 'font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 text-orange-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 hover:text-slate-400'}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Header;