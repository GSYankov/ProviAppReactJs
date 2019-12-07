import React, { Component } from 'react';
import styles from './styles.module.css';
import Table from './Table';
import Search from './Search';
import Region from './Region';
import Services from './Services'
import EC2 from './Services/EC2'
import postService from '../../services/post-service';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Apps extends Component {

    state = {
        apps: null,
        viewApps: null,
        search: ''
    }

    componentDidMount() {
        postService.loadAwsHome()
            .then((apps) => this.setState({ apps, viewApps: apps })
            );
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
        let searchVal = e.target.value.toLowerCase();
        this.setState({ viewApps: this.state.apps.filter(app => app.uid.toLowerCase().includes(searchVal)) });
    }

    render() {
        const { viewApps } = this.state;
        return <div>
            <p>Select Application:</p>
            <a class="btn btn-primary btn-lg btn-block btn-cola" href='/aws/select-organization'>Create New Application</a>
            <Search func={this.handleChange} search={this.state.search} />
            <Table apps={viewApps} />
            <Route path='/aws/home/:appid' component={Region} />
            <Route path='/aws/home/:appid/:env' component={Services} />
            <Route path='/aws/home/:appid/:env/ec2' component={EC2} />
        </div>
    }
}

export default Apps;