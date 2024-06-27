import React, { useState } from 'react';
import './DigitalForm.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DigitalForm = () => {
    const [sign, setSign] = useState("");
    const [date, setDate] = useState("");
    const [guarantorSign, setGuarantorSign] = useState("");
    const [guarantorDate, setGuarantorDate] = useState("");
    const [repSign, setRepSign] = useState("");
    const [repDate, setRepDate] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log({
            sign,
            date,
            guarantorSign,
            guarantorDate,
            repSign,
            repDate
        });
        
        try {
            const res = await axios.post("http://localhost:3000/api/sign/signed", {
                sign,
                date,
                guarantorSign,
                guarantorDate,
                repSign,
                repDate
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='digital1'>
            <div className="form-container1">
                <form onSubmit={onSubmit}>
                    <div className='content'>
                        <div className='client'>
                            <h1>CLIENT SERVICE AGREEMENT</h1>
                        </div>
                        <h4>Payment for Services:</h4>
                        <p>Payment for the services of the Healthcare Solution Services contractors is payable directly to the Healthcare Solution Services, First 30 Days Advanced payment. I agree that I will not pay Healthcare Solution Services contractors directly.</p>
                        <h4>Hiring of Contractors or Former Contractors:</h4>
                        <p>I agree not to hire, contract or provide anything of value to any person who is a Healthcare Solution Services contractor, or former contractor, in exchange for services provided to me through the Healthcare Solution Services other than through a referral by the Healthcare Solution Services, for the duration of the term of this Client Service Agreement and not within twenty-four (24) months from the date of termination of services by the Healthcare Solution Services. If I, my family or responsible party does hire, contract or provide anything of value in exchange for services provided to me by any Healthcare Solution Services contractor or former contractor within 24-months of termination date of this agreement, I agree to pay the Healthcare Solution Services $5,000.00 prior to the start of the provision of such services. I further agree and stipulate that such activity described in this paragraph will be a breach of this Agreement and an intentional interference with the business and/or contractual relationship between the Healthcare Solution Services and its independent contractor, or former contractor, and that the amount stipulated above may not completely satisfy and compensate the Healthcare Solution Services for all damages caused by my actions as contemplated in this paragraph and that the Healthcare Solution Services may seek satisfaction of such damages through other tort claims.</p>
                        <h4>Emergencies and Natural Disasters:</h4>
                        <p>I understand and stipulate that the Healthcare Solution Services is not responsible for my safety and/or well-being during an emergency or natural disaster. I understand the Healthcare Solution Services will attempt to continue to provide referrals of independent contractors to provide the care or service subject to this agreement during a hurricane or other natural disaster, but that the Healthcare Solution Services may not be able to provide referrals if there are no independent contractors available. I stipulate that the Healthcare Solution Services has no duty, created hereunder, or otherwise, to provide me safety and ensure my well-being during an emergency or natural disaster, or any other time.</p>
                        <h4>Cancelation of Services:</h4>
                        <p>I agree to notify the Healthcare Solution Services at least 24 hours in advance if I will not be at home for my service visit. If I do not notify the Healthcare Solution Services 24 hours prior to a cancelation or termination of a service visit, I agree to pay for one-half of the fee for that shift.</p>
                        <h4>Assignment of Benefits:</h4>
                        <p>By signing this document, I hereby authorize payment to be made directly to the Healthcare Solution Services for any insurance benefits otherwise payable to me by<input type="text" /></p>
                        <h4>Legal Costs and Relief:</h4>
                        <p>If any action is brought for the enforcement of this Agreement, or because of a dispute, breach or default in connection with any provision of this Agreement, the Healthcare Solution Services shall be entitled to recover reasonable attorney’s fees, court costs and all reasonable expenses, even if not taxable as court costs, in addition to any other relief, including injunctive relief, to which the Healthcare Solution Services may be entitled, whether incurred prior to litigation, at trial or upon appeal. Attorneys’ fees shall include, without limitation, paralegal fees, investigative fees, administrative costs, sales and use taxes and all other charges billed by the attorney to the Healthcare Solution Services.</p>
                        <h4>Termination of Agreement:</h4>
                        <p>I agree to provide two weeks / 14 days’ notice prior to termination of this agreement. Termination prior to such notice will require payment of the full-service fee that would have been paid had the services been provided. This Client Service Agreement is applicable only to the Healthcare Solution Services. I understand what I have read and that was explained to me and agree to the terms and conditions stated above.</p>
                        <h4>Entire Agreement and Notice:</h4>
                        <p>This Agreement contains the entire understanding and agreement of the parties and supersedes all previous verbal and written agreements, negotiations or understandings. There are no other agreements, representations, or warranties between the parties which are not set forth herein. This Agreement may be amended by subsequent written agreement only, and may not be amended without the specific written consent signed by both parties.</p>
                    </div>
                    <div className='patient-info'>
                        <div className='grid-container'>
                            <div className='grid-item'>
                                <h3>Client or Representative’s signature:</h3>
                                <input
                                    value={sign}
                                    onChange={(e) => setSign(e.target.value)}
                                    type="text"
                                    placeholder='Enter signature' />
                            </div>
                            <div className='grid-item'>
                                <h3>Date:</h3>
                                <input
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    type="date"
                                    placeholder='Enter Date' />
                            </div>
                            <div className='grid-item'>
                                <h3>Financial guarantor’s signature:</h3>
                                <input
                                    value={guarantorSign}
                                    onChange={(e) => setGuarantorSign(e.target.value)}
                                    type="text"
                                    placeholder='Enter signature' />
                            </div>
                            <div className='grid-item'>
                                <h3>Date:</h3>
                                <input
                                    value={guarantorDate}
                                    onChange={(e) => setGuarantorDate(e.target.value)}
                                    type="date"
                                    placeholder='Enter date' />
                            </div>
                            <div className='grid-item'>
                                <h3>Healthcare Solution Services representative’s signature:</h3>
                                <input
                                    value={repSign}
                                    onChange={(e) => setRepSign(e.target.value)}
                                    type="text"
                                    placeholder='Enter signature' />
                            </div>
                            <div className='grid-item'>
                                <h3>Date:</h3>
                                <input
                                    value={repDate}
                                    onChange={(e) => setRepDate(e.target.value)}
                                    type="date"
                                    placeholder='Enter date' />
                            </div>
                        </div>
                    </div>
                    <div className="wr">
                       <Link to='/submission-confirmation'>
                        <button type="submit">
                            Submit
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DigitalForm;
