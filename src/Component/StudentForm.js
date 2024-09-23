// src/components/StudentForm.js

import React from 'react';

const StudentForm = ({ formData, setFormData, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Student Information</h2>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
            
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            
            <label>Contact Number:</label>
            <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
            />
            {errors.contactNumber && <p className="error-text">{errors.contactNumber}</p>}
            
            <label>Date of Birth:</label>
            <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
            />
            {errors.dob && <p className="error-text">{errors.dob}</p>}
            
            <label>Native Place:</label>
            <input
                type="text"
                name="nativePlace"
                value={formData.nativePlace}
                onChange={handleChange}
            />
            {errors.nativePlace && <p className="error-text">{errors.nativePlace}</p>}
            
            <label>State:</label>
            <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
            />
            {errors.state && <p className="error-text">{errors.state}</p>}
        </div>
    );
};

export default StudentForm;

















// import React from 'react';

// const StudentForm = ({ formData, setFormData }) => {
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <div>
//             <h2>Student Information</h2>
//             <label>Name:</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />

//             <label>Email:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//             <label>Contact Number:</label>
//             <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

//             <label>Date of Birth:</label>
//             <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

//             <label>Native Place:</label>
//             <input type="text" name="nativePlace" value={formData.nativePlace} onChange={handleChange} required />

//             <label>State:</label>
//             <input type="text" name="state" value={formData.state} onChange={handleChange} required />

//             <label>Major Specialization:</label>
//             <input type="text" name="majorSpec" value={formData.majorSpec} onChange={handleChange} />

//             <label>Minor Specialization:</label>
//             <input type="text" name="minorSpec" value={formData.minorSpec} onChange={handleChange} />

//             <label>Preferred Committee:</label>
//             <input type="text" name="preferredCommitte" value={formData.preferredCommitte} onChange={handleChange} />
//         </div>
//     );
// };

// export default StudentForm;
