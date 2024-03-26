// import React from 'react'
//COMPONENTS
import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero title="Title" subtitle="Subtitle of the Hero"></Hero>
      <HomeCards></HomeCards>
      <JobListings></JobListings>
      <ViewAllJobs></ViewAllJobs>
    </>
  )
}

export default Homepage