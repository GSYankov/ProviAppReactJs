import React, { Component } from 'react';
import styles from './styles.module.css';
import userService from '../services/user-service';
import withForm from '../shared/hocs/withForm';



class Login extends Component {

    emailChangeHandler = this.props.controlChangeHandlerFactory('email');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');
  
    submitHandler = () => {
      const errors = this.props.getFormErrorState();
      if (!!errors) { return; }
      const data = this.props.getFormState();
      this.props.login(this.props.history, data);
    }

    render() {
        return <div className="container-fluid">

            <h1 className="home-header">KO Cloud</h1>

            <div className="container">
                <hr className="delimeter" />
                <h4 className="general-headers">Log In</h4>

                <form method="POST" action="/account/login">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Your user account in NA domain</label>
                        {/*<!-- <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" -->*/}
                        <input class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"
                            placeholder="Your user account in NA domain" autofocus onChange={this.emailChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.passwordChangeHandler} />
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary btn-lg btn-cola" onClick={this.submitHandler}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default withForm(Login, { email: '', password: '' });