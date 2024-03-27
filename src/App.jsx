/* eslint-disable no-unused-vars */
// import React from 'react'

//PAGES
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import Jobspage from './pages/Jobspage';
import NotFound from './pages/NotFound';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

//ROUTER
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom'
 
function App() {
  //POST REQUEST from the new job form
  const addJob = async (newJobData) => {
    // console.log(newJobData);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJobData),
    });
    return;
  };

  //CREATING ROUTER
  const router = createBrowserRouter(
    //CREATING ROUTES DEPENDING ON THE PATH
    createRoutesFromElements(
      //PARENT ROUTE WITH SUBROUTES
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage/>} />
        <Route path='/jobs' element={<Jobspage/>} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
        <Route path='*' element={<NotFound/>} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App;
