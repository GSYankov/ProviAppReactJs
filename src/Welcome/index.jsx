import React from 'react'
import styles from './styles.module.css'

function Welcome({isLogged}) {

  if (isLogged) {
   return <div class="container-fluid">
      <h1 class="home-header">KO Cloud</h1>
      <div class="container"></div>
      <div class="container">
        <hr class="delimeter" />
        <h4 class="general-headers">Cloud Providers</h4>
        <div class="btn-padding-group">
          <a class="btn btn-primary btn-lg btn-block btn-cola"  href='/aws/home'>Amazon Web Services</a>
          <a class="btn btn-primary btn-lg btn-block btn-cola"  href='/az/home'>Microsoft Azure</a>
        </div>
      </div>
    </div>
  } else {
    return <div className="container-fluid">
      <h1 className="home-header">KO Cloud</h1>
    </div>
  }
}

export default Welcome;