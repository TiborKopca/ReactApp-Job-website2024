/* HANDLES THE MAIN LANDING PAGE - HOME */

import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero title = 'Become a Real React Dev'></Hero>
      <HomeCards></HomeCards>
      <JobListings isHome={true}></JobListings>
      <ViewAllJobs></ViewAllJobs>
    </>
  )
}

export default Homepage