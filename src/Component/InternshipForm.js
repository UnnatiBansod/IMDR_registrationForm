// src/components/InternshipForm.js
import React from 'react';

const InternshipForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Internship Experience</h2>
            <label>Company Name:</label>
            <input type="text" name="internshipCompanyName" value={formData.internshipCompanyName} onChange={handleChange} required />

            <label>Designation:</label>
            <input type="text" name="internshipDesignation" value={formData.internshipDesignation} onChange={handleChange} required />

            <label>Experience Months:</label>
            <input type="number" name="internshipExperienceMonths" value={formData.internshipExperienceMonths} onChange={handleChange} required />
        </div>
    );
};

export default InternshipForm;
