import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

import "./TypingAnimation.scss";
import 'react-typist/dist/Typist.css';

const jobroles = [
    'Receptionists',
    'Customer Service',
    'Accounts Payable',
    'Accounts Receivable',
    'Administrators',
    'Sales Executives',
    'Marketing Professionals',
    'Digital Media',
    'Social Media Coordinators',
    'IT Professionals',
    'Stores People',
    'Forklift Drivers',
    'Truck Drivers',
    'Process Workers',
    'Labourers',
    'Machine Operators',
    'Boilermakers',
    'Trades Staff',
    'Mechanics',
    'Electricians',
    'Project Managers',
    'Foremen',
    'Data Technicians',
    'Welders'
]

export default class TypingAnimation extends Component {

    render() {
        return (
            <TypistLoop interval={200}>
                {jobroles.map(text =>
                    <Typist key={text} startDelay={200}>
                        <span className="animated-text">{text}</span>
                        <Typist.Backspace count={text.length} delay={500} />
                    </Typist>
                )}
            </TypistLoop>
        );
    }
}