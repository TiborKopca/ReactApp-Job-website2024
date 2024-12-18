
//MAIN LAYOUT COMPONENT - Navbar, Outlet, Toaster
import MainLayout from "./layouts/MainLayout";
//SUBPAGES
import Homepage from "./pages/Homepage";
import Jobspage from "./pages/Jobspage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

//ROUTER
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  //ADD NEW JOB/ENTRY 
  //POST REQUEST from the new job form === updates the API with the data
  //ALL ROUTES TO EXTERNAL API ARE SET UP IN vite.config.js VIA PROXY
  const addJob = async (newJobData) => {
    // console.log(newJobData);
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJobData),
    });
    return res;
  };

  //DELETE JOB/ENTRY 
  //DELETE REQUEST from the job detail page === updates the API with the data
  const deleteJob = async (id) => {
    // console.log('delete',id)
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return res;
  };

  //UPDATE/EDIT JOB/ENTRY
  const updateJob = async (job) => {
    // console.log(newJobData);
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return res;
  };

  //CREATING ROUTER
  const router = createBrowserRouter(
    //CREATING ROUTES DEPENDING ON THE PATH
    createRoutesFromElements(
      //PARENT ROUTE WITH SUBROUTES
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/jobs" element={<Jobspage />} />
          <Route
            path="/add-job"
            element={<AddJobPage addJobSubmit={addJob} />}
          />
          <Route
            path="/jobs/:id"
            element={<JobPage deleteJob={deleteJob} />}
            loader={jobLoader}
          />
          <Route
            path="/edit-job/:id"
            element={<EditJobPage updateJobSubmit={updateJob} />}
            loader={jobLoader}
          />
        </Route>
        {/* PATH OF 404 PAGE, EXCLUDED FROM THE MAIN LAYOUT */}
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
