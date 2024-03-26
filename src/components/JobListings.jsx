/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// import React from 'react'
// import jobs from "../jobs.json"; //deprecated 

import { useState, useEffect } from "react";
import JobListing from "./JobListing";

const JobListings = ( {isHome = false} ) => {
  //console.info(jobs);
  //const jobListings = isHome ? jobs.slice(0, 3) : jobs; //deprecated from localhost JSON file
  
  //default value is empty array, it will make the request when the component loads through the useEffect and fill the array with data from the response from the API
  const [jobs, setJobs] = useState([]);
  //loading for the spinner to show loading, once the fetch is complete, we change it to false
  const [loading, setLoading] = useState(true);

  //upon the change of the variable, it will do stuff, empty array = runs once, without it will be forever in loop 
  useEffect(()=> {
    const fetchJobs = async () => {
      //try-catch is not obligatory
      try {
        const res = await fetch('http://localhost:4000/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        //this will run either way after try & catch
        setLoading(false);
      }
    };
    //Effect that Fetches data
    fetchJobs();
  },[]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs': 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job}></JobListing>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
