import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import postService from '../../../services/post-service';
import InputField from '../../../shared/fields/input'
import SelectField from '../../../shared/fields/select'
import CheckBoxField from '../../../shared/fields/checkbox'
import TextAreaField from '../../../shared/fields/textarea'


const Create = (props) => {
    const { match: { params } } = props;
    // const csrftoken = props.parseCookeis()['csrftoken'];
    const [uid, setUid] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [ccenter, setCcenter] = useState('');
    const [type, setType] = useState('default');
    const [region, setRegion] = useState('default');
    const [localRegion, setLocalRegion] = useState('default');
    const [tier, setTier] = useState([]);
    const [email, setEmail] = useState('');
    const [autopark, setAutopark] = useState('default');
    const [reqEnv, setReqEnv] = useState('default');
    const [comments, setComments] = useState('');
    const [manService, setManService] = useState('default');
    const [secTier, setSecTier] = useState('default');
    const [drTier, setDrTier] = useState('default');
    const [msp, setMsp] = useState('default');
    const [unit, setUnit] = useState('default');
    const [errors, setErrors] = useState({});

    const [csrf, setCsrf] = useState(props.cookies['csrftoken']);
    const [data, setData] = useState({});


    useEffect(() => {
        postService.obtainCsrf('/aws/new/ko')
            .then();
    }, []);

    function submitNewApp() {
        console.log(csrf)
        const data = {
            'organization': params.org,
            'uid': uid,
            'name': name,
            'code': code,
            'description': 'Imortant',
            'cost_center': ccenter,
            'account_id': '916071704765',
            'account_profile': '1008725_Global_Admin',
            'global_region': region,
            'aws_region': localRegion,
            'env': 'dev',
            'app_owner_email': email,
            'app_comments': comments,
            'tag_managed_service_tier': manService,
            'tag_security_tier': secTier,
            'tag_dr_class': drTier,
            'tag_infra_msp': msp,
            'tag_business_unit': unit,
            'vpc_id': 'sad-32462',
            'vpc_name': 'ServicesNSG',
            'mediaS3': email,
            'appDataS3': 'filehub',
            'mspKeypair': 'US_MSP_US_East_1',
            'autoparkS3': 'autopark-201707012126',
            'remote_state_profile': '1008725_Global_Admin',
            "remote_state_region":'234',
            "remote_state_bucket":'2343456'
        }

        postService.submitAwsApp(data, csrf).then(window.location.href = 'http://localhost:3000/aws/home');
    }


    return (<div className="container-fluid">

        <div className="container space-top">
            <h4 className="general-headers">Register Application for KO</h4>

            <div className="container">
                <div id="message-field" className="alert hidden page-messages" role="alert"></div>
                <div id="mainSection">

                    <InputField
                        label={'Application UID'}
                        placeholder={'Example: UID000014783479'}
                        value={uid}
                        stateHook={setUid}
                        errorMessage={'Start with "UID" followed by 12 numbers. Example: UID000014783479, uid000014783479'}
                        errors={errors}
                        setErrors={setErrors}
                        validator={/^(uid|UID)[0-9]{12}$/}
                    ></InputField>

                    <InputField
                        label={'Application Code'}
                        placeholder={'Example: aio'}
                        value={code}
                        stateHook={setCode}
                        errorMessage={'Example: "aio". Please use 3 lowercase characters only!'}
                        errors={errors}
                        setErrors={setErrors}
                        validator={/^[a-z]{3}$/}
                    ></InputField>

                    <InputField
                        label={'Application Friendly Name'}
                        placeholder={'Example: CCNA AIOps'}
                        value={name}
                        stateHook={setName}
                        errorMessage={'Example: "CCNA AIOps". Please use alphabet characters and numbers from 3 to 20 symbols'}
                        errors={errors}
                        setErrors={setErrors}
                        validator={/^[a-z0-9]{3,20}$/}
                    ></InputField>

                    <InputField
                        label={'Cost Center'}
                        placeholder={'Cost center'}
                        value={ccenter}
                        stateHook={setCcenter}
                        errors={errors}
                        setErrors={setErrors}
                        validator={/^[A-Z0-9]*/}
                    ></InputField>

                    <SelectField
                        label={'Application Type'}
                        value={type}
                        stateHook={setType}
                        options={[
                            { 'name': 'Shared Services', 'value': 'shared_services' },
                            { 'name': 'Highly Restricted', 'value': 'highly_restrited' },
                            { 'name': 'Enterprise', 'value': 'enterprise' }
                        ]}
                    ></SelectField>

                    <SelectField
                        label={'Global Region'}
                        value={region}
                        stateHook={setRegion}
                        options={[
                            { 'name': 'US', 'value': 'US' },
                            { 'name': 'EU', 'value': 'EU' },
                            { 'name': 'APG', 'value': 'APG' }
                        ]}
                    ></SelectField>

                    <SelectField
                        label={'Local Region'}
                        value={localRegion}
                        stateHook={setLocalRegion}
                        options={[
                            { 'name': 'North Virginia', 'value': 'us-east-1' },
                            { 'name': 'us-west-2', 'value': 'Oregon / us-west-2' },
                        ]}
                    ></SelectField>

                    <SelectField
                        label={'Select Required Environment'}
                        value={reqEnv}
                        stateHook={setReqEnv}
                        options={[
                            { 'name': 'Test', 'value': 'test' },
                            { 'name': 'Development', 'value': 'dev' },
                            { 'name': 'QA', 'value': 'qa' },
                            { 'name': 'Production', 'value': 'prod' },
                        ]}
                    ></SelectField>


                    <div className="col-11">
                        <div className="form-group">
                            <h5><p className="text-danger">Select Required Application Tier:</p></h5>
                        </div>
                    </div>

                    <CheckBoxField
                        label={'Web'}
                        stateHook={setTier}
                    ></CheckBoxField>

                    <CheckBoxField
                        label={'Application'}
                        stateHook={setTier}
                    ></CheckBoxField>

                    <CheckBoxField
                        label={'Database'}
                        stateHook={setTier}
                    ></CheckBoxField>

                    <InputField
                        label={'Application Owner Email Address'}
                        placeholder={'Please use a valid KO E-mail address.'}
                        value={email}
                        stateHook={setEmail}
                        errors={errors}
                        setErrors={setErrors}
                        validator={/[A-Za-z0-9]+@ko.com/gm}
                    ></InputField>

                    <div className="col-11">
                        <div className="form-group">
                            <h6 className="general-headers"> Comments </h6>
                        </div>
                    </div>

                    <TextAreaField
                        label={'Comments'}
                        value={comments}
                        stateHook={setComments}
                    ></TextAreaField>

                    <div className="col-11">
                        <div className="form-group">
                            <h6 className="general-headers"> Tags </h6>
                        </div>
                    </div>

                    <SelectField
                        label={'Managed Service Tier'}
                        value={manService}
                        stateHook={setManService}
                        options={[
                            { 'name': '2', 'value': '2' },
                            { 'name': '3', 'value': '3' },
                        ]}
                    ></SelectField>

                    <SelectField
                        label={'Security Tier'}
                        value={secTier}
                        stateHook={setSecTier}
                        options={[
                            { 'name': '1', 'value': '1' },
                            { 'name': '2', 'value': '2' },
                            { 'name': '3', 'value': '3' },
                        ]}
                    ></SelectField>

                    <SelectField
                        label={'DR className'}
                        value={drTier}
                        stateHook={setDrTier}
                        options={[
                            { 'name': '0', 'value': '0' },
                            { 'name': '1', 'value': '1' },
                            { 'name': '2', 'value': '2' },
                            { 'name': '3', 'value': '3' },
                        ]}
                    ></SelectField>

                    <SelectField
                        label={'Infra MSP'}
                        value={msp}
                        stateHook={setMsp}
                        options={[
                            { 'name': 'Cloud Operations', 'value': 'Cloud Operations' },
                            { 'name': 'Cloud Engineering', 'value': 'Cloud Engineering' },
                            { 'name': 'AD Operations', 'value': 'AD Operations' },
                            { 'name': 'SecOps', 'value': 'SecOps' },
                            { 'name': 'Network Operations', 'value': 'Network Operations' },
                            { 'name': 'App Team', 'value': 'App Team' },
                            { 'name': 'SAP Operations', 'value': 'SAP Operations' },
                        ]}
                    ></SelectField>

                    <SelectField
                        label={'Infra Business Unit'}
                        value={unit}
                        stateHook={setUnit}
                        options={[
                            { 'name': 'Consumer-NA', 'value': 'Consumer-NA' },
                            { 'name': 'Consumer-LAG', 'value': 'Consumer-LAG' },
                            { 'name': 'Enterprise-Global', 'value': 'Enterprise-Global' },
                            { 'name': 'Field-LAG', 'value': 'Field-LAG' },
                            { 'name': 'Manufacturing', 'value': 'Manufacturing' },
                        ]}
                    ></SelectField>

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