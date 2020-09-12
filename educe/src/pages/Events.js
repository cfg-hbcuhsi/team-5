import React from 'react'
import { render } from 'react-dom'
import DemoApp from './DemoApp'
import Events from "../components/Events"

document.addEventListener('DOMContentLoaded', function() {
  render(
    <DemoApp />,
    document.body.appendChild(document.createElement('div'))
  )
})
