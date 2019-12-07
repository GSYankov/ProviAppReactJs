import React from 'react';
import styles from './styles.module.css';


const EC2 = () => {

    return(<div className="col-lg-5">
        <p className="select-app">Select Application:</p>
        <hr />

        <div id="ec2_details">
            <div className="form-group">
                <label for="app_tier">Application Tier<span className="field-required">*</span></label>
                <select className="form-control" id="app_tier" name="app_tier" required="">
                    <option disabled="disabled" selected="selected">--- select Additional Security Group ---</option><option value="db">db</option><option value="web">web</option></select>
            </div>

            <div className="form-group">
                <label for="os">Operating System<span className="field-required">*</span></label>
                <select className="form-control" id="os" name="os" required="">
                    <option disabled="disabled" selected="selected">--- select Application Tier ---</option>
                </select>
            </div>

            <div className="form-group">
                <label for="ami">Amazon Machine Image<span className="field-required">*</span></label>
                <select className="form-control" id="ami" name="ami" required="">
                </select>
            </div>

            <div className="form-group">
                <label for="instance_type">Instance Type<span className="field-required">*</span></label>
                <select className="form-control" id="instance_type" name="instance_type" required="">
                    <option disabled="disabled" selected="selected">--- select Instance Type ---</option><option value="t3.nano">t3.nano | 2 vCPUs | 0.5 GiB | T3 Nano</option><option value="t3.micro">t3.micro | 2 vCPUs | 1.0 GiB | T3 Micro</option><option value="t3.small">t3.small | 2 vCPUs | 2.0 GiB | T3 Small</option><option value="t3.medium">t3.medium | 2 vCPUs | 4.0 GiB | T3 Medium</option><option value="t3.large">t3.large | 2 vCPUs | 8.0 GiB | T3 Large</option><option value="t3.xlarge">t3.xlarge | 4 vCPUs | 16.0 GiB | T3 Extra Large</option><option value="t3.2xlarge">t3.2xlarge | 8 vCPUs | 32.0 GiB | T3 Double Extra Large</option><option value="t2.nano">t2.nano | 1 vCPUs | 0.5 GiB | T2 Nano</option><option value="t2.micro">t2.micro | 1 vCPUs | 1.0 GiB | T2 Micro</option><option value="t2.small">t2.small | 1 vCPUs | 2.0 GiB | T2 Small</option><option value="t2.medium">t2.medium | 2 vCPUs | 4.0 GiB | T2 Medium</option><option value="t2.large">t2.large | 2 vCPUs | 8.0 GiB | T2 Large</option><option value="t2.xlarge">t2.xlarge | 4 vCPUs | 16.0 GiB | T2 Extra Large</option><option value="t2.2xlarge">t2.2xlarge | 8 vCPUs | 32.0 GiB | T2 Double Extra Large</option><option value="m5.large">m5.large | 2 vCPUs | 8.0 GiB | M5 General Purpose Large</option><option value="m5.xlarge">m5.xlarge | 4 vCPUs | 16.0 GiB | M5 General Purpose Extra Large</option><option value="m5.2xlarge">m5.2xlarge | 8 vCPUs | 32.0 GiB | M5 General Purpose Double Extra Large</option><option value="m5.4xlarge">m5.4xlarge | 16 vCPUs | 64.0 GiB | M5 General Purpose Quadruple Extra Large</option><option value="m5.12xlarge">m5.12xlarge | 48 vCPUs | 192.0 GiB | M5 General Purpose 12xlarge</option><option value="m5.24xlarge">m5.24xlarge | 96 vCPUs | 384.0 GiB | M5 General Purpose 24xlarge</option><option value="m4.large">m4.large | 2 vCPUs | 8.0 GiB | M4 General Purpose Large</option><option value="m4.xlarge">m4.xlarge | 4 vCPUs | 16.0 GiB | M4 General Purpose Extra Large</option><option value="m4.2xlarge">m4.2xlarge | 8 vCPUs | 32.0 GiB | M4 General Purpose Double Extra Large</option><option value="m4.4xlarge">m4.4xlarge | 16 vCPUs | 64.0 GiB | M4 General Purpose Quadruple Extra Large</option><option value="m4.10xlarge">m4.10xlarge | 40 vCPUs | 160.0 GiB | M4 General Purpose Deca Extra Large</option><option value="m4.16xlarge">m4.16xlarge | 64 vCPUs | 256.0 GiB | M4 General Purpose 16xlarge</option><option value="c5.large">c5.large | 2 vCPUs | 4.0 GiB | C5 High-CPU Large</option><option value="c5.xlarge">c5.xlarge | 4 vCPUs | 8.0 GiB | C5 High-CPU Extra Large</option><option value="c5.2xlarge">c5.2xlarge | 8 vCPUs | 16.0 GiB | C5 High-CPU Double Extra Large</option><option value="c5.4xlarge">c5.4xlarge | 16 vCPUs | 32.0 GiB | C5 High-CPU Quadruple Extra Large</option><option value="c5.9xlarge">c5.9xlarge | 36 vCPUs | 72.0 GiB | C5 High-CPU 9xlarge</option><option value="c5.18xlarge">c5.18xlarge | 72 vCPUs | 144.0 GiB | C5 High-CPU 18xlarge</option><option value="c4.large">c4.large | 2 vCPUs | 3.75 GiB | C4 High-CPU Large</option><option value="c4.xlarge">c4.xlarge | 4 vCPUs | 7.5 GiB | C4 High-CPU Extra Large</option><option value="c4.2xlarge">c4.2xlarge | 8 vCPUs | 15.0 GiB | C4 High-CPU Double Extra Large</option><option value="c4.4xlarge">c4.4xlarge | 16 vCPUs | 30.0 GiB | C4 High-CPU Quadruple Extra Large</option><option value="c4.8xlarge">c4.8xlarge | 36 vCPUs | 60.0 GiB | C4 High-CPU Eight Extra Large</option><option value="m3.medium">m3.medium | 1 vCPUs | 3.75 GiB | M3 General Purpose Medium</option><option value="m3.large">m3.large | 2 vCPUs | 7.5 GiB | M3 General Purpose Large</option><option value="m3.xlarge">m3.xlarge | 4 vCPUs | 15.0 GiB | M3 General Purpose Extra Large</option><option value="m3.2xlarge">m3.2xlarge | 8 vCPUs | 30.0 GiB | M3 General Purpose Double Extra Large</option><option value="c3.large">c3.large | 2 vCPUs | 3.75 GiB | C3 High-CPU Large</option><option value="c3.xlarge">c3.xlarge | 4 vCPUs | 7.5 GiB | C3 High-CPU Extra Large</option><option value="c3.2xlarge">c3.2xlarge | 8 vCPUs | 15.0 GiB | C3 High-CPU Double Extra Large</option><option value="c3.4xlarge">c3.4xlarge | 16 vCPUs | 30.0 GiB | C3 High-CPU Quadruple Extra Large</option><option value="c3.8xlarge">c3.8xlarge | 32 vCPUs | 60.0 GiB | C3 High-CPU Eight Extra Large</option><option value="m5d.large">m5d.large | 2 vCPUs | 8.0 GiB | M5 General Purpose Large</option><option value="m5d.xlarge">m5d.xlarge | 4 vCPUs | 16.0 GiB | M5 General Purpose Extra Large</option><option value="m5d.2xlarge">m5d.2xlarge | 8 vCPUs | 32.0 GiB | M5 General Purpose Double Extra Large</option><option value="m5d.4xlarge">m5d.4xlarge | 16 vCPUs | 64.0 GiB | M5 General Purpose Quadruple Extra Large</option><option value="m5d.12xlarge">m5d.12xlarge | 48 vCPUs | 192.0 GiB | M5 General Purpose 12xlarge</option><option value="m5d.24xlarge">m5d.24xlarge | 96 vCPUs | 384.0 GiB | M5 General Purpose 24xlarge</option><option value="c5d.large">c5d.large | 2 vCPUs | 4.0 GiB | C5 High-CPU Large</option><option value="c5d.xlarge">c5d.xlarge | 4 vCPUs | 8.0 GiB | C5 High-CPU Extra Large</option><option value="c5d.2xlarge">c5d.2xlarge | 8 vCPUs | 16.0 GiB | C5 High-CPU Double Extra Large</option><option value="c5d.4xlarge">c5d.4xlarge | 16 vCPUs | 32.0 GiB | C5 High-CPU Quadruple Extra Large</option><option value="c5d.9xlarge">c5d.9xlarge | 36 vCPUs | 72.0 GiB | C5 High-CPU 9xlarge</option><option value="c5d.18xlarge">c5d.18xlarge | 72 vCPUs | 144.0 GiB | C5 High-CPU 18xlarge</option></select>
            </div>

            <div className="form-group">
                <label for="domain">Domain<span className="field-required">*</span></label>
                <select className="form-control" id="domain" name="domain" required="">
                    <option disabled="disabled" selected="selected">--- select Domain ---</option>
                    <option value="na.ko.com">na.ko.com</option>
                    <option value="eur.ko.com">eur.ko.com</option>
                    <option value="afr.ko.com">afr.ko.com</option>
                    <option value="apac.ko.com">apac.ko.com</option>
                    <option value="la.ko.com">la.ko.com</option>
                </select>
            </div>

            {/* <!-- <div className="form-check">
            <input type="checkbox" className="form-check-input" id="change_saml_domain_check">
            <label className="form-check-label" for="change_saml_domain_check">Change the default SAML Domain</label>
            </div> --> */}

            <div className="form-group">
                <label for="saml_domain">SAML Domain<span className="field-required">*</span></label>
                <input className="form-control text-center" id="saml_domain_readonly" type="text" placeholder="" readonly="" />
                <select className="form-control hidden" id="saml_domain_selection" name="saml_domain" required="">
                    <option disabled="disabled" selected="selected">--- select SAML Domain ---</option>
                    <option value="na.ko.com">na.ko.com</option>
                    <option value="eur.ko.com">eur.ko.com</option>
                    <option value="afr.ko.com">afr.ko.com</option>
                    <option value="apac.ko.com">apac.ko.com</option>
                    <option value="la.ko.com">la.ko.com</option>
                </select>
            </div>

            {/* <!-- <div className="form-group">
                <label for="disk_size">Disk Size On Root Partition<span className='field-required'>*</span></label>
                <input type="text" className="form-control" id="disk_size" placeholder="Example: 20, value is in GBs.">
                <div className="invalid-feedback">Example: 20, value is in GBs. Specify only integer number. Min
                    value
                    is 50, max is 250.</div>
            </div> --> */}

            <div className="form-group">
                <label for="subnet_id">Subnet ID<span className="field-required">*</span></label>
                <select className="form-control" id="subnet_id" name="subnet_id" required="">
                    <option disabled="disabled" selected="selected">--- select Subnet ---</option><option value="subnet-338e005b">subnet-338e005b / servicesSubnet1 / eu-central-1a</option><option value="subnet-84b260fe">subnet-84b260fe / servicesSubnet2 / eu-central-1b</option></select>
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="change_sgs" />
                <label className="form-check-label fr-check" for="change_sgs" >Add common
                    Security
                    Group</label>
            </div>

            <div className="form-group hidden" id="sg_id_group">
                <label for="sg_id">Security Group ID<span className="field-required">*</span></label>
                <select className="form-control" id="sg_id" name="sg_id" required="">
                    <option disabled="disabled" selected="selected">--- select Additional Security Group ---</option></select>
            </div>

            <div className="form-group">
                <label for="multiple_machines">Multiple Machines<span className="field-required">*</span></label>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="multiple_machines_check" />
                    <label className="form-check-label" for="multiple_machines_check">Create multiple machines with
                        the
                        same configuration</label>
                </div>
                <input type="text" className="form-control hidden" id="amount_machines" placeholder="Example: 20." />
                <div className="invalid-feedback">Example: 5. Please use only integer.</div>
            </div>

            <h6 className="general-headers">Disk Management</h6>
            {/* <!-- <div className="form-check">
                <input type="checkbox" className="form-check-input" id="multiple_disks_check">
                <label className="form-check-label" for="multiple_disks_check">Add additional disks</label>
            </div> --> */}

            <div className="btn-padding-group" id="add_disk">
                <button type="button" className="btn btn-primary btn-lg btn-block btn-cola" data-toggle="modal" data-target="#diskManager">Open Disk Manager</button>
            </div>

            {/* <!-- Disk Manager PopUP --> */}
            <div className="modal fade" id="diskManager" tabindex="-1" role="dialog" aria-labelledby="diskManagerLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="general-headers modal-title" id="diskManagerLabel">EC2 Disk Manager</h6>
                            {/* <!-- <button id="close_ebs_manager" type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button> --> */}
                        </div>
                        <div id="disk_message-field" className="modal-header alert hidden page-messages " role="alert"></div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <button type="button" className="btn btn-primary btn-lg btn-cola" id="add_disk_btn">Add
                                            Disk</button>
                                    </div>
                                    <div className="form-group col-md-10">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Disk Type</th>
                                                    <th scope="col">Disk Size</th>
                                                    <th scope="col">Disk IOPS</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody id="disk_manager">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" id="close_ebs_manager" data-dismiss="modal">Save
                                and Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Disk Manager PopUP END--> */}

            <div id="tags">
                <h6 className="general-headers">Tags</h6>
                <div className="form-group">
                    {/* <!-- Request --> */}
                    <label for="puppet_role">Puppet Role<span className="field-required">*</span></label>
                    <select className="form-control" id="puppet_role" name="puppet_role" required="">
                        <option disabled="disabled" selected="selected">--- select Tag ---</option><option value="base">Standart role / base</option><option value="win_iis_net">IIS profile / win_iis_net</option><option value="win_iis_net_saml">IIS with saml / win_iis_net_saml</option><option value="win_iis_net35">IIS net35 / win_iis_net35</option><option value="win_net35">win dot net 3.5 / win_net35</option><option value="win_iis_net35_saml">IIS, Dot 3.5 with saml / win_iis_net35_saml</option><option value="win_sql_2012sp4_se">SQL 2012 sp4 SE / win_sql_2012sp4_se</option><option value="win_sql_2012sp4_ee">SQL 2012 sp4 EE / win_sql_2012sp4_ee</option><option value="win_sql_2014sp2_se">SQL 2014 sp2 SE / win_sql_2014sp2_se</option><option value="win_sql_2014sp2_ee">SQL 2014 sp2 EE / win_sql_2014sp2_ee</option><option value="win_sql_2016sp1_se">SQL 2016 sp1 SE / win_sql_2016sp1_se</option><option value="win_sql_2016sp1_ee">SQL 2016 sp1 EE / win_sql_2016sp1_ee</option><option value="win_sql_2016sp2_se">SQL 2016 sp2 SE / win_sql_2016sp2_se</option><option value="win_sql_2016sp2_ee">SQL 2016 sp2 EE / win_sql_2016sp2_ee</option><option value="lin_apache22">Apache 2.2 / lin_apache22</option><option value="lin_apache22_saml">Apache 2.2 saml / lin_apache22_saml</option><option value="lin_apache22_saml_php">Apache 2.2 saml and php / lin_apache22_saml_php</option><option value="lin_apache24">Apache 2.4 / lin_apache24</option><option value="lin_apache24_saml">Apache 2.4 / lin_apache24_saml</option><option value="lin_apache24_saml_php">Apache 2.4 / lin_apache24_saml_php</option><option value="lin_tomcat7">Tomcat 7 / lin_tomcat7</option><option value="lin_tomcat8">Tomcat 8 / lin_tomcat8</option><option value="lin_tomcat7_saml">Tomcat 7 saml / lin_tomcat7_saml</option><option value="lin_tomcat8_saml">Tomcat 8 saml / lin_tomcat8_saml</option></select>
                </div>

                <div className="form-group">
                    <label for="puppet_managed">Puppet Managed<span className="field-required">*</span></label>
                    <select className="form-control" id="puppet_managed" name="puppet_managed" required="">
                        <option disabled="disabled" selected="selected">--- select Tag ---</option>
                        <option value="managed">Managed</option>
                        <option value="unmanaged">Unmanaged</option>
                    </select>
                </div>

                <div className="form-group">
                    {/* <!-- Request --> */}
                    <label for="cpm_backup">CPM Backup<span className="field-required">*</span></label>
                    <select className="form-control" id="cpm_backup" name="cpm_backup" required="">
                        <option disabled="disabled" selected="selected">--- select Application Tier and OS Type ---</option>
                    </select>
                </div>

                <div className="form-group hidden" id="db_type_div">
                    <label for="db_type">Database Type<span className="field-required">*</span></label>
                    <select className="form-control" id="db_type" name="db_type" required="">
                    </select>
                </div>
            </div>

            <h6 className="general-headers">Comments</h6>
            <div className="form-group">
                <label>Comments:</label>
                <textarea className="form-control" rows="3" id="comments" maxlength="500"></textarea>
            </div>

            <div className="btn-padding-group">
                <button type="button" className="btn btn-primary btn-lg btn-block btn-cola btn-disabled" id="submit">Save</button>
                {/* <!--<button type="button" class="btn btn-primary btn-lg btn-block btn-cola" id="test">Save</button>--> */}
            </div>
        </div>
    </div>);
}

export default EC2;