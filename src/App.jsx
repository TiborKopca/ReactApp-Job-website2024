// import React from 'react'

//PAGES
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import Jobspage from './pages/Jobspage';
import NotFound from './pages/NotFound';

//ROUTER
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    //CREATING ROUTES DEPENDING ON THE PATH
    createRoutesFromElements(
      //PARENT ROUTE WITH SUBROUTES
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage/>} />
        <Route path='/jobs' element={<Jobspage/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>

    )
  )
  return <RouterProvider router={router}/>

}

export default App;
