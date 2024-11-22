/* GENERIC BUTTON COMPONENT */
import proptypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Button({ label = "Generic Button" }) {
  const navigate = useNavigate(); // Hook to navigate programmatically

  //IF THERE IS SET UP ROUTER LINK IN PARENT COMPONENT == USE THAT, OTHERWISE USE NAVIGATE
  const handleGoBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="container m-auto max-w-2xl">
    
      <button
        className="w-auto mr-auto max-w-2xl bg-indigo-500  hover:bg-indigo-600 text-white font-bold py-4 px-4 rounded text-lg shadow-md text-center flex justify-start items-center"
        onClick={handleGoBack} // Attach the click handler
      >
        <FaArrowLeft className="mr-2"></FaArrowLeft>
        {label}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  label: proptypes.string,
};
