import React from 'react'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const styles = {
  icon: {
    marginRight: 12
  }
}

export default props => {
  const { to, icon: Icon, caption, style, raised, color } = props
  return (
    <Link style={{ textDecoration: 'none', marginLeft: 8 }} to={to}>
      <Button color={color} variant={raised ? 'raised' : 'flat'} style={style}>
        {Icon && <Icon style={caption && styles.icon} />}
        {caption}
      </Button>
    </Link>
  )
}
