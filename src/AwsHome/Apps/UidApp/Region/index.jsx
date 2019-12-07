import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import postService from '../../../../services/post-service';


const Region = (props) => {
    const { match: { params } } = props;
    const [app, setApp] = useState('Loading...');

    useEffect(() => {
        postService.loadAwsHome(params.appid)
            .then(res => setApp(res));
    }, []);

    return <div style={styles.maindiv} className="col-lg-2">

        <p style={styles.paragraph}>Select Application:</p>
        <hr />

        <div id="treeview5" className="treeview">
            <ul className="list-group">
                <li className="list-group-item node-treeview5">
                    <div className="fa fa-angle-down rotate"></div>
                    <span>
                        <div className="fa fa-folder-open ic-w mx-1"> {typeof(app) =='string' ? app : app[0].global_region}</div>
                    </span>
                </li>

                <li className="list-group-item node-treeview5">
                    <span className="indent"></span>
                    <div className="fa fa-angle-down rotate"></div>
                    <span>
                        <div className="fa fa-folder-open ic-w mx-1"> {typeof(app) =='string' ? app : app[0].aws_region}</div>
            </span>
                </li>

                {app[0].env =='test'?
                <li className="list-group-item node-treeview5">
                    <span className="indent"></span>
                    <span className="indent"></span>
                    <div className="fa fa-angle-right rotate"></div>
                    <span>
                        <div className="fa fa-folder-open ic-w mx-1"> Test</div>
            </span>
                </li>:''}

                {app[0].env =='dev'?
                <li className="list-group-item node-treeview5">
                    <span className="indent"></span>
                    <span className="indent"></span>
                    <div className="fa fa-angle-right rotate"></div>
                    <a>
                        <div className="fa fa-folder-open ic-w mx-1"> Dev</div>
            </a>
                </li>:''}

            </ul>
        </div>
    </div>
}

export default Region;