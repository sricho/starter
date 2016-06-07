import React from 'react'

import styles from './App.module.css'

const App = ({ env }) => (
  <div className={styles.root}>
    <h1>Environment: {env}</h1>
    <p>This is how we bootstrap a react application.</p>
    <p>What do you think?</p>
  </div>
)

App.propTypes = {
  env: React.PropTypes.string,
}

App.defaultProps = {
  env: __NODE_ENV__, // eslint-disable-line no-undef
}

export default App
