import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.scss'
const Home = lazy(() => import('@Pages/Home/Home'));
const Registration = lazy(()=>import('@Pages/Registration/Registration'));
const Contact = lazy(()=>import('@Pages/Contact/Contact'));
const ComingSoon = lazy(()=>import('@Pages/ComingSoon/ComingSoon'));
const Projects = lazy(()=>import('@Pages/Projects/Projects'));

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home/> },
    {path:'/registration',element:<Registration/>},
    {path:'/contact',element:<Contact/>},
    {path:'/comingsoon',element:<ComingSoon/>},
    {path:'/projects',element:<Projects/>},
  ])
  return (
    <>
      <Suspense fallback="Loading...">
        {routes}
      </Suspense>
    </>
  )
}

export default App
