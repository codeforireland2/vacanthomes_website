import React from 'react'
import Router from './Router'
import Reboot from 'material-ui/Reboot'

console.log(process.env.REACT_APP_VERSION)

const App = () => {
  return (
    <div>
      <Reboot />
      <Router />
    </div>
  )
}

export default App
