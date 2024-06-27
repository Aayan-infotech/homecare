// import React from 'react';
// import { Container, Row, Col, Form, Table } from 'react-bootstrap';
// import './Nursing.scss'; // Import the SCSS file

// const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// const activities = [
//     'Shower',
//     'Dressing',
//     'Nail care (hands only)',
//     'Toileting/Incontinence care',
//     'Empty catheter bag',
//     'Apply catheter bag',
//     'Skin care (entire body)',
//     'Medication reminders',
//     'Meal preparation',
//     'Social interaction',
//     'Transfer bed/chair',
//     'Household duties',
//     'Laundry',
//     'Escort to appointments',
//     'Mobility assistance',
//     'Exercise',
//     'Respiration',
//     'Other'
// ];

// const CheckboxField = () => (
//     <Form.Check type="checkbox" />
// );

// const ResponsiveForm = () => (
//     <Container>
//         <h1>Client's Weekly Activities</h1>
//         <Form>
//             <Row>
//                 <Col>
//                     <Form.Group controlId="clientName">
//                         <Form.Label>Client's Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter client's name" />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="weekEnding">
//                         <Form.Label>Week ending</Form.Label>
//                         <Form.Control type="date" />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col xs={12} className="mt-3">
//                     <Table bordered>
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 {daysOfWeek.map(day => (
//                                     <th key={day}>{day}</th>
//                                 ))}
//                                 <th>CAREGIVER NOTES</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {activities.map(activity => (
//                                 <tr key={activity}>
//                                     <td>{activity}</td>
//                                     {daysOfWeek.map(day => (
//                                         <td key={day}><CheckboxField /></td>
//                                     ))}
//                                     <td>{activity === 'Shower'}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col xs={12} className="mt-3">
//                     <Form.Group controlId="mileage">
//                         <Form.Label>Mileage</Form.Label>
//                         <Form.Control type="text" placeholder="Enter mileage" />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col>
//                     <Form.Group controlId="date">
//                         <Form.Label>Date</Form.Label>
//                         <Form.Control type="date" />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="miles">
//                         <Form.Label>Miles</Form.Label>
//                         <Form.Control type="text" placeholder="Enter miles" />
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group controlId="location">
//                         <Form.Label>Location</Form.Label>
//                         <Form.Control type="text" placeholder="Enter location" />
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col>
//                     <Form.Group controlId="caregiverSignature">
//                         <Form.Label>Caregiver's Signature</Form.Label>
//                         <Form.Control type="text" placeholder="Enter caregiver's signature" />
//                     </Form.Group>
//                 </Col>
//             </Row>
//         </Form>
//     </Container>
// );

// export default ResponsiveForm;
import React from 'react'

const Nursing = () => {
    return (
        <div>
            hii

        </div>
    )
}

export default Nursing
