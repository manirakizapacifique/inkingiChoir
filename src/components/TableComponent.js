import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8080/api/data/')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleDelete = (inkId) => {
    fetch(`http://localhost:8080/api/data/${inkId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          fetchData(); // Refresh data after successful deletion
        } else {
          console.error('Error deleting data:', response.status);
        }
      })
      .catch(error => console.error('Error deleting data:', error));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedData(data[index]);
  };

  const handleSave = (inkId) => {
    // Update the data for the row with the given inkId
    fetch(`http://localhost:8080/api/data/${inkId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    })
      .then(response => {
        if (response.ok) {
          setEditIndex(-1); // Exit edit mode after successful update
          fetchData();
        } else {
          console.error('Error updating data:', response.status);
        }
      })
      .catch(error => console.error('Error updating data:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Department</th>
          <th>Option</th>
          <th>Field</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="firstname"
                  value={editedData.firstname || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.firstname
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="lastname"
                  value={editedData.lastname || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.lastname
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="phone"
                  value={editedData.phone || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.phone
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="dob"
                  value={editedData.dob || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.dob
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="email"
                  value={editedData.email || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.email
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="department"
                  value={editedData.department || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.department
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="option"
                  value={editedData.option || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.option
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="field"
                  value={editedData.field || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.field
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  type="text"
                  name="gender"
                  value={editedData.gender || ''}
                  onChange={handleInputChange}
                />
              ) : (
                row.gender
              )}
            </td>
            <td>
              {editIndex === index ? (
                <>
                  <button onClick={() => handleSave(row.inkId)}>Save</button>
                  <button onClick={() => setEditIndex(-1)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleDelete(row.inkId)}>Delete</button>
                  <button onClick={() => handleEdit(index)}>Edit Data</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
