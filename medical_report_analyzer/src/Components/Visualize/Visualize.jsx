import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Visualize.scss';
import PatientInfo from '../PatientInfo/PatientInfo.jsx';
import ReportDetails from '../ReportDetails/ReportDetails.jsx';
import Analysis from '../Analysis/Analysis.jsx';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo.jsx';

const Visualize = () => {
    const [reportData, setReportData] = useState(null);
    const location = useLocation();
    const Data = location.state;

    useEffect(() => {
        if (Data) {
            try {
                const parsedData = typeof Data === 'string' ? JSON.parse(Data) : Data;
                console.log('Parsed Data:', parsedData);
                setReportData(parsedData || null);
            } catch (error) {
                console.error('Error parsing Data:', error.message);
            }
        }
    }, [Data]);

    if (!reportData) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="app-container">
            <PatientInfo patientInfo={reportData.patient_info} />
            <ReportDetails reportDetails={reportData.report_details} />
            <Analysis analysis={reportData.analysis} />
            <AdditionalInfo additionalInfo={reportData.additional_info} />
        </div>
    );
};

export default Visualize;
