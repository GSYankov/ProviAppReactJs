import React, { Component } from 'react';
import styles from './styles.module.css';

class Search extends Component {

    render() {
        const { apps } = this.props;
        return <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="fa fa-lg fa-search"></div>
                <input value={this.props.search} onChange={this.props.func} className="margin-left:5rem;" className="form-control mr-sm-12" id="myInput" type="search" placeholder="Search..." aria-label="Search" />
            </div>
        </nav>
    }
}

export default Search;