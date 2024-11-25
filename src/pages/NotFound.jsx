// import React from 'react'
import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

const NotFound = () => {
  const bgImage = '../src/assets/images/vecteezy_404-error-page-vector-free-download_10886263.jpg';

  return (
    <section className={`text-center flex flex-col justify-evenly items-center min-h-screen bg-[url('${bgImage}')] bg-cover bg-center bg-no-repeat`}>
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4"></FaExclamationTriangle>
      <h1 className="text-6xl font-bold mb-4">{}</h1>
      <p className="text-xl mb-5">{}</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back
    </Link>
    </section>
  )
}

export default NotFound