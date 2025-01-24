import React from 'react';
import Calculator from '../components/Calculator';
import { Helmet } from 'react-helmet-async';
import BreadCrumb from '../components/common/Breadcrumb';

function CalculatorPage() {
    return (
        <>
            <Helmet>
                <title>ROI Calculator - Digital Lift</title>
                <meta name="description" content="Calculate your potential ROI with Digital Lift's services" />
            </Helmet>
            <div className="breadcrumb-wrapper">
                <BreadCrumb title="ROI Calculator" />
            </div>
            <Calculator />
        </>
    );
}

export default CalculatorPage; 