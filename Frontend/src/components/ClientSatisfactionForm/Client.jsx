// SurveyForm.js
import React from 'react';
import './Client.scss';

const SurveyForm = () => {
  return (
    <div className="survey">
      <div className="survey-form">

      <h1>Survey Form</h1>
      <form>
        <div className="form-group">
          <label>Client Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" />
        </div>
        <div className="form-group">
          <label>Admission Date:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Discharge Date:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Interview Date:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Name of Person Answering:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Rel:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Name of service provider:</label>
          <input type="text" />
        </div>
        {/* <table>
          <thead>
            <tr>
              <th></th>
              <th>Yes</th>
              <th>No</th>
              <th>N/A</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <tr key={num}>
                <td> {num}</td>
                <td><input type="radio" name={`question${num}`} value="yes" /></td>
                <td><input type="radio" name={`question${num}`} value="no" /></td>
                <td><input type="radio" name={`question${num}`} value="na" /></td>
                <td><input type="text" /></td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <div className="form-group">
          <label>Other comments:</label>
          <textarea rows="4"></textarea>
        </div>
        <div className="form-group">
          <label>Method of Survey:</label>
          <div>
            <label><input type="checkbox" /> Phone Interview</label>
            <label><input type="checkbox" /> In Person</label>
          </div>
        </div>
        <div className="form-group">
          <label>Client's Signature:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Administrator's Signature:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" />
        </div>

        <div className="button">
          <button>
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SurveyForm;
