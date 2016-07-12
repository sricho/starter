import React, { PropTypes } from 'react'

import styles from './App.module.css'

const App = ({ hello, env }) => (
  <div className={styles.root}>
    <h1 className={styles.heading}>{hello}</h1>
    <p>
      This is how we bootstrap a react application in the
      {' '}
      <span className={styles.env}>{env}</span>
      {' '}
      environment.
    </p>
  </div>
)

App.propTypes = {
  env: PropTypes.string,
  hello: PropTypes.string,
}

export default App
