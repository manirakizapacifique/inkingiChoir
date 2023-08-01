const React = require('react');
const { useState, useEffect } = require('react');
const { Link, useParams, useHistory } = require('react-router-dom');

const EditDataPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/data/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      history.push('/'); // Redirect back to the DataTable after successful update
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Data</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Render editable form fields with initial values from "data" state */}
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="text"
            name="dob"
            value={data.dob}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={data.department}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Option:
          <input
            type="text"
            name="option"
            value={data.option}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Field:
          <input
            type="text"
            name="field"
            value={data.field}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={data.gender}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other fields as needed */}
        <button type="submit">Save Changes</button>
        <Link to="/">Cancel</Link> {/* Add a cancel link to go back to DataTable */}
      </form>
    </div>
  );
};

export default EditDataPage;
