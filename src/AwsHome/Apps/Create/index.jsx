import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import postService from '../../../services/post-service';


const Create = (props) => {
    const { match: { params } } = props;
    const [uid, setUid] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [ccenter, setCcenter] = useState('');
    const [type, setType] = useState('default');
    const [region, setRegion] = useState('default');
    const [localRegion, setLocalRegion] = useState('default');
    const [webTier, setWebTier] = useState('');
    const [dbTier, setDbTier] = useState('');
    const [appTier, setAppTier] = useState('');
    const [email, setEmail] = useState('');
    const [autopark, setAutopark] = useState('default');
    const [reqEnv, setReqEnv] = useState('default');
    const [comments, setComments] = useState('');
    const [manService, setManService] = useState('default');
    const [secTier, setSecTier] = useState('default');
    const [drTier, setDrTier] = useState('default');
    const [msp, setMsp] = useState('default');
    const [unit, setUnit] = useState('default');
    const [data, setData] = useState('default');

    useEffect(() => {
        postService.obtainCsrf('/aws/new/ko')
        .then(res=>res.text())
        .then(data=>console.log(data.search('csrfmiddlewaretoken')));
        // fetch('http://localhost:8000/aws/new/ko', {
        //     headers : { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'},
        //     credentials: 'include'
        // })
    }, []);

    function submitNewApp() {
        const data = {
            'organization': 'KO',
            'uid': 'UID000014783470',
            'name': 'UID000014783470-dev-US-us-east-1',
            'code': 'qwe',
            'description': 'sdfdsf',
            'cost_center': 'werwer',
            'account_id': '215771694765',
            'account_profile': '008735_CloudHub_US_Admin',
            'global_region': 'US',
            'aws_region': 'us-east-1',
            'env': 'dev',
            'app_owner_email': 'asdasd@coca-cola.com',
            'app_comments': '123213123',
            'tag_managed_service_tier': '2',
            'tag_security_tier': '2',
            'tag_dr_class': '3',
            'tag_infra_msp': 'Network Operations',
            'tag_business_unit': 'Field-NA',
            'vpc_id': 'vpc-08c3dd6c',
            'vpc_name': 'ServicesVPC',
            'mediaS3': 'ko-software-media-share-virginia',
            'appDataS3': 'ko-application-file-dropbox-us-east-cloudhub',
            'mspKeypair': '2ndWatch_008735_CloudHub_US_MSP_US_East_1',
            'autoparkS3': 'autopark-configbucket-us-20170706',
            'remote_state_profile': '008735_CloudHub_US_Admin',
        }

        postService.submitAwsApp(data).then(console.log('hi'));
    }


    return (<div className="container-fluid">

        <div className="container space-top">
            <h4 className="general-headers">Register Application for KO</h4>

            <div className="container">

                <div id="message-field" className="alert hidden page-messages" role="alert"></div>
                <div id="mainSection">
                    <div className="" id="row_app_uid">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label>Application UID</label>
                                    <label id="app_uid_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Application Unique ID in CCSN. Instructions for creating a new UID can be found on InfoMix here: <br></div> <a href=&quot;https://wiki.coke.com/confluence/pages/viewpage.action?pageId=59081818&amp;preview=%2F59081818%2F59084331%2FCI+Process.docx&quot; target=&quot;_blank&quot;>https://wiki.coke.com/confluence/pages/viewpage.action?pageId=59081818&amp;preview=%2F59081818%2F59084331%2FCI+Process.docx</a>" data-original-title="" title=""></div></label>
                                    <input className="form-control text-center" id="app_uid" type="input" placeholder="Example: UID000014783479" value={uid} onChange={(e) => setUid(e.target.value)} />
                                    <div id="app_uid_feedback" className="invalid-feedback">Start with "UID" followed by 12 numbers. Example: UID000014783479, uid000014783479</div>
                                    <div id="app_uid_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="app_uid_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_app_code">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label>Application Code</label>
                                    <label id="app_code_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="For generation of AppCode, please send e-mail to cloud@ko.com with Application UID and Application Name. <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <input className="form-control text-center" id="app_code" type="input" placeholder="Example: aio" value={code} onChange={(e) => setCode(e.target.value)} />
                                    <div id="app_code_feedback" className="invalid-feedback">Example: "aio". Please use lowercase characters only! Max characters: 3</div>
                                    <div id="app_code_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="app_code_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_app_description">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label>Application Friendly Name</label>
                                    <label id="app_description_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Enter the Application Name <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <input className="form-control text-center" id="app_description" type="input" placeholder="Example: CCNA AIOps" value={name} onChange={(e) => setName(e.target.value)} />
                                    <div id="app_description_feedback" className="invalid-feedback">Example: "CCNA AIOps". Please use alphabet characters and numbers from 3 to 20 symbols</div>
                                    <div id="app_description_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="app_description_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_cost_center">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label>Cost Center</label>
                                    <label id="cost_center_i"></label>
                                    <input className="form-control text-center" id="cost_center" type="input" placeholder="" value={ccenter} onChange={(e) => setCcenter(e.target.value)} />
                                    <div id="cost_center_feedback" className="invalid-feedback"></div>
                                    <div id="cost_center_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="cost_center_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_app_type">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="app_type">Application Type<span className="field-required">*</span></label>
                                    <label id="app_type_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Select wether the application is standard Enterprise app, Highly restricted app, or Infrastructure app <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <select className="form-control" type="select" id="app_type" name="app_type" required="" value={type} onChange={(e) => setType(e.target.value)}>
                                        <option disabled="disabled" value='default'>--- Application Type ---</option>
                                        <option value="shared_services">Shared Services</option><option value="highly_restrited">Highly Restricted</option><option value="enterprise">Enterprise</option></select>
                                    <div id="app_type_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="app_type_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_global_region">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="global_region">Global Region<span className="field-required">*</span></label>
                                    <label id="global_region_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Default AWS region is US-East-1 (North Virginia) <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <select className="form-control field-select-dependency" type="select" id="global_region" name="global_region" required="" disabled="" value={region} onChange={(e) => setRegion(e.target.value)}>
                                        <option disabled="disabled" value='default'>--- Global Region ---</option>
                                        <option value="US">US</option>
                                        <option value="EU">EU</option>
                                        <option value="EU">APG</option>
                                    </select>
                                    <div id="global_region_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="global_region_dependency" data-reset="depfield" className=""><div tabIndex="0" className="fa fa-link fa-2x popover-dep fa-link-position" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Field dependent by: <b>Application Type</b>" data-original-title="" title=""></div></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_local_region">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="local_region">Local Region<span className="field-required">*</span></label>
                                    <label id="local_region_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Default AWS region is US-East-1 (North Virginia) <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <select className="form-control field-select-dependency" type="select" id="local_region" name="local_region" required="" disabled="" value={localRegion} onChange={(e) => setLocalRegion(e.target.value)}>
                                        <option disabled="disabled" value='default'>--- Local Region ---</option>
                                        <option value="us-east-1">North Virginia / us-east-1</option>
                                        <option value="us-west-2">Oregon / us-west-2</option>
                                    </select>
                                    <div id="local_region_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="local_region_dependency" data-reset="depfield" className=""><div tabIndex="0" className="fa fa-link fa-2x popover-dep fa-link-position" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Field dependent by: <b>Application Type</b>" data-original-title="" title=""></div></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_env">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="env">Select Required Environment<span className="field-required">*</span></label>
                                    <label id="env_i"></label>
                                    <select className="form-control field-select-dependency" type="select" id="env" name="env" required="" disabled="" value={reqEnv} onChange={(e) => setReqEnv}>
                                        <option disabled="disabled" value='default'>--- Select Required Environment ---</option>
                                        <option value="test">Test</option>
                                        <option value="dev">Development</option>
                                        <option value="qa">QA</option>
                                        <option value="prod">Production</option>
                                    </select>
                                    <div id="env_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="env_dependency" data-reset="depfield" className=""><div tabIndex="0" className="fa fa-link fa-2x popover-dep fa-link-position" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Field dependent by: <b>Application Type</b>" data-original-title="" title=""></div></label>
                            </div>
                        </div>
                    </div>

                    <div className="hide" id="row_multi_autopark">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="multi_autopark">Select Autopark<span className="field-required">*</span></label>
                                    <label id="multi_autopark_i"></label>
                                    <select className="form-control field-select-dependency" type="select" id="multi_autopark" name="multi_autopark" required="" disabled="" value={autopark} onChange={(e) => setAutopark(e.target.value)}>
                                        <option disabled="disabled" value='default'>--- Select Autopark ---</option>
                                    </select>
                                    <div id="multi_autopark_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="multi_autopark_dependency" data-reset="depfield" className=""><div tabIndex="0" className="fa fa-link fa-2x popover-dep fa-link-position" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Field dependent by: <b>Application Type</b>" data-original-title="" title=""></div></label>
                            </div>
                        </div>
                    </div>

                    <div className="col-11">
                        <div className="form-group">
                            <h5><p className="text-danger">Select Required Application Tier:</p></h5>
                        </div>
                    </div>

                    <div className="checkbox_row " id="row_app_tier_web">
                        <div className="col-11">
                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input checkbox-1x" id="app_tier_web" onChange={(e) => setWebTier(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="Web">Web</label>
                                    <div id="app_tier_web_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <label id="app_tier_web_dependency" data-reset="depfield" className="hidden"></label>
                        </div>
                    </div>

                    <div className="checkbox_row " id="row_app_tier_app">
                        <div className="col-11">
                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input checkbox-1x" id="app_tier_app" onChange={(e) => setAppTier(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="Application">Application</label>
                                    <div id="app_tier_app_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <label id="app_tier_app_dependency" data-reset="depfield" className="hidden"></label>
                        </div>
                    </div>

                    <div className="checkbox_row " id="row_app_tier_db">
                        <div className="col-11">
                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input checkbox-1x" id="app_tier_db" onChange={(e) => setDbTier(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="Database">Database</label>
                                    <div id="app_tier_db_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <label id="app_tier_db_dependency" data-reset="depfield" className="hidden"></label>
                        </div>
                    </div>

                    <div className="" id="row_owner_email">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label>Application Owner Email Address</label>
                                    <label id="owner_email_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Application Business owner <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <input className="form-control text-center" id="owner_email" type="input" placeholder="Only KO Email addresses are allowed!" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div id="owner_email_feedback" className="invalid-feedback">Please use a valid KO E-mail address.</div>
                                    <div id="owner_email_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="owner_email_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="col-11">
                        <div className="form-group">
                            <h6 className="general-headers"> Comments </h6>
                        </div>
                    </div>

                    <div className="row " id="row_comments">
                        <div className="col-11">
                            <div className="form-group">
                                <label>Comments</label>
                                <label id="comments_i"></label>
                                <textarea className="form-control" type="textarea" rows="3" id="comments" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-1">
                            <label id="comments_dependency" data-reset="depfield" className="hidden"></label>
                        </div>
                    </div>

                    <div className="col-11">
                        <div className="form-group">
                            <h6 className="general-headers"> Tags </h6>
                        </div>
                    </div>

                    <div className="" id="row_tag_managed_service_tier">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="tag_managed_service_tier">Managed Service Tier<span className="field-required">*</span></label>
                                    <label id="tag_managed_service_tier_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="2 - Full Service(Default), 3 - Self service(App team supports infrastructure) <br></div> <a href=&quot;https://wiki.coke.com/confluence/display/infomix/AWS+Enterprise+App+Tiering+Model&quot; target=&quot;_blank&quot;>https://wiki.coke.com/confluence/display/infomix/AWS+Enterprise+App+Tiering+Model</a>" data-original-title="" title=""></div></label>
                                    <select className="form-control" type="select" id="tag_managed_service_tier" name="tag_managed_service_tier" required="" value={manService} onChange={(e) => setManService(e.target.value)}>
                                        <option disabled="disabled" value="default">--- Managed Service Tier ---</option>
                                        <option value="2">2</option><option value="3">3</option></select>
                                    <div id="tag_managed_service_tier_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="tag_managed_service_tier_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_tag_security_tier">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="tag_security_tier">Security Tier<span className="field-required">*</span></label>
                                    <label id="tag_security_tier_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="1 - Highly Restricted, 2 - Personal Information, 3 - Confidential <br></div> <a href=&quot;https://apps.ko.com/irj/go/km/docs/ep/Contribution Folders/MYKO/Policy Center/Documents 2/Information_classNameification_Policy_en_US.pdf&quot; target=&quot;_blank&quot;>https://apps.ko.com/irj/go/km/docs/ep/Contribution Folders/MYKO/Policy Center/Documents 2/Information_classNameification_Policy_en_US.pdf</a>" data-original-title="" title=""></div></label>
                                    <select className="form-control" type="select" id="tag_security_tier" name="tag_security_tier" required="" value={secTier} onChange={(e) => setSecTier(e.target.value)}>
                                        <option disabled="disabled" value='default'>--- Security Tier ---</option>
                                        <option value="1">1</option><option value="2">2</option><option value="3">3</option></select>
                                    <div id="tag_security_tier_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="tag_security_tier_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_tag_dr_className">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="tag_dr_className">DR className<span className="field-required">*</span></label>
                                    <label id="tag_dr_className_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="Description of the DR levels: <br></div> <a href=&quot;https://wiki.coke.com/confluence/pages/viewpage.action?pageId=25237731&quot; target=&quot;_blank&quot;>https://wiki.coke.com/confluence/pages/viewpage.action?pageId=25237731</a>" data-original-title="" title=""></div></label>
                                    <select className="form-control" type="select" id="tag_dr_className" name="tag_dr_className" required="" value={drTier} onChange={(e) => setDrTier(e.target.value)}>
                                        <option disabled="disabled" value='default'>--- DR className ---</option>
                                        <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="none">none</option></select>
                                    <div id="tag_dr_className_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="tag_dr_className_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_tag_infra_msp">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="tag_infra_msp">Infra MSP<span className="field-required">*</span></label>
                                    <label id="tag_infra_msp_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="The team who will support the infrastructure. Default: Cloud Operations. <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <select className="form-control" type="select" id="tag_infra_msp" name="tag_infra_msp" required="" value={msp} onChange={(e) => setMsp(e.target.value)}>
                                        <option disabled="disabled" value='default'>--- select Tag ---</option>
                                        <option value="Cloud Operations">Cloud Operations</option>
                                        <option value="Cloud Engineering">Cloud Engineering</option>
                                        <option value="AD Operations">AD Operations</option>
                                        <option value="SecOps">SecOps</option>
                                        <option value="Network Operations">Network Operations</option>
                                        <option value="App Team">App Team</option>
                                        <option value="SAP Operations">SAP Operations</option></select>
                                    <div id="tag_infra_msp_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="tag_infra_msp_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="" id="row_tag_business_unit">
                        <div className="row">
                            <div className="col-11">
                                <div className="form-group">
                                    <label htmlFor="tag_business_unit">Infra Business Unit<span className="field-required">*</span></label>
                                    <label id="tag_business_unit_i"><div tabIndex="0" className="fa fa-info-circle popover-info" data-toggle="popover" data-placement="right" data-trigger="focus" data-content="KO Business Unit - default is Enterprise-Global <br></div> <a href=&quot;&quot; target=&quot;_blank&quot;></a>" data-original-title="" title=""></div></label>
                                    <select className="form-control" type="select" id="tag_business_unit" name="tag_business_unit" required="" value={unit} onChange={(e) => setUnit(e.target.value)}><option disabled="disabled" value='default'>--- select Tag ---</option><option value="Consumer-NA">Consumer-NA</option><option value="Consumer-LAG">Consumer-LAG</option><option value="Consumer-EAG">Consumer-EAG</option><option value="Consumer-EU">Consumer-EU</option><option value="Consumer-PAC">Consumer-PAC</option><option value="Enterprise-Global">Enterprise-Global</option><option value="Enterprise-CCNA">Enterprise-CCNA</option><option value="Field-NA">Field-NA</option><option value="Field-LAG">Field-LAG</option><option value="Field-EAG">Field-EAG</option><option value="Field-EU">Field-EU</option><option value="Field-PAC">Field-PAC</option><option value="Manufacturing">Manufacturing</option></select>
                                    <div id="tag_business_unit_superuser" className="text-danger hidden"></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <label id="tag_business_unit_dependency" data-reset="depfield" className="hidden"></label>
                            </div>
                        </div>
                    </div>

                    <div className="row " id="row_save">
                        <div className="col-11">
                            <div className="form-group">
                                <button type="button" className="btn btn-primary btn-lg btn-block btn-cola" id="save" onClick={() => submitNewApp()}>Save</button>
                            </div>
                        </div>
                        <div className="col-1">
                            <label id="save_dependency" data-reset="depfield" className="hidden button_dep_fix"></label>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="modalManagerInvalid" tabIndex="-1" role="dialog" aria-labelledby="modalManagerInvalid_Label" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="general-headers modal-title" id="modalManagerInvalid_Label">
                                    <div id="modalManagerTitleInvalid"></div>
                                </h6>

                            </div>

                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-row d-flex justify-content-center">

                                        <div id="bodySectionInvalid"></div>

                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" id="close_ebs_manager" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

export default Create;