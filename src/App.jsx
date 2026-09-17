import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Movies from './components/Movies';
import FeatuersMovie from './components/FeatuersMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Banner />
            <FeatuersMovie />
          </>
        ),
      },
      
      {
        path: 'movies',
        element: <Movies />,
      },
    ],
  },
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
