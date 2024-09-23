// src/components/WorkExperienceForm.js
import React from 'react';

const WorkExperienceForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Work Experience</h2>
            <label>Company Name:</label>
            <input type="text" name="workCompanyName" value={formData.workCompanyName} onChange={handleChange} required />

            <label>Designation:</label>
            <input type="text" name="workDesignation" value={formData.workDesignation} onChange={handleChange} required />

            <label>Experience Months:</label>
            <input type="number" name="workExperienceMonths" value={formData.workExperienceMonths} onChange={handleChange} required />
        </div>
    );
};

export default WorkExperienceForm;
