/* ADD JOB FORM */
import PropTypes from "prop-types"; // Importing PropTypes
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";

const AddJobPage = ({ addJobSubmit }) => {
  //STATE MANAGEMENT FOR THE FORM, some of the input fields have default values
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});

  //NAVIGATION FOR THE LINK COMPONENT
  const navigate = useNavigate();

  //FORM VALIDATION
  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone format (optional field but should be valid if provided)
  //NOTE: it can be 0-15 digits
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{7,15}$/;
    return phone.trim() === "" || phoneRegex.test(phone);
  };

  const validateForm = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Job title is required.";
    if (!location.trim()) errors.location = "Location is required.";
    if (!contactEmail.trim() || !validateEmail(contactEmail)) {
      errors.contactEmail = "A valid email address is required.";
    }
    if (!validatePhone(contactPhone)) {
      errors.contactPhone = "Phone number must be 7-15 digits or empty.";
    }
    if (!companyName.trim()) errors.companyName = "Company name is required.";
    if (!description.trim()) errors.description = "Description is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  //MAIN FUNCTION FOR SUBMITTING THE FORM, called when the submit button is clicked
  function submitForm(e) {
    e.preventDefault();
    //FORM VALIDATION - IF ANY ERRORS, SHOW TOAST AND RETURN
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
    //CREATING THE NEW JOB OBJECT
    const newJob = {
      //it needs to match up the JSON object
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
      },
    };
    //console.log(salary)
    //console.log(newJob)
    //POST REQUEST FUNCTION - UPDATES THE API WITH THE DATA
    addJobSubmit(newJob);
    //TOAST FOR SUCCESSFUL ADDING
    toast.success("Job added successfuly");
    //REDIRECTION TO THE JOBS PAGE
    return navigate("/jobs");
  }

  return (
    <section className="bg-indigo-50">
      <Button label="Go Back"></Button>

      <div className="container m-auto max-w-2xl pb-12">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>
            {/* TYPE OF JOB */}
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            {/* JOB TITLE */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className={`border rounded w-full py-2 px-3 mb-2 ${formErrors.title ? 'border-red-500' : ''}`}
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => validateForm()}
              />
              {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
            </div>
            {/* DESCRIPTION */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className={`border rounded w-full py-2 px-3 mb-2 ${formErrors.description ? 'border-red-500' : ''}`}
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => validateForm()}
              ></textarea>
              {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
            </div>
            {/* SALARY */}
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className='border rounded w-full py-2 px-3 mb-2'
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K" selected>
                  Under $50K
                </option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>
            {/* LOCATION */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className={`border rounded w-full py-2 px-3 mb-2 ${formErrors.location ? 'border-red-500' : ''}`}
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onBlur={() => validateForm()}
              />
              {formErrors.location && <p className="text-red-500 text-sm">{formErrors.location}</p>}
            </div>

            {/* COMPANY INFO */}
            <h3 className="text-2xl mb-5">Company Info</h3>
            {/* COMPANY NAME */}
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className={`border rounded w-full py-2 px-3 mb-2 ${formErrors.companyName ? 'border-red-500' : ''}`}
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                onBlur={() => validateForm()}
              />
              {formErrors.companyName && <p className="text-red-500 text-sm">{formErrors.companyName}</p>}
            </div>
            {/* COMPANY DESCRIPTION */}
            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className={`border rounded w-full py-2 px-3 mb-2 ${formErrors.description ? 'border-red-500' : ''}`}
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                onBlur={() => validateForm()}
                
              ></textarea>
              {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
            </div>
            {/* CONTACT EMAIL */}
            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className={`border rounded w-full py-2 px-3 mb-2 ${formErrors.contactEmail ? 'border-red-500' : ''}`}
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                onBlur={() => validateForm()}
              />
              {formErrors.contactEmail && <p className="text-red-500 text-sm">{formErrors.contactEmail}</p>}
            </div>
            {/* CONTACT PHONE */}
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className={`border rounded w-full py-2 px-3 mb-2 ${formErrors.contactPhone ? 'border-red-500' : ''}`}
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                onBlur={() => validateForm()}
                
              />
              {formErrors.contactPhone && <p className="text-red-500 text-sm">{formErrors.contactPhone}</p>}
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;

AddJobPage.propTypes = {
  addJobSubmit: PropTypes.func,
};
