import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.scss'
const HomePage = lazy(() => import('@Pages/Home/Home'));
const Registration = lazy(()=>import('@Pages/Registration/Registration'))

function App() {
  const routes = useRoutes([
    { path: '/Home', element: <HomePage /> },
    {path:'/',element:<Registration/>}
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
