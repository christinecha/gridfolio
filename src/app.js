"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer.js'
import * as action from './actions.js'
import * as helper from './helpers.js'
import { Gridfolio } from './components/Gridfolio.jsx'



ReactDOM.render(
  <Gridfolio />,
  document.getElementById('gridfolio-react')
)
