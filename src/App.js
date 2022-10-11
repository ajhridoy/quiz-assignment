import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import SingleQuiz from './Components/SingleQuiz/SingleQuiz';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/quiz/:id',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <SingleQuiz></SingleQuiz>
        },
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
