// src/components/CertificationForm.js
import React from 'react';

const CertificationForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Certifications</h2>
            <label>Certification Name:</label>
            <input type="text" name="certificationName" value={formData.certificationName} onChange={handleChange} required />
        </div>
    );
};

export default CertificationForm;
