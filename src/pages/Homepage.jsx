// import React from 'react'
//COMPONENTS
import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero></Hero>
      <HomeCards></HomeCards>
      <JobListings isHome={true}></JobListings>
      <ViewAllJobs></ViewAllJobs>
    </>
  )
}

export default Homepage