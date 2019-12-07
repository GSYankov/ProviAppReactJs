import React from 'react';
import styles from './styles.module.css';


const Services = () => {


    return (<div className="col-lg-2 main">

        <p className="app">Select Application:</p>
        <hr />

        <div className="row">

            <div className="col-12 service-selection">
                <div id="services_build">

                    <span id="sg" className="fa fa-link fa-lg cola-fa" hidden=""></span>
                    <span className="tier badge badge-pill float-right badge-secondary"> </span>
                    <button type="button" className="btn btn-primary btn-lg btn-block btn-cola" id="sg">
                        Application	Tier
        </button>

                    <button type="button" className="btn btn-primary btn-lg btn-block btn-cola"
                        id="kms"><span id="kms" className="fa fa-link fa-lg cola-fa"
                            hidden=""></span>KMS</button><button type="button"
                                className="btn btn-primary btn-lg btn-block btn-cola" id="ec2"><span id="ec2"
                                    className="fa fa-link fa-lg cola-fa" hidden=""></span>
                        EC2
                <span className="serv badge badge-pill float-right badge-success"> </span></button>


                    <button type="button"
                        className="btn btn-primary btn-lg btn-block btn-cola" id="ebs"><span id="ebs"
                            className="fa fa-link fa-lg cola-fa" hidden=""></span>EBS</button><button type="button"
                                className="btn btn-primary btn-lg btn-block btn-cola" id="rds-subnet"><span id="rds-subnet"
                                    className="fa fa-link fa-lg cola-fa" hidden=""></span>RDS Subnet</button><button
                                        type="button" className="btn btn-primary btn-lg btn-block btn-cola-war" id="rds"><span
                                            id="rds" className="fa fa-link fa-lg cola-fa"></span>RDS</button><button type="button"
                                                className="btn btn-primary btn-lg btn-block btn-cola" id="s3"><span id="s3"
                                                    className="fa fa-link fa-lg cola-fa" hidden=""></span>S3</button><button type="button"
                                                        className="btn btn-primary btn-lg btn-block btn-cola" id="elb"><span id="elb"
                                                            className="fa fa-link fa-lg cola-fa" hidden=""></span>ELB</button><button type="button"
                                                                className="btn btn-primary btn-lg btn-block btn-cola" id="access"><span id="access"
                                                                    className="fa fa-link fa-lg cola-fa" hidden=""></span>Jenkins</button></div>
            </div>
        </div>
    </div>
    )
}

export default Services;