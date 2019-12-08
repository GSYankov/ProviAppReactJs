import React from 'react'
import styles from './styles.module.css'

function SignUp() {
    return <div class="container">
        <hr class="delimeter" />
        <h4 class="general-headers">Sign Up</h4>

        <form method="POST" action="/account/signup">
            <input type="hidden" name="csrfmiddlewaretoken" value="1uYd7AdMzQPxaZ2pwLxKGqiFSCRrtDUNXu6jpLz5BmM96Yv6RXM3DuGkQqlekgsW" />
            {/*<!-- <div class="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name" autofocus>
                </div>
            <div class="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last Name">
            </div> -->*/}
            <div class="form-group">
                <label htmlFor="na_account">Your NA Account</label>
                <input type="na_account" class="form-control" id="na_account" name="na_account" placeholder="Your NA Account!" />
            </div>
            <div class="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Only KO email address is allowed!" />
            </div>
            {/*<!-- <div class="form-group">
                            <label htmlFor="password_init">Password</label>
                            <input type="password" class="form-control" id="password_init" name="password_init" placeholder="Password"/>
                    </div>
                            <div class="form-group">
                                <label htmlFor="password_confirm">Confirm Password</label>
                                <input type="password" class="form-control" id="password_confirm" name="password_confirm" placeholder="Confirm Password">
                            </div> -->*/}
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg btn-cola">Sign Up</button>
            </div>
        </form>
    </div>
}

export default SignUp