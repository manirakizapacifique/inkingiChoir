import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Form = () => {
  const [status, setStatus] = useState('');
  const [yearOfStudies, setYearOfStudies] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [contributionPeriod, setContributionPeriod] = useState('');
  const [contribution, setContribution] = useState('');
  const [totalContribution, setTotalContribution] = useState('');

  useEffect(() => {
    const firstName = localStorage.getItem('firstnamee');
    const lastName = localStorage.getItem('lastnamee');
    document.getElementById('firstnamee').value = firstName;
    document.getElementById('lastnamee').value = lastName;
  }, []);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleYearOfStudiesChange = (e) => {
    setYearOfStudies(e.target.value);
    setEndDate('');
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    calculateEndDate(e.target.value, yearOfStudies);
  };

  const calculateEndDate = (startDate, yearOfStudies) => {
    if (yearOfStudies === '1') {
      setEndDate(new Date(startDate).toISOString().slice(0, 16));
    } else if (yearOfStudies === '2') {
      const endDate = new Date(new Date(startDate).setFullYear(new Date(startDate).getFullYear() + 2)).toISOString().slice(0, 16);
      setEndDate(endDate);
    } else if (yearOfStudies === '3') {
      const endDate = new Date(new Date(startDate).setFullYear(new Date(startDate).getFullYear() + 3)).toISOString().slice(0, 16);
      setEndDate(endDate);
    }
  };

  const handleContributionPeriodChange = (e) => {
    setContributionPeriod(e.target.value);
    setContribution('');
    setTotalContribution('');
  };

  const handleContributionChange = (e) => {
    setContribution(e.target.value);
    calculateTotalContribution(e.target.value, contributionPeriod);
  };

  const calculateTotalContribution = (contribution, contributionPeriod) => {
    let totalContribution;
    if (contributionPeriod === 'd') {
      totalContribution = contribution * 365;
    } else if (contributionPeriod === 'm') {
      totalContribution = contribution * 12;
    } else if (contributionPeriod === 'q') {
      totalContribution = contribution * 3;
    } else if (contributionPeriod === 's') {
      totalContribution = contribution * 2;
    } else if (contributionPeriod === 'y') {
      totalContribution = contribution * 1;
    }
    setTotalContribution(totalContribution);
  };

  return (
    <div className="container">
      <form method="POST" id="form">
        <h2>Inkingi Choir Contribution Form</h2>

        <div className="mb-3">
          <label htmlFor="PostInkingi" className="form-label">POST INKING</label>
          <input type="radio" id="PostInkingi" name="status" value="PostInkingi" className="form-check-input" checked={status === 'PostInkingi'} onChange={handleStatusChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="Current" className="form-label">Current Student</label>
          <input type="radio" id="Current" name="status" value="Current" className="form-check-input" checked={status === 'Current'} onChange={handleStatusChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name:</label>
          <input type="text" id="firstnamee" name="firstnamee" required className="form-control"  />
        </div>

        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name:</label>
          <input type="text" id="lastnamee" name="lastnamee" required className="form-control"  />
        </div>

        {status === 'Current' && (
          <div className="mb-3">
            <label htmlFor="yearOfStudies" className="form-label">Year of Studies:</label>
            <select id="yearOfStudies" name="yearOfStudies" value={yearOfStudies} onChange={handleYearOfStudiesChange} className="form-select">
              <option value="">Select Year of Studies</option>
              <option value="1">Year One</option>
              <option value="2">Year Two</option>
              <option value="3">Year Three</option>
            </select>
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="startdate" className="form-label">Start Date:</label>
          <input type="date" id="startdate" name="startdate" required value={startDate} onChange={handleStartDateChange} className="form-control" />
        </div>

        {yearOfStudies !== '' && (
          <div className="mb-3">
            <label htmlFor="enddate" className="form-label">End Date:</label>
            <input type="datetime-local" id="enddate" name="enddate" required value={endDate} readOnly className="form-control" />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="contribution-type" className="form-label">Contribution Type:</label>
          <select id="contribution-type" name="contribution-type" required className="form-select">
            <option value="">Select a Contribution Type</option>
            <option value="equipment">Music Equipment</option>
            <option value="concert">Concert</option>
            <option value="normalContribution">Normal Choir Contribution</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="contributionPeriod" className="form-label">Contribution Period:</label>
          <select id="contributionPeriod" name="contributionPeriod" value={contributionPeriod} onChange={handleContributionPeriodChange} className="form-select">
            <option value="">Select Contribution Period</option>
            <option value="d">Per Day</option>
            <option value="m">Per Month</option>
            <option value="q">Per Quarter</option>
            <option value="s">Per Six Months</option>
            <option value="y">Per Year</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="contribution" className="form-label">Contribution Amount:</label>
          <input type="number" id="contribution" name="contribution" required value={contribution} onChange={handleContributionChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="totalContribution" className="form-label">Contribution Total:</label>
          <input type="text" id="totalContribution" name="totalContribution" required value={totalContribution} className="form-control" readOnly />
        </div>

        <button type="submit" className="btn btn-primary">Submit Contribution</button>
      </form>
    </div>
  );
};

export default Form;
