import React, { useState } from 'react';
import styles from './styles.module.css';

const CheckBoxField = (props) => {
    const { label, placeholder, value, stateHook, errors, setErrors, errorMessage, validator, options } = props


    return (
        <div className="checkbox_row ">
            <div className="col-11">
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input checkbox-1x" onChange={(e) => stateHook(e.target.value)} />
                        <label className="form-check-label" htmlFor={label}>{label}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckBoxField;