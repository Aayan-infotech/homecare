import React from 'react';
import './F-accident.scss';

const FormComponent = () => {
  return (
    
    <div className="accident">
      <div className="form-container">

      <form>
        <h1 style={{textAlign:"center"}}>Incident/Complaint Form</h1>
        <div className="form-group">
          <label>Today's Date:</label>
          <input type="date" name="todaysDate" />
        </div>
        <div className="form-group">
          <label>Date of Incident or Complaint:</label>
          <input type="date" name="incidentDate" />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" />
        </div>
        <div className="form-group">
          <label>Type of complaint:</label>
          <div>
            <input type="checkbox" name="personnel" /> Personnel
            <input type="checkbox" name="service" /> Service provision
            <input type="checkbox" name="other" /> Other
          </div>
        </div>
        <div className="form-group">
          <label>Client's Name:</label>
          <input type="text" name="clientName" />
        </div>
        <div className="form-group">
          <label>Client's Tel:</label>
          <input type="tel" name="clientTel" />
        </div>
        <div className="form-group">
          <label>Caregiver:</label>
          <input type="text" name="caregiver" />
        </div>
        <div className="form-group">
          <label>Description of Incident/Complaint:</label>
          <textarea name="description"></textarea>
        </div>
        <div className="form-group">
          <label>Action Taken to Resolve Incident/Complaint:</label>
          <textarea name="actionTaken"></textarea>
        </div>
        <div className="form-group">
          <label>Resolution Date:</label>
          <input type="date" name="resolutionDate" />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="resolutionTime" />
        </div>
        <div className="form-group">
          <label>Follow-up actions required:</label>
          <textarea name="followUpActions"></textarea>
        </div>
        <div className="form-group">
          <label>Follow-up Call Date:</label>
          <input type="date" name="followUpCallDate" />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="followUpCallTime" />
        </div>
        <div className="form-group">
          <label>Notes:</label>
          <textarea name="notes"></textarea>
        </div>
        <div className="form-group">
          <label>Administrator’s Signature:</label>
          <input type="text" name="adminSignature" />
        </div>

        <div className="button-accident">

        <button>submit</button>
        </div>

      </form>
      </div>
    </div>
  );
};

export default FormComponent;
