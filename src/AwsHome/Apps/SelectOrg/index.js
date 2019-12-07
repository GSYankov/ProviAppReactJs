import React from 'react';
import styles from './styles.module.css';

const SelectOrg = () =>{

    return<div class="container space-top">
    <h4 class="general-headers">Select Organization</h4>
    
    <div class="btn-padding-group">
        <a type="button" class="btn btn-primary btn-lg btn-block btn-cola" id="ko" href='new/ko'>KO</a>
        <a type="button" class="btn btn-primary btn-lg btn-block btn-cola" id="ccna" href='new/ccna'>CCNA</a>
    </div>
</div>
}

export default SelectOrg;