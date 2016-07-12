import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

const mountNode = document.querySelector('#root')
ReactDOM.render(<App env={__NODE_ENV__} hello={__HELLO__} />, mountNode) // eslint-disable-line
