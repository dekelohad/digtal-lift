import React from 'react';
import Calculator from '../components/Calculator';
import { Helmet } from 'react-helmet-async';

function CalculatorPage() {
    return (
        <>
            <Helmet>
                <title>ROI Calculator - Digital Lift</title>
                <meta name="description" content="Calculate your potential ROI with Digital Lift's services" />
            </Helmet>
            <Calculator />
        </>
    );
}

export default CalculatorPage; 