import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.scss'
const Home = lazy(() => import('@Pages/Home/Home'));
const Registration = lazy(()=>import('@Pages/Registration/Registration'));
const Contact = lazy(()=>import('@Pages/Contact/Contact'));

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home/> },
    {path:'/registration',element:<Registration/>},
    {path:'/contact',element:<Contact/>}
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
