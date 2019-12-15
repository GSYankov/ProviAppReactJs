import React, { useState } from 'react';
import styles from './styles.module.css'

class Navigation extends React.Component {

    render() {
        const { isLogged } = this.props;

        return <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
            {/*Update the refference and the image source*/}
            <a className="navbar-brand" href="/">
                <img src="/static/images/logo.png" className="d-inline-block align-top" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">

                    {isLogged ? (
                        <li className="nav-item">
                            <a className="nav-link" href="/account/logout">Logout</a>
                        </li>
                    ) : (<React.Fragment>
                        <li className="nav-item">
                            <a className="nav-link" href="/account/login">Log In</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/account/signup">Sign Up</a>
                        </li>
                    </React.Fragment>)}

                    <li className="nav-item">
                        <a className="nav-link" href="/contacts">Contacts</a>
                    </li>

                    {/*<!-- <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li> -->*/}
                </ul>
            </div>
        </nav>
    }
}

export default Navigation;