import React from 'react'
import Header from '../Header'
// import Auth from '../Auth'

const DefaultRoute = props => {
  const { container: Container, noHeader } = props

  return (
    <div>
      {!noHeader && <Header {...props} />}
      <div style={{ margin: 10, marginTop: noHeader ? 10 : 70 }}>
        <Container />
      </div>
    </div>
  )
}

export default DefaultRoute
