// src/components/EducationForm.js
import React from 'react';

const EducationForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Education Information</h2>
            <label>10th Percentage:</label>
            <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} />

            <label>12th Percentage:</label>
            <input type="text" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleChange} />

            <label>Graduation CGPA:</label>
            <input type="text" name="graduationCGPA" value={formData.graduationCGPA} onChange={handleChange} />

            <label>Post Graduation CGPA:</label>
            <input type="text" name="postGraduationCGPA" value={formData.postGraduationCGPA} onChange={handleChange} />
        </div>
    );
};

export default EducationForm;
