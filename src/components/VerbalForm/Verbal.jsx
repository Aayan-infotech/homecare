import React from 'react';
import './Verbal.scss';

const VerbalOrderForm = () => {
    return (
        <div className="verbal">
            <div className="form-container">

            <h1>Verbal Order Form</h1>
            <form>
                <div className="form-group">
                    <label>Client Name:</label>
                    <input type="text" name="clientName" />
                </div>
                <div className="form-group">
                    <label>DOB:</label>
                    <input type="date" name="dob" />
                </div>

                {[...Array(1)].map((_, index) => (
                    <div key={index} className="order-section">
                        <div className="form-group">
                            <label>Date:</label>
                            <input type="date" name={`date${index}`} />
                        </div>
                        <div className="form-group">
                            <label>Time:</label>
                            <input type="time" name={`time${index}`} />
                        </div>
                        <div className="form-group">
                            <label>Order:</label>
                            <textarea name={`order${index}`} rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Nurse's signature:</label>
                            <input type="text" name={`nurseSignature${index}`} />
                        </div>
                        <div className="form-group">
                            <label>Printed Name:</label>
                            <input type="text" name={`nursePrintedName${index}`} />
                        </div>
                        <div className="form-group">
                            <label>Physician's signature:</label>
                            <input type="text" name={`physicianSignature${index}`} />
                        </div>
                        <div className="form-group">
                            <label>Printed Name:</label>
                            <input type="text" name={`physicianPrintedName${index}`} />
                        </div>
                    </div>
                ))}

                <div className="button-service">
                    <button>submit</button>
                </div>
            </form>
        </div>
            </div>
    );
};

export default VerbalOrderForm;
