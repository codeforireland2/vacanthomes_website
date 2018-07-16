import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Hidden from 'material-ui/Hidden'
import { withTheme } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { appName } from '../../constants'
import NavLink from './NavLink'

const styles = {
  root: {
    width: '100%'
  }
}

const Header = props => {
  const {
    title,
    modulesConfig,
    theme: { palette },
    location: { pathname }
  } = props

  const currentPath = pathname === '/' ? '/' : `/${pathname.split('/')[1]}`

  const navLinks = modulesConfig.map((m, i) => {
    const activeRoute =
      (m.constants.path || `/${m.constants.name}`) === currentPath
    return (
      <NavLink
        key={i}
        to={m.constants.path || `/${m.constants.name.toLowerCase()}`}
        color={activeRoute ? 'default' : 'secondary'}
        style={{
          color: activeRoute
            ? palette.primary.main
            : palette.primary.contrastText
        }}
        icon={m.constants.icon}
        caption={m.constants.label || m.constants.name}
        raised={activeRoute}
      />
    )
  })

  return (
    <div className={styles.root}>
      <AppBar position="absolute">
        <Toolbar>
          <Hidden xsDown>
            <Typography variant="title" color="inherit">
              {String(title || appName || 'Starter App').toUpperCase()}
            </Typography>
          </Hidden>
          <div style={{ flex: 1 }} />
          {navLinks}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withTheme()(Header)
