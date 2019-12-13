import React, { useState } from 'react';
import styles from './styles.module.css';

const InputField = (props) => {

    const { label, placeholder, value, stateHook, errors, setErrors, errorMessage, validator } = props
    console.log(errors)
    const error = !!errors[label];
    
    const changeHandler = (e) => {
        stateHook(e.target.value);
        validator.test(e.target.value) ? delete errors[`${label}`] : errors[`${label}`] = true;
        setErrors(errors); 
    }

    return (
        <div>
            <div className="row">
                <div className="col-11">
                    <div className="form-group">
                        <label>{label}</label>
                        <label id="app_uid_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Application Unique ID in CCSN. Instructions for creating a new UID can be found on InfoMix here: <br></div> <a href=&quot;https://wiki.coke.com/confluence/pages/viewpage.action?pageId=59081818&amp;preview=%2F59081818%2F59084331%2FCI+Process.docx&quot; target=&quot;_blank&quot;>https://wiki.coke.com/confluence/pages/viewpage.action?pageId=59081818&amp;preview=%2F59081818%2F59084331%2FCI+Process.docx</a>" data-original-title="" title=""></div></label>
                        <input className={`form-control text-center ${error && 'is-invalid'}`} id="app_uid" type="input" placeholder={placeholder} value={value} onChange={(e) => changeHandler(e)} />
                        <div id="app_uid_feedback" className="invalid-feedback">{errorMessage}</div>
                        <div id="app_uid_superuser" className="text-danger hidden"></div>
                    </div>
                </div>
                <div className="col-1">
                    <label id="app_uid_dependency" data-reset="depfield" className="hidden"></label>
                </div>
            </div>
        </div>
    )
}

export default InputField;