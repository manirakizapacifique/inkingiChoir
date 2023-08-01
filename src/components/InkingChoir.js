import React, { useState, useRef } from 'react';

const StudyingInfo = {
  ICT: {
    DMP: ['Film Production', 'Audio Production', 'Dmp General'],
    IT: ['Software Developer', 'Networking', 'IT GENERAL'],
  },
  CivilEngineering: {
    'Construction-Management': ['Project Management Planning', 'Cost Management', 'Time Management'],
    'Water Engineering': ['Plumbing', 'Pipes maintainer'],
  },
  MechanicalEngineering: {
    AirConditioning: ['Film Production', 'Audio Production', 'Dmp General'],
    Automobile: ['Software Developer', 'Networking', 'IT GENERAL'],
  },
  ElectricalEngineering: {
    AirConditioning: ['Film Production', 'Audio Production', 'Dmp General'],
    Automobile: ['Software Developer', 'Networking', 'IT GENERAL'],
  }
};
const Form = () => {
  const [department, setDepartment] = useState('');
  const [ooption, setOption] = useState('');
  const [field, setFields] = useState('');
  const [gender, setGender] = useState('');
  const formRef = useRef(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
    setOption('');
    setFields('');
  };

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setOption(selectedOption);
    setFields('');
  };
  
  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log('Form submitted:', formObject);

    // Send the form data to the server for database insertion
    fetch('http://localhost:8080/api/data/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data);
        setServerResponse(data); // Store the server response
        setIsFormSubmitted(true); // Set form submission flag
        formRef.current.reset(); // Reset the form

        // Display server response in an alert
        alert(JSON.stringify(data, null, 2));
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occur during the server request

        // Display error message in an alert
        alert('Error occurred while submitting the form. Please try again.');
      });
  };

  const handleGoBack = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Inking Choir Registration Form</h2>
        {!isFormSubmitted ? (
          <form onSubmit={handleFormSubmit} ref={formRef}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name:
              </label>
              <input type="text" id="firstname" name="firstname" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name:
              </label>
              <input type="text" id="lastname" name="lastname" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="(\+250)?(7[28]|78)[0-9]{7}"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth:
              </label>
              <input type="date" id="dob" name="dob" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department:
              </label>
              <select
                id="department"
                name="department"
                className="form-control"
                value={department}
                onChange={handleDepartmentChange}
                required
              >
                <option value="">Select Department</option>
                {Object.keys(StudyingInfo).map((dept) => (
                  <option value={dept} key={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            {department && (
              <div className="mb-3">
                <label htmlFor="option" className="form-label">
                  Option:
                </label>
                <select
                  id="option"
                  name="ooption"
                  className="form-control"
                  value={ooption}
                  onChange={handleOptionChange}
                  required
                >
                  <option value="">Select Option</option>
                  {StudyingInfo[department] &&
                    Object.keys(StudyingInfo[department]).map((opt) => (
                      <option value={opt} key={opt}>
                        {opt}
                      </option>
                    ))}
                </select>
              </div>
            )}
            {ooption && (
              <div className="mb-3">
                <label htmlFor="fields" className="form-label">
                  Fields:
                </label>
                <select
                  id="field"
                  name="field"
                  className="form-control"
                  value={field}
                  onChange={(e) => setFields(e.target.value)}
                  required
                >
                  <option value="">Select Field</option>
                  {StudyingInfo[department][ooption].map((field) => (
                    <option value={field} key={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                className="form-control"
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <p>Form submitted successfully!</p>
            {serverResponse && (
              <div>
                <p>Server Response:</p>
                <pre>{JSON.stringify(serverResponse, null, 2)}</pre>
              </div>
            )}
            <button type="button" className="btn btn-primary" onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
