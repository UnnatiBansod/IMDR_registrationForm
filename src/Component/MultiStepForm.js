// src/components/MultiStepForm.js

import React, { useState } from 'react';
import StudentForm from './StudentForm';
import EducationForm from './EducationForm';
import CertificationForm from './CertificationForm';
import InternshipForm from './InternshipForm';
import WorkExperienceForm from './WorkExperienceForm';
import '../style.css';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', email: '', contactNumber: '', dob: '', nativePlace: '', state: '',
        majorSpec: '', minorSpec: '', preferredCommitte: '',
        tenthPercentage: '', twelfthPercentage: '', graduationCGPA: '', postGraduationCGPA: '',
        certificationName: '',
        internshipCompanyName: '', internshipDesignation: '', internshipExperienceMonths: '',
        workCompanyName: '', workDesignation: '', workExperienceMonths: ''
    });
    const [errors, setErrors] = useState({});

    // Helper function to check for empty fields
    const validateFields = () => {
        let newErrors = {};
        switch (step) {
            case 1:
                if (!formData.name) newErrors.name = "Name is required";
                if (!formData.email) newErrors.email = "Email is required";
                if (!formData.contactNumber) newErrors.contactNumber = "Contact Number is required";
                if (!formData.dob) newErrors.dob = "Date of Birth is required";
                if (!formData.nativePlace) newErrors.nativePlace = "Native Place is required";
                if (!formData.state) newErrors.state = "State is required";
                break;
            case 2:
                if (!formData.tenthPercentage) newErrors.tenthPercentage = "10th Percentage is required";
                if (!formData.twelfthPercentage) newErrors.twelfthPercentage = "12th Percentage is required";
                if (!formData.graduationCGPA) newErrors.graduationCGPA = "Graduation CGPA is required";
                break;
            case 3:
                if (!formData.certificationName) newErrors.certificationName = "Certification Name is required";
                break;
            case 4:
                if (!formData.internshipCompanyName) newErrors.internshipCompanyName = "Company Name is required";
                if (!formData.internshipDesignation) newErrors.internshipDesignation = "Designation is required";
                if (!formData.internshipExperienceMonths) newErrors.internshipExperienceMonths = "Experience Months are required";
                break;
            case 5:
                if (!formData.workCompanyName) newErrors.workCompanyName = "Company Name is required";
                if (!formData.workDesignation) newErrors.workDesignation = "Designation is required";
                if (!formData.workExperienceMonths) newErrors.workExperienceMonths = "Experience Months are required";
                break;
            default:
                break;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateFields()) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            console.log(formData);
            // Handle the data submission (e.g., API call)
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                {step === 1 && <StudentForm formData={formData} setFormData={setFormData} errors={errors} />}
                {step === 2 && <EducationForm formData={formData} setFormData={setFormData} errors={errors} />}
                {step === 3 && <CertificationForm formData={formData} setFormData={setFormData} errors={errors} />}
                {step === 4 && <InternshipForm formData={formData} setFormData={setFormData} errors={errors} />}
                {step === 5 && <WorkExperienceForm formData={formData} setFormData={setFormData} errors={errors} />}
                
                <div className="form-navigation">
                    {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
                    {step < 5 && <button type="button" onClick={nextStep}>Next</button>}
                    {step === 5 && <button type="submit">Submit</button>}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;

























// src/components/MultiStepForm.js
// import React, { useState } from 'react';
// import StudentForm from './StudentForm';
// import EducationForm from './EducationForm';
// import CertificationForm from './CertificationForm';
// import InternshipForm from './InternshipForm';
// import WorkExperienceForm from './WorkExperienceForm';
// import '../style.css'; // Import the CSS file

// const MultiStepForm = () => {
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         name: '', email: '', contactNumber: '', dob: '', nativePlace: '', state: '',
//         majorSpec: '', minorSpec: '', preferredCommitte: '',
//         tenthPercentage: '', twelfthPercentage: '', graduationCGPA: '', postGraduationCGPA: '',
//         certificationName: '',
//         internshipCompanyName: '', internshipDesignation: '', internshipExperienceMonths: '',
//         workCompanyName: '', workDesignation: '', workExperienceMonths: ''
//     });

//     const nextStep = () => setStep(step + 1);
//     const prevStep = () => setStep(step - 1);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         // Submit data to backend API or handle it here
//     };

//     return (
//         <div className="form-container">  {/* Apply the 'form-container' class here */}
//             <form onSubmit={handleSubmit}>
//                 {step === 1 && <StudentForm formData={formData} setFormData={setFormData} />}
//                 {step === 2 && <EducationForm formData={formData} setFormData={setFormData} />}
//                 {step === 3 && <CertificationForm formData={formData} setFormData={setFormData} />}
//                 {step === 4 && <InternshipForm formData={formData} setFormData={setFormData} />}
//                 {step === 5 && <WorkExperienceForm formData={formData} setFormData={setFormData} />}

//                 <div className="button-group">
//                     {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
//                     {step < 5 && <button type="button" onClick={nextStep}>Next</button>}
//                 </div>
//                 {step === 5 && (
//                     <div className="center-btn">
//                         <button type="submit">Submit</button>
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default MultiStepForm;





// import React, { useState } from 'react';
// import StudentForm from './StudentForm';
// import EducationForm from './EducationForm';
// import CertificationForm from './CertificationForm';
// import InternshipForm from './InternshipForm';
// import WorkExperienceForm from './WorkExperienceForm';
// import '../style.css'; // Import the CSS file

// const MultiStepForm = () => {
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         name: '', email: '', contactNumber: '', dob: '', nativePlace: '', state: '',
//         majorSpec: '', minorSpec: '', preferredCommitte: '',
//         tenthPercentage: '', twelfthPercentage: '', graduationCGPA: '', postGraduationCGPA: '',
//         certificationName: '',
//         internshipCompanyName: '', internshipDesignation: '', internshipExperienceMonths: '',
//         workCompanyName: '', workDesignation: '', workExperienceMonths: ''
//     });

//     const nextStep = () => setStep(step + 1);
//     const prevStep = () => setStep(step - 1);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         // Submit data to backend API or handle it here
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {step === 1 && <StudentForm formData={formData} setFormData={setFormData} />}
//                 {step === 2 && <EducationForm formData={formData} setFormData={setFormData} />}
//                 {step === 3 && <CertificationForm formData={formData} setFormData={setFormData} />}
//                 {step === 4 && <InternshipForm formData={formData} setFormData={setFormData} />}
//                 {step === 5 && <WorkExperienceForm formData={formData} setFormData={setFormData} />}
                
//                 <div>
//                     {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
//                     {step < 5 && <button type="button" onClick={nextStep}>Next</button>}
//                     {step === 5 && <button type="submit">Submit</button>}
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default MultiStepForm;







