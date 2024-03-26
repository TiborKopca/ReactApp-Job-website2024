// import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero title="Title" subtitle="Subtitle of the Hero"></Hero>
      <HomeCards></HomeCards>
      <JobListings></JobListings>
      <ViewAllJobs></ViewAllJobs>

    </>
  );
}

export default App;
