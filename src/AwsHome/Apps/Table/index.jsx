import React from 'react';
import styles from './styles.module.css';

class Table extends React.Component {

    render() {
        const { apps } = this.props;
        return apps ? <table className="table table-hover">
            <thead>
                <tr>
                    <th>UID</th>
                    <th>Code</th>
                    <th>KO/CCNA</th>
                    <th>Env</th>
                </tr>
            </thead>
            {
                apps.map((app) => <tbody id="something" key={app.url}>
                    <tr className="clickable-row" data-href="{app.uid}">
                        <td><a href={"/aws/home/" + app.name}>{app.uid}</a></td>
                        <td>{app.code}</td>
                        <td>{app.organization}</td>
                        <td>test</td>
                    </tr>
                </tbody>)
            }
        </table> : <div>Loading...</div>
    }
};

export default Table;