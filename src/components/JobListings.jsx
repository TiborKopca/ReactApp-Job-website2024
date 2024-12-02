/* SHOWS LISTINGS OF JOBS, USED IN HOMEPAGE AND JOBSPAGE */

// import jobs from "../jobs.json"; //deprecated
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; // Importing PropTypes

//isHome also defines with conditional rendering what will be the TITLE(H1) of the page (Homepage or Jobspage)
const JobListings = ({ isHome = false }) => {
  //To see the content of the jobs.json file (deprecated)
  //console.info(jobs);

  //TO SHOW RECENT JOBS, we need to slice the array, so we can show only 3 jobs (deprecated because of the API)
  //const jobListings = isHome ? jobs.slice(0, 3) : jobs; 

  //default value is empty array, it will make the request when the component loads through the useEffect and fill the array with data from the response from the API
  const [jobs, setJobs] = useState([]);
  //loading for the spinner to show loading, once the fetch is complete, we change it to false
  const [loading, setLoading] = useState(true);

  //FETCH DATA
  useEffect(() => {
    //ASYNC FUNCTION, writes data into the jobs array
    const fetchJobs = async () => {
      //Showing different results based on URL, we want show 3 results on Homepage
      const apiURL = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

      //try-catch is not obligatory
      try {
        //THIS IS THE MOST IMPORTANT PART OF THE CODE, THIS IS WHERE THE DATA IS FETCHED
        const res = await fetch(apiURL);
        const data = await res.json();
        //putting the data into the jobs array
        setJobs(data);

      } catch (error) {
        //TEMP ERROR HANDLING
        console.error("Error fetching data", error);
      } finally {
        //this will run either way after try & catch
        setLoading(false);
      }
    };
    //Effect that Fetches data
    fetchJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //upon the change of the variable, it will do stuff, empty array = runs once, without it will be forever in loop
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {/* THIS IS THE TEMPLATE FOR THE JOBS, IT WILL BE REPEATED FOR EACH JOB, with conditional rendering */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job}></JobListing>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

JobListings.propTypes = {
  isHome: PropTypes.bool,
};  
