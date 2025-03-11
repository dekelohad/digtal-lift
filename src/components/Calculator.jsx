import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
    const [formData, setFormData] = useState({
        averageClientValue: '',
        monthlyLeads: '',
        profitMargin: '',
        closeRate: ''
    });

    useEffect(() => {
        const firstInput = document.querySelector('input[name="averageClientValue"]');
        if (firstInput) {
            firstInput.focus();
        }
    }, []);

    const calculateResults = (data) => {
        const clientValue = Number(data.averageClientValue) || 0;
        const monthlyLeads = Number(data.monthlyLeads) || 0;
        const profitMargin = Number(data.profitMargin) || 0;
        const closeRate = Number(data.closeRate) || 0;

        // Check if ALL inputs have been provided
        const hasAllInputs = clientValue > 0 && monthlyLeads > 0 && profitMargin > 0 && closeRate > 0;

        const monthlyValue = monthlyLeads * clientValue * (closeRate / 100);
        const monthlyProfit = monthlyValue * (profitMargin / 100);
        const monthlyCharge = hasAllInputs ? Math.min(monthlyProfit * 0.10, 1500) : 0; // Cap at $1500 maximum
        const netProfit = hasAllInputs ? monthlyProfit - monthlyCharge : 0; // Show 0 until all inputs filled
        const newCustomers = Math.round(monthlyLeads * (closeRate / 100));

        return {
            monthlyValue: monthlyValue.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }),
            monthlyProfit: monthlyProfit.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }),
            netProfit: netProfit.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }),
            monthlyCharge: monthlyCharge.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }),
            newCustomers: newCustomers
        };
    };

    const [results, setResults] = useState(() => calculateResults({
        averageClientValue: 0,
        monthlyLeads: 0,
        profitMargin: 0,
        closeRate: 0
    }));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        let validatedValue = value;
        if (value !== '') {
            switch(name) {
                case 'averageClientValue':
                    validatedValue = Math.max(0, Math.min(Number(value), 999999999));
                    break;
                case 'monthlyLeads':
                    validatedValue = Math.max(0, Math.min(Number(value), 99999));
                    break;
                case 'profitMargin':
                    validatedValue = Math.max(0, Math.min(Number(value), 100));
                    break;
                case 'closeRate':
                    validatedValue = Math.max(0, Math.min(Number(value), 100));
                    break;
                default:
                    break;
            }
        }

        const newFormData = {
            ...formData,
            [name]: validatedValue
        };
        
        setFormData(newFormData);
        setResults(calculateResults(newFormData));
    };

    return (
        <div className="calculator-container">
            <div className="calculator-header">
                <h1 className="calculator-title">ROI Calculator</h1>
                <h2 className="calculator-subtitle">Calculate your potential return on investment</h2>
            </div>
            
            <div className="calculator-content-wrapper">
                <div className="calculator-form-section">
                    <div className="form-header">
                        <h2>Business Details</h2>
                    </div>
                    <div className="calculator-form-container">
                        <div className="input-group">
                            <label>Average Client Value ($)</label>
                            <div className="input-wrapper">
                                <span className="currency-symbol">$</span>
                                <input
                                    type="number"
                                    name="averageClientValue"
                                    value={formData.averageClientValue}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                    min="0"
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Number of Leads per Month</label>
                            <div className="input-wrapper">
                                <input
                                    type="number"
                                    name="monthlyLeads"
                                    value={formData.monthlyLeads}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                    min="0"
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Profit Margin (%)</label>
                            <div className="input-wrapper">
                                <input
                                    type="number"
                                    name="profitMargin"
                                    value={formData.profitMargin}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                    min="0"
                                    max="100"
                                />
                                <span className="percentage-symbol">%</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Close Rate (%)</label>
                            <div className="input-wrapper">
                                <input
                                    type="number"
                                    name="closeRate"
                                    value={formData.closeRate}
                                    onChange={handleInputChange}
                                    placeholder="0"
                                    min="0"
                                    max="100"
                                />
                                <span className="percentage-symbol">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="calculator-results-section">
                    <div className="results-header">
                        <h2 style={{ color: 'white' }}>Potential Revenue</h2>
                    </div>
                    <div className="results-grid">
                        <div className="result-card">
                            <h3>Total New Customers</h3>
                            <div className="result-value">{results.newCustomers}</div>
                        </div>
                        <div className="result-card">
                            <h3>Monthly Revenue Potential</h3>
                            <div className="result-value">${results.monthlyValue}</div>
                        </div>
                        <div className="result-card">
                            <h3>Gross Monthly Profit</h3>
                            <div className="result-value">${results.monthlyProfit}</div>
                        </div>
                        <div className="result-card">
                            <h3>Monthly Investment</h3>
                            <div className="result-value">${results.monthlyCharge}</div>
                        </div>
                        <div className="result-card highlight">
                            <h3>Net Monthly Profit</h3>
                            <div className="result-value">${results.netProfit}</div>
                        </div>
                    </div>
                    {/* <div className="results-cta">
                        <a 
                            href="https://tidycal.com/digitallift/15-minute-meeting" 
                            className="schedule-call-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Schedule a Call
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Calculator; 