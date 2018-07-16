import React from 'react'
import _ from 'lodash'
import { Route, Switch } from 'react-router-dom'
import * as modules from '../../modules'
import DefaultRoute from './DefaultRoute'

const modulesConfig = _.map(modules, ({ components, ...rest }) => ({ ...rest }))

const Router = props => (
  <Switch>
    {_.map(modules, ({ components, ...rest }, i) => (
      <Route
        key={i}
        path={rest.constants.path || `/${rest.constants.name.toLowerCase()}`}
        exact
        render={routeProps => (
          <DefaultRoute
            container={components.Container}
            modulesConfig={modulesConfig}
            {...rest}
            {...routeProps}
          />
        )}
      />
    ))}
  </Switch>
)

export default Router
