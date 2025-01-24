import React, { useState } from 'react';
import './Calculator.css';
import { Link } from 'react-router-dom';

function Calculator() {
    const [formData, setFormData] = useState({
        averageClientValue: '',
        missedCallsPerWeek: '',
        closeRate: ''
    });

    const [results, setResults] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Silent validation for extremely large numbers
        let validatedValue = value;
        if (value !== '') {  // Only validate if there's a value
            switch(name) {
                case 'averageClientValue':
                    validatedValue = Math.max(0, Math.min(Number(value), 999999999));
                    break;
                case 'missedCallsPerWeek':
                    validatedValue = Math.max(0, Math.min(Number(value), 99999));
                    break;
                case 'closeRate':
                    validatedValue = Math.max(0, Math.min(Number(value), 100));
                    break;
                default:
                    break;
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: validatedValue
        }));
    };

    const calculateROI = (e) => {
        e.preventDefault();
        
        // Convert string inputs to numbers
        const clientValue = Number(formData.averageClientValue);
        const weeklyMissedCalls = Number(formData.missedCallsPerWeek);
        const closeRate = Number(formData.closeRate);
        const monthlyCharge = 297;

        // Calculate monthly missed calls (weekly * 4)
        const monthlyMissedCalls = weeklyMissedCalls * 4;

        // Calculate potential monthly revenue
        // Monthly calls * client value * close rate percentage
        const monthlyValue = monthlyMissedCalls * clientValue * (closeRate / 100);

        // Calculate ROI percentage
        // ((Revenue - Cost) / Cost) * 100
        const roi = ((monthlyValue - monthlyCharge) / monthlyCharge) * 100;

        setResults({
            monthlyValue: monthlyValue.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }),
            monthlyCharge,
            roi: roi.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            })
        });

        setShowResults(true);
    };

    return (
        <div className="calculator-container">
            <div className="calculator-content-wrapper">
                <div className="calculator-wrapper">
                    <div className="calculator-content">
                        <h2>ROI Calculator</h2>
                        <form onSubmit={calculateROI}>
                            <div className="input-group">
                                <label>Average Client Value:</label>
                                <input
                                    type="number"
                                    name="averageClientValue"
                                    value={formData.averageClientValue}
                                    onChange={handleInputChange}
                                    placeholder="200"
                                    min="0"
                                    required
                                />
                                <span className="currency-symbol">$</span>
                            </div>

                            <div className="input-group">
                                <label>Missed Calls per Week:</label>
                                <input
                                    type="number"
                                    name="missedCallsPerWeek"
                                    value={formData.missedCallsPerWeek}
                                    onChange={handleInputChange}
                                    placeholder="10"
                                    min="0"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Average Close Rate (%):</label>
                                <input
                                    type="number"
                                    name="closeRate"
                                    value={formData.closeRate}
                                    onChange={handleInputChange}
                                    placeholder="111"
                                    min="0"
                                    required
                                />
                                <span className="percentage-symbol">%</span>
                            </div>

                            <button type="submit" className="calculate-btn">Calculate ROI</button>
                        </form>

                        {showResults && (
                            <div className="results-section">
                                <h3>Potential Lost Revenue</h3>
                                <div className="result-item">
                                    <p>Monthly Revenue Left on Table:</p>
                                    <h4>${results.monthlyValue}</h4>
                                    <div className="subtitle">This represents potential missed opportunities from unanswered calls</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="calculator-instructions">
                    <h3>Get An Estimate Of How Much Your Missed Calls Are Costing You</h3>
                    <ul>
                        <li>Enter the average lifetime value of a customer</li>
                        <li>Enter an estimate of how many calls you miss per month</li>
                        <li>Enter the rate at which you close new sales</li>
                        <li>Hit Calculate and we'll show you how much money we can make you!</li>
                    </ul>
                    <div className="cta-section">
                        <h4>Want to Never Miss a Call Again?</h4>
                        <a 
                            href="https://tidycal.com/digitallift/15-minute-meeting"
                            className="schedule-call-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Schedule Your Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator; 