import React, { useState } from 'react';
import styles from './styles.module.css';

const Textarea = (props) => {

    const { label, value, stateHook } = props


    return (
        <div className="row " id="row_comments">
                        <div className="col-11">
                            <div className="form-group">
                                <label>{label}</label>
                                <textarea className="form-control" type="textarea" rows="3" id="comments" value={value} onChange={(e) => stateHook(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
    )
}

export default Textarea;