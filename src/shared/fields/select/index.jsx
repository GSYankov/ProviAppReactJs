import React, { useState } from 'react';
import styles from './styles.module.css';

const SelectField = (props) => {

    const { label, value, stateHook, options } = props


    return (
        <div className="row">
            <div className="col-11">
                <div className="form-group">
                    <label htmlFor="app_type">{label}<span className="field-required">*</span></label>
                    <label id="app_type_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Select wether the application is standard Enterprise app, Highly restricted app, or Infrastructure app <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                    <select className={`form-control ${value == 'default' && 'field-select-dependency'}`} type="select" id="app_type" name="app_type" required="" value={value} onChange={(e) => stateHook(e.target.value)}>
                        <option disabled="disabled" value='default'>--- {label} ---</option>
                        {options.map((opt) => <option value={opt.value} key={opt.value}>{opt.name}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectField;